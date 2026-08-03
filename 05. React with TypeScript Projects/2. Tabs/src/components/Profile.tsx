import React, { useState } from "react";
import { FaCamera } from "react-icons/fa";

const Profile = () => {
  const [bannerurl, setbannerurl] = useState("https://placehold.co/1500x200");
  const [profileurl, setprofileurl] = useState("https://placehold.co/100");

  const handleBannerChange = (e: any) => {
    const file = e.target.files?.[0];
    if (file) {
      setbannerurl(URL.createObjectURL(file));
    }
  };

  const handleProfileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setprofileurl(URL.createObjectURL(file));
    }
  };
  
  return (
    <div className="relative w-[100%]">
      <div className="relative h-56 sm:h-64 md:h-72">
        <img
          src={bannerurl}
          alt="Banner"
          className="w-full h-full object-cover object-center"
        />

        <button className="absolute top-3 right-3 bg-gray-800 text-white p-2 rounded-full hover:bg-gray-600">
          <label htmlFor="banner-upload" className="cursor-pointer">
            <FaCamera size={20} />
          </label>
          <input
            type="file"
            id="banner-upload"
            accept="image/*"
            className="hidden"
            onChange={handleBannerChange}
          />
        </button>
      </div>

      <div className="relative px-4 pb-6 pt-16 sm:px-6 md:px-8">
        <div className="absolute left-6 top-[-2.5rem] sm:left-8 sm:top-[-3rem]">
          <img
            src={profileurl}
            alt="Channel Logo"
            className="w-24 h-24 sm:w-28 sm:h-28 object-cover rounded-full border-4 border-white shadow-md"
          />

          <button className="absolute bottom-1 right-1 bg-gray-800 text-white p-2 rounded-full hover:bg-gray-600">
            <label htmlFor="profile-upload" className="cursor-pointer">
              <FaCamera size={16} />
            </label>
            <input
              id="profile-upload"
              type="file"
              accept="image/*"
              className="hidden"
              onChange={handleProfileChange}
            />
          </button>
        </div>

        <div className="ml-0 pt-4 sm:ml-32 sm:pt-0">
          <h1 className="text-2xl font-bold text-gray-900">Rafid Jamil</h1>
          <p className="text-sm text-gray-600">1M subscribers</p>
          <p className="mt-2 max-w-2xl text-sm text-gray-700">
            This is a short description of the YouTube channel. It gives an
            overview of the content and what viewers can expect.
          </p>
          <button className="mt-4 bg-red-600 text-white py-2 px-4 rounded hover:bg-red-500">
            Subscribe
          </button>
        </div>
      </div>
    </div>
  );
};

export default Profile;
