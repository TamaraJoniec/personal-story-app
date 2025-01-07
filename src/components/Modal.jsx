import React from 'react';

const Modal = ({ image, video, text, isOpen, onClose }) => {
  return (
    <div
      className={`border border-red-600 fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50 transition-all duration-300 ease-in-out ${
        isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
      }`}
    >
      <div className={`border border-black bg-white w-3/4 static flex justify-center p-10 rounded-lg`}>
        <div
          className={`border border-red-600 bg-white rounded-lg overflow-hidden shadow-lg max-w-sm w-full transition-transform transform duration-300 ease-in-out ${
            isOpen ? 'scale-100' : 'scale-95'
          }`}
        >
          {/* Close Button */}
          <button onClick={onClose} className='relative cursor-pointer text-red-500 z-1'>
            CLOSE
          </button>

          {/* Image or Video Content */}
          <div className='w-full h-full'>
            {image && <img src={image} alt='Post' className='object-cover w-full' />}
            {video && (
              <video controls className='object-cover w-full'>
                <source src={video} type='video/mp4' />
                Your browser does not support the video tag.
              </video>
            )}
            {/* Text Description */}
            {text && (
              <div className='p-4 text-center text-gray-700'>
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
