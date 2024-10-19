import { useState } from 'react';
import { Link } from 'react-router-dom';

const FaqPage = () => {
  const [openAccordion, setOpenAccordion] = useState(null);

  const toggleAccordion = (index) => {
    setOpenAccordion(openAccordion === index ? null : index);
  };

  const faqItems = [
    {
      question: "What topics do you cover in your blogs?",
      answer: "Our blogs cover a wide range of topics related to learning and teaching, including effective study techniques, educational technology, teaching strategies, and personal development tips for both students and educators."
    },
    {
      question: "How can I improve my learning skills?",
      answer: "Improving your learning skills involves adopting effective study habits, setting clear goals, and utilizing resources such as our blogs that provide insights and strategies tailored to different learning styles."
    },
    {
      question: "Can I contribute to your blog?",
      answer: "Yes! We welcome contributions from educators, students, and anyone passionate about learning. You can submit your articles or ideas through our contact page, and we'll review them for publication."
    },
    {
      question: "Do you offer any courses or workshops?",
      answer: "Currently, we focus on providing valuable blog content. However, we are exploring the possibility of offering online courses and workshops in the future. Stay tuned for updates!"
    },
    {
      question: "How often do you publish new content?",
      answer: "We strive to publish new blog posts weekly, ensuring that our readers have access to fresh and relevant content to support their learning journey."
    },
    {
      question: "Can I receive updates about new blog posts?",
      answer: "Absolutely! You can subscribe to our newsletter to receive updates about new blog posts, tips, and resources directly in your inbox."
    }
  ];

  return (
    <section className="min-h-screen">
      <div className="relative h-96 font-bold flex items-center justify-center">
        <div className="absolute inset-0 bg-[url(https://cutesolution.com/html/techvio/assets/img/page-title-bg-3.jpg)] bg-cover bg-center"></div>
        <div className="absolute inset-0 bg-slate-950 opacity-50"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Frequently Asked Questions</h2>
            <p className="text-lg text-gray-300"><Link className='hover:text-purple-500 transition-all duration-300' to="/">Home</Link> • FAQ</p>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-20">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h3 className="text-orange-500 font-semibold mb-2">GOT QUESTIONS?</h3>
            <h2 className="text-4xl font-bold text-gray-800">We&apos;ve Got Answers</h2>
          </div>
          <div className="space-y-4">
            {faqItems.map((item, index) => (
              <div key={index} className="border border-gray-200 rounded-lg overflow-hidden">
                <button
                  className="w-full px-6 py-4 text-left font-semibold bg-gray-50 hover:bg-gray-100 transition-colors duration-300 flex justify-between items-center"
                  onClick={() => toggleAccordion(index)}
                >
                  {item.question}
                  <span className={`transform transition-transform duration-300 ${openAccordion === index ? 'rotate-180' : ''}`}>
                    ▼
                  </span>
                </button>
                {openAccordion === index && (
                  <div className="px-6 py-4 bg-white">
                    <p>{item.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FaqPage;
