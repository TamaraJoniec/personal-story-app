import React from 'react';

const Modal = ({ image, video, text, isOpen, onClose }) => {
  return (
    <div className={`fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center`}>
      <div className="bg-white p-4 rounded-lg">
        <button onClick={onClose}>Close</button>
        {image && <img src={image} alt="Modal content" />}
        {video && <video src={video} controls />}
        {text && <p>{text}</p>}
      </div>
    </div>
  );
};

export default Modal;
