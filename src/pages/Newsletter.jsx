import { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaPaperPlane } from 'react-icons/fa';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Confetti from 'react-confetti';

const Newsletter = () => {
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
        position: "top-center",
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
    <section className="min-h-screen bg-gradient-to-br from-purple-600 to-indigo-800">
      {showConfetti && <Confetti />}
      <ToastContainer />
      <div className="relative h-96 font-bold flex items-center justify-center">
        <div className="absolute inset-0 bg-[url(https://cutesolution.com/html/techvio/assets/img/page-title-bg.jpg)] bg-cover bg-center"></div>
        <div className="absolute inset-0 bg-slate-950 opacity-50"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Newsletter</h2>
            <p className="text-lg text-gray-300">
              <Link className='hover:text-purple-500 transition-all duration-300' to="/">Home</Link> • Newsletter
            </p>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-20">
        <div className="max-w-5xl mx-auto bg-white rounded-lg shadow-2xl overflow-hidden">
          <div className="flex flex-col md:flex-row">
            <div className="md:w-1/2 p-8 md:p-12 bg-purple-100">
              <h3 className="text-3xl font-bold text-purple-800 mb-4">Stay Updated!</h3>
              <p className="text-lg text-gray-700 mb-6">
                Subscribe to our newsletter and get the latest updates on technology, AI, and innovation delivered straight to your inbox.
              </p>
              <div className="mb-8">
                <img
                  src="/newsletter.svg"
                  alt="Newsletter Illustration"
                  className="w-full h-auto"
                />
              </div>
              <div className="flex items-center text-purple-800">
                <FaPaperPlane className="mr-2" />
                <span>Join 10,000+ subscribers</span>
              </div>
            </div>
            <div className="md:w-1/2 p-8 md:p-12 bg-white">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="w-full px-4 py-3 border-2 border-purple-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300"
                    placeholder="you@example.com"
                  />
                </div>
                <div>
                  <button
                    type="submit"
                    disabled={isLoading}
                    className={`w-full px-6 py-3 bg-purple-600 text-white rounded-lg font-semibold hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 transition-all duration-300 transform hover:scale-105 ${isLoading ? 'opacity-75 cursor-not-allowed' : ''}`}
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
                </div>
              </form>
              <div className="mt-8 text-center">
                <p className="text-sm text-gray-600">
                  By subscribing, you agree to our{' '}
                  <Link to="/terms" className="text-purple-600 hover:underline">
                    Terms of Service
                  </Link>{' '}
                  and{' '}
                  <Link to="/privacy" className="text-purple-600 hover:underline">
                    Privacy Policy
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
