import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { clients } from '../data/clientsData'; 

const Clients = () => {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 8,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 3500,
    pauseOnHover: true,
    arrows: false,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 6 } },
      { breakpoint: 768, settings: { slidesToShow: 4 } },
      { breakpoint: 480, settings: { slidesToShow: 2 } },
    ],
  };

  return (
    <div className="bg-gradient-to-br from-gray-800 via-gray-700 to-gray-600 py-16">
      <h2 className="text-5xl font-extrabold text-center text-white mb-12 uppercase tracking-wider animate__animated animate__fadeInDown">
        Trusted by Global Leaders
      </h2>
      <Slider {...settings}>
        {clients.map((client, index) => (
          <div key={index} className="p-4">
            <a
              href={client.url}
              target="_blank"
              rel="noopener noreferrer"
              className="block relative group transition-transform duration-500 transform hover:scale-105"
            >
              <div className="relative bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-500 ease-in-out overflow-hidden">
                {/* Border Animation */}
                <div className="absolute inset-0 border-2 border-transparent group-hover:border-cyan-500 rounded-lg transition-all duration-500"></div>

                {/* Logo Image */}
                <img
                  src={client.img}
                  alt={`Client ${index}`}
                  className="relative z-10 w-full h-auto max-w-[120px] mx-auto rounded-md transition-transform duration-500 ease-in-out group-hover:scale-110 group-hover:opacity-90"
                />

                {/* Neon glow effect */}
                <div className="absolute inset-0 z-0 opacity-0 group-hover:opacity-100 transition duration-500 rounded-lg pointer-events-none group-hover:blur-md bg-cyan-500"></div>
              </div>
            </a>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Clients;
