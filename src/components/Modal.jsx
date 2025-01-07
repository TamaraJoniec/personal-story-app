import React from 'react';

const Modal = ({ image, video, text, isOpen, onClose }) => {
  return (
    <div
      className={`border border-red-600 fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50 transition-all duration-300 ease-in-out ${
        isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
      }`}
    >
      <div className={`border border-black bg-white static flex justify-center p-10 rounded-lg`}>
        <div
          className={`border border-red-600 bg-white rounded-lg overflow-hidden shadow-lg max-w-sm transition-transform transform duration-300 ease-in-out ${
            isOpen ? 'scale-100' : 'scale-95'
          }`}
        >
          {/* Close Button */}
          <button onClick={onClose} className='relative cursor-pointer text-gray-100-500 z-1'>
            CLOSE
          </button>
          {/* Image or Video Content */}
          <div className='w-full h-full flex justify-center items-center'>
            {image && <img src={image} alt='Post' className='object-contain w-full h-full' />}
            {video && (
              <video controls className='object-contain w-64 h-64'>
                <source src={video} type='video/mp4' />
                Your browser does not support the video tag.
              </video>
            )}
            {!image && !video && text && (
              <div className='flex justify-center items-center object-contain p-4 text-center text-gray-700'>
                {' '}
                <p>{text}</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
