/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { assets } from '../assets/assets';

const Profile = () => {
  const [activeStat, setActiveStat] = useState(null);
  const [showFollowing, setShowFollowing] = useState(false);
  const [showContents, setShowContents] = useState(false);
  const [showFollowers, setShowFollowers] = useState(false);

  const stats = [
    { name: 'Contents', value: 4 },
    { name: 'Followers', value: 2 },
    { name: 'Following', value: 2 },
  ];

  const handleStatClick = (statName) => {
    setActiveStat(statName);
    if (statName === 'Following') {
      setShowFollowing(!showFollowing);
      setShowContents(false);
      setShowFollowers(false);
    } else if (statName === 'Contents') {
      setShowContents(!showContents);
      setShowFollowing(false);
      setShowFollowers(false);
    } else if (statName === 'Followers') {
      setShowFollowers(!showFollowers);
      setShowFollowing(false);
      setShowContents(false);
    }
  };

  return (
    <div className="w-full mx-auto bg-black shadow-md">
      {/* Upper Section: Background Image and Profile Icon */}
      <div className="relative h-36 ">
        <img 
          src={assets.logo} 
          alt="Books" 
          className="w-full h-full object-cover" 
        />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 translate-y-2 w-24 h-24 bg-teal-500 border-[3px] border-white rounded-full flex items-center justify-center text-white text-4xl font-bold">
          A
          <div className='absolute bottom-2 -right-1 bg-black/40 flex items-center justify-center w-8 h-8 rounded-full border border-black'>
            <button className="border-none text-sm cursor-pointer">📷</button>
          </div>
        </div>
        <div className="absolute top-2.5 right-2.5">
          <button className="bg-transparent border-none text-2xl cursor-pointer">⚙️</button>
          <button className="bg-transparent border-none text-2xl cursor-pointer ml-2.5">↗️</button>
        </div>
      </div>

      {/* Lower Section: Name, About, Library Stats, and Suggestion */}
      <div className="p-5 bg-white">
        {/* Profile Info */}
        <div className="text-center mt-5">
          <h1 className="text-2xl text-gray-800">Abid Hussain</h1>
          <p className="text-gray-600 text-sm">Read by 0 people</p>
        </div>
       <div className='w-full flex items-center justify-center py-4'>
        <button className='py-2 px-6 bg-red-600 hover:bg-red-700 text-white rounded-sm'>Signout</button>
        </div>

        {/* Stats */}
        <div className="mt-5 text-sm">
          <p className="flex space-x-4">
            {stats.map((stat) => (
              <span
                key={stat.name}
                className={`cursor-pointer transition-colors duration-300 ${
                  activeStat === stat.name ? 'text-red-600' : 'text-black'
                }`}
                onClick={() => handleStatClick(stat.name)}
              >
                {stat.name} {stat.value}
              </span>
            ))}
          </p>
        </div>
 {/* Contents Section */}
 <div className={`mt-5 text-gray-600 text-sm ${showContents ? '' : 'hidden'}`}>
  <div className="w-full">
    
    {/* Content Cards */}
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
      {/* Content Card 1 */}
      <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
        <div className="w-full h-32">
          <img
            className="w-full h-full object-cover"
            src={assets.image11}
            alt="content_image"
          />
        </div>
        <div className="p-4">
          <h4 className="text-md font-semibold text-gray-800 truncate">Horror</h4>
          <p className="text-xs text-gray-500 mt-1">Published: Feb 15, 2025</p>
          <p className="text-sm text-gray-600 mt-2 line-clamp-2">
          A chilling thriller where time itself harbors dark secrets.
          </p>
          <div className="mt-4 flex justify-between items-center">
            <span className="text-xs text-gray-500">Views: 245</span>
            <button className="py-1 px-3 bg-red-600 text-white text-xs rounded-sm hover:bg-red-700 transition-colors">
              Remove
            </button>
          </div>
        </div>
      </div>

      {/* Content Card 2 */}
      <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
        <div className="w-full h-32">
          <img
            className="w-full h-full object-cover"
            src={assets.image1}
            alt="content_image"
          />
        </div>
        <div className="p-4">
          <h4 className="text-md font-semibold text-gray-800 truncate"></h4>
          <p className="text-xs text-gray-500 mt-1">Published: Feb 20, 2025</p>
          <p className="text-sm text-gray-600 mt-2 line-clamp-2">
            Learn the fundamentals of React.js with practical examples and projects.
          </p>
          <div className="mt-4 flex justify-between items-center">
            <span className="text-xs text-gray-500">Views: 178</span>
            <button className="py-1 px-3 bg-red-600 text-white text-xs rounded-sm hover:bg-red-700 transition-colors">
              Remove
            </button>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
        <div className="w-full h-32">
          <img
            className="w-full h-full object-cover"
            src={assets.contact_img}
            alt="content_image"
          />
        </div>
        <div className="p-4">
          <h4 className="text-md font-semibold text-gray-800 truncate">Whispers of the Forest</h4>
          <p className="text-xs text-gray-500 mt-1">Published: Feb 20, 2025</p>
          <p className="text-sm text-gray-600 mt-2 line-clamp-2">
          Mystical tales from the ancient woods.
          </p>
          <div className="mt-4 flex justify-between items-center">
            <span className="text-xs text-gray-500">Views: 178</span>
            <button className="py-1 px-3 bg-red-600 text-white text-xs rounded-sm hover:bg-red-700 transition-colors">
              Remove
            </button>
          </div>
        </div>
      </div>

      {/* Content Card 3 */}
      <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
        <div className="w-full h-32">
          <img
            className="w-full h-full object-cover"
            src={assets.image2}
            alt="content_image"
          />
        </div>
        <div className="p-4">
          <h4 className="text-md font-semibold text-gray-800 truncate">Skyward Flight</h4>
          <p className="text-xs text-gray-500 mt-1">Published: Feb 22, 2025</p>
          <p className="text-sm text-gray-600 mt-2 line-clamp-2">
          An adventure through the clouds with daring aerial feats.
          </p>
          <div className="mt-4 flex justify-between items-center">
            <span className="text-xs text-gray-500">Views: 312</span>
            <button className="py-1 px-3 bg-red-600 text-white text-xs rounded-sm hover:bg-red-700 transition-colors">
              Remove
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

        {/* Followers Section */}
        <div className={`mt-5 text-gray-600 text-sm ${showFollowers ? '' : 'hidden'}`}>
          <div className='w-full flex flex-row gap-4 items-start'>
            <div className="flex flex-col items-center justify-center mt-2">
              <div className="w-24 h-24">
                <img className='rounded-full' src={assets.contact_img} alt="follower_image" />
              </div>
              <span className='font-semibold text-md my-2'>Jane Smith</span>
              <button className='py-2 px-3 bg-red-600 text-white rounded-sm'>Block</button>
            </div>
            <div className="flex flex-col items-center justify-center mt-2">
              <div className="w-24 h-24">
                <img className='rounded-full' src={assets.contact_img} alt="follower_image" />
              </div>
              <span className='font-semibold text-md my-2'>Mike Johnson</span>
              <button className='py-2 px-3 bg-red-600 text-white rounded-sm'>Block</button>
            </div>
          </div>
        </div>

        {/* Following Section */}
        <div className={`mt-5 text-gray-600 text-sm ${showFollowing ? '' : 'hidden'}`}>
          <div className='w-full flex flex-row gap-4 items-start'>
            <div className="flex flex-col items-center justify-center mt-2">
              <div className="w-24 h-24">
                <img className='rounded-full' src={assets.contact_img} alt="following_image" />
              </div>
              <span className='font-semibold text-md my-2'>John Doe</span>
              <button className='py-2 px-3 bg-red-600 text-white rounded-sm'>UnFollow</button>
            </div>
            <div className="flex flex-col items-center justify-center mt-2">
              <div className="w-24 h-24">
                <img className='rounded-full' src={assets.contact_img} alt="following_image" />
              </div>
              <span className='font-semibold text-md my-2'>Sarah Williams</span>
              <button className='py-2 px-3 bg-red-600 text-white rounded-sm'>UnFollow</button>
            </div>
          
          </div>
        </div>

      </div>
    </div>
  );
};

export default Profile;
