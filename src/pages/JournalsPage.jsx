import React, { useState } from "react";
import Nav from "./Nav";
import Footer from "./Footer";
import { ArrowUp } from "lucide-react";
import { motion } from "framer-motion";

const conferences = [
  {
    year: "2025",
    name: "Dr. Ramakrishna B",
    title: "The Future of Wastewater Treatment Plant: Integrating HCNN-BiGRU-A Model for Superior Performance",
    journal: "International Research Journal of Multidisciplinary Scope"
  },
    {
    year: "2025",
    name: "Ms. Erupaka Nitya",
    title: "Sustainable Agriculture-Based Food Security Analysis using Healthcare Data Modelling and Deep Learning Techniques",
    journal: "Remote Sensing in Earth Systems Sciences"
  },
  {
    year: "2024",
    name: "Dr. S. Venkata Suryanarayana",
    title: "ODESMAN: Optimizing Decision Making in Complex Environments: Integrating Neutrosophic and Fuzzy Logic for Advanced System Modeling",
    journal: "International Journal of Neutrosophic Science"
  },
  {
    year: "2024",
    name: "Dr. Satyanarayana Nimmala",
    title: "A Research Study on Concepts and Applications of Artificial Intelligence: Governance in Smart Cities",
    journal: "Sustainable Development Using Private AI: Security Models and Applications"
  },
  {
    year: "2024",
    name: "Dr. L N C Prakash K",
    title: "Partial key exposure attack on RSA using some private key blocks",
    journal: "Journal of Computer Virology and Hacking Techniques"
  },
  {
    year: "2024",
    name: "Dr. L N C Prakash K",
    title: "Cryptanalysis of RSA with composed decryption exponent with few most significant bits of one of the primes",
    journal: "Journal of Computer Virology and Hacking Techniques"
  },
  {
    year: "2024",
    name: "Dr. Vara Prasad Rao M",
    title: "An innovative Telugu text summarization framework using the pointer network and optimized attention layer",
    journal: "Multimedia Tools and Applications"
  },
  {
    year: "2024",
    name: "Dr. Annapurna Gummadi",
    title: "A MACHINE LEARNING APPROACH IN COMMUNICATION 5G-6G NETWORK",
    journal: "Journal of Theoretical and Applied Information Technology"
  },
  {
    year: "2024",
    name: "Dr. K. Sankar",
    title: "Accurate detection of melanoma skin cancer using fuzzy based SegNet model and normalized stacked LSTM network",
    journal: "Indonesian Journal of Electrical Engineering and Computer Science"
  },
  {
    year: "2024",
    name: "Dr. R. Srilakshmi",
    title: "Syndrome Detection Unleashed: Computer Vision Applications in Neurogenetic Diagnoses",
    journal: "Genomics at the Nexus of AI, Computer Vision, and Machine Learning"
  },
  {
    year: "2024",
    name: "Dr. R. Srilakshmi",
    title: "Deciphering the Complexities of Breast Cancer: Unveiling Resistance Mechanisms",
    journal: "Genomics at the Nexus of AI, Computer Vision, and Machine Learning"
  },
  {
    year: "2024",
    name: "Dr. Yasmeen",
    title: "INTRUSION DETECTION SYSTEM FOR CYBER SECURITY IN SMART AGRICULTURE WITH ABCIS TECHNIQUES",
    journal: "Journal of Theoretical and Applied Information Technology"
  },
  {
    year: "2024",
    name: "Dr. Annapurna Gummadi",
    title: "A MACHINE LEARNING APPROACH IN COMMUNICATION 5G-6G NETWORK",
    journal: "Journal of Theoretical and Applied Information Technology"
  },
  {
    year: "2024",
    name: "Ms. Afreen Fatima",
    title: "Lightweight Signcryption Scheme Using Improved SIMON and Ring Signature for Medical Image Security",
    journal: "SSRG International Journal of Electronics and Communication Engineering"
  },
  {
    year: "2024",
    name: "Ms. Afreen Fatima",
    title: "A Novel Optimal Key Selection Approach for Medical Image Encryption",
    journal: "International Journal of Engineering Trends and Technology"
  },
  {
    year: "2024",
    name: "Mr. Donda Prashanth",
    title: "Personalized recognition system in online shopping by using deep learning",
    journal: "EAI Endorsed Transactions on Internet of Things"
  },
  {
    year: "2024",
    name: "Ms. Erupaka Nitya",
    title: "Sustainable Agriculture-Based Food Security Analysis using Healthcare Data Modelling and Deep Learning Techniques",
    journal: "Remote Sensing in Earth Systems Sciences"
  },
  {
    year: "2024",
    name: "Ms. Manne Nikita",
    title: "Stage by stage E- Ecommerce market database analysis by using machine learning models",
    journal: "EAI Endorsed Transactions on Internet of Things"
  },
    {
    year: "2023",
    name: "Dr. S. Venkata Suryanarayana",
    title: "Insulator fault detection from UAV images using YOLOv5",
    journal: "Handbook of Research on Deep Learning Techniques for Cloud-Based Industrial IoT"
  },
  {
    year: "2023",
    name: "Dr. S. Venkata Suryanarayana",
    title: "CONDITIONAL-AWARE SEQUENTIAL TEXT GENERATION IN KNOWLEDGE ENHANCED CONVERSATIONAL RECOMMENDATION SYSTEM",
    journal: "Journal of Theoretical and Applied Information Technology"
  },
  {
    year: "2023",
    name: "Dr. K. Sankar",
    title: "AN IOT-BASED COMPUTATIONAL INTELLIGENCE MODEL TO PERFORM GENE ANALYTICS IN PATERNITY TESTING AND COMPARISON FOR HEALTH 4.0",
    journal: "Journal of Theoretical and Applied Information Technology"
  },
  {
    year: "2023",
    name: "Dr. K. Sankar",
    title: "IOT-BASED COMPUTATIONAL INTELLIGENCE TOOL FOR PATERNITY TESTING AND PARENTAL COMPARISON USING CORRELATION-BASED CLUSTERING AND SVM CLASSIFICATION",
    journal: "Journal of Theoretical and Applied Information Technology"
  },
  {
    year: "2023",
    name: "Dr. K. Sankar",
    title: "Pigeon Inspired Optimization Based Centroid Selection in TGVFCMS for Energy-Efficient Wireless Sensor Network",
    journal: "International Journal of Electrical and Electronic Engineering and Telecommunications"
  },
  {
    year: "2023",
    name: "Dr. K. Sankar",
    title: "Creating a deep learning model using a Swin Transformer and tree growth optimisation to classify brain tumour",
    journal: "Review of Computer Engineering Research"
  },
  {
    year: "2023",
    name: "Dr. K. Sankar",
    title: "Enhancing Smart City Waste Management through LBBOA based RIAN Classification",
    journal: "International Research Journal of Multidisciplinary Technovation"
  },
  {
    year: "2023",
    name: "Dr. L N C Prakash K",
    title: "Optimizing K-Means Clustering using the Artificial Firefly Algorithm",
    journal: "International Journal of Intelligent Systems and Applications in Engineering"
  },
  {
    year: "2023",
    name: "Dr. P.A. Abdul Saleem",
    title: "Ensemble Deep Learning Classifier with Optimized Cluster Head Selection for NIDS in MANET",
    journal: "Journal of Information Science and Engineering"
  },
  {
    year: "2023",
    name: "Dr. P.A. Abdul Saleem",
    title: "Colorectal Cancer Prediction using ResNet-CNN Classification Method",
    journal: "International Journal of Advances in Soft Computing and its Applications"
  },
  {
    year: "2023",
    name: "Dr. Yasmeen",
    title: "A Novel Machine Learning Framework for Tracing Covid Contact Details by Using Time Series Locational data & Prediction Techniques",
    journal: "International Journal on Recent and Innovation Trends in Computing and Communication"
  },
  {
    year: "2023",
    name: "Ms. Arava Nagasri",
    title: "SUGAR CANE LEAF DISEASE CLASSIFICATION AND IDENTIFICATION USING DEEP MACHINE LEARNING ALGORITHMS",
    journal: "Journal of Theoretical and Applied Information Technology"
  },
  {
    year: "2022",
    name: "Dr. A. Srinivasa Reddy",
    title: "Effective CNN-MSO method for brain tumor detection and segmentation",
    journal: "Materials Today: Proceedings"
  },
  {
    year: "2022",
    name: "Dr. Satyanarayana Nimmala",
    title: "An Intelli MVC: An intelligent majority voting and heuristic-based hybrid classifier to predict high blood pressure",
    journal: "Journal of Intelligent and Fuzzy Systems"
  },
  {
    year: "2022",
    name: "Dr. L N C Prakash K",
    title: "Fish Classification Using Deep Learning on Small Scale and Low Quality Images",
    journal: "International Journal of Intelligent Systems and Applications in Engineering"
  },
  {
    year: "2022",
    name: "Dr. L N C Prakash K",
    title: "Novel dynamic k-modes clustering of categorical and non categorical dataset with optimized genetic algorithm based feature selection",
    journal: "Multimedia Tools and Applications"
  },
  {
    year: "2022",
    name: "Dr. L N C Prakash K",
    title: "Fuzzy-Based Approach for Clustering Data with Multivalued Features",
    journal: "Wireless Communications and Mobile Computing"
  },
  {
    year: "2022",
    name: "Dr. L N C Prakash K",
    title: "Instantaneous approach for evaluating the initial centers in the agricultural databases using k-means clustering algorithm",
    journal: "Journal of Mobile Multimedia"
  }
];


const uniqueYears = ["All", ...Array.from(new Set(conferences.map(c => c.year)))];
const uniqueFaculty = ["All", ...Array.from(new Set(conferences.map(c => c.name)))];

export default function JournalsPage() {
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
            Journal Publications
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
                    Journal Name
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
                        {conf.journal}
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan="4" className="px-6 py-4 text-center text-gray-600 dark:text-gray-300">
                      No journal publications found for selected filters.
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
