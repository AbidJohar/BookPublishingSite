/* eslint-disable no-unused-vars */
import React, { useState, useContext } from 'react';
import Title from '../../components/Title';
import { Link, useNavigate } from 'react-router-dom';
import { UserContext } from '../../context/userContext';
import axios from 'axios';

const WriterForm = () => {
  const navigate = useNavigate();
  const { setWriter } = useContext(UserContext);
  const base_url = import.meta.env.VITE_BASE_URL;

  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    paymentAccountNumber: '',
    addressLine1: '',
    city: '',
    state: '',
    postalCode: '',
    country: '',
    bio: '',
    termsAccepted: false,
  });
  const [profileImage, setProfileImage] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  // Handle input changes
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  // Handle file input change
  const handleFileChange = (e) => {
    setProfileImage(e.target.files[0]);
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    setLoading(true);

    const data = new FormData();
    data.append('fullName', formData.fullName);
    data.append('email', formData.email);
    data.append('paymentAccountNumber', formData.paymentAccountNumber);
    data.append('addressLine', formData.addressLine1);
    data.append('city', formData.city);
    data.append('state', formData.state);
    data.append('postalCode', formData.postalCode);
    data.append('country', formData.country);
    data.append('bio', formData.bio);
    if (profileImage) {
      data.append('writerProfileImage', profileImage);
    }

    try {
      const response = await axios.post(`${base_url}/v1/books/become-writer`, data, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
        withCredentials: true,
      });

      if (response.data.success) {
        const writer = response.data.writer;
        const accessToken = response.data.accessToken;
        console.log('Writer data:', writer);
        console.log('Access Token:', accessToken);

        // Store writer and accessToken in localStorage
        localStorage.setItem('writer', JSON.stringify(writer));
        localStorage.setItem('writerAccessToken', accessToken);
        setWriter(writer); // Update context

        navigate('/writer-dashboard');
      } else {
        setError(response.data.message || 'Failed to register writer');
      }
    } catch (err) {
      const errorMessage = err.response?.data?.message || 'Failed to register writer. Please try again.';
      setError(errorMessage);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen w-full bg-gradient-to-b from-gray-50 to-gray-100">
      <div className="max-w-4xl mx-auto px-4 pt-6 pb-16">
        {/* Form Card */}
        <div className="bg-white p-6 sm:p-10 rounded-xl shadow-xl border border-gray-200">
          {/* Title */}
          <div className="flex justify-center mb-8 pl-48">
            <Title text1={"Writer"} text2={"Data-Form"} className="text-center" />
          </div>

          {/* Error Message */}
          {error && (
            <div className="mb-6 p-4 bg-red-100 text-red-700 rounded-md">
              {error}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-8">
            {/* Personal Information Section */}
            <div className="border-b border-gray-200 pb-6">
              <h2 className="text-xl font-bold text-gray-800 mb-6 flex items-center">
                <span className="bg-teal-600 text-white w-7 h-7 rounded-full inline-flex items-center justify-center mr-3">1</span>
                Personal Information
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Full Name */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                  <input
                    type="text"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-teal-500"
                    required
                    disabled={loading}
                  />
                </div>

                {/* Email */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Active-email</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-teal-500"
                    required
                    disabled={loading}
                  />
                </div>

                {/* Profile Image */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Profile Image</label>
                  <input
                    type="file"
                    name="writerProfileImage"
                    onChange={handleFileChange}
                    className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-teal-500"
                    accept="image/*"
                    required
                    disabled={loading}
                  />
                </div>

                {/* Bio */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Short Bio</label>
                  <textarea
                    name="bio"
                    value={formData.bio}
                    onChange={handleChange}
                    className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-teal-500"
                    rows="4"
                    placeholder="Tell readers about yourself as a writer..."
                    disabled={loading}
                  />
                </div>
              </div>
            </div>

            {/* Payment Information Section */}
            <div className="border-b border-gray-200 pb-6">
              <h2 className="text-xl font-bold text-gray-800 mb-6 flex items-center">
                <span className="bg-teal-600 text-white w-7 h-7 rounded-full inline-flex items-center justify-center mr-3">2</span>
                Payment Information
              </h2>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Payment Account Number (e.g., PayPal, Bank Account)
                </label>
                <input
                  type="text"
                  name="paymentAccountNumber"
                  value={formData.paymentAccountNumber}
                  onChange={handleChange}
                  className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-teal-500"
                  required
                  disabled={loading}
                />
                <p className="mt-1 text-xs text-gray-500">This is where your earnings will be sent</p>
              </div>
            </div>

            {/* Address Section */}
            <div className="border-b border-gray-200 pb-6">
              <h2 className="text-xl font-bold text-gray-800 mb-6 flex items-center">
                <span className="bg-teal-600 text-white w-7 h-7 rounded-full inline-flex items-center justify-center mr-3">3</span>
                Address Information
              </h2>

              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Address Line 1</label>
                  <input
                    type="text"
                    name="addressLine1"
                    value={formData.addressLine1}
                    onChange={handleChange}
                    className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-teal-500"
                    required
                    disabled={loading}
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">City</label>
                    <input
                      type="text"
                      name="city"
                      value={formData.city}
                      onChange={handleChange}
                      className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-teal-500"
                      required
                      disabled={loading}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">State/Province</label>
                    <input
                      type="text"
                      name="state"
                      value={formData.state}
                      onChange={handleChange}
                      className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-teal-500"
                      required
                      disabled={loading}
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Postal/ZIP Code</label>
                    <input
                      type="text"
                      name="postalCode"
                      value={formData.postalCode}
                      onChange={handleChange}
                      className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-teal-500"
                      required
                      disabled={loading}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Country</label>
                    <input
                      type="text"
                      name="country"
                      value={formData.country}
                      onChange={handleChange}
                      className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-teal-500"
                      required
                      disabled={loading}
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Terms and Conditions */}
            <div className="flex items-start">
              <div className="flex items-center h-5">
                <input
                  id="terms"
                  name="termsAccepted"
                  type="checkbox"
                  checked={formData.termsAccepted}
                  onChange={handleChange}
                  className="h-4 w-4 text-teal-600 focus:ring-teal-500 border-gray-300 rounded"
                  required
                  disabled={loading}
                />
              </div>
              <div className="ml-3 text-sm">
                <label htmlFor="terms" className="font-medium text-gray-700">
                  I agree to the <a href="#" className="text-teal-600 hover:text-teal-500">Terms and Conditions</a> and <a href="#" className="text-teal-600 hover:text-teal-500">Privacy Policy</a>
                </label>
                <p className="text-gray-500">By registering, you agree to our content guidelines and payment terms.</p>
              </div>
            </div>

            {/* Submit Button */}
            <div className="flex flex-col sm:flex-row justify-center gap-4 pt-4">
              <button
                type="submit"
                className={`bg-teal-600 hover:bg-teal-700 text-white py-3 px-8 rounded-md font-semibold transition duration-200 shadow-md ${loading ? 'opacity-50 cursor-not-allowed' : ''}`}
                disabled={loading}
              >
                {loading ? 'Registering...' : 'Register as Writer'}
              </button>
              <Link to="/becomeawriter" className="bg-gray-200 hover:bg-gray-300 text-gray-800 py-3 px-8 rounded-md font-semibold transition duration-200 text-center">
                Cancel
              </Link>
            </div>
          </form>
        </div>

        {/* Additional Information */}
        <div className="mt-8 text-center text-gray-600">
          <p>Already registered? <Link to="/login" className="text-teal-600 hover:underline">Sign in here</Link></p>
        </div>
      </div>
    </div>
  );
};

export default WriterForm;