import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const SkillsSection = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Duration of animations
      offset: 200, // Offset for when animations start
      once: true, // Whether animation should happen only once
    });
  }, []);

  const skills = [
    { name: 'International ERP Software Implementation', percentage: 50, animationClass: 'animate-slide50', color: 'bg-blue-800', aos: 'fade-right' },
    { name: 'VAT Software', percentage: 70, animationClass: 'animate-slide70', color: 'bg-green-500', aos: 'fade-left' },
    { name: 'Custom Software Development', percentage: 60, animationClass: 'animate-slide60', color: 'bg-yellow-500', aos: 'fade-right' },
    { name: 'System Integration', percentage: 90, animationClass: 'animate-slide90', color: 'bg-blue-400', aos: 'fade-left' },
  ];

  return (
    <div className="py-16 bg-gray-100">
      <div className="mx-auto px-4" style={{ maxWidth: '1320px' }}>
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-8" data-aos="fade-up">
          Our Skill
        </h2>

        {skills.map((skill, index) => (
          <div className="mb-8" key={index} data-aos={skill.aos}>
            <h3 className="text-lg font-semibold text-gray-700 mb-2">{skill.name}</h3>
            <div className="w-full bg-gray-300 rounded-full h-6 overflow-hidden">
              <div
                className={`${skill.color} h-6 rounded-full flex items-center justify-end ${skill.animationClass}`}
              >
                <span className="text-white font-semibold pr-3">{skill.percentage}%</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SkillsSection;
