import React, { useRef, useState, useEffect } from "react";
import { useInView } from "../hooks/useInView";

// Import gambar dari src/assets/images/
import robotArmImage from "../assets/images/robot-arm.png";
import laravelBlogImage from "../assets/images/laravel-blog.png";
import ppdbSystemImage from "../assets/images/ppdb-system.png";
import cpuMonitoringImage from "../assets/images/cpu-monitoring.png";
import intergreenWebsiteImage from "../assets/images/intergreen-website.png";
import moviesWebsiteImage from "../assets/images/movies-website.png";
import rfidImage from "../assets/images/RFID.png";
import sampahwebsite from "../assets/images/sampah-website.png";
import electricalmonitoringImage from "../assets/images/electrical-monitoring.png";
import tempmonitoringImage from "../assets/images/Temp-Monitoring.jpg";
import userperpusImage from "../assets/images/user-perpus.png";

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  techs?: string[]; // Tambahan untuk badge teknologi
  demoLink?: string; // Tambahan untuk link demo
  codeLink?: string; // Tambahan untuk link code
}

const Projects: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { threshold: 0.05 });
  const [hasBeenInView, setHasBeenInView] = useState(false);

  useEffect(() => {
    if (isInView && !hasBeenInView) {
      setHasBeenInView(true);
    }
  }, [isInView, hasBeenInView]);

  const projects: Project[] = [
    {
      id: 4,
      title: "CPU and Room Temperature Monitoring System",
      description:
        "A real-time monitoring system that tracks CPU temperature using AIDA64 and room temperature using SHT20 sensor, providing comprehensive thermal monitoring for computer systems.",
      image: cpuMonitoringImage,
      techs: [
        "Python",
        "Arduino",
        "Firebase",
        "NextJS",
        "TypeScript",
        "Tailwind CSS",
        "AIDA64",
      ],
      demoLink: "https://lab-monitor.vercel.app/", // Ganti dengan link demo asli jika ada
      codeLink: "https://github.com/alfsykr/SkripsiMonitoring.git", // Ganti dengan link code asli jika ada
    },
    {
      id: 6,
      title: "My Favorites Movies Website",
      description:
        "FavroitesMovies is a modern and responsive movie web application built using React. It features a clean UI that displays popular movies, allows users to add titles to their Watchlist or Favorites, and includes search functionality. ",
      image: moviesWebsiteImage,
      techs: ["ReactJS", "TailwindCSS", "NextJS", "Supabase", "TMDB API"],
      demoLink: "https://v0-react-movies-website.vercel.app/", // Ganti dengan link demo asli jika ada
      codeLink: "https://github.com/alfsykr/newmoviess.git", // Ganti dengan link code asli jika ada
    },
    {
      id: 0,
      title: "RFID-based Library Web App",
      description:
        "An RFID-based library management web app with two user roles: admin and user. Users borrow books contactlessly using RFID cards, with UID data sent to Firebase in real time. Admins manage books, members, and borrowing history via a dashboard. The system streamlines library operations and improves user experience through automation and contactless interaction.",
      image: rfidImage,
      techs: [
        "Arduino",
        "NodeJS",
        "Firebase",
        "RFID",
        "ExpressJS",
        "JavaScript",
        "html",
        "CSS",
      ],
      demoLink: "https://admin-perpus.vercel.app/", // Ganti dengan link demo asli jika ada
      codeLink: "https://github.com/alfsykr/AdminPerpus.git", // Ganti dengan link code asli jika ada
    },
    {
      id: 9,
      title:
        "Temperature and Humidity Monitoring and control System for Server Room",
      description:
        "A tool that can monitor temperature and humidity levels in the server room, ensuring optimal conditions for equipment performance.",
      image: tempmonitoringImage,
      techs: ["Arduino IDE", "C++", "SHT20 Sensor", "Modbus", "ESP32", "RS485"],
    },
    {
      id: 7,
      title: "Waste sorting website",
      description:
        "A website that provides information about sorting plastic waste and calculating the profit price of its sale, and calculating it in real time from the waste sorting tool.",
      image: sampahwebsite,
      techs: [
        "ReactJS",
        "TailwindCSS",
        "NextJS",
        "Firebase",
        "TypeScript",
        "Arduino IDE",
        "C++",
        "ESP32",
      ],
      demoLink: "https://ecoprofit.vercel.app/", // Ganti dengan link demo asli jika ada
      codeLink: "https://github.com/alfsykr/PemilahanSampah.git", // Ganti dengan link code asli jika ada
    },
    {
      id: 10,
      title: "User Library",
      description:
        "A user-friendly library management system that enables users to borrow books, track their borrowing history, manage their library accounts, and receive timely book return reminders for a more organized reading experience.",
      image: userperpusImage,
      techs: ["ReactJS", "TailwindCSS", "NextJS", "Firebase", "TypeScript"],
      demoLink: "https://web-userss.vercel.app/", // Ganti dengan link demo asli jika ada
      codeLink: "https://github.com/alfsykr/WebUser.git",
    },
    {
      id: 8,
      title: "Electrical Monitoring System",
      description:
        "A system that monitors electrical usage in real-time, providing insights into energy consumption and efficiency.",
      image: electricalmonitoringImage,
      techs: ["ReactJS", "TailwindCSS", "NextJS", "Firebase", "TypeScript"],
      demoLink: "#", // Ganti dengan link demo asli jika ada
      codeLink: "https://github.com/alfsykr/ListrikMonitoring.git", // Ganti dengan link code asli jika ada
    },
    {
      id: 2,
      title: "Blog Project Using Laravel",
      description:
        "A complete blog system with user authentication, post management, and comments functionality built with Laravel framework and modern web technologies.",
      image: laravelBlogImage,
      techs: ["Laravel", "PHP", "MySQL", "HTML", "CSS", "JavaScript"],
      demoLink: "#", // Ganti dengan link demo asli jika ada
      codeLink: "https://github.com/alfsykr/raven.git", // Ganti dengan link code asli jika ada
    },
    {
      id: 3,
      title: "Student Admission System Using Python and MongoDB",
      description:
        "A comprehensive student admission system (PPDB) with registration, data processing, and reporting features using Python backend and MongoDB database.",
      image: ppdbSystemImage,
      techs: ["Python", "MongoDB", "Flask", "HTML", "CSS", "JavaScript"],
      demoLink: "https://ppdb-mis-hubbul-wathan.glitch.me/", // Ganti dengan link demo asli jika ada
      codeLink: "#", // Ganti dengan link code asli jika ada
    },
    {
      id: 5,
      title: "InterGreen Plant Store Landing Page",
      description:
        "A professional landing page for InterGreen plant store featuring plant data management with MySQL database, customer messaging system via email integration, and comprehensive plant catalog management.",
      image: intergreenWebsiteImage,
      techs: [
        "HTML",
        "CSS",
        "JavaScript",
        "MySQL",
        "PHP",
        "Bootstrap",
        "PHPmyAdmin",
      ],
      demoLink: "#", // Ganti dengan link demo asli jika ada
      codeLink: "https://github.com/alfsykr/Intergreen.git", // Ganti dengan link code asli jika ada
    },

    {
      id: 1,
      title: "4 DOF Robot Arm Control System",
      description:
        "A control system for 4-degree-of-freedom robotic arm with real-time movement control and position tracking capabilities.",
      image: robotArmImage,
      techs: ["Arduino", "C++", "Servo Motors", "Robotics", "ESP32"],
    },
    
  ];

  return (
    <section
      id="projects"
      ref={sectionRef}
      className="py-20 sm:py-24 relative overflow-hidden"
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2
            className={`text-3xl sm:text-4xl font-bold mb-4 transition-all duration-700 transform ${
              hasBeenInView
                ? "translate-y-0 opacity-100"
                : "translate-y-10 opacity-0"
            }`}
          >
            My <span className="text-primary-500">Projects</span>
          </h2>
          <div
            className={`w-20 h-1 bg-gradient-to-r from-primary-500 to-secondary-500 mx-auto mb-8 transition-all duration-700 delay-100 ${
              hasBeenInView ? "w-20 opacity-100" : "w-0 opacity-0"
            }`}
          ></div>
          <p
            className={`max-w-2xl mx-auto text-gray-700 dark:text-gray-300 transition-all duration-700 delay-200 ${
              hasBeenInView ? "opacity-100" : "opacity-0"
            }`}
          >
            Here are some of my recent projects that showcase my skills and
            experience in web development, IoT systems, and automation
            engineering.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className={`group bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg transition-all duration-500 hover:shadow-xl transform hover:-translate-y-2 transition-all duration-700 delay-${
                400 + index * 100
              } ${
                hasBeenInView
                  ? "translate-y-0 opacity-100"
                  : "translate-y-10 opacity-0"
              }`}
            >
              <div className="relative overflow-hidden h-56">
                <img
                  src={project.image}
                  alt={project.title}
                  className={`w-full h-full object-cover transition-transform duration-700 group-hover:scale-105`}
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-0 group-hover:opacity-70 transition-opacity duration-300"></div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">
                  {project.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  {project.description}
                </p>
                {/* Badge teknologi */}
                {project.techs && (
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.techs.map((tech) => {
                      // Mapping warna untuk setiap teknologi populer
                      const techColors: Record<string, string> = {
                        html: "bg-orange-500",
                        HTML: "bg-orange-500",
                        CSS: "bg-blue-500",
                        JavaScript: "bg-yellow-400 text-gray-900",
                        TypeScript: "bg-blue-400",
                        ReactJS: "bg-cyan-500",
                        TailwindCSS: "bg-teal-400",
                        NextJS: "bg-gray-900 text-white border border-gray-300",
                        Firebase: "bg-amber-400 text-gray-900",
                        Python: "bg-blue-600",
                        Arduino: "bg-green-600",
                        "Arduino IDE": "bg-green-700",
                        "C++": "bg-indigo-700",
                        PHP: "bg-indigo-400",
                        Laravel: "bg-red-500",
                        MySQL: "bg-blue-700",
                        MongoDB: "bg-green-700",
                        Flask: "bg-gray-700",
                        ExpressJS: "bg-blue-800",
                        Bootstrap: "bg-purple-600",
                        "PHP Mailer": "bg-pink-400",
                        PHPmyAdmin: "bg-orange-300 text-gray-900",
                        AIDA64: "bg-gray-400 text-gray-900",
                        "SHT20 Sensor": "bg-lime-500 text-gray-900",
                        Modbus: "bg-yellow-700",
                        RS485: "bg-gray-500",
                        ESP32: "bg-blue-800",
                        "Servo Motors": "bg-yellow-600 text-gray-900",
                        Robotics: "bg-emerald-600",
                        RFID: "bg-pink-500",
                        TMDB: "bg-green-400 text-gray-900",
                        "TMDB API": "bg-green-400 text-gray-900",
                      };
                      const colorClass = techColors[tech] || "bg-purple-400";
                      return (
                        <span
                          key={tech}
                          className={`px-3 py-1 rounded-full text-xs font-semibold ${colorClass}`}
                        >
                          {tech}
                        </span>
                      );
                    })}
                  </div>
                )}
                {/* Tombol Demo dan Code */}
                {(project.demoLink || project.codeLink) && (
                  <div className="flex gap-4 mt-2">
                    {project.demoLink && (
                      <a
                        href={project.demoLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center px-6 py-2 bg-gradient-to-r from-emerald-400 to-green-600 hover:from-green-600 hover:to-emerald-400 text-white rounded-full font-semibold shadow-lg transition-all duration-300 scale-100 hover:scale-105"
                      >
                        {/* Ikon external link */}
                        <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M18 13v6a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>
                        Link
                      </a>
                    )}
                    {project.codeLink && (
                      <a
                        href={project.codeLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center px-6 py-2 border-2 border-blue-600 text-blue-600 bg-white hover:bg-blue-600 hover:text-white active:bg-blue-700 active:text-white rounded-full font-semibold transition-all duration-300 scale-100 hover:scale-105"
                      >
                        {/* Ikon GitHub */}
                        <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.477 2 2 6.484 2 12.021c0 4.428 2.865 8.184 6.839 9.504.5.092.682-.217.682-.482 0-.237-.009-.868-.014-1.703-2.782.605-3.369-1.342-3.369-1.342-.454-1.157-1.11-1.465-1.11-1.465-.908-.62.069-.608.069-.608 1.004.07 1.532 1.032 1.532 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.339-2.221-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.025A9.564 9.564 0 0 1 12 6.844c.85.004 1.705.115 2.504.337 1.909-1.295 2.748-1.025 2.748-1.025.546 1.378.202 2.397.1 2.65.64.7 1.028 1.595 1.028 2.688 0 3.847-2.337 4.695-4.566 4.944.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.749 0 .267.18.579.688.481C19.138 20.203 22 16.447 22 12.021 22 6.484 17.523 2 12 2z"/></svg>
                        Code
                      </a>
                    )}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
