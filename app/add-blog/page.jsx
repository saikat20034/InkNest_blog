'use client';

import { useState } from "react";
import { useRouter } from "next/navigation";

const AddBlog = () => {
  const router = useRouter();
  const [blog, setBlog] = useState({
    title: '',
    description: '',
    category: 'Technology',
    image: '',
    author: 'Alex Bennett',
    author_img: '/profile_icon.png',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setBlog(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const stored = JSON.parse(localStorage.getItem('userBlogs')) || [];
    const newBlog = {
      ...blog,
      id: Date.now(),
      date: Date.now()
    };
    localStorage.setItem('userBlogs', JSON.stringify([newBlog, ...stored]));
    alert("Blog saved!");
    router.push("/"); // redirect to BlogList page
  };

  return (
    <div className="max-w-2xl p-6 mx-auto">
      <h1 className="mb-6 text-2xl font-bold text-center">Add New Blog</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          name="title"
          type="text"
          placeholder="Blog Title"
          value={blog.title}
          onChange={handleChange}
          required
          className="w-full p-2 border rounded"
        />
        <textarea
          name="description"
          placeholder="Blog Description"
          value={blog.description}
          onChange={handleChange}
          required
          className="w-full h-32 p-2 border rounded"
        />
        <select
          name="category"
          value={blog.category}
          onChange={handleChange}
          className="w-full p-2 border rounded"
        >
          <option value="Technology">Technology</option>
          <option value="Startup">Startup</option>
          <option value="Lifestyle">Lifestyle</option>
        </select>

        {/* Image URL Input */}
        <input
          name="image"
          type="url"
          placeholder="Paste Image URL"
          value={blog.image}
          onChange={handleChange}
          className="w-full p-2 border rounded"
        />

        {/* Image Preview */}
        {blog.image && (
          <div className="mt-3">
            <img
              src={blog.image}
              alt="Preview"
              className="object-cover w-full h-48 border rounded"
            />
          </div>
        )}

        <button
          type="submit"
          className="px-4 py-2 text-white bg-black rounded hover:bg-gray-800"
        >
          Save Blog
        </button>
      </form>
    </div>
  );
};

export default AddBlog;
