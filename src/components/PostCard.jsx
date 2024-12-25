import React from 'react';

const PostCard = ({ type, content }) => {
  return (
    <div className="relative bg-gray-100 rounded-lg overflow-hidden shadow-md">
      {/* Image Post */}
      {type === 'image' && (
        <img src={content} alt="Post" className="object-cover w-full h-full" />
      )}

      {/* Video Post */}
      {type === 'video' && (
        <video
          controls
          className="object-cover w-full h-full"
        >
          <source src={content} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      )}

      {/* Text-only Post */}
      {type === 'text' && (
        <div className="p-4 text-center text-gray-700">
          <p>{content}</p>
        </div>
      )}
    </div>
  );
};

export default PostCard;
