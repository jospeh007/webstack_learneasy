import { useState } from 'react';
import { FaFacebookF, FaLinkedinIn, FaPhone, FaEnvelope, FaMapMarkerAlt, FaGithub } from 'react-icons/fa';
import DotBg from '../assets/dot.png';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Confetti from 'react-confetti';

const Footer = () => {
  const [email, setEmail] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [showConfetti, setShowConfetti] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);

    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
      setShowConfetti(true);
      toast.success('Successfully subscribed to the newsletter!', {
        position: "bottom-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      setEmail('');

      // Hide confetti after 5 seconds
      setTimeout(() => setShowConfetti(false), 5000);
    }, 2000);
  };

  return (
    <footer className="relative bg-[#0a1e3b] text-white py-16">
      {showConfetti && <Confetti />}
      <ToastContainer />
      <div
        className="absolute inset-0 bg-cover bg-center z-0 opacity-30"
        style={{backgroundImage: `url(${DotBg})`}}
      ></div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Newsletter Section */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-12">
          <div className="mb-6 md:mb-0">
            <h2 className="text-2xl font-bold mb-2">Sign Up for Our Newsletter</h2>
            <p className="text-gray-300">Stay updated with our latest educational insights and teaching tips.</p>
          </div>
          <form onSubmit={handleSubmit} className="flex w-full md:w-auto">
            <input
              type="email"
              placeholder="Enter Your Email"
              className="p-3 rounded-l-lg w-full md:w-64 text-gray-800"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <button
              type="submit"
              disabled={isLoading}
              className={`bg-purple-600 hover:bg-purple-700 text-white font-bold py-3 px-6 rounded-r-lg transition duration-300 ${isLoading ? 'opacity-75 cursor-not-allowed' : ''}`}
            >
              {isLoading ? (
                <span className="flex items-center justify-center">
                  <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Subscribing...
                </span>
              ) : (
                'Subscribe Now'
              )}
            </button>
          </form>
        </div>

        <hr className="border-gray-700 mb-12" />

        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <img src="/logo.png" alt="logo" className="h-24 mb-4" />
            <p className="text-gray-300 mb-4">
              Empowering educators with innovative teaching strategies and resources. Join our community to enhance your teaching skills and inspire your students.
            </p>
            <div className="flex space-x-4">
              <a href="https://web.facebook.com/Joseph.Ghaimouni0" target="_blank" className="bg-white text-blue-600 p-2 rounded-full hover:bg-blue-100 transition duration-300">
                <FaFacebookF />
              </a>
              <a href="https://github.com/jospeh007" target="_blank" className="bg-white text-blue-400 p-2 rounded-full hover:bg-blue-100 transition duration-300">
                <FaGithub />
              </a>
              <a href="https://www.linkedin.com/in/youssefrhaimouni/" target="_blank" className="bg-white text-blue-800 p-2 rounded-full hover:bg-blue-100 transition duration-300">
                <FaLinkedinIn />
              </a>
            </div>
          </div>

          {/* Plans */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Our Plans</h3>
            <ul className="space-y-2">
              <li><a href="/payment-and-plans" className="hover:text-purple-400 transition duration-300">Basic Plan</a></li>
              <li><a href="/payment-and-plans" className="hover:text-purple-400 transition duration-300">Pro Plan</a></li>
              <li><a href="/payment-and-plans" className="hover:text-purple-400 transition duration-300">Enterprise Plan</a></li>
            </ul>
          </div>

          {/* Useful Links */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Useful Links</h3>
            <ul className="space-y-2">
              {[
                'About',
                'Blogs',
                'Contact',
                'Payment and Plans',
                'FAQ',
                'Newsletter',
              ].map((link, index) => (
                <li key={index}><a href={`/${link.toLowerCase().replace(/\s+/g, '-')}`} className="hover:text-purple-400 transition duration-300">{link}</a></li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Contact Info</h3>
            <ul className="space-y-4">
              <li className="flex items-center">
                <FaPhone className="mr-3 text-purple-400" />
                <span>+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center">
                <FaEnvelope className="mr-3 text-purple-400" />
                <span>info@learneasy.com</span>
              </li>
              <li className="flex items-start">
                <FaMapMarkerAlt className="mr-3 mt-1 text-purple-400" />
                <span>123 Education Lane, Teaching City, 54321 USA</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 pt-8 border-t border-gray-700 flex flex-col md:flex-row justify-between items-center">
          <p>&copy; 2024 Learn Easy - All Rights Reserved.</p>
          <div className="mt-4 md:mt-0">
            <a href="#" className="mr-4 hover:text-purple-400 transition duration-300">Terms & Conditions</a>
            <a href="#" className="hover:text-purple-400 transition duration-300">Privacy Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
