/* eslint-disable no-unused-vars */
import React, { useState} from 'react';
import Title from '../components/Title';
import { Link } from 'react-router-dom';

const WriterPage = () => {
  const [drafts, setDrafts] = useState([
    { id: 1, title: 'Sky king',   lastEdited: 'Feb 22, 2025' },
    { id: 2, title: 'Night with full fear',   lastEdited: 'Feb 20, 2025' },
  ]);

  return (
    <div className="w-full py-5 px-14 bg-white">
      <div className="w-full mb-10 flex flex-col items-center justify-center text-white h-40 bg-gradient-to-r from-black/80 to-gray-800/80 shadow-lg">
        <p className="mb-4 text-xl font-semibold tracking-wide">Compose Your Haroof Manuscript</p>
        <Link to={"/publishing-page"}  className="px-5 py-3 rounded-sm bg-red-600 hover:bg-red-700 transition-colors text-white font-medium">
          Create New Content
        </Link>
      </div>
      <Title text1={"YOUR"} text2={"DRAFTS"} />
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 mt-4">
        {drafts.length > 0 ? (
          drafts.map((draft) => (
            <div
              key={draft.id}
              className="p-5 bg-white rounded-lg hover:shadow-black shadow-sm shadow-black/40 hover:shadow-sm transition-shadow"
            >
              <h3 className="text-lg font-semibold text-gray-800">{draft.title}</h3>
              <p className="text-gray-500 text-xs mt-2">Last Edited: {draft.lastEdited}</p>
              <button className="mt-3 px-4 py-1 text-sm bg-red-600 hover:bg-red-700 text-white rounded-sm transition-colors">
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