import React, { useState } from 'react';
import PostCard from './PostCard';

const Grid = () => {
  const [posts, setPosts] = useState([
    { type: 'image', content: 'https://via.placeholder.com/300' },
    { type: 'video', content: 'https://sample-videos.com/video123/mp4/480/asdasdas.mp4' },
    { type: 'text', content: 'This is a text-only post!' },
  ]);

  const handleAddPost = (type, content) => {
    setPosts((prevPosts) => [...prevPosts, { type, content }]);
  };

  return (
    <div className="p-4 space-y-8">
      {/* Add Buttons to Add Different Types of Posts */}
      <div className="flex space-x-4">
        <button
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
          onClick={() => handleAddPost('image', 'https://via.placeholder.com/300')}
        >
          Add Image Post
        </button>
        <button
          className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
          onClick={() =>
            handleAddPost(
              'video',
              'https://sample-videos.com/video123/mp4/480/asdasdas.mp4'
            )
          }
        >
          Add Video Post
        </button>
        <button
          className="px-4 py-2 bg-purple-500 text-white rounded hover:bg-purple-600"
          onClick={() => handleAddPost('text', 'This is a new text-only post!')}
        >
          Add Text Post
        </button>
      </div>

      {/* Posts Grid */}
      <div className="grid grid-cols-3 gap-2 md:gap-4">
        {posts.map((post, index) => (
          <PostCard key={index} type={post.type} content={post.content} />
        ))}
      </div>
    </div>
  );
};

export default Grid;
