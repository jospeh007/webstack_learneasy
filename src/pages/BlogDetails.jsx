import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { FaThumbsUp, FaComment, FaTag, FaUser, FaCalendar } from 'react-icons/fa';
import blogData from '../blogs.json';

const BlogDetails = () => {
  const { id } = useParams();
  const [blog, setBlog] = useState(null);
  const [comment, setComment] = useState("");

  useEffect(() => {
    const blogPost = blogData.find(post => post.id === parseInt(id));
    setBlog(blogPost);
  }, [id]);

  if (!blog) {
    return <div className="container mt-5">Loading...</div>;
  }

  const handleCommentSubmit = (e) => {
    e.preventDefault();
    if (comment.trim()) {
      const newComment = {
        author: "Anonymous User",
        date: new Date().toISOString().split('T')[0],
        content: comment
      };
      setBlog({...blog, comments: [...blog.comments, newComment]});
      setComment("");
    }
  };

  return (
    <section className="min-h-screen">
      <div className="relative h-96 font-bold flex items-center justify-center">
        <div className="absolute inset-0 bg-[url(https://cutesolution.com/html/techvio/assets/img/page-title-bg.jpg)] bg-cover bg-center"></div>
        <div className="absolute inset-0 bg-slate-950 opacity-50"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">{blog.title}</h2>
            <p className="text-lg text-gray-300"><Link className='hover:text-purple-500 transition-all duration-300' to="/">Home</Link> • Blog Details</p>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto">
          <div className='w-full justify-center flex'>
          <img src={blog.image} alt={blog.title} className=" h-96 object-cover rounded-lg shadow-lg mb-8" />
          </div>

          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center space-x-4">
              <span className="flex items-center text-gray-600"><FaUser className="mr-2" /> {blog.author}</span>
              <span className="flex items-center text-gray-600"><FaCalendar className="mr-2" /> {blog.postedOn}</span>
            </div>
            <div className="flex items-center space-x-4">
              <span className="flex items-center text-gray-600"><FaThumbsUp className="mr-2" /> {blog.likes} Likes</span>
              <span className="flex items-center text-gray-600"><FaComment className="mr-2" /> {blog.comments.length} Comments</span>
            </div>
          </div>

          <h1 className="text-4xl font-bold text-gray-800 mb-6">{blog.title}</h1>

          <p className="text-xl text-gray-700 mb-8">{blog.description}</p>

          <div className="prose max-w-none mb-12">
            <p>{blog.content}</p>
          </div>

          <div className="mb-8">
            <h3 className="text-2xl font-semibold mb-4">Tags:</h3>
            <div className="flex flex-wrap gap-2">
              {blog.tags.map((tag, index) => (
                <span key={index} className="px-3 py-1 bg-purple-100 text-purple-800 rounded-full text-sm font-semibold">
                  <FaTag className="inline mr-1" /> {tag}
                </span>
              ))}
            </div>
          </div>

          <div className="border-t border-gray-200 pt-8">
            <h3 className="text-2xl font-semibold mb-6">Comments ({blog.comments.length})</h3>
            <form className="mb-8" onSubmit={handleCommentSubmit}>
              <textarea
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                rows="4"
                placeholder="Write your comment..."
                value={comment}
                onChange={(e) => setComment(e.target.value)}
              ></textarea>
              <button
                type="submit"
                className="mt-4 px-6 py-2 bg-purple-600 text-white rounded-full font-semibold hover:bg-purple-700 transition-colors duration-300"
              >
                Post Comment
              </button>
            </form>
            <div className="space-y-6">
              {blog.comments.map((comment, index) => (
                <div key={index} className="flex space-x-4">
                  <img src={`https://via.placeholder.com/50?text=${comment.author.charAt(0)}`} alt={comment.author} className="w-12 h-12 rounded-full" />
                  <div>
                    <h4 className="font-semibold">{comment.author}</h4>
                    <p className="text-gray-600 text-sm mb-2">Posted on {comment.date}</p>
                    <p className="text-gray-700">{comment.content}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogDetails;
