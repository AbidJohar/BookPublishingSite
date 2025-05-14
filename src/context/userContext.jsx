/* eslint-disable react/prop-types */
import { createContext, useState, useEffect, useCallback } from 'react';
import axios from 'axios';

export const UserContext = createContext(null);

const UserContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [writer, setWriter] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null); // Added to handle errors
  const base_url = import.meta.env.VITE_BASE_URL;

  // Memoized fetchWriterProfile function
  const fetchWriterProfile = useCallback(async () => {
    try {
      setError(null);
      // console.log('Fetching writer profile');
      const response = await axios.get(`${base_url}/v1/books/me-writer`, {
        withCredentials: true,
      });

      if (response.data.success) {
        const writerData = response.data.writer;
        setWriter(writerData);
        localStorage.setItem('writer', JSON.stringify(writerData));
        // console.log('Writer profile restored:', writerData);
      } else {
        setWriter(null);
        localStorage.removeItem('writer');
        console.log('No writer profile found');
      }
    } catch (err) {
      console.error('Error fetching writer profile:', err);
      setWriter(null);
      localStorage.removeItem('writer');
      if (err.response?.status === 429) {
        setError('Too many requests. Please try again later.');
      } else if (err.response?.status !== 404) {
        setError(err.response?.data?.message || 'Failed to fetch writer profile');
      }
    }
  }, [base_url]);

  // Restore user and writer from localStorage on mount
  useEffect(() => {
    const restoreData = async () => {
      try {
        setLoading(true);
        // Restore user
        const storedUser = localStorage.getItem('user');
        if (storedUser) {
          const parsedUser = JSON.parse(storedUser);
          setUser(parsedUser);
          console.log('Restored user from localStorage:', parsedUser);

          // Fetch writer profile only if user exists
          if (parsedUser.id) {
            await fetchWriterProfile();
          }
        } else {
          setWriter(null);
          localStorage.removeItem('writer');
          localStorage.removeItem('writerAccessToken');
        }
      } catch (err) {
        console.error('Error restoring data from localStorage:', err);
        setError('Failed to restore user data');
      } finally {
        setLoading(false);
      }
    };

    restoreData();
  }, [fetchWriterProfile]);

  // Fetch writer profile when user changes
  useEffect(() => {
    if (user) {
      fetchWriterProfile();
    } else {
      setWriter(null);
      localStorage.removeItem('writer');
      localStorage.removeItem('writerAccessToken');
    }
  }, [user, fetchWriterProfile]);

  // Update localStorage when user or writer changes
  const updateUser = (newUser) => {
    setUser(newUser);
    if (newUser) {
      localStorage.setItem('user', JSON.stringify(newUser));
    } else {
      localStorage.removeItem('user');
      setWriter(null);
      localStorage.removeItem('writer');
      localStorage.removeItem('writerAccessToken');
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
    error,
  };

  return <UserContext.Provider value={values}>{children}</UserContext.Provider>;
};

export default UserContextProvider;