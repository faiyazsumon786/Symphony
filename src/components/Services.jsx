import 'animate.css'; // For animation
import '../style.css'; // Custom styles for more control
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

const services = [
  { icon: '🌐', heading: 'Web Development', description: 'Create stunning and responsive websites tailored to your business needs. Engage your customers with a seamless online presence.' },
  { icon: '📱', heading: 'Mobile Apps', description: 'Design and develop high-performance mobile applications for both iOS and Android platforms. Enhance user experience with intuitive and engaging interfaces.' },
  { icon: '⚙️', heading: 'Software Solutions', description: 'Provide custom software solutions to automate your business processes. Increase efficiency with tailored applications designed for your unique requirements.' },
  { icon: '📈', heading: 'Digital Marketing', description: 'Boost your brand’s visibility with targeted digital marketing strategies. Leverage SEO, content marketing, and social media to drive traffic and conversions.' },
  { icon: '🔒', heading: 'Cybersecurity', description: 'Protect your digital assets with robust cybersecurity solutions. Safeguard your business from threats and vulnerabilities with advanced security measures.' },
  { icon: '💡', heading: 'Consulting Services', description: 'Receive expert advice and strategies to optimize your business operations. Benefit from industry insights and innovative solutions to drive growth and success.' },
];

const ServiceSection = () => {
  // Initialize AOS on component mount
  useEffect(() => {
    AOS.init({
      duration: 1000, // Duration of animations
      offset: 200, // Offset for when animations start
      once: true, // Whether animation should happen only once
    });
  }, []);

  return (
    <div className="bg-gradient-to-r from-gray-800 via-gray-700 to-gray-600 py-16">
      <div className="mx-auto px-4" style={{ maxWidth: '1320px' }}>
        <h2 className="text-5xl font-extrabold text-center text-white mb-12 tracking-wider uppercase">
          Our Services
        </h2>
        <div className="flex flex-wrap justify-center gap-12">
          {services.map((service, index) => (
            <div
              key={index}
              className="relative w-full max-w-sm bg-gray-900 rounded-3xl shadow-lg overflow-hidden transform transition-transform duration-500 group hover:scale-105 hover:shadow-[0_0_20px_6px_rgba(0,255,255,0.6)]"
              data-aos={index % 2 === 0 ? 'fade-right' : 'fade-left'} // Alternating animations for variety
            >
              <div className="absolute inset-0 bg-gradient-to-r from-gray-800 to-gray-600 opacity-50 group-hover:opacity-70 transition-opacity duration-500"></div>
              <div className="relative z-10 p-8 text-center">
                <div className="text-5xl mb-4 animate__animated animate__fadeIn animate__delay-1s">
                  {service.icon}
                </div>
                <h3 className="text-3xl font-bold text-white mb-4 animate__animated animate__fadeIn animate__delay-2s">
                  {service.heading}
                </h3>
                <p className="text-gray-300 mb-6 animate__animated animate__fadeIn animate__delay-3s">
                  {service.description}
                </p>
                <a
                  href="#learn-more"
                  className="inline-block px-6 py-3 text-lg text-white bg-teal-600 rounded-lg font-semibold transition-transform transform hover:scale-105 hover:bg-teal-700 shadow-lg hover:shadow-2xl animate__animated animate__fadeIn animate__delay-4s"
                >
                  Learn More
                </a>
              </div>
              <div className="absolute inset-0 border-4 border-transparent rounded-3xl group-hover:border-teal-400 transition-all duration-500"></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServiceSection;
