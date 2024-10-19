import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const testimonials = [
  {
    id: 1,
    content: "Learn Easy has transformed my teaching approach. The blogs are insightful and directly applicable to my classroom.",
    name: "Saabir al-Obeid",
    location: "Turkey",
    avatar: "https://i.pravatar.cc/130"
  },
  {
    id: 2,
    content: "As a new teacher, I found Learn Easy to be a goldmine of information. The diverse range of topics have helped me navigate my first year with confidence.",
    name: "Zahra Burnett",
    location: "United States",
    avatar: "https://i.pravatar.cc/200"
  },
  {
    id: 3,
    content: "The quality of content on Learn Easy is outstanding. It's clear that the articles are written by experienced educators who understand our challenges.",
    name: "Stevie Wills",
    location: "Germany",
    avatar: "https://i.pravatar.cc/100"
  },
];

const TestimonialCard = ({ content, name, location, avatar }) => (
  <div className="bg-white p-6 rounded-lg shadow-lg mx-2 my-4 flex flex-col h-[17rem]">
    <div className="flex justify-center mb-4">
      {[...Array(5)].map((_, i) => (
        <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
    <p className="text-gray-600 mb-4 text-center flex-grow">{content}</p>
    <div className="flex items-center justify-center mt-auto">
      <img src={avatar} alt={name} className="w-12 h-12 rounded-full mr-4 object-cover" />
      <div>
        <h4 className="font-semibold">{name}</h4>
        <p className="text-gray-500">{location}</p>
      </div>
    </div>
  </div>
);

const Testimonial = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-2">Our Testimonials</h2>
        <h3 className="text-xl text-center text-gray-600 mb-8">What Our Users Say</h3>
        <Slider {...settings}>
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="px-2">
              <TestimonialCard {...testimonial} />
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default Testimonial;
