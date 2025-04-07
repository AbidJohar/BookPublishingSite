/* eslint-disable no-unused-vars */
import React, { useEffect, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import { books } from '../../assets/assets.js'; // Adjust path as needed

const WriterDashboard = () => {
  const navigate = useNavigate();

  // Memoized dummy user data (Aeron Hawk as the logged-in writer)
  const user = useMemo(() => ({
    username: 'Aeron Hawk',
    isAuthenticated: true,
    role: 'writer',
    stats: { booksPublished: 3, wordsWritten: 45000, followers: 1200, following: 85 }
  }), []);

  // Dummy subscription data
  const subscription = {
    plan: 'free',
    status: 'active',
    maxBooks: 3
  };

  // Filter books by the logged-in writer (Aeron Hawk)
  const publishedBooks = books.filter(book => book.author === user.username);

  // Redirect if not authenticated or not a writer
  useEffect(() => {
    if (!user.isAuthenticated || (user.role !== 'writer' && user.role !== 'both')) {
      navigate('/login');
    }
  }, [user, navigate]);

  // Handlers
  const handleNewBook = () => {
    navigate('/publish/step1');
  };

  return (
    <div className="w-full max-w-7xl mx-auto px-6 py-12 min-h-screen bg-gradient-to-br from-gray-100 to-gray-200">
      {/* Header */}
      <div className="mb-10 text-center">
        <h1 className="text-4xl font-extrabold text-gray-900 tracking-tight">
          Welcome, <span className="text-teal-600">{user.username}</span>!
        </h1>
        <p className="mt-2 text-lg text-gray-600">Your Dashboard</p>
      </div>

      {/* Main Grid Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        {/* Left Column: Stats, Subscription, Followers/Following */}
        <div className="lg:col-span-1 space-y-8">
          {/* Writer Stats */}
          <div className="bg-white p-6 rounded-2xl shadow-lg transform hover:scale-105 transition-all duration-300">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Your Stats</h2>
            <div className="space-y-4 text-gray-700">
              <p>
                Books Published: <span className="font-bold text-teal-600">{user.stats.booksPublished}</span>
              </p>
              <p>
                Followers: <span className="font-bold text-teal-600">{user.stats.followers.toLocaleString()}</span>
              </p>
              <p>
                Following: <span className="font-bold text-teal-600">{user.stats.following}</span>
              </p>
            </div>
          </div>
        </div>

        {/* Right Column: Published Books */}
        <div className="lg:col-span-3 space-y-8">
          {/* Published Books */}
          <div className="bg-white p-8 rounded-2xl shadow-lg">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-semibold text-gray-800">Published Books</h2>
              <button
                onClick={handleNewBook}
                className="px-4 py-2 bg-teal-600 text-white rounded-lg hover:bg-teal-700 transition-all duration-300 shadow-md"
              >
                + New Book
              </button>
            </div>
            {publishedBooks.length === 0 ? (
              <p className="text-gray-600 text-center py-6">No published books yet. Start creating!</p>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {publishedBooks.map((book, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-all duration-300 shadow-sm"
                  >
                    <div className="flex items-center gap-4">
                      <img
                        src={book.coverImage}
                        alt={book.title}
                        className="w-16 h-24 object-cover rounded-md shadow-md"
                      />
                      <div>
                        <p className="font-semibold text-gray-800 text-lg">{book.title}</p>
                        <p className="text-sm text-gray-600">
                          Readers: {book.readByUsers} | Avg Rating:{' '}
                          {book.ratings.length > 0
                            ? (book.ratings.reduce((sum, r) => sum + r.rating, 0) / book.ratings.length).toFixed(1)
                            : 'N/A'}
                        </p>
                      </div>
                    </div>
                    <button
                      onClick={() => navigate(`/book/${index}`)}
                      className="px-4 py-2 bg-teal-600 text-white rounded-lg hover:bg-teal-700 transition-all duration-300 shadow-md"
                    >
                      View
                    </button>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Followers/Following Section */}
          <div className="bg-white p-8 rounded-2xl shadow-lg">
            <h2 className=" text-center text-2xl font-semibold text-gray-800 mb-6">Your Community</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="p-4 bg-teal-50 rounded-xl shadow-sm hover:shadow-md transition-all duration-300">
                <h3 className="text-lg font-semibold text-teal-700">Followers</h3>
                <p className="text-3xl font-bold text-gray-800">{user.stats.followers.toLocaleString()}</p>
                <p className="text-sm text-gray-600 mt-2">Readers who love your work</p>
              </div>
              <div className="p-4 bg-teal-50 rounded-xl shadow-sm hover:shadow-md transition-all duration-300">
                <h3 className="text-lg font-semibold text-teal-700">Following</h3>
                <p className="text-3xl font-bold text-gray-800">{user.stats.following}</p>
                <p className="text-sm text-gray-600 mt-2">Writers you follow</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WriterDashboard;