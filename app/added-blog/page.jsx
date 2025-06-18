'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

const MyBlogs = () => {
  const [blogs, setBlogs] = useState([]);
  const router = useRouter();

  // Load blogs from localStorage on mount
  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem('userBlogs')) || [];
    setBlogs(saved);
  }, []);

  // Delete blog
  const handleDelete = (id) => {
    const confirmDelete = confirm("Are you sure you want to delete this blog?");
    if (!confirmDelete) return;

    const updated = blogs.filter(blog => blog.id !== id);
    localStorage.setItem('userBlogs', JSON.stringify(updated));
    setBlogs(updated);
  };

  // Go to edit page
  const handleUpdate = (id) => {
    router.push(`/edit-blog/${id}`);
  };

  return (
    <div className="max-w-5xl p-6 mx-auto">
      <h1 className="mb-6 text-2xl font-bold text-center">My Added Blogs</h1>

      {blogs.length === 0 ? (
        <p className="text-center text-gray-500">You haven’t added any blogs yet.</p>
      ) : (
        <div className="overflow-x-auto">
          <table className="w-full border border-gray-300">
            <thead className="bg-gray-100">
              <tr>
                <th className="p-3 border">Image</th>
                <th className="p-3 border">Title</th>
                <th className="p-3 border">Category</th>
                <th className="p-3 border">Date</th>
                <th className="p-3 border">Actions</th>
              </tr>
            </thead>
            <tbody>
              {blogs.map(blog => (
                <tr key={blog.id} className="text-center">
                  <td className="p-2 border">
                    <img src={blog.image} alt="img" className="object-cover w-20 rounded h-14" />
                  </td>
                  <td className="p-2 border">{blog.title}</td>
                  <td className="p-2 border">{blog.category}</td>
                  <td className="p-2 border">{new Date(blog.date).toLocaleDateString()}</td>
                  <td className="p-2 space-x-2 border">
                    <button
                      onClick={() => handleUpdate(blog.id)}
                      className="px-3 py-1 text-white bg-blue-500 rounded hover:bg-blue-600"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => handleDelete(blog.id)}
                      className="px-3 py-1 text-white bg-red-500 rounded hover:bg-red-600"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default MyBlogs;
