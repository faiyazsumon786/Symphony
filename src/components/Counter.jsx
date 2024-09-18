import CountUp from 'react-countup';
import 'animate.css';
import { useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer'; // For scroll animations

const Counter = () => {
  const [startAnimation, setStartAnimation] = useState(false);
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  useEffect(() => {
    if (inView) {
      setStartAnimation(true);
    }
  }, [inView]);

  return (
    <div ref={ref} className="container mx-auto my-16 px-6">
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
        {/* Counter Item */}
        <div className={`bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white p-8 rounded-lg shadow-lg text-center transition-transform duration-500 hover:scale-105 ${startAnimation ? 'animate__animated animate__bounceIn' : ''}`}>
          <div className="text-5xl font-extrabold">
            {startAnimation && <CountUp end={260} duration={3} />}
          </div>
          <p className="mt-4 text-lg font-semibold">Total Clients</p>
        </div>

        {/* Counter Item */}
        <div className={`bg-gradient-to-r from-blue-400 to-cyan-500 text-white p-8 rounded-lg shadow-lg text-center transition-transform duration-500 hover:scale-105 ${startAnimation ? 'animate__animated animate__fadeInUp delay-100' : ''}`}>
          <div className="text-5xl font-extrabold">
            {startAnimation && <CountUp end={210} duration={3} />}
          </div>
          <p className="mt-4 text-lg font-semibold">VAT</p>
        </div>

        {/* Counter Item */}
        <div className={`bg-gradient-to-r from-green-400 to-teal-500 text-white p-8 rounded-lg shadow-lg text-center transition-transform duration-500 hover:scale-105 ${startAnimation ? 'animate__animated animate__fadeInUp delay-200' : ''}`}>
          <div className="text-5xl font-extrabold">
            {startAnimation && <CountUp end={40} duration={3} />}
          </div>
          <p className="mt-4 text-lg font-semibold">Sage</p>
        </div>

        {/* Counter Item */}
        <div className={`bg-gradient-to-r from-yellow-400 to-orange-500 text-white p-8 rounded-lg shadow-lg text-center transition-transform duration-500 hover:scale-105 ${startAnimation ? 'animate__animated animate__fadeInUp delay-300' : ''}`}>
          <div className="text-5xl font-extrabold">
            {startAnimation && <CountUp end={5} duration={3} />}
          </div>
          <p className="mt-4 text-lg font-semibold">HRM & Payroll</p>
        </div>

        {/* Counter Item */}
        <div className={`bg-gradient-to-r from-red-400 to-pink-500 text-white p-8 rounded-lg shadow-lg text-center transition-transform duration-500 hover:scale-105 ${startAnimation ? 'animate__animated animate__fadeInUp delay-400' : ''}`}>
          <div className="text-5xl font-extrabold">
            {startAnimation && <CountUp end={4} duration={3} />}
          </div>
          <p className="mt-4 text-lg font-semibold">PF, GF & TAX</p>
        </div>

        {/* Counter Item */}
        <div className={`bg-gradient-to-r from-gray-500 to-black text-white p-8 rounded-lg shadow-lg text-center transition-transform duration-500 hover:scale-105 ${startAnimation ? 'animate__animated animate__fadeInUp delay-500' : ''}`}>
          <div className="text-5xl font-extrabold">
            {startAnimation && <CountUp end={1} duration={3} />}
          </div>
          <p className="mt-4 text-lg font-semibold">FDR</p>
        </div>
      </div>
    </div>
  );
};

export default Counter;
