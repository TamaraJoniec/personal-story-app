import React, { useState } from 'react';

const MediaUpload = ({ onAddPost }) => {
  const [newPost, setNewPost] = useState({
    type: 'image',
    file: null,
    caption: '',
  });

  const handleFileChange = e => {
    setNewPost({ ...newPost, file: e.target.files[0] });
  };

  const handleCaptionChange = e => {
    setNewPost({ ...newPost, caption: e.target.value });
  };

  const handleTypeChange = e => {
    setNewPost({ ...newPost, type: e.target.value });
  };

  const handleAddPost = e => {
    e.preventDefault();

    if (newPost.file) {
      const newContent = {
        type: newPost.type,
        content: URL.createObjectURL(newPost.file),
        caption: newPost.caption,
      };

      onAddPost(newContent); // Call the callback passed from the parent
      setNewPost({ type: 'image', file: null, caption: '' }); // Reset form
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
          </select>
        </label>

        <label className='flex items-center space-x-2'>
          <span>File:</span>
          <input
            type='file'
            accept={newPost.type === 'image' ? 'image/*' : 'video/*'}
            onChange={handleFileChange}
            className='border border-gray-300 rounded-md'
          />
        </label>
      </div>

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

      <button type='submit' className='bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600'>
        Add Post
      </button>
    </form>
  );
};

export default MediaUpload;
