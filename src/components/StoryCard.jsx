import React from 'react';

const StoryCard = ({ image, name }) => {
  return (
    <div className="flex flex-col items-center space-y-2">
      <div className="w-16 h-16 rounded-full border-2 border-pink-500 overflow-hidden">
        <img src={image} alt={name} className="object-cover w-full h-full" />
      </div>
      <p className="text-sm text-gray-700">{name}</p>
    </div>
  );
};

export default StoryCard;
