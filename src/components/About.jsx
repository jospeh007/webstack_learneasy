import { motion } from 'framer-motion';

const About = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 flex flex-col lg:flex-row items-center">
        <div className="lg:w-1/2 lg:pr-16">
          <h3 className="text-orange-500 font-semibold mb-2">ABOUT LEARN EASY</h3>
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            Empowering Educators Through Insightful Blogs
          </h2>
          <p className="text-gray-600 mb-6">
            Learn Easy is your go-to platform for educational blogs. We provide a space where teachers can find valuable insights, share experiences, and stay updated on the latest trends in education. Our content covers a wide range of topics to support and inspire educators in their teaching journey.
          </p>
          <div className="space-y-4 mb-8">
            <FeatureItem text="Diverse range of educational topics" />
            <FeatureItem text="Written by experienced educators" />
            <FeatureItem text="Regular updates with fresh content" />
          </div>
          <motion.a
            href="/blogs"
whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-purple-500 text-white px-6 py-3 rounded-md hover:bg-purple-600 transition duration-300"
          >
            Explore Blogs
          </motion.a>
        </div>
        <div className="lg:w-1/2 mt-10 lg:mt-0">
          <img
            src={"/reading-blog.jpeg"}
            alt="Teacher reading Learn Easy blog"
            className="rounded-lg shadow-xl"
          />
        </div>
      </div>
    </section>
  );
};

const FeatureItem = ({ text }) => {
  return (
    <div className="flex items-center">
      <svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
      </svg>
      <span className="text-gray-700">{text}</span>
    </div>
  );
};

export default About;
