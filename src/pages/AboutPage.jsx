import { Link } from 'react-router-dom';
import About from '../components/About';

const AboutPage = () => {
  return (
    <section className="min-h-screen">
      {/* Top Banner Section */}
      <div className="relative h-96 font-bold flex items-center justify-center">
        <div className="absolute inset-0 bg-[url(https://cutesolution.com/html/techvio/assets/img/page-title-bg-2.jpg)] bg-cover bg-center"></div>
        <div className="absolute inset-0 bg-slate-950 opacity-50"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">About Us</h2>
            <p className="text-lg text-gray-300"><Link className='hover:text-purple-500 transition-all duration-300' to="/">Home</Link> • About</p>
          </div>
        </div>
      </div>

      {/* Owner Section */}
      <div className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="md:flex">
              <div className="md:flex-shrink-0">
                <img className="h-full w-full object-cover md:w-72" src="/yusuf_photo.png" alt="App Owner" />
              </div>
              <div className="p-8">
                <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">Founder & CEO</div>
                <h2 className="block mt-1 text-lg leading-tight font-medium text-black">Youssef Rhaimouni</h2>
                <p className="mt-2 text-gray-500">
                  I am a motivated and hardworking individual with a passion for learning and exploring new ideas. With a strong dedication to personal growth, I thrive in environments that challenge me to think creatively and push boundaries. I enjoy tackling complex problems, whether it&apos;s through collaboration or independent work, and I continuously seek out opportunities to expand my knowledge in diverse areas. My curiosity drives me to stay up-to-date with the latest trends and innovations, and I believe that education is a lifelong journey that fuels both personal and professional development.
                </p>
                <div className="mt-4">
                  <img src="/signature.svg" alt="Youssef Rhaimouni's Signature" className="h-28" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* About Component */}
      <About />
    </section>
  );
};

export default AboutPage;

