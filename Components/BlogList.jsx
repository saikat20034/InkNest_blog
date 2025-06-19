'use client';

import { useEffect, useState } from "react";
import { blog_data as defaultBlogs } from "@/Assets/assets";
import BlogItem from "./BlogItem";
import AOS from "aos";
import "aos/dist/aos.css";

const categories = ['All', 'Technology', 'Startup', 'Lifestyle'];
const itemsPerPage = 8;

const BlogList = () => {
  const [menu, setMenu] = useState('All');
  const [currentPage, setCurrentPage] = useState(1);
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    AOS.init({ duration: 1000 });

    const localBlogs = JSON.parse(localStorage.getItem("userBlogs")) || [];
    const merged = [...localBlogs, ...defaultBlogs];
    setBlogs(merged);
  }, []);

  const filteredBlogs = menu === 'All'
    ? blogs
    : blogs.filter(item => item.category === menu);

  const totalPages = Math.ceil(filteredBlogs.length / itemsPerPage);
  const paginatedBlogs = filteredBlogs.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const changePage = (pageNum) => {
    if (pageNum >= 1 && pageNum <= totalPages) {
      setCurrentPage(pageNum);
      window.scrollTo({ top: 400, behavior: 'smooth' });
    }
  };

  const getShortDescription = (text) => {
    const words = text.split(" ");
    return words.slice(0, 5).join(" ") + (words.length > 50 ? "..." : "");
  };

  return (
    <section className="px-4 py-12 text-gray-800">
      {/* Filter Buttons */}
      <div className="flex flex-wrap justify-center gap-4 mb-10" data-aos="fade-up">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => {
              setMenu(cat);
              setCurrentPage(1);
            }}
            className={`px-4 py-2 rounded-full border font-mono text-sm md:text-base transition ${
              menu === cat
                ? 'bg-black text-white border-black shadow-lg'
                : 'bg-white text-black border-gray-300 hover:bg-gray-100'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Blog Grid */}
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {paginatedBlogs.length > 0 ? (
          paginatedBlogs.map((item, index) => (
            <div data-aos="fade-up" key={item.id || index}>
              <BlogItem
                id={item.id}
                image={item.image}
                title={item.title}
                category={item.category}
                description={getShortDescription(item.description)}
              />
            </div>
          ))
        ) : (
          <p className="font-mono text-center text-gray-500 col-span-full">No blogs found.</p>
        )}
      </div>

      {/* Pagination */}
      {totalPages > 1 && (
        <div className="flex items-center justify-center gap-3 mt-12" data-aos="fade-up">
          <button
            onClick={() => changePage(currentPage - 1)}
            disabled={currentPage === 1}
            className="px-3 py-1 border rounded hover:bg-gray-100 disabled:opacity-50"
          >
            Prev
          </button>

          {[...Array(totalPages)].map((_, i) => (
            <button
              key={i}
              onClick={() => changePage(i + 1)}
              className={`px-3 py-1 border rounded ${
                currentPage === i + 1 ? 'bg-black text-white' : 'hover:bg-gray-100'
              }`}
            >
              {i + 1}
            </button>
          ))}

          <button
            onClick={() => changePage(currentPage + 1)}
            disabled={currentPage === totalPages}
            className="px-3 py-1 border rounded hover:bg-gray-100 disabled:opacity-50"
          >
            Next
          </button>
        </div>
      )}
    </section>
  );
};

export default BlogList;
