import React, { useState } from "react";
import Nav from "./Nav";
import Footer from "./Footer";
import { ArrowUp } from "lucide-react";
import { motion } from "framer-motion";

const conferences = [
  {
    name: "Dr. L N C Prakash K",
    title: "The Impact of Learning Techniques on Genomics: Revolutionizing Research and Clinical Breast Cancer Application",
    year: "2024",
    publisher: "Genomics at the Nexus of AI, Computer Vision, and Machine Learning"
  },
  {
    name: "Dr. L N C Prakash K",
    title: "Green computing and the quest for sustainable solutions",
    year: "2024",
    publisher: "Computational Intelligence for Green Cloud Computing and Digital Waste Management"
  },
  {
    name: "Dr. L N C Prakash K",
    title: "IOT for Healthcare",
    year: "2024",
    publisher: "Internet of Things"
  },
  {
    name: "Dr. LNC Prakash K",
    title: "Drones enable IoT applications for smart cities",
    year: "2023",
    publisher: "Wiley"
  },
  {
    name: "Dr. LNC Prakash K",
    title: "AI applications of drones",
    year: "2023",
    publisher: "Wiley"
  },
  {
    name: "Dr. K. Sankar",
    title: "Data Mining and Data Warehousing",
    year: "2023",
    publisher: "Lulu"
  },
  {
    name: "Mr. P. Hari Shankar",
    title: "The Significant Concepts of Cloud Computing: Technology, Architecture, Applications, and Security",
    year: "2023",
    publisher: "Scientific International Publishing House (SIPH)"
  },
  {
    name: "Dr. P.A. Abdul Saleem",
    title: "Foundations of Computer",
    year: "2023",
    publisher: "GCS"
  },
  {
    name: "Dr. A. Srinivasa Reddy",
    title: "Application of Data Structures and Graph Theory concepts using C",
    year: "2022",
    publisher: "LAMBERT"
  },
  {
    name: "Dr. L N C Prakash K",
    title: "Machine learning-based stock price prediction for business intelligence",
    year: "2022",
    publisher: "AI-Driven Intelligent Models for Business Excellence"
  },
  {
    name: "Dr. L N C Prakash K",
    title: "Exploiting Trajectory Data to Improve Smart City Services",
    year: "2022",
    publisher: "Smart Urban Computing Applications"
  },
  {
    name: "Ms. Annapurna Gummadi",
    title: "Fundamentals of internet of things and it's Applications",
    year: "2022",
    publisher: "Scientific International Publishing House"
  },
  {
    name: "Dr. A. Srinivasa Reddy",
    title: "Machine Learning Algorithms for Efficient Brain Tumor Segmentation",
    year: "2021",
    publisher: "LAMBERT"
  },
  {
    name: "Dr. LNC Prakash K",
    title: "Introduction to data Analytics Using R",
    year: "2021",
    publisher: "LAP LAMBERT"
  }
];


const uniqueYears = ["All", ...Array.from(new Set(conferences.map(c => c.year)))];
const uniqueFaculty = ["All", ...Array.from(new Set(conferences.map(c => c.name)))];

  const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.15,
      duration: 0.6,
      ease: "easeOut",
    },
  }),
};

export default function BookChapter() {
  const [selectedYear, setSelectedYear] = useState("All");
  const [selectedFaculty, setSelectedFaculty] = useState("All");

  const filteredConferences = conferences.filter((conf) => {
    const matchesYear = selectedYear === "All" || conf.year === selectedYear;
    const matchesFaculty = selectedFaculty === "All" || conf.name === selectedFaculty;
    return matchesYear && matchesFaculty;
  });

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div>
      <Nav />
      <main className="min-h-screen py-24 px-4 md:px-16 space-y-16">
        <section className="text-center max-w-3xl mx-auto">
          <motion.h1
            className="text-4xl md:text-5xl font-bold text-black mb-4"
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
          >
            Book Chapter Publications
          </motion.h1>
        </section>
        <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
          >
      <div className="min-h-screen p-6 transition-colors duration-500">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6">
            <h1 className="text-3xl font-semibold mb-6 text-gray-900 dark:text-gray-100">
            </h1>
            <div className="flex flex-wrap gap-4 mb-6">
              <div className="flex items-center space-x-2">
                <label className="text-sm font-medium text-gray-700 dark:text-gray-300">
                  Filter by Year:
                </label>
                <select
                  value={selectedYear}
                  onChange={(e) => setSelectedYear(e.target.value)}
                  className="rounded-md border-gray-300 bg-white dark:border-gray-600 dark:bg-gray-800 dark:text-white px-4 py-2 shadow-sm focus:ring-primary focus:border-primary"
                >
                  {uniqueYears.map((year) => (
                    <option key={year} value={year}>
                      {year}
                    </option>
                  ))}
                </select>
              </div>
              <div className="flex items-center space-x-2">
                <label className="text-sm font-medium text-gray-700 dark:text-gray-300">
                  Filter by Faculty:
                </label>
                <select
                  value={selectedFaculty}
                  onChange={(e) => setSelectedFaculty(e.target.value)}
                  className="rounded-md border-gray-300 bg-white dark:border-gray-600 dark:bg-gray-800 dark:text-white px-4 py-2 shadow-sm focus:ring-primary focus:border-primary"
                >
                  {uniqueFaculty.map((faculty) => (
                    <option key={faculty} value={faculty}>
                      {faculty}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>

          <div className="overflow-x-auto rounded-lg shadow-lg bg-white dark:bg-gray-800 transition-colors duration-500">
            <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
              <thead className="bg-gray-100 dark:bg-gray-700">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-bold text-gray-700 dark:text-gray-200 uppercase tracking-wider">
                    SNo.
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-bold text-gray-700 dark:text-gray-200 uppercase tracking-wider">
                    Name of the Faculty
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-bold text-gray-700 dark:text-gray-200 uppercase tracking-wider">
                    Title
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-bold text-gray-700 dark:text-gray-200 uppercase tracking-wider">
                    Publisher
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
                {filteredConferences.length > 0 ? (
                  filteredConferences.map((conf, idx) => (
                    <tr
                      key={idx}
                      className="hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors duration-300"
                    >
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 dark:text-gray-100">
                        {idx + 1}
                      </td>
                      <td className="px-6 py-4 whitespace-normal text-sm text-gray-900 dark:text-gray-100">
                        {conf.name}
                      </td>
                      <td className="px-6 py-4 whitespace-normal text-sm text-gray-900 dark:text-gray-100">
                        {conf.title}
                      </td>
                      <td className="px-6 py-4 whitespace-normal text-sm text-gray-900 dark:text-gray-100">
                        {conf.publisher}
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan="4" className="px-6 py-4 text-center text-gray-600 dark:text-gray-300">
                      No book chapter publications found for selected filters.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
      </motion.div>
      <button
            onClick={scrollToTop}
            className="fixed bottom-6 right-6 z-50 bg-primary hover:bg-primary/90 text-white rounded-full p-3 shadow-lg transition-transform transform hover:scale-110"
            aria-label="Scroll to top"
          >
            <ArrowUp className="w-5 h-5" />
          </button>
      </main>
      <Footer />
    </div>
  );
}
