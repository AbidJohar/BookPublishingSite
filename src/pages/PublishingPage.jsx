/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import Title from '../components/Title';
import { Link } from 'react-router-dom';

const PublishingPage = () => {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    category: '',
    coverImage: null,
    termsAccepted: false
  });

  const categories = [
    // Fiction Categories
    'Horror', 'Fantasy', 'Science Fiction', 'Mystery', 'Thriller', 'Romance',
    'Historical Fiction', 'Adventure', 'Action', 'Dystopian', 'Paranormal',
    'Magical Realism', 'Crime Fiction', 'Gothic Fiction', 'Psychological Thriller',
    'Urban Fiction',
  
    // Non-Fiction Categories
    'Biography', 'Memoir', 'Self-Help', 'Psychology', 'True Crime', 'Business & Finance',
    'Science & Technology', 'Health & Wellness', 'Philosophy', 'Religion & Spirituality',
    'History', 'Travel', 'Cooking', 'Parenting', 'Art & Photography', 'Politics',
  
    // Children & Young Adult
    'Picture Books', 'Middle Grade Fiction', 'Young Adult', 'Fairy Tales & Folklore',
  
    // Poetry & Drama
    'Classic Poetry', 'Contemporary Poetry', 'Plays & Drama'
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      setFormData(prev => ({ ...prev, coverImage: URL.createObjectURL(file) }));
    }
  };

  const handleTermsChange = (e) => {
    setFormData(prev => ({ ...prev, termsAccepted: e.target.checked }));
  };

  const handleSave = () => {
    console.log('Saving draft:', formData);
    // Add your save logic here
  };

  const handlePublish = () => {
    if (!formData.termsAccepted) {
      alert('Please accept the terms and conditions before publishing');
      return;
    }
    console.log('Publishing:', formData);
    // Add your publish logic here
  };

  return (
    <div className="w-full max-w-7xl mx-auto px-6 py-12 min-h-screen bg-gray-50">
      <div className="flex flex-col items-start ml-4 mb-5">
         <Title text1={"PUBLISH_YOUR"} text2={"MASTERPIECE"}/>
        <p className="text-lg text-gray-600">Share your story with the world in just a few steps</p>
      </div>


    <div className="bg-white  rounded-xl p-4 flex flex-col md:flex-row gap-8">
       {/* left Column - Cover Image */}
       <div className="w-full h-full md:w-1/3">
          <div className="">
            <label className="block text-gray-800 text-base font-semibold mb-3">
              Cover Image
            </label>
            <div className="relative group">
              <label className="w-full flex flex-col items-center px-6 py-12 bg-gray-50 text-gray-600 rounded-lg border-2 border-dashed border-teal-300 cursor-pointer transition-all duration-300 hover:border-teal-500 hover:bg-blue-50">
                {formData.coverImage ? (
                  <img 
                    src={formData.coverImage} 
                    alt="Cover preview" 
                    className="w-full h-96 object-cover rounded-md shadow-md"
                  />
                ) : (
                  <div className="text-center ">
                    <svg className="mx-auto h-[21rem] w-16 text-teal-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12" />
                    </svg>
                    <span className="mt-3 block text-lg font-medium">Drop or click to upload cover image</span>
                    <span className="mt-1 block text-sm text-gray-500">Supports JPG, PNG (Max 5MB)</span>
                  </div>
                )}
                <input 
                  type="file" 
                  className="hidden" 
                  accept="image/*" 
                  onChange={handleImageUpload}
                />
              </label>
            </div>
          </div>
        </div>

         {/* right Column - Form Fields */}
         <div className="w-full md:w-2/3">
          {/* Title */}
          <div className="mb-6">
            <label className="block text-gray-800 text-base font-semibold mb-3">
              Title
            </label>
            <input
              type="text"
              name="title"
              value={formData.title}
              onChange={handleInputChange}
              className="w-full px-4 py-3 border border-teal-500 rounded-sm focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent shadow-sm text-gray-900 placeholder-gray-400"
              placeholder="Enter a captivating title"
            />
          </div>

          {/* Description */}
          <div className="mb-6">
            <label className="block text-gray-800 text-base font-semibold mb-3">
              Description
            </label>
            <textarea
              name="description"
              value={formData.description}
              onChange={handleInputChange}
              className="w-full px-4 py-3 border border-teal-500 rounded-sm focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent shadow-sm text-gray-900 placeholder-gray-400 h-40"
              placeholder="Write a compelling description..."
            />
          </div>

          {/* Category */}
          <div className="mb-6">
            <label className="block text-gray-800 text-base font-semibold mb-3">
              Category
            </label>
            <select
              name="category"
              value={formData.category}
              onChange={handleInputChange}
              className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent shadow-sm text-gray-900"
            >
              <option value="">Choose a category</option>
              {categories.map((cat) => (
                <option key={cat} value={cat}>{cat}</option>
              ))}
            </select>
          </div>

          {/* Terms and Conditions */}
          <div className="mb-6">
            <label className="flex items-center cursor-pointer">
              <input
                type="checkbox"
                checked={formData.termsAccepted}
                onChange={handleTermsChange}
                className="h-5 w-5 text-blue-600 focus:ring-blue-500 border-gray-300 rounded cursor-pointer"
              />
              <span className="ml-3 text-gray-700 text-base">
                I agree to the{' '}
                <a href="#" className="text-blue-600 hover:underline font-medium">
                  Terms and Conditions
                </a>
              </span>
            </label>
          </div>

          {/* Buttons */}
          <div className="flex justify-start gap-4">
            <button
              onClick={handleSave}
              className="px-8 py-3 bg-gray-700 text-white rounded-lg font-medium hover:bg-gray-800 transition-all duration-300 shadow-md hover:shadow-lg"
            >
              Save Draft
            </button>
            <Link
              to={'/writing-dashboard'}
              onClick={handlePublish}
              className="px-8 py-3 bg-red-600 text-white rounded-lg font-medium hover:bg-red-700 transition-all duration-300 shadow-md hover:shadow-lg disabled:bg-gray-400 disabled:cursor-not-allowed disabled:shadow-none"
              disabled={!formData.termsAccepted}
            >
              next
            </Link>
          </div>
        </div>

       
      </div>
    </div>
  );
};

export default PublishingPage;