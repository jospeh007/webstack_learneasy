import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { signInWithPopup, signOut, onAuthStateChanged } from "firebase/auth";
import { Loader } from "lucide-react";
import { auth, provider } from "../../firebase";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [showDropdown, setShowDropdown] = useState(false);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleLogin = async () => {
    setLoading(true);
    try {
      await signInWithPopup(auth, provider);
    } catch (error) {
      console.error("Error signing in with Google", error);
    } finally {
      setLoading(false);
    }
  };

  const handleLogout = async () => {
    setLoading(true);
    try {
      await signOut(auth);
    } catch (error) {
      console.error("Error signing out", error);
    } finally {
      setLoading(false);
    }
  };

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  const closeDropdown = () => {
    setShowDropdown(false);
  };

  useEffect(() => {
    document.addEventListener("click", closeDropdown);
    return () => {
      document.removeEventListener("click", closeDropdown);
    };
  }, []);

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all font-bold duration-300 p-5 ${
        isScrolled ? "bg-white shadow-md" : "bg-transparent"
      }`}
    >
      <div className="px-10 mx-auto flex justify-between items-center">
        <Link
          to="/"
          className={`text-2xl font-bold ${
            isScrolled ? "text-gray-800" : "text-white"
          }`}
        >
          Learn Easy
        </Link>
        <div className="hidden lg:flex space-x-6">
          <NavItem href="/blogs" label="Blogs" isScrolled={isScrolled} />
          <NavItem
            href="/payment-and-plans"
            label="Payment and Plans"
            isScrolled={isScrolled}
          />
          <NavItem href="/about" label="About" isScrolled={isScrolled} />
          <NavItem href="/contact" label="Contact" isScrolled={isScrolled} />
          <NavItem href="/faq" label="FAQ" isScrolled={isScrolled} />
          <NavItem
            href="/newsletter"
            label="Newsletter"
            isScrolled={isScrolled}
          />
        </div>
        {loading ? (
          <div className="hidden lg:block">
            <Loader className="animate-spin text-purple-500" size={24} />
          </div>
        ) : user ? (
          <div className="hidden lg:block relative">
            <button
              onClick={(e) => {
                e.stopPropagation();
                toggleDropdown();
              }}
              className="bg-purple-500 text-white px-4 py-2 rounded-md hover:bg-purple-600 transition duration-300"
            >
              {user.displayName || user.email}
            </button>
            {showDropdown && (
              <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg">
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    handleLogout();
                    closeDropdown();
                  }}
                  className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                >
                  Logout
                </button>
              </div>
            )}
          </div>
        ) : (
          <button
            onClick={handleLogin}
            className="hidden lg:block bg-purple-500 text-white px-4 py-2 rounded-md hover:bg-purple-600 transition duration-300"
          >
            Login with Google
          </button>
        )}
        <button
          onClick={toggleMenu}
          className="lg:hidden text-white focus:outline-none"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </div>
      {isOpen && (
        <div className="lg:hidden fixed inset-0 z-50 overflow-y-auto bg-black bg-opacity-50 backdrop-blur-sm">
          <div className="relative bg-white bg-opacity-90 rounded-lg mx-4 my-8 p-4">
            <button
              onClick={toggleMenu}
              className="absolute top-2 right-2 text-gray-600 hover:text-gray-800 focus:outline-none"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <NavItem href="/blogs" label="Blogs" isScrolled={isScrolled} isMobile={true} />
              <NavItem
                href="/payment-and-plans"
                label="Payment and Plans"
                isScrolled={isScrolled}
                isMobile={true}
              />
              <NavItem href="/about" label="About" isScrolled={isScrolled} isMobile={true} />
              <NavItem
                href="/contact"
                label="Contact"
                isScrolled={isScrolled}
                isMobile={true}
              />
              <NavItem href="/faq" label="FAQ" isScrolled={isScrolled} isMobile={true} />
              <NavItem
                href="/newsletter"
                label="Newsletter"
                isScrolled={isScrolled}
                isMobile={true}
              />
            </div>
            <div className="px-2 pt-2 pb-3">
              {loading ? (
                <div className="flex justify-center">
                  <Loader className="animate-spin text-purple-500" size={24} />
                </div>
              ) : user ? (
                <>
                  <p className="text-gray-600 mb-2">
                    {user.displayName || user.email}
                  </p>
                  <button
                    onClick={handleLogout}
                    className="w-full bg-purple-500 text-white px-4 py-2 rounded-md hover:bg-purple-600 transition duration-300"
                  >
                    Logout
                  </button>
                </>
              ) : (
                <button
                  onClick={handleLogin}
                  className="w-full bg-purple-500 text-white px-4 py-2 rounded-md hover:bg-purple-600 transition duration-300"
                >
                  Login with Google
                </button>
              )}
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}

function NavItem({ href, label, isScrolled , isMobile }) {
  return (
    <Link
      to={href}
      className={`${
       isMobile ? "text-black" : isScrolled ? "text-black" : "text-white"
      }  hover:text-purple-500 transition duration-300 flex items-center px-3 py-2 rounded-md text-base font-medium`}
    >
      {label}
    </Link>
  );
}
