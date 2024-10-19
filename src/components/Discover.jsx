import { motion } from 'framer-motion';

export default function DiscoverTopics() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h3 className="text-orange-500 font-semibold mb-2">EXPLORE OUR CONTENT</h3>
          <h2 className="text-4xl font-bold text-gray-800">Discover Educational Insights</h2>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          <TopicCard
            icon={<PedagogyIcon />}
            title="Ongoing Pedagogy"
            description="Explore the latest trends and methodologies in teaching practices, helping educators stay at the forefront of educational innovation."
          />
          <TopicCard
            icon={<TechnologyIcon />}
            title="Technology in the Classroom"
            description="Discover how modern technology is reshaping education and learn about tools that can enhance the learning experience for students."
          />
          <TopicCard
            icon={<TeacherDilemmasIcon />}
            title="Teacher Dilemmas"
            description="Gain insights into common challenges faced by educators and find practical solutions to navigate the complexities of teaching."
          />
        </div>
      </div>
    </section>
  )
}

function TopicCard({ icon, title, description }) {
  return (
    <motion.div
      className="bg-white p-6 rounded-lg shadow-md transition-all duration-300"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.1 }}
      whileHover={{
        scale: 1.03,
        boxShadow: "0 10px 20px rgba(0, 0, 0, 0.1)",
        y: -5
      }}
    >
      <div className="text-orange-500 mb-4">
        {icon}
      </div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-600 mb-4">{description}</p>
      <a
        href="/blogs"
        className="text-purple-600 hover:text-purple-800 transition-colors duration-300 inline-flex items-center"
      >
        Learn More
        <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M5 12h14M12 5l7 7-7 7" />
        </svg>
      </a>
    </motion.div>
  )
}

function PedagogyIcon() {
  return (
    <svg className="w-12 h-12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
      <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
    </svg>
  )
}

function TechnologyIcon() {
  return (
    <svg className="w-12 h-12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
      <line x1="8" y1="21" x2="16" y2="21" />
      <line x1="12" y1="17" x2="12" y2="21" />
    </svg>
  )
}

function TeacherDilemmasIcon() {
  return (
    <svg className="w-12 h-12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10" />
      <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" />
      <line x1="12" y1="17" x2="12.01" y2="17" />
    </svg>
  )
}
