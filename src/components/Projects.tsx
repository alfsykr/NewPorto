import React, { useRef } from "react";
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

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
}

const Projects: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { threshold: 0.1 });

  const projects: Project[] = [
    {
      id: 4,
      title: "CPU and Room Temperature Monitoring System",
      description:
        "A real-time monitoring system that tracks CPU temperature using AIDA64 and room temperature using SHT20 sensor, providing comprehensive thermal monitoring for computer systems.",
      image: cpuMonitoringImage,
    },
    {
      id: 6,
      title: "My Favorites Movies Website",
      description:
        "FavroitesMovies is a modern and responsive movie web application built using React. It features a clean UI that displays popular movies, allows users to add titles to their Watchlist or Favorites, and includes search functionality. ",
      image: moviesWebsiteImage,
    },
    {
      id: 0,
      title: "RFID-based Library Web App",
      description:
        "A web application for library management using RFID technology. The system allows users to borrow books by tapping their RFID cards. The UID of the book and the member's card are read via RFID, then the data is sent to Firebase for real-time processing and storage. This enables efficient, contactless book borrowing and member management.",
      image: rfidImage,
    },
    {
      id: 9,
      title:
        "Temperature and Humidity Monitoring and control System for Server Room",
      description:
        "A tool that can monitor temperature and humidity levels in the server room, ensuring optimal conditions for equipment performance.",
      image: tempmonitoringImage,
    },
    {
      id: 7,
      title: "Waste sorting website",
      description:
        "A website that provides information about sorting plastic waste and calculating the profit price of its sale, and calculating it in real time from the waste sorting tool.",
      image: sampahwebsite,
    },
    {
      id: 8,
      title: "Electrical Monitoring System",
      description:
        "A system that monitors electrical usage in real-time, providing insights into energy consumption and efficiency.",
      image: electricalmonitoringImage,
    },
    {
      id: 2,
      title: "Blog Project Using Laravel",
      description:
        "A complete blog system with user authentication, post management, and comments functionality built with Laravel framework and modern web technologies.",
      image: laravelBlogImage,
    },
    {
      id: 3,
      title: "Student Admission System Using Python and MongoDB",
      description:
        "A comprehensive student admission system (PPDB) with registration, data processing, and reporting features using Python backend and MongoDB database.",
      image: ppdbSystemImage,
    },
    {
      id: 5,
      title: "InterGreen Plant Store Landing Page",
      description:
        "A professional landing page for InterGreen plant store featuring plant data management with MySQL database, customer messaging system via email integration, and comprehensive plant catalog management.",
      image: intergreenWebsiteImage,
    },

    {
      id: 1,
      title: "4 DOF Robot Arm Control System",
      description:
        "A control system for 4-degree-of-freedom robotic arm with real-time movement control and position tracking capabilities.",
      image: robotArmImage,
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
              isInView
                ? "translate-y-0 opacity-100"
                : "translate-y-10 opacity-0"
            }`}
          >
            My <span className="text-primary-500">Projects</span>
          </h2>
          <div
            className={`w-20 h-1 bg-gradient-to-r from-primary-500 to-secondary-500 mx-auto mb-8 transition-all duration-700 delay-100 ${
              isInView ? "w-20 opacity-100" : "w-0 opacity-0"
            }`}
          ></div>
          <p
            className={`max-w-2xl mx-auto text-gray-700 dark:text-gray-300 transition-all duration-700 delay-200 ${
              isInView ? "opacity-100" : "opacity-0"
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
                isInView
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
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
