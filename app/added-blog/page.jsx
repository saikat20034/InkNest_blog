'use client';

import { useEffect, useState } from 'react';

const MyBlogs = () => {
  const [blogs, setBlogs] = useState([]);
  const [editId, setEditId] = useState(null);
  const [editedBlog, setEditedBlog] = useState({});

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem('userBlogs')) || [];
    setBlogs(saved);
  }, []);

  const handleDelete = (id) => {
    const confirmDelete = confirm("Are you sure you want to delete this blog?");
    if (!confirmDelete) return;
    const updated = blogs.filter(blog => blog.id !== id);
    localStorage.setItem('userBlogs', JSON.stringify(updated));
    setBlogs(updated);
  };

  const handleEditClick = (blog) => {
    setEditId(blog.id);
    setEditedBlog({ ...blog });
  };

  const handleEditChange = (e) => {
    const { name, value } = e.target;
    setEditedBlog(prev => ({ ...prev, [name]: value }));
  };

  const handleSave = () => {
    const updatedBlogs = blogs.map(blog => blog.id === editId ? editedBlog : blog);
    localStorage.setItem('userBlogs', JSON.stringify(updatedBlogs));
    setBlogs(updatedBlogs);
    setEditId(null);
    setEditedBlog({});
  };

  const handleCancel = () => {
    setEditId(null);
    setEditedBlog({});
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
              {blogs.map((blog) => (
                <tr key={blog.id} className="text-center">
                  <td className="p-2 border">
                    <img src={blog.image} alt="img" className="object-cover w-20 rounded h-14" />
                  </td>
                  <td className="p-2 border">
                    {editId === blog.id ? (
                      <input
                        name="title"
                        value={editedBlog.title}
                        onChange={handleEditChange}
                        className="p-1 border rounded"
                      />
                    ) : (
                      blog.title
                    )}
                  </td>
                  <td className="p-2 border">
                    {editId === blog.id ? (
                      <input
                        name="category"
                        value={editedBlog.category}
                        onChange={handleEditChange}
                        className="p-1 border rounded"
                      />
                    ) : (
                      blog.category
                    )}
                  </td>
                  <td className="p-2 border">
                    {new Date(blog.date).toLocaleDateString()}
                  </td>
                  <td className="p-2 space-x-2 border">
                    {editId === blog.id ? (
                      <>
                        <button
                          onClick={handleSave}
                          className="px-3 py-1 text-white bg-green-500 rounded hover:bg-green-600"
                        >
                          Save
                        </button>
                        <button
                          onClick={handleCancel}
                          className="px-3 py-1 text-white bg-gray-500 rounded hover:bg-gray-600"
                        >
                          Cancel
                        </button>
                      </>
                    ) : (
                      <>
                        <button
                          onClick={() => handleEditClick(blog)}
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
                      </>
                    )}
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
