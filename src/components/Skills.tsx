import React, { useRef } from 'react';
import { useInView } from '../hooks/useInView';

interface Skill {
  name: string;
  icon: string;
}

const Skills: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { threshold: 0.1 });

  const skills: Skill[] = [
    { name: 'HTML', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg' },
    { name: 'CSS', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg' },
    { name: 'JavaScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' },
    { name: 'React.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
    { name: 'Node.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg' },
    { name: 'Tailwind CSS', icon: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSDKn3vA2YUbXzN0ZC3gALWJ08gJN-Drl15w&s' },
    { name: 'Bootstrap', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg' },
    { name: 'PHP', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg' },
    { name: 'Laravel', icon: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjC_ZlefL3y8Jp9-zM1jW-UlUZTE3gd6rQmQ&s' },
    { name: 'MySQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg' },
    { name: 'SQLite', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sqlite/sqlite-original.svg' },
    { name: 'Git', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg' },
    { name: 'Python', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg' },
    { name: 'Flask', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flask/flask-original.svg' },
    { name: 'MongoDB', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg' },
    { name: 'Firebase', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg' },
    { name: 'IoT', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/arduino/arduino-original.svg' },
    { name: 'Monitoring', icon: 'https://logowik.com/content/uploads/images/black-monitoring803.logowik.com.webp' },
    { name: 'Wiring', icon: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEurRO7jHmyBh_2VURcTg1mQ8YxalwVu-stQ&s' },
    { name: 'UI/UX', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg' },
    { name: 'MS Office', icon: 'https://upload.wikimedia.org/wikipedia/commons/0/0c/Microsoft_Office_logo_%282013%E2%80%932019%29.svg' },
  ];

  return (
    <section 
      id="skills" 
      ref={sectionRef}
      className="py-20 sm:py-24 bg-gray-50 dark:bg-gray-800 relative overflow-hidden"
    >
      {/* Background elements */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-primary-300 dark:bg-primary-500 rounded-full mix-blend-multiply dark:mix-blend-color filter blur-3xl opacity-20"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-secondary-300 dark:bg-secondary-500 rounded-full mix-blend-multiply dark:mix-blend-color filter blur-3xl opacity-20"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className={`text-3xl sm:text-4xl font-bold mb-4 transition-all duration-700 transform ${
            isInView ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}>
            Skills & <span className="text-primary-500">Technologies</span>
          </h2>
          <div className={`w-20 h-1 bg-gradient-to-r from-primary-500 to-secondary-500 mx-auto mb-8 transition-all duration-700 delay-100 ${
            isInView ? 'w-20 opacity-100' : 'w-0 opacity-0'
          }`}></div>
          <p className={`max-w-2xl mx-auto text-gray-700 dark:text-gray-300 transition-all duration-700 delay-200 ${
            isInView ? 'opacity-100' : 'opacity-0'
          }`}>
            Technologies and tools I work with
          </p>
        </div>

        <div className={`grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-8 transition-all duration-700 delay-300 ${
          isInView ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          {skills.map((skill, index) => (
            <div
              key={skill.name}
              className="flex flex-col items-center group"
              style={{ transitionDelay: `${index * 50}ms` }}
            >
              <div className="w-20 h-20 flex items-center justify-center bg-white dark:bg-gray-900 rounded-xl p-4 shadow-lg hover:shadow-xl transform hover:-translate-y-2 transition-all duration-300">
                <img
                  src={skill.icon}
                  alt={skill.name}
                  className="w-12 h-12 group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <span className="mt-3 text-sm font-medium text-gray-600 dark:text-gray-400 group-hover:text-primary-500 dark:group-hover:text-primary-400 transition-colors">
                {skill.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;