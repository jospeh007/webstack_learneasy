import { Facebook, Linkedin, Github } from 'lucide-react'
import Wave from "../assets/wave.png"
import BlogIllustration from "../assets/blog.svg"

export default function HeroSection() {
  return (
    <div className="min-h-screen pt-20 relative overflow-hidden" style={{ background: 'linear-gradient(to bottom, #370b6f, #00429b, #006dba, #0095ce, #2dbcdc)' }}>
      <div className="px-10 mx-auto py-5 lg:py-20 relative z-10">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 text-white">
            <div className="mb-8 flex space-x-4">
              <SocialIcon Icon={Facebook} target="_blank" href="https://web.facebook.com/Joseph.Ghaimouni0" />
              <SocialIcon Icon={Linkedin} target="_blank" href="https://www.linkedin.com/in/youssefrhaimouni/" />
              <SocialIcon Icon={Github} target="_blank" href="https://github.com/jospeh007" />
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
             Welcome To Learn Easy
            </h1>
            <p className="text-lg mb-8 text-gray-300">
              Discover innovative teaching methods and insights on our blog.
              Empowering educators and students with practical tips for effective learning.
            </p>
            <div className="flex space-x-4">
              <a href="/blogs" className="bg-white text-blue-900 px-6 py-3 rounded-md font-semibold hover:bg-gray-200 transition duration-300">
                Our blogs
              </a>
              <a href="/contact" className="bg-purple-600 text-white px-6 py-3 rounded-md font-semibold hover:bg-purple-700 transition duration-300">
                Contact Us
              </a>
            </div>
          </div>
          <div className="md:w-1/2 mt-12 md:mt-0">
            <img
              src={BlogIllustration}
              alt="IT Solutions Illustration"
              width={600}
              height={400}
              className="w-full h-auto"
            />
          </div>
        </div>
      </div>
      <img
        src={Wave}
        alt="Wave Background"
        width={1920}
        height={200}
        className="absolute -bottom-10 left-0 w-full"
      />
    </div>
  )
}

function SocialIcon({ Icon, href }) {
  return (
    <a href={href} className="bg-blue-800 p-2 rounded-full hover:bg-blue-700 transition duration-300">
      <Icon className="w-5 h-5" />
    </a>
  )
}