/* eslint-disable no-unused-vars */
import React, { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../../context/userContext';
import { FaHome } from 'react-icons/fa';
import axios from 'axios';

const base_url = import.meta.env.VITE_BASE_URL;

const WriterDashboard = () => {
  const navigate = useNavigate();
  const { writer } = useContext(UserContext); // Access writer from context
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [writerBooks, setWriterBooks] = useState([]);
  const [publishBooks, setPublishBooks] = useState([]);
  

  useEffect(() => {
    // Redirect if no writer data
    if (!writer || !writer._id) {
      navigate('/becomeawriter');
      return;
    }

    const fetchWriterBooksById = async () => {
      try {
        setLoading(true);
        setError(null);

    
        const response = await axios.get(
          `${base_url}/v1/books/getbooks/${writer._id}`,
          {
            withCredentials: true,
          }
        );

        if (response.data.success) {

          let books = response.data.books;
          // console.log('Books in writerDashboard:', response.data.books);
          setWriterBooks(books || []);

            setPublishBooks(books.filter((book) => book.status === "approved"))
          // Optionally set a message for no books, but avoid treating it as an error
          if (response.data.books.length === 0) {
            console.log('No books found for this writer.');
          }
        } else {
          setError(response.data.message || 'Failed to fetch books');
        }
      } catch (error) {
        console.error('Error in fetchWriterBooksById:', error);
        // Only set error for non-404 cases to avoid showing errors for new writers
        const errorMessage = error.response?.data?.message || 'Failed to fetch books. Please try again.';
        setError(errorMessage);
      } finally {
        setLoading(false);
      }
    };

    fetchWriterBooksById();
  }, [writer, base_url, navigate]);




  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Writer stats based on fetched data
  const writerStats = {
    followers: writer?.followers || 0,
    booksPublished: writerBooks.length,
    totalReads: writerBooks.reduce((acc, book) => acc + (book.reads || 0), 0),
    earnings: 0,
    books: writerBooks,
    followersList: [], // Update if follower data is available
  };

  // Profile picture logic
  const firstLetter = writer?.fullName?.[0]?.toUpperCase() || '';
  const profilePic =
    writer?.writerProfileImage ||
    `https://dummyimage.com/100x100/fff/000&text=${firstLetter}`;

  return (
    <div className="min-h-screen w-full bg-gray-100">
      {/* Navbar */}
      <nav className="bg-teal-700 text-white p-4 shadow-md">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <button
              onClick={() => navigate('/')}
              className="flex items-center space-x-2 text-white transition duration-200 transform hover:scale-105"
              title="Back to Home"
            >
              <FaHome className="w-6 h-6" />
              <span className="text-xl font-semibold hidden md:inline">Home</span>
            </button>
          </div>
          <div className="flex space-x-6">
            <div className="flex items-center space-x-4">
              <h1 className="text-xl font-semibold">{writer?.fullName || 'Writer'}</h1>
              <img
                src={profilePic}
                alt={writer?.fullName || 'Profile'}
                className="w-12 h-12 rounded-full object-cover border-2 border-white"
              />
            </div>
            <button
              onClick={() => navigate('/becomeawriter')}
              className="hover:underline hover:underline-offset-2 rounded-md transition px-3 bg-red-600 hover:bg-red-700 duration-200 py-0 font-medium"
            >
              Edit Profile
            </button>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto p-6">
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-gray-800">
            Welcome to Your Dashboard, {writer?.fullName || 'Writer'}!
          </h2>
          <p className="text-gray-600 mt-2">
            Here’s an overview of your writing journey.
          </p>
        </div>

        {/* Loading State */}
        {loading && <p className="text-gray-600">Loading books...</p>}

        {/* Error State (only show for critical errors) */}
        {error && (
          <p className="text-red-600 bg-red-100 p-4 rounded-md mb-6">{error}</p>
        )}

        {/* Stats Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
            <h3 className="text-lg font-semibold text-gray-700">Followers</h3>
            <p className="text-3xl font-bold text-teal-600 mt-2">
              {writerStats.followers.toLocaleString()}
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
            <h3 className="text-lg font-semibold text-gray-700">Total Books</h3>
            <p className="text-3xl font-bold text-teal-600 mt-2">
              {writerStats.booksPublished}
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
            <h3 className="text-lg font-semibold text-gray-700">Total Reads</h3>
            <p className="text-3xl font-bold text-teal-600 mt-2">
              {writerStats.totalReads.toLocaleString()}
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
            <h3 className="text-lg font-semibold text-gray-700">Earnings</h3>
            <p className="text-3xl font-bold text-teal-600 mt-2">
              Rs.
              {writerStats.earnings.toLocaleString(undefined, {
                minimumFractionDigits: 2,
              })}
            </p>
          </div>
        </div>

        {/* Published Books Section */}
        <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200 mb-8">
          <h3 className="text-xl font-semibold text-gray-800 mb-4">Your Books</h3>
          {!loading && writerStats.books.length === 0 ? (
            <p className="text-gray-600">
              You haven’t published any books yet. Start writing!
            </p>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {writerBooks.map((book) => (
                <div
                  key={book._id}
                  className="p-4 border border-gray-200 shadow-black/30 shadow-md hover:shadow-black/30 rounded-md hover:shadow-lg transition duration-200"
                >
                  <h4 className="text-lg font-medium text-gray-800">{book.title}</h4>
                  <p className="text-gray-600">
                    Reads: {book.reads?.toLocaleString() || 0}
                  </p>
                  <button
                    // onClick={() => navigate(`/book-details/${book._id}`)}
                    className="mt-2 text-teal-600 hover:underline"
                  >
                    View Details
                  </button>
                </div>
              ))}
            </div>
          )}
          <button
            onClick={() => navigate('/writer-books')}
            className="mt-4 bg-teal-600 hover:bg-teal-700 text-white py-2 px-4 rounded font-semibold"
          >
            Add New Book
          </button>
        </div>

        {/* Two-Column Section: Followers (Left) and Books Table (Right) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">
              Your Followers
            </h3>
            {writerStats.followersList.length === 0 ? (
              <p className="text-gray-600">No followers yet.</p>
            ) : (
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="bg-teal-600 text-white">
                      <th className="p-3 font-semibold">Name</th>
                      <th className="p-3 font-semibold">Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {writerStats.followersList.map((follower) => (
                      <tr
                        key={follower.id}
                        className="border-b border-gray-200 hover:bg-gray-50 transition duration-200"
                      >
                        <td className="p-3 text-gray-800">{follower.name}</td>
                        <td className="p-3">
                          <button
                            onClick={() =>
                              navigate(`/follower-details/${follower.id}`)
                            }
                            className="text-red-600 hover:underline"
                          >
                            Remove
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">
              Published Books
            </h3>
            {!loading && publishBooks.length === 0 ? (
              <p className="text-gray-600">No books published yet.</p>
            ) : (
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="bg-teal-600 text-white">
                      <th className="p-3 font-semibold">Title</th>
                      <th className="p-3 font-semibold">Reads</th>
                    </tr>
                  </thead>
                  <tbody>
                    {publishBooks.map((book) => (
                      <tr
                        key={book._id}
                        className="border-b border-gray-200 hover:bg-gray-50 transition duration-200"
                      >
                        <td className="p-3 text-gray-800">{book.title}</td>
                        <td className="p-3 text-gray-600">
                          {book.reads?.toLocaleString() || 0}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default WriterDashboard;