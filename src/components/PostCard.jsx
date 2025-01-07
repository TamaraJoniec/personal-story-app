import React from 'react';

const PostCard = ({ type, content }) => {
  return (
    <div className='relative bg-gray-200 rounded-lg overflow-hidden shadow-lg w-64 h-64 cursor-pointer flex justify-center items-center'>
      {/* Image Post */}
      {type === 'image' && <img src={content} alt='Post' className='object-contain w-full h-full' />}

      {/* Video Post */}
      {type === 'video' && (
        <video controls className='object-contain w-full h-full'>
          <source src={content} type='video/mp4' />
          Your browser does not support the video tag.
        </video>
      )}

      {/* Text-only Post */}
      {type === 'text' && (
        <div className='flex justify-center items-center object-contain p-4 text-center text-gray-700'>
          <p>{content}</p>
        </div>
      )}
    </div>
  );
};

export default PostCard;
