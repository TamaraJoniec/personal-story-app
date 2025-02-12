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

  const handleDeletePost = id => {
    setPosts(posts.filter(post => post.id !== id));
  };

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
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2'>
        {posts.map((post, index) => (
          <div key={index} className='cursor-pointer' onClick={() => openModal(post)}>
            <PostCard key={index} type={post.type} content={post.content} onDelete={() => handleDeletePost(post.id)} />
          </div>
        ))}
      </div>

      {/* Modal */}
      {isOpen && selectedPost && (
        <Modal isOpen={isOpen} onClose={closeModal} type={selectedPost.type} content={selectedPost.content} caption={selectedPost.caption}>
          <div className='flex flex-col items-center'>
            {selectedPost.type === 'image' && (
              <img src={selectedPost.content} alt={selectedPost.caption} className='object-cover max-w-full max-h-[80vh] rounded-lg' />
            )}
          </div>
          <div className='flex flex-col items-center'>
            {selectedPost.type === 'video' && (
              <video width='750' height='500' controls className='object-cover max-w-full max-h-[80vh] rounded-lg'>
                <source src={selectedPost.content} alt={selectedPost.caption}></source>
              </video>
            )}
          </div>
          <div className='flex flex-col items-center'>
            {selectedPost.type === 'text' && <p className='object-cover max-w-full max-h-[80vh] rounded-lg'>{selectedPost.content}</p>}
          </div>
        </Modal>
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
