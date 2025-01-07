import React, { useState } from 'react';
import PostCard from './PostCard';
import Modal from './Modal';
import MediaUpload from './MediaUpload';

const Grid = () => {
  const [posts, setPosts] = useState([
    { type: 'image', content: 'https://via.placeholder.com/300', caption: 'A beautiful placeholder image!' },
    { type: 'video', content: 'https://sample-videos.com/video123/mp4/480/asdasdas.mp4', caption: 'A sample video demonstrating the video player.' },
    { type: 'text', content: 'This is a text-only post!' },
  ]);

  const [isPostModalOpen, setIsPostModalOpen] = useState(false); // For media upload modal
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

  const handleAddPost = newPost => {
    setPosts(prevPosts => [...prevPosts, newPost]);
    setIsPostModalOpen(false); // Close upload modal after adding a post
  };

  return (
    <div className='p-4 space-y-8'>
      {/* Button to Open Media Upload Modal */}
      <button onClick={() => setIsPostModalOpen(true)} className='bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600'>
        Create Post
      </button>

      {/* Posts Grid */}
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2'>
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
          text={selectedPost.type === 'text' ? selectedPost.content : null}
          caption={selectedPost.caption}
          isOpen={isOpen}
          onClose={closeModal}
        />
      )}

      {/* Media Upload Modal */}
      {isPostModalOpen && (
        <Modal isOpen={isPostModalOpen} onClose={() => setIsPostModalOpen(false)}>
          <MediaUpload onAddPost={handleAddPost} />
        </Modal>
      )}
    </div>
  );
};

export default Grid;
