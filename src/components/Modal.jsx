import React from 'react';

const Modal = ({ image, video, text, caption, children, isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div
      className={`border fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50 transition-all duration-300 ease-in-out ${
        isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
      }`}
    >
      <div className={`border border-black bg-white static flex justify-center p-10 rounded-lg`}>
        <div
          className={`bg-white rounded-lg overflow-hidden shadow-lg min-w-64 min-h-64 relative transition-transform transform duration-300 ease-in-out ${
            isOpen ? 'scale-100' : 'scale-95'
          }`}
        >
          {/* Close Button */}
          <button onClick={onClose} className='absolute top-2 right-2 text-gray-500 hover:text-black z-10'>
            ✕
          </button>

          {/* Media Content */}
          {children ? (
            children
          ) : (
            <div className='w-full h-full flex flex-col justify-center items-center'>
              {image && <img src={image} alt='Post' className='object-contain w-full h-full' />}
              {video && (
                <video controls className='object-contain w-full h-full'>
                  <source src={video} type='video/mp4' />
                  Your browser does not support the video tag.
                </video>
              )}
              {!image && !video && text && <p className='text-center p-4'>{text}</p>}
              {caption && <div className='p-4 border-t border-gray-200 text-gray-600 text-sm'>{caption}</div>}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Modal;
