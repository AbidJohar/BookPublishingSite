/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import Title from '../components/Title';
import { Link } from 'react-router-dom';

const WritingDashboard = () => {
  const [content, setContent] = useState('');

  const modules = {
    toolbar: [
      [{ 'header': [1, 2, 3, false] }],
      ['bold', 'italic', 'underline', 'strike'],
      [{ 'list': 'ordered'}, { 'list': 'bullet' }],
      ['blockquote', 'code-block'],
      [{ 'align': [] }],
      ['link', 'image'],
      ['clean']
    ]
  };

  const formats = [
    'header',
    'bold', 'italic', 'underline', 'strike',
    'list', 'bullet',
    'blockquote', 'code-block',
    'align',
    'link', 'image'
  ];

  const handleChange = (value) => {
    setContent(value);
  };

  const handleSave = () => {
    // Add your save logic here
    console.log('Saving content:', content);
    // You could add API calls or local storage logic here
  };

  const handlePublish = () => {
    // Add your publish logic here
    console.log('Publishing content:', content);
    // You could add API calls or publishing logic here
  };

  return (
    <div className="w-full max-w-7xl mx-auto px-1 py-8 min-h-screen">
      <Title text1={"WRITING"} text2={"DASHBOARD"}/>
      <div className="bg-white border w-full rounded-lg shadow-sm mt-4">
        <ReactQuill
          theme="snow"
          value={content}
          onChange={handleChange}
          modules={modules}
          formats={formats}
          placeholder="Start writing here..."
          className="h-[calc(100vh-200px)]"
        />
        <div className="flex justify-end gap-4 p-4 mt-10">
          <button
            onClick={handleSave}
            className="px-6 py-2 bg-gray-600 text-white rounded-md hover:bg-gray-700 transition-colors"
          >
            Save
          </button>
          <Link
            to={"#"}
            onClick={handlePublish}
            className="px-6 py-2  bg-red-600 text-white rounded-md hover:bg-red-700 transition-colors"
          >
            Publish
          </Link>
        </div>
      </div>
    </div>
  );
};

export default WritingDashboard;