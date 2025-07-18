import React, { useRef } from "react";
import { useInView } from "../hooks/useInView";
import { Code, Globe, BarChart, Users } from "lucide-react";
import cvFile from "../assets/documents/my-cv.pdf";

const About: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { threshold: 0.1 });

  const services = [
    {
      icon: <Code className="w-12 h-12 text-primary-500" />,
      title: "Web Development",
      description:
        "Creating responsive, high-performance websites and web applications with modern technologies.",
    },
    {
      icon: <Globe className="w-12 h-12 text-primary-500" />,
      title: "Full Stack Solutions",
      description:
        "End-to-end development solutions from database design to frontend implementation.",
    },
    {
      icon: <BarChart className="w-12 h-12 text-primary-500" />,
      title: "Electrical Enginering",
      description:
        "I excel in designing and testing circuits for modern technology, troubleshooting electrical issues, and using tools.",
    },
    {
      icon: <Users className="w-12 h-12 text-primary-500" />,
      title: "Collaboration",
      description:
        "Working with teams to deliver high-quality products on schedule and within budget.",
    },
  ];

  return (
    <section
      id="about"
      ref={sectionRef}
      className="py-20 sm:py-24 relative overflow-hidden"
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2
            className={`text-3xl sm:text-4xl font-bold mb-4 transition-all duration-700 transform ${
              isInView
                ? "translate-y-0 opacity-100"
                : "translate-y-10 opacity-0"
            }`}
          >
            About <span className="text-primary-500">Me</span>
          </h2>
          <div
            className={`w-20 h-1 bg-gradient-to-r from-primary-500 to-secondary-500 mx-auto mb-8 transition-all duration-700 delay-100 ${
              isInView ? "w-20 opacity-100" : "w-0 opacity-0"
            }`}
          ></div>
        </div>

        <div className="flex flex-col md:flex-row gap-12 items-center">
          <div
            className={`md:w-1/2 transition-all duration-700 delay-200 transform ${
              isInView
                ? "translate-x-0 opacity-100"
                : "-translate-x-10 opacity-0"
            }`}
          >
            <div className="relative">
              <div className="absolute -top-4 -left-4 w-24 h-24 border-t-4 border-l-4 border-primary-500"></div>
              <div className="absolute -bottom-4 -right-4 w-24 h-24 border-b-4 border-r-4 border-secondary-500"></div>
              <div className="relative overflow-hidden rounded-lg shadow-xl">
                <img
                  src="https://images.pexels.com/photos/4974915/pexels-photo-4974915.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
                  alt="Alfi Syukri Working"
                  className="w-full h-auto object-cover transition-transform duration-700 hover:scale-105"
                />
              </div>
            </div>
          </div>

          <div
            className={`md:w-1/2 transition-all duration-700 delay-300 transform ${
              isInView
                ? "translate-x-0 opacity-100"
                : "translate-x-10 opacity-0"
            }`}
          >
            <h3 className="text-2xl font-bold mb-4">
              Full Stack Developer with a passion for creating seamless digital
              experiences
            </h3>
            <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
              I am M. Alfi Syukri, a dedicated and passionate undergraduate
              student pursuing a degree in Automation Engineering Technology at
              Universitas Negeri Jakarta. With a strong foundation in both
              theoretical knowledge and practical application, I am deeply
              interested in the fields of Internet of Things (IoT), data
              processing, and web development.
            </p>
            <p className="text-gray-700 dark:text-gray-300 mb-8 leading-relaxed">
              My academic journey has been complemented by hands-on internship
              experiences, where I honed my skills in building and programming
              devices, as well as developing simple yet effective web
              applications using technologies like React.js, Node.js, Next.js,
              Python, and Laravel. I thrive in collaborative environments and
              have actively participated in various volunteering activities,
              which have strengthened my teamwork and leadership abilities.
            </p>

            <div className="grid grid-cols-2 gap-4 mb-8">
              <div className="flex items-center">
                <div className="w-2 h-2 rounded-full bg-primary-500 mr-2"></div>
                <span className="text-gray-700 dark:text-gray-300">
                  Laravel
                </span>
              </div>
              <div className="flex items-center">
                <div className="w-2 h-2 rounded-full bg-primary-500 mr-2"></div>
                <span className="text-gray-700 dark:text-gray-300">
                  React & Next.js
                </span>
              </div>
              <div className="flex items-center">
                <div className="w-2 h-2 rounded-full bg-primary-500 mr-2"></div>
                <span className="text-gray-700 dark:text-gray-300">
                  Node.js
                </span>
              </div>
              <div className="flex items-center">
                <div className="w-2 h-2 rounded-full bg-primary-500 mr-2"></div>
                <span className="text-gray-700 dark:text-gray-300">
                  MongoDB & SQL
                </span>
              </div>
            </div>

            <a
              href={cvFile}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-6 py-3 rounded-full bg-gray-200 dark:bg-gray-800 hover:bg-gray-300 dark:hover:bg-gray-700 text-gray-900 dark:text-white font-medium transition-colors"
            >
              Download CV
            </a>
          </div>
        </div>

        <div className="mt-24">
          <h3
            className={`text-2xl font-bold text-center mb-12 transition-all duration-700 delay-400 transform ${
              isInView
                ? "translate-y-0 opacity-100"
                : "translate-y-10 opacity-0"
            }`}
          >
            What I <span className="text-primary-500">Do</span>
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className={`bg-white dark:bg-gray-800 rounded-lg p-8 shadow-neuro-flat hover:shadow-neuro-pressed transition-all duration-300 transform hover:-translate-y-2 transition-all duration-700 delay-${
                  500 + index * 100
                } ${
                  isInView
                    ? "translate-y-0 opacity-100"
                    : "translate-y-10 opacity-0"
                }`}
              >
                <div className="mb-4">{service.icon}</div>
                <h4 className="text-xl font-semibold mb-3">{service.title}</h4>
                <p className="text-gray-600 dark:text-gray-400">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
