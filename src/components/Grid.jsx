import React, { useState } from 'react';
import PostCard from './PostCard';
import Modal from './Modal';

const Grid = () => {
  const [posts, setPosts] = useState([
    { type: 'image', content: 'https://via.placeholder.com/300', caption: 'A beautiful placeholder image!' },
    { type: 'video', content: 'https://sample-videos.com/video123/mp4/480/asdasdas.mp4', caption: 'A sample video demonstrating the video player.' },
    { type: 'text', content: 'This is a text-only post!' },
  ]);

  const handleAddPost = (type, content, caption) => {
    setPosts(prevPosts => [...prevPosts, { type, content, caption }]);
  };

  const [isOpen, setIsOpen] = useState(false);
  const [selectedPost, setSelectedPost] = useState(null);

  const openModal = post => {
    setSelectedPost(post);
    setIsOpen(true);
  };

  const closeModal = () => {
    setSelectedPost(null);
    setIsOpen(false);
  };

  return (
    <div className='p-4 space-y-8'>
      {/* Posts Grid */}
      <div className='grid grid-cols-3 gap-2 md:gap-4'>
        {posts.map((post, index) => (
          <div key={index} className='cursor-pointer' onClick={() => openModal(post)}>
            <PostCard key={index} type={post.type} content={post.content} />
          </div>
        ))}
      </div>

      {/* Modal */}
      {selectedPost && (
        <Modal
          image={selectedPost.type === 'image' ? selectedPost.content : null}
          video={selectedPost.type === 'video' ? selectedPost.content : null}
          caption={selectedPost.caption}
          text={selectedPost.text}
          isOpen={isOpen}
          onClose={closeModal}
        />
      )}
    </div>
  );
};

export default Grid;
