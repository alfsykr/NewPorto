import React, { useEffect, useRef, useState } from 'react';
import { ChevronDown } from 'lucide-react';
import mainImage from '../assets/images/main.png';

const Hero: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const phrases = ['Full Stack Developer.', 'UI/UX Enthusiast.', 'Automation Engineering.'];
  const [currentPhrase, setCurrentPhrase] = useState(0);
  const heroRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    setIsVisible(true);
    
    const typingInterval = setInterval(() => {
      setCurrentPhrase((prev) => (prev + 1) % phrases.length);
    }, 4000);
    
    return () => clearInterval(typingInterval);
  }, []);
  
  const scrollToNext = () => {
    const about = document.getElementById('about');
    if (about) {
      about.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div 
      ref={heroRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background gradient effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 transition-colors duration-300"></div>
      
      {/* Animated background shapes */}
      <div className="absolute inset-0 overflow-hidden opacity-20 dark:opacity-30">
        <div className="absolute -top-20 -left-20 w-72 h-72 bg-primary-300 dark:bg-primary-500 rounded-full mix-blend-multiply dark:mix-blend-normal filter blur-xl animate-float opacity-70"></div>
        <div className="absolute top-10 right-20 w-80 h-80 bg-secondary-300 dark:bg-secondary-500 rounded-full mix-blend-multiply dark:mix-blend-normal filter blur-xl animate-float opacity-70" style={{ animationDelay: '2s' }}></div>
        <div className="absolute bottom-10 left-1/4 w-60 h-60 bg-accent-300 dark:bg-accent-500 rounded-full mix-blend-multiply dark:mix-blend-normal filter blur-xl animate-float opacity-70" style={{ animationDelay: '4s' }}></div>
      </div>
      
      <div className="container mx-auto px-4 z-10">
        <div 
          className={`text-center transition-all duration-1000 transform ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}
        >
          <div className="inline-block mb-6 overflow-hidden rounded-full p-2 bg-white/20 dark:bg-gray-800/30 backdrop-blur-sm">
            <img 
              src={mainImage}
              alt="Alfi Syukri" 
              className="w-28 h-28 sm:w-36 sm:h-36 rounded-full object-cover object-center border-4 border-white/50 dark:border-gray-700/50"
            />
          </div>
          
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-4">
            M. Alfi Syukri
          </h1>
          
          <div className="h-12 sm:h-14 mb-8">
            <div className="inline-block">
              <div className="flex items-center">
                <h2 className="text-lg sm:text-xl md:text-2xl text-gray-600 dark:text-gray-300">
                  I'm a{' '}
                </h2>
                <div className="relative ml-2 text-lg sm:text-xl md:text-2xl font-medium text-primary-500 dark:text-primary-400 overflow-hidden">
                  <span className="inline-block w-full overflow-hidden whitespace-nowrap animate-type">
                    {phrases[currentPhrase]}
                  </span>
                  <span className="absolute right-0 top-0 border-r-2 border-primary-500 dark:border-primary-400 animate-cursor-blink h-full"></span>
                </div>
              </div>
            </div>
          </div>
          
          <p className="text-base sm:text-lg max-w-2xl mx-auto text-gray-600 dark:text-gray-300 mb-8">
            A passionate undergraduate student in Automation Engineering Technology at Universitas Negeri Jakarta, equipped with internship experiences and active involvement in volunteering activities. Skilled in data processing, Internet of Things, building devices with programming, and creating simple web applications using React.Js, Node.js, Next.js, Laravel and Python.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4 mb-12">
            <a 
              href="#contact" 
              className="px-8 py-3 rounded-full bg-gradient-to-r from-primary-500 to-secondary-500 text-white font-medium transform hover:scale-105 hover:shadow-lg transition-all duration-300"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              Contact Me
            </a>
            <a 
              href="#projects" 
              className="px-8 py-3 rounded-full bg-white dark:bg-gray-800 text-gray-900 dark:text-white border border-gray-200 dark:border-gray-700 font-medium hover:bg-gray-100 dark:hover:bg-gray-700 transition-all duration-300"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              View My Work
            </a>
          </div>
        </div>
      </div>
      
      <button 
        onClick={scrollToNext}
        className="absolute bottom-6 left-1/2 transform -translate-x-1/2 animate-bounce"
        aria-label="Scroll down"
      >
        <ChevronDown className="w-8 h-8 text-gray-600 dark:text-gray-400" />
      </button>
    </div>
  );
};

export default Hero;