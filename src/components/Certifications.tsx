import React, { useRef } from "react";
import { useInView } from "../hooks/useInView";
import { Award, ExternalLink } from "lucide-react";

// Import images
import msibBasicImg from "../assets/images/msib-basic.png";
import msibIntermediateImg from "../assets/images/msib-intermediate.png";
import msibCompletionImg from "../assets/images/msib-completion.png";
import msibParticipationImg from "../assets/images/msib-participation.png";

// Import PDF documents
import msibBasicPdf from "../assets/documents/msib-basic.pdf";
import msibIntermediatePdf from "../assets/documents/msib-intermediate.pdf";
import msibCompletionPdf from "../assets/documents/msib-completion.pdf";
import msibParticipationPdf from "../assets/documents/msib-participation.pdf";

interface Certification {
  id: number;
  name: string;
  issuer: string;
  date: string;
  image: string;
  link: string;
}

const Certifications: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { threshold: 0.1 });

  const certifications: Certification[] = [
    {
      id: 1,
      name: "Sertifikasi MSIB Batch 6 FSWD Basic",
      issuer: "Kampus Merdeka",
      date: "2024",
      image: msibBasicImg,
      link: msibBasicPdf,
    },
    {
      id: 2,
      name: "Sertifikasi MSIB Batch 6 FSWD Intermediate",
      issuer: "Kampus Merdeka",
      date: "2024",
      image: msibIntermediateImg,
      link: msibIntermediatePdf,
    },
    {
      id: 3,
      name: "Sertifikat Penyelesaian MSIB Batch 6 FSWD",
      issuer: "Kampus Merdeka",
      date: "2024",
      image: msibCompletionImg,
      link: msibCompletionPdf,
    },
    {
      id: 4,
      name: "Sertifikat Kepesertaan MSIB Batch 6",
      issuer: "Kampus Merdeka",
      date: "2024",
      image: msibParticipationImg,
      link: msibParticipationPdf,
    },
  ];

  return (
    <section
      id="certifications"
      ref={sectionRef}
      className="py-20 sm:py-24 bg-gray-50 dark:bg-gray-800 relative overflow-hidden"
    >
      {/* Background elements */}
      <div className="absolute top-1/4 right-0 w-64 h-64 bg-accent-300 dark:bg-accent-500 rounded-full mix-blend-multiply dark:mix-blend-color filter blur-3xl opacity-20"></div>
      <div className="absolute bottom-1/4 left-0 w-64 h-64 bg-secondary-300 dark:bg-secondary-500 rounded-full mix-blend-multiply dark:mix-blend-color filter blur-3xl opacity-20"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2
            className={`text-3xl sm:text-4xl font-bold mb-4 transition-all duration-700 transform ${
              isInView
                ? "translate-y-0 opacity-100"
                : "translate-y-10 opacity-0"
            }`}
          >
            My <span className="text-primary-500">Certifications</span>
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
            Professional certifications that validate my expertise and
            commitment to continuous learning.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {certifications.map((cert, index) => (
            <div
              key={cert.id}
              className={`group bg-white dark:bg-gray-900 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transform hover:-translate-y-2 transition-all duration-500 ${
                isInView
                  ? "translate-y-0 opacity-100"
                  : "translate-y-10 opacity-0"
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={cert.image}
                  alt={cert.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40 to-transparent opacity-60"></div>
                <div className="absolute bottom-4 left-4 right-4">
                  <h3 className="text-xl font-bold text-white mb-1">
                    {cert.name}
                  </h3>
                  <p className="text-gray-200 text-sm">{cert.issuer}</p>
                </div>
              </div>

              <div className="p-6">
                <div className="flex items-center mb-4">
                  <Award className="w-5 h-5 text-primary-500 mr-2" />
                  <span className="text-sm text-gray-600 dark:text-gray-400">
                    Issued {cert.date}
                  </span>
                </div>

                <a
                  href={cert.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-primary-500 hover:text-primary-600 transition-colors"
                >
                  <span className="mr-2">View Certificate</span>
                  <ExternalLink size={16} />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
