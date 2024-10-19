import { useState } from 'react';
import { FaUser, FaCalendarAlt, FaArrowRight } from 'react-icons/fa';
import blogData from '../blogs.json';

const BlogCard = ({ blog }) => (
  <div className="bg-white rounded-lg shadow-md overflow-hidden">
    <img src={blog.image} alt={blog.title} className="w-full h-48 object-cover" />
    <div className="p-4">
      <div className="flex items-center text-sm text-gray-600 mb-2">
        <FaUser className="mr-2" />
        <span>{blog.author}</span>
        <FaCalendarAlt className="ml-4 mr-2" />
        <span>{blog.date}</span>
      </div>
      <h3 className="text-xl font-semibold mb-2">{blog.title}</h3>
      <p className="text-gray-700 mb-4">{blog.excerpt}</p>
      <a href={`/blog/${blog.id}`} className="text-purple-600 hover:text-purple-800 flex items-center">
        Read More <FaArrowRight className="ml-2" />
      </a>
    </div>
  </div>
);

const Blogs = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const blogsPerPage = 3;

  const indexOfLastBlog = currentPage * blogsPerPage;
  const indexOfFirstBlog = indexOfLastBlog - blogsPerPage;
  const currentBlogs = blogData.slice(indexOfFirstBlog, indexOfLastBlog);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-2">BLOGS</h2>
        <h3 className="text-3xl font-semibold text-center mb-8">Recent Blog</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {currentBlogs.map((blog) => (
            <BlogCard key={blog.id} blog={blog} />
          ))}
        </div>
        <div className="flex justify-center mt-8">
          {Array.from({ length: Math.ceil(blogData.length / blogsPerPage) }).map((_, index) => (
            <button
              key={index}
              onClick={() => paginate(index + 1)}
              className={`mx-1 px-3 py-1 rounded ${
                currentPage === index + 1 ? 'bg-purple-600 text-white' : 'bg-gray-200'
              }`}
            >
              {index + 1}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blogs;