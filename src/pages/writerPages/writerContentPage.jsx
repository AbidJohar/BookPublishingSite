/* eslint-disable no-unused-vars */
import React, { useEffect} from 'react';
import { useLocation, useNavigate} from 'react-router-dom';

const WriterContentPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { book,decryptedContent  } = location.state || {};
   

   

  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!book && !book._id) {
    navigate('/');
    return null;
  }

  return (
    <div className="min-h-screen w-full bg-gray-200 py-8 px-4 sm:px-10 md:px-20 lg:px-10">
      <div className=" mx-auto bg-white rounded-lg shadow-md p-6 sm:p-10">
        <h1 className="text-2xl sm:text-3xl font-bold text-[#333333] mb-4">
          {book?.title }
        </h1>

        {/* Content Section */}
        <div className="prose prose-sm text-xl text-gray-700 sm:prose-base max-w-none select-none">
        {decryptedContent}
        </div>

        {/* Back Button */}
        <button
          onClick={() => navigate(-1)}
          className="mt-6 bg-teal-600 hover:bg-teal-700 text-white py-2 px-6 rounded font-semibold transition duration-200"
        >
          Back to Book Details
        </button>
      </div>
    </div>
  );
};

export default WriterContentPage;