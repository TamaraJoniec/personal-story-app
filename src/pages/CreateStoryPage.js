const CreateStoryPage = () => {
    return (
      <div className="container mx-auto p-4">
        <h1 className="text-3xl mb-4">Create a New Story</h1>
        <form>
          <label className="block mb-2">Title:</label>
          <input type="text" className="border p-2 w-full mb-4" placeholder="Story Title" />
          <label className="block mb-2">Content:</label>
          <textarea className="border p-2 w-full mb-4" placeholder="Tell your story..." />
          <button className="bg-blue-500 text-white p-2">Submit</button>
        </form>
      </div>
    );
  };
  
  export default CreateStoryPage;
  