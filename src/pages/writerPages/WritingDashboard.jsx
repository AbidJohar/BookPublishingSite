/* eslint-disable no-unused-vars */
import React, { useState, useContext } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import Title from '../../components/Title';
import { useNavigate } from 'react-router-dom';
import { BookContext } from '../../context/bookContext';
import axios from 'axios';

const WritingDashboard = () => {
  const { bookMeta, setBookMeta } = useContext(BookContext);
  const [loadingDraft, setLoadingDraft] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const base_url = import.meta.env.VITE_BASE_URL;
  const navigate = useNavigate();

  const modules = {
    toolbar: [
      [{ header: [1, 2, 3, false] }],
      ['bold', 'italic', 'underline', 'strike'],
      [{ list: 'ordered' }, { list: 'bullet' }],
      ['blockquote', 'code-block'],
      [{ align: [] }],
      ['link', 'image'],
      ['clean'],
    ],
  };

  const formats = [
    'header',
    'bold',
    'italic',
    'underline',
    'strike',
    'list',
    'bullet',
    'blockquote',
    'code-block',
    'align',
    'link',
    'image',
  ];

  const handleChange = (value) => {
    setBookMeta((prev) => ({ ...prev, content: value }));
  };

   const handleSave = async () => {
    if (!bookMeta.title) {
      setError('Title is required to save the draft.');
      return;
    }

    setError(null);
    setLoadingDraft(true);

    const data = new FormData();
    data.append('title', bookMeta.title);
    data.append('description', bookMeta.description || '');
    data.append('category', bookMeta.category || '');
    data.append('content', bookMeta.content || '');
    if (bookMeta._id) {
      data.append('bookId', bookMeta._id);
    }
    if (bookMeta.coverImage && bookMeta.coverImage instanceof File) {
      data.append('coverImage', bookMeta.coverImage);
    }

    try {
      const response = await axios.post(`${base_url}/v1/books/draft-book`, data, {
        headers: {
          'Content-Type': 'multipart/form-data',
          Authorization: `Bearer ${localStorage.getItem('writerAccessToken')}`,
        },
        withCredentials: true,
      });

      if (response.data.success) {
        console.log('Draft saved:', response.data.book);
        setBookMeta((prev) => ({
          ...prev,
          _id: response.data.book._id,
          title: response.data.book.title,
          description: response.data.book.description || '',
          category: response.data.book.category || '',
          content: response.data.book.content || '',
          coverImage: response.data.book.coverImage || prev.coverImage,
          termsAccepted: prev.termsAccepted,
        }));
        alert('Draft saved successfully!');
        navigate('/writer-dashboard');
      } else {
        setError(response.data.message || 'Failed to save draft');
      }
    } catch (err) {
      const errorMessage =
        err.response?.data?.message || 'Failed to save draft. Please try again.';
      setError(errorMessage);
    } finally {
      setLoadingDraft(false);
    }
  };


  const handlePublish = async () => {
    if (loading) return;

    setError(null);
    setLoading(true);

    const data = new FormData();
     if (bookMeta._id) {
      data.append('bookId', bookMeta._id);
    }
    data.append('title', bookMeta.title);
    data.append('description', bookMeta.description);
    data.append('category', bookMeta.category);
    data.append('content', bookMeta.content);
    if (!bookMeta._id && bookMeta.coverImage instanceof File) {
      data.append('coverImage', bookMeta.coverImage);
      console.log('Sending coverImage for new book:', bookMeta.coverImage);
    }

    try {
      const response = await axios.post(`${base_url}/v1/books/create-book`, data, {
        headers: {
          'Content-Type': 'multipart/form-data',
          // Authorization: `Bearer ${localStorage.getItem('writerAccessToken')}`,
        },
        withCredentials: true,
      });

      if (response.data.success) {
        console.log('Book published:', bookMeta);
        alert('Book Submitted successfully!');
        // Reset bookMeta after successful publish
        setBookMeta({
          title: '',
          description: '',
          category: '',
          content: '',
          coverImage: null,
          termsAccepted: false,
        });
        navigate('/writer-dashboard');
      } else {
        setError(response.data.message || 'Failed to publish book');
      }
    } catch (err) {
      const errorMessage =
        err.response?.data?.message ||
        'Failed to publish book. Please try again.';
      setError(errorMessage);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full max-w-7xl mx-auto px-1 py-8 min-h-screen">
      <Title text1="WRITING" text2="DASHBOARD" />
      {/* Error Message */}
      {error && (
        <div className="mt-4 mb-6 p-4 bg-red-100 text-red-700 rounded-md">
          {error}
        </div>
      )}
      <div className="mt-4 bg-white border rounded-lg shadow-sm">
        <ReactQuill
          theme="snow"
          value={bookMeta.content || ''}
          onChange={handleChange}
          modules={modules}
          formats={formats}
          placeholder="Start writing your book here..."
          className="h-[calc(100vh-200px)]"
          readOnly={loading}
        />
        <div className="flex justify-end gap-4 p-4 mt-10">
          <button
            onClick={handleSave}
            className={`px-6 py-2 bg-gray-600 text-white rounded-md hover:bg-gray-700 transition-colors ${
              loadingDraft ? 'opacity-50 cursor-not-allowed' : ''
            }`}
            disabled={loadingDraft}
          >
            {loadingDraft ? 'Saving...' : 'Save as Draft'}
          </button>
          <button
            onClick={handlePublish}
            className={`px-6 py-2 bg-red-600 text-white rounded-md hover:bg-red-700 transition-colors ${
              loading ? 'opacity-50 cursor-not-allowed' : ''
            }`}
            disabled={loading}
          >
            {loading ? 'Submitting...' : 'Submit'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default WritingDashboard;