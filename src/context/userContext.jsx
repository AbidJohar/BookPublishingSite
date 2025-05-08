/* eslint-disable react/prop-types */
import { createContext, useState, useEffect } from 'react';
import axios from 'axios';

export const UserContext = createContext(null);

const UserContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [writer, setWriter] = useState(null);
  const [loading, setLoading] = useState(true);
  const base_url = import.meta.env.VITE_BASE_URL;

  // Restore user from localStorage on mount
  useEffect(() => {
    const restoreData = async () => {
      try {
        // Restore user
        const storedUser = localStorage.getItem('user');
        if (storedUser) {
          const parsedUser = JSON.parse(storedUser);
          setUser(parsedUser);
          console.log('Restored user from localStorage:', parsedUser);

          // Fetch writer profile if user exists
          if (parsedUser.id) {
            await fetchWriterProfile(parsedUser.id);
          }
        }
      } catch (err) {
        console.error('Error restoring data from localStorage:', err);
      } finally {
        setLoading(false);
      }
    };

    restoreData();
  }, []);

  // Fetch writer profile by userId
  const fetchWriterProfile = async (userId) => {
    try {
      console.log('Fetching writer profile for userId:', userId);
      const response = await axios.get(`${base_url}/v1/books/me-writer`, {
        withCredentials: true,
      });

      if (response.data.success) {
        const writerData = response.data.writer;
        setWriter(writerData);
        localStorage.setItem('writer', JSON.stringify(writerData));
        console.log('Writer profile restored:', writerData);
      } else {
        setWriter(null);
        localStorage.removeItem('writer');
        console.log('No writer profile found');
      }
    } catch (err) {
      console.error('Error fetching writer profile:', err);
      setWriter(null);
      localStorage.removeItem('writer');
      if (err.response?.status !== 404) {
        console.error('Unexpected error:', err.response?.data?.message);
      }
    }
  };

  // Clear writer when user changes (e.g., new login)
  useEffect(() => {
    if (user) {
      // Fetch writer profile on new login
      if (user.id) {
        fetchWriterProfile(user.id);
      }
    } else {
      // Clear writer on logout
      setWriter(null);
      localStorage.removeItem('writer');
      localStorage.removeItem('writerAccessToken');
      console.log('Cleared writer on logout');
    }
  }, [user]);

  // Update localStorage when user or writer changes
  const updateUser = (newUser) => {
    setUser(newUser);
    if (newUser) {
      localStorage.setItem('user', JSON.stringify(newUser));
    } else {
      localStorage.removeItem('user');
    }
  };

  const updateWriter = (newWriter) => {
    setWriter(newWriter);
    if (newWriter) {
      localStorage.setItem('writer', JSON.stringify(newWriter));
    } else {
      localStorage.removeItem('writer');
    }
  };


  const values = {
    user,
    setUser: updateUser,
    writer,
    setWriter: updateWriter,
    loading,
  };

  return <UserContext.Provider value={values}>{children}</UserContext.Provider>;
};

export default UserContextProvider;