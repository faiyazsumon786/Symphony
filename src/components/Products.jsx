import 'animate.css'; // For animation
import '../style.css'; // Custom styles for more control
import { useInView } from 'react-intersection-observer';

const products = [
  { img: 'https://symphonysofttech.com/wp-content/uploads/2020/07/SageBaner.jpg', heading: 'Shampan VAT', description: 'Shampan VAT software is for processing your VAT through Purchase and Sales transaction of your raw materials and finish goods. The Shampan VAT software is developed as per VAT Acts of National Board of Revenue(NBR)' },
  { img: 'https://symphonysofttech.com/wp-content/uploads/2020/07/GL.png', heading: 'Sage 300 ERP', description: 'Sage 300 ERP offers ERP software to give you unprecedented flexibility to select from a robust suite of modules, comprehensive customization and scalability, and instant, seamless integration to a full set of end-to-end business' },
  { img: 'https://symphonysofttech.com/wp-content/uploads/2020/07/GL-Con.jpg', heading: 'Shampan HRM and Payroll', description: 'It provides a set of powerful human resource management functionalites to automate the employee management, recruitment, training , leave tracking, benefit planning, payroll calculation and performance evaluation.' },
  { img: 'https://symphonysofttech.com/wp-content/uploads/2019/04/about-img3-1-1-1-1.jpg', heading: 'Shampan PF & GF', description: 'Shampan PF & Gratuity is integrated software to keep track on the Provident Fund Investment/Details etc. It has covered practically all the modules that a company looks for in a Provident Fund Management Software.' },
  { img: 'https://symphonysofttech.com/wp-content/uploads/2019/04/about-img2-1-1-1-1.jpg', heading: 'Shampan TAX', description: 'TAX includes features like Employee Information, Salary Breakdown, TAX Slab by Area/Gender wise. Moreover there are reports like Monthly / Periodically TAX Statement, Monthly / Periodically TAX Return.' },
  { img: 'https://symphonysofttech.com/wp-content/uploads/2020/10/Home-Page-2.jpg', heading: 'Shampan FDR', description: 'FDR Accounts Manage, FDR Profit Manage, Scenario of FDR condition, Maturity list, Voucher generation, All required reports to manage FDR, Multi FDR in single bank account facility, FDR Ledger, Bank Statement Summary' },
];

const ProductSection = () => {
  const { ref: sectionRef, inView: isInView } = useInView({ triggerOnce: true });

  return (
    <div ref={sectionRef} className={`bg-gradient-to-r from-blue-800 via-teal-700 to-teal-500 py-16 ${isInView ? 'animate__animated animate__fadeIn' : ''}`}>
      <h2 className={`text-5xl font-extrabold text-center text-white mb-12 tracking-wider uppercase ${isInView ? 'animate__animated animate__fadeIn' : ''}`}>
        Our Premium Products
      </h2>
      <div className="flex flex-wrap justify-center gap-12">
        {products.map((product, index) => (
          <div key={index} className={`relative max-w-md bg-gray-900 rounded-2xl shadow-lg overflow-hidden transition-transform transform hover:scale-105 hover:shadow-xl hover:shadow-teal-600 ${isInView ? 'animate__animated animate__fadeIn animate__delay-1s' : ''}`}>
            <div className="absolute inset-0 bg-gradient-to-r from-teal-400 to-teal-600 opacity-50 group-hover:opacity-70 transition-opacity duration-500"></div>
            <div className="relative z-10 p-6">
              <div className="relative overflow-hidden rounded-lg">
                <img src={product.img} alt={product.heading} className="w-full h-56 object-cover rounded-lg transition-transform duration-500 group-hover:scale-110" />
              </div>
              <h3 className="text-3xl font-bold text-white mt-4">{product.heading}</h3>
              <p className="text-gray-300 mt-2">{product.description}</p>
              <a href="#learn-more" className="inline-block px-6 py-3 text-lg text-white bg-teal-600 rounded-lg font-semibold mt-4 transition-transform transform hover:scale-105 hover:bg-teal-700 hover:shadow-lg hover:shadow-teal-500">
                Learn More
              </a>
            </div>
            <div className="absolute inset-0 border-4 border-transparent rounded-lg group-hover:border-teal-400 transition-all duration-500"></div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductSection;
