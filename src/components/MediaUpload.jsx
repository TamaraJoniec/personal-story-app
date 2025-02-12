import React, { useState } from 'react';

const MediaUpload = ({ onAddPost }) => {
  const [newPost, setNewPost] = useState({
    type: 'image',
    file: null,
    caption: '',
    text: '',
  });

  const handleFileChange = e => {
    setNewPost({ ...newPost, file: e.target.files[0] });
  };

  const handleCaptionChange = e => {
    setNewPost({ ...newPost, caption: e.target.value });
  };

  const handleTypeChange = e => {
    setNewPost({ ...newPost, type: e.target.value, file: null, text: '' });
  };

  const handleTextChange = e => {
    setNewPost({ ...newPost, text: e.target.value });
  };

  const handleAddPost = e => {
    e.preventDefault();

    if (newPost.file) {
      const newContent = {
        type: newPost.type,
        content: newPost.type === 'text' ? newPost.text : URL.createObjectURL(newPost.file),
        caption: newPost.caption,
      };

      onAddPost(newContent); // Call the callback passed from the parent
      setNewPost({ type: 'image', file: null, caption: '', text: '' }); // Reset form
    }
  };

  return (
    <form onSubmit={handleAddPost} className='space-y-4 p-4 border border-gray-300 rounded-md'>
      <div className='flex space-x-4'>
        <label className='flex items-center space-x-2'>
          <span>Type:</span>
          <select value={newPost.type} onChange={handleTypeChange} className='border border-gray-300 rounded-md p-1'>
            <option value='image'>Image</option>
            <option value='video'>Video</option>
            <option value='text'>Text</option>
          </select>
        </label>

        {newPost.type !== 'text' && (
          <label className='flex items-center space-x-2'>
            <span>File:</span>
            <input
              type='file'
              accept={newPost.type === 'image' ? 'image/*' : 'video/*'}
              onChange={handleFileChange}
              className='border border-gray-300 rounded-md'
            />
          </label>
        )}
      </div>

      {newPost.type === 'text' && (
        <label className='block'>
          <span>Text:</span>
          <textarea
            type='text'
            value={newPost.text}
            onChange={handleTextChange}
            className='w-full border border-gray-300 rounded-md p-2 mt-1'
            placeholder='Enter your text'
          />
        </label>
      )}

      {(newPost.type === 'image' || newPost.type === 'video') && ( 
      <label className='block'>
        <span>Caption:</span>
        <input
          type='text'
          value={newPost.caption}
          onChange={handleCaptionChange}
          className='w-full border border-gray-300 rounded-md p-2 mt-1'
          placeholder='Enter a caption'
        />
      </label>
      )}

      <button type='submit' className='bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600'>
        Add Post
      </button>
    </form>
  );
};

export default MediaUpload;
