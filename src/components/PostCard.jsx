import React from 'react';
import { FaPlayCircle, FaImage, FaFont, FaTrash } from 'react-icons/fa';

const PostCard = ({ type, content, onDelete }) => {
  if (!content) return null;

  return (
    <div className='relative bg-gray-200 rounded-lg overflow-hidden shadow-lg w-full h-full aspect-square cursor-pointer flex justify-center items-center'>
      {/* Delete Button */}
      <button onClick={onDelete} className='absolute top-2 right-2 text-white bg-red-500 hover:bg-red-700 rounded-full p-2 z-10'>
        <FaTrash />
      </button>

      {/* Image Post */}
      {type === 'image' && (
        <div className='relative w-full h-full'>
          <img src={content} alt='Post' className='object-contain w-full h-full' />
          <FaImage className='absolute text-white text-4xl opacity-75' style={{ top: '10%', right: '10%' }} />
        </div>
      )}

      {/* Video Post */}
      {type === 'video' && (
        <div className='flex justify-center items-center object-contain p-4 text-center text-gray-700'>
          <video className='object-contain w-full h-full'>
            <source src={content} type='video/mp4' />
            Your browser does not support the video tag.
          </video>
          <FaPlayCircle className='absolute text-white text-4xl opacity-75' style={{ top: '10%', right: '10%' }} />
        </div>
      )}

      {/* Text-only Post */}
      {type === 'text' && (
        <div className='flex justify-center items-center object-contain p-4 text-center text-gray-700'>
          <p>{content}</p>
          <FaFont className='absolute text-white text-4xl opacity-75' style={{ top: '10%', right: '10%' }} />
        </div>
      )}
    </div>
  );
};

export default PostCard;
