import 'animate.css'; // For animation
import '../style.css'; // Custom styles for more control

const features = [
  {
    image: 'https://symphonysofttech.com/wp-content/uploads/2020/10/Central-3.png',
    title: 'VAT Management Software',
    description: 'In the present market, there are no existences of any modern Value Added Tax (VAT) Accounting Software in...',
  },
  {
    image: 'https://symphonysofttech.com/wp-content/uploads/2000/03/OE-2.png',
    title: 'Data Security Management',
    description: 'Protect sensitive data with robust security measures and compliance with data protection regulations.',
  },
  {
    image: 'https://symphonysofttech.com/wp-content/uploads/2020/07/𝐒𝐚𝐠𝐞-𝟑𝟎𝟎-𝐏𝐫𝐨𝐣𝐞𝐜𝐭-𝐚𝐧𝐝-𝐉𝐨𝐛-𝐂𝐨𝐬𝐭𝐢𝐧𝐠.png',
    title: 'User Management',
    description: 'Manage users efficiently with advanced tools for access control, role assignment, and activity tracking.',
  },
];

const FeaturesSection = () => {
  return (
    <div className="py-16 bg-gradient-to-b from-gray-100 to-gray-300">
      <div className="container mx-auto px-6 md:px-10">
        <h2 className="text-5xl font-extrabold text-center text-gray-800 mb-16">
          Our Expertise
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {features.map((feature, index) => (
            <div
              key={index}
              className="relative group bg-white rounded-lg shadow-xl overflow-hidden transform transition-transform duration-500 hover:scale-105 animate__animated animate__fadeInUp"
            >
              {/* Image */}
              <div className="absolute inset-0">
                <img
                  src={feature.image}
                  alt={feature.title}
                  className="w-full h-full object-cover transition-transform duration-500 transform group-hover:scale-110 group-hover:opacity-90"
                />
              </div>

              {/* Hidden Text (Visible on Hover) */}
              <div className="relative z-10 p-8 flex flex-col justify-center items-center h-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-opacity-90 bg-white">
                <h3 className="text-3xl font-bold text-gray-900 mb-4">
                  {feature.title}
                </h3>
                <p className="text-gray-600 text-center mb-6 leading-relaxed">
                  {feature.description}
                </p>
                <a
                  href="#learn-more"
                  className="inline-block px-6 py-3 text-lg text-white bg-gradient-to-r from-teal-500 to-blue-600 rounded-lg font-semibold shadow-md hover:bg-gradient-to-r hover:from-teal-600 hover:to-blue-700 transform transition-all duration-300 hover:scale-105 hover:shadow-xl"
                >
                  Learn More
                </a>
              </div>

              {/* Border Effect */}
              <div className="absolute inset-0 border-4 border-transparent rounded-lg group-hover:border-teal-500 transition-all duration-500"></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FeaturesSection;
