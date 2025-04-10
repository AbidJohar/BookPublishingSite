/* eslint-disable no-unused-vars */
import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../../context/userContext';  
import { FaHome } from 'react-icons/fa';

const WriterDashboard = () => {
  const navigate = useNavigate();
  const { writer } = useContext(UserContext); // Access writer from context

  if (!writer) {
    navigate('/becomeawriter'); // Redirect back if no writer data
    return null;
  }

  // Placeholder data (replace with real data from backend/context)
  const writerStats = {
    followers: 1250, // Example count
    booksPublished: 3, // Example
    totalReads: 45000, // Example
    earnings: 1200.50, // Example in dollars
    books: [
      { id: 'book-001', title: 'The Endless Ocean', reads: 20000 },
      { id: 'book-002', title: 'Shadows of Time', reads: 15000 },
      { id: 'book-003', title: 'Whispers in the Dark', reads: 10000 },
    ],
    followersList: [ // Placeholder followers data
      { id: 'user-001', name: 'Alice Smith' },
      { id: 'user-002', name: 'Bob Johnson' },
      { id: 'user-003', name: 'Clara Lee' },
      // Add more as needed
    ],
  };

  const firstLetter = writer.fullName[0].toUpperCase();
  const profilePic = writer.profilePic || `https://dummyimage.com/100x100/fff/000&text=${firstLetter}`;

  return (
    <div className="min-h-screen w-full bg-gray-100">
      {/* Navbar */}
      <nav className="bg-teal-700 text-white p-4 shadow-md">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          {/* Left Side: Writer Name and Profile Picture */}
          <div className="flex items-center space-x-4">
            <button
              onClick={() => navigate('/')}
              className="flex items-center space-x-2 text-white transition duration-200 transform hover:scale-105"
              title="Back to Home"
            >
              <FaHome className="w-6 h-6" /> {/* Using react-icons */}
              <span className="text-xl font-semibold hidden md:inline">Home</span> {/* Optional text, hidden on mobile */}
            </button>
          </div>

          {/* Right Side: Navigation Links */}
          <div className="flex space-x-6">
            <div className="flex items-center space-x-4">
              <h1 className="text-xl font-semibold">{writer.fullName}</h1>
              <img
                src={profilePic}
                alt={writer.fullName}
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
        {/* Welcome Header */}
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-gray-800">Welcome to Your Dashboard, {writer.fullName}!</h2>
          <p className="text-gray-600 mt-2">Here’s an overview of your writing journey.</p>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {/* Followers Card */}
          <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
            <h3 className="text-lg font-semibold text-gray-700">Followers</h3>
            <p className="text-3xl font-bold text-teal-600 mt-2">{writerStats.followers.toLocaleString()}</p>
          </div>

          {/* Books Published Card */}
          <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
            <h3 className="text-lg font-semibold text-gray-700">Books Published</h3>
            <p className="text-3xl font-bold text-teal-600 mt-2">{writerStats.booksPublished}</p>
          </div>

          {/* Total Reads Card */}
          <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
            <h3 className="text-lg font-semibold text-gray-700">Total Reads</h3>
            <p className="text-3xl font-bold text-teal-600 mt-2">{writerStats.totalReads.toLocaleString()}</p>
          </div>

          {/* Earnings Card */}
          <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
            <h3 className="text-lg font-semibold text-gray-700">Earnings</h3>
            <p className="text-3xl font-bold text-teal-600 mt-2">${writerStats.earnings.toLocaleString()}</p>
          </div>
        </div>

        {/* Published Books Section */}
        <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200 mb-8">
          <h3 className="text-xl font-semibold text-gray-800 mb-4">Published Books</h3>
          {writerStats.books.length === 0 ? (
            <p className="text-gray-600">You haven’t published any books yet. Start writing!</p>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {writerStats.books.map((book) => (
                <div
                  key={book.id}
                  className="p-4 border border-gray-200 rounded-md hover:shadow-lg transition duration-200"
                >
                  <h4 className="text-lg font-medium text-gray-800">{book.title}</h4>
                  <p className="text-gray-600">Reads: {book.reads.toLocaleString()}</p>
                  <button
                    onClick={() => navigate(`/book-details/${book.id}`)} // Assuming a book details route
                    className="mt-2 text-teal-600 hover:underline"
                  >
                    View Details
                  </button>
                </div>
              ))}
            </div>
          )}
          <button
            onClick={() => navigate('/writer-books')} // Placeholder for adding a new book
            className="mt-4 bg-teal-600 hover:bg-teal-700 text-white py-2 px-4 rounded font-semibold"
          >
            Add New Book
          </button>
        </div>

        {/* New Two-Column Section: Followers (Left) and Books Table (Right) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Left Side: Followers List */}
          <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">Your Followers</h3>
            {writerStats.followersList.length === 0 ? (
              <p className="text-gray-600">No follwers published yet.</p>
            ) : (
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="bg-teal-600 text-white">
                      <th className="p-3 font-semibold">Names</th>
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
                            onClick={() => navigate(`/follower-details/${follower.id}`)}
                            className="text-red-600 hover:underline"
                          >
                            remove
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </div>
          {/* Right Side: Books Table */}
          <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">Your Books</h3>
            {writerStats.books.length === 0 ? (
              <p className="text-gray-600">No books published yet.</p>
            ) : (
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="bg-teal-600 text-white">
                      <th className="p-3 font-semibold">Title</th>
                      <th className="p-3 font-semibold">Reads</th>
                      <th className="p-3 font-semibold">Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {writerStats.books.map((book) => (
                      <tr
                        key={book.id}
                        className="border-b border-gray-200 hover:bg-gray-50 transition duration-200"
                      >
                        <td className="p-3 text-gray-800">{book.title}</td>
                        <td className="p-3 text-gray-600">{book.reads.toLocaleString()}</td>
                        <td className="p-3">
                          <button
                            onClick={() => navigate(`/book-details/${book.id}`)}
                            className="text-teal-600 hover:underline"
                          >
                            View
                          </button>
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