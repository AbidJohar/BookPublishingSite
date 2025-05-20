/* eslint-disable no-unused-vars */
import React, { useState, useEffect, useContext } from 'react';
import Title from '../../components/Title';
import { Link, useNavigate } from 'react-router-dom';
import { BookContext } from '../../context/bookContext';
import axios from 'axios';

const WriterPage = () => {
  const { setBookMeta } = useContext(BookContext);
  const [drafts, setDrafts] = useState([]);
  const [error, setError] = useState(null);
  const base_url = import.meta.env.VITE_BASE_URL;
  const navigate = useNavigate();

  useEffect(() => {
    const fetchDrafts = async () => {
      try {
        const response = await axios.get(`${base_url}/v1/books/get-all-drafts`, {
          withCredentials: true,
        });

        if (response.data.success) {
          setDrafts(response.data.drafts);
        } else {
          setError(response.data.message || 'Failed to fetch drafts');
        }
      } catch (err) {
        const errorMessage =
          err.response?.data?.message || 'Error fetching drafts. Please try again.';
        setError(errorMessage);
      }
    };

    fetchDrafts();
  }, []);

  const handleContinueWriting = async (draft) => {
    try {
      const response = await axios.get(`${base_url}/v1/books/get-draftbyid/${draft._id}`, {
        withCredentials: true,
      });

      if (response.data.success) {
        setBookMeta({
          _id: response.data.draft._id,
          title: response.data.draft.title,
          description: response.data.draft.description || '',
          category: response.data.draft.category || '',
          content: response.data.draft.content || '',
          coverImage: response.data.draft.coverImage || null,
          termsAccepted: true,
        });
        console.log("draft comes from server:",response.data.draft);
        
        navigate('/publishing-page');
      } else {
        setError(response.data.message || 'Failed to fetch draft');
      }
    } catch (err) {
      const errorMessage =
        err.response?.data?.message || 'Error fetching draft. Please try again.';
      setError(errorMessage);
    }
  };

  return (
    <div className="w-full py-5 px-14 bg-white">
      <div className="w-full mb-10 flex flex-col items-center justify-center text-white h-40 bg-gradient-to-r from-black/80 to-gray-800/80 shadow-lg">
        <p className="mb-4 text-xl font-semibold tracking-wide">Compose Your Haroof Manuscript</p>
        <Link
          to="/publishing-page"
          className="px-5 py-3 rounded-sm bg-red-600 hover:bg-red-700 transition-colors text-white font-medium"
        >
          Create New Content
        </Link>
      </div>
      <Title text1="YOUR" text2="DRAFTS" />
      {error && (
        <div className="mt-4 mb-6 p-4 bg-red-100 text-red-700 rounded-md">
          {error}
        </div>
      )}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 mt-4">
        {drafts.length > 0 ? (
          drafts.map((draft) => (
            <div
              key={draft._id}
              className="p-5 bg-white rounded-lg hover:shadow-black shadow-sm shadow-black/40 hover:shadow-sm transition-shadow"
            >
              <h3 className="text-lg font-semibold text-gray-800">{draft.title}</h3>
              <p className="text-gray-500 text-xs mt-2">
                Last Edited: {new Date(draft.lastEdited).toLocaleDateString()}
              </p>
              <button
                onClick={() => handleContinueWriting(draft)}
                className="mt-3 px-4 py-1 text-sm bg-teal-600 hover:bg-teal-700 text-white rounded-sm transition-colors"
              >
                Continue Writing
              </button>
            </div>
          ))
        ) : (
          <p className="text-gray-600 italic col-span-full">No drafts yet. Begin your Haroof journey above!</p>
        )}
      </div>
    </div>
  );
};

export default WriterPage;