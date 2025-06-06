import React, { useState } from "react";
import Nav from "./Nav";
import Footer from "./Footer";
import { ArrowUp } from "lucide-react";
import { motion } from "framer-motion";

const patents = [
  { appNo: "202541024414", status: "Published", name: "Srichandana Abbineni", title: "Tailored medical therapy powered by machine learning", date: "2025-03-19" },
  {  appNo: "202541021205", status: "Published", name: "Satyanarayana Nimmala", title: "AUTONOMOUS DATA VALIDATION SYSTEM IN EDGE DEVICES WITH TIMESTAMPED CLOUD SYNCHRONIZATION", date: "2025-03-10" },
  {  appNo: "202541020137", status: "Published", name: "S Venkata Suryanarayana", title: "STOCK PRICE PREDICTION USING PHYSICS-INFORMED NEURAL NETWORKS (PINNS)", date: "2025-03-06" },
  {  appNo: "202541019540", status: "Published", name: "Dr.Annapurna Gummadi", title: "FORECAST DEMAND AND OPTIMIZE INVENTORY LEVELS USING ML MODELS", date: "2025-03-05" },
  {  appNo: "202541018356", status: "Published", name: "Vankudoth Ramesh", title: "Cryptography-based Data-Centric Security Framework for Cloud Computing", date: "2025-03-03" },
  {  appNo: "202541013121", status: "Published", name: "K.S. Ranadheer Kumar", title: "FILTER-BASED FEATURE SELECTION AND MACHINE LEARNING SYSTEM FOR ENHANCED ANDROID MALWARE DETECTION", date: "2025-02-15" },
  { appNo: "202541008656", status: "Published", name: "B Sabitha", title: "A Machine Learning Based System for Automatic Detection of Cardiovascular Diseases", date: "2025-02-03" },
  {  appNo: "202541008485", status: "Published", name: "Prashanth Donda", title: "FOREST FIRE DETECTION AND ALERT MECHANISM USING THERMAL IMAGE PROCESSING", date: "2025-02-01" },
  {  appNo: "202541004198", status: "Published", name: "Dr.M. Varaprasad Rao", title: "MULTI-SOURCE REMOTE SENSING VISUAL QUESTION-ANSWERING METHOD IN INDIAN REGIONAL LANGUAGES", date: "2025-01-18" },
  {  appNo: "202541001939", status: "Published", name: "V Praveen Kumar", title: "DYNAMIC GRAPH CONVOLUTIONAL NETWORKS WITH TEMPORAL-SPATIAL GATING FOR TRAFFIC PREDICTION", date: "2025-01-09" },
  {  appNo: "202541000190", status: "Published", name: "Srichandana Abbineni", title: "AUTOMATED PRECISION MEDICINE MODEL INTEGRATING NLP AND DEEP NEURAL FOR PERSONALIZED ASSESSMENT AND THERAPEUTIC RECOMMENDATIONS", date: "2025-01-02" },
  {  appNo: "202541000191", status: "Published", name: "Erupaka Nitya", title: "A DEEP LEARNING FRAMEWORK FOR AUTOMATIC POLLUTION ANALYSIS", date: "2025-01-02" },
  {  appNo: "202441103060", status: "Published", name: "P. Nagarani", title: "Sonification for DDoS Attacks", date: "2024-12-24" },
  {  appNo: "202441102090", status: "Published", name: "Mrs. S. Vineela Krishna", title: "DEEP LEARNING BASED DETECTION SYSTEM TO CLASSIFY FRUIT FRESHNESS USING ATTENTION MECHANISM AND FUSIO", date: "2024-12-23" },
  { appNo: "202441100244", status: "Published", name: "Dr. A.Srinivasa Reddy", title: "Translating ASL based Hand Gestures into Text using Convolution Neural Networks", date: "2024-12-18" },
  { appNo: "202441098115", status: "Published", name: "Dr. LNC Prakash", title: "AI-DRIVEN IMAGE REFINEMENT AND REVITALIZATION PLATFORM: NEXT-GENERATION SOLUTIONS FOR VISUAL ENHANCEMENT AND RESTORATION", date: "2024-12-11" },
  { appNo: "202441097322", status: "Published", name: "S.V.Surayanarayana", title: "AI-DRIVEN SYSTEM FOR PREDICTING AND PREVENTING WATER DESTRUCTION IN BUILDINGS", date: "2024-12-01" },
    {
    appNo: "202441095865",
    status: "Published",
    name: "Dr. A. Srinivasa Reddy",
    title: "Dynamic Time Slot Allocation at Traffic Signals based on Density of Vehicles using YOLO",
    date: "05/12/2024"
  },
  {
    appNo: "202441095328",
    status: "Published",
    name: "Afreen Fatima Mohammed",
    title: "IoT-Driven DL Models for Detecting and Managing Complications in Post-Surgical Recovery Process",
    date: "04/12/2024"
  },
  {
    appNo: "202441087946",
    status: "Published",
    name: "P. Hari Shankar",
    title: "Adaptive Load Balancing System for Cloud Computing using Deep Learning and Edge Analytic",
    date: "14/11/2024"
  },
  {
    appNo: "202441080878",
    status: "Published",
    name: "V. Praveen Kumar",
    title: "Energy-Efficient Load Management for IoT-Enabled Fog and Cloud Systems",
    date: "24/10/2024"
  },
  {
    appNo: "202441070739",
    status: "Published",
    name: "Mrs. Arava Nagasri",
    title: "A Machine Learning Based Framework for Analysing Fertility of Agricultural Land",
    date: "19/09/2024"
  },
  {
    appNo: "202441065488",
    status: "Published",
    name: "Ahmed Shahebaaz",
    title: "Smart Automated Waste Monitoring and Management Device",
    date: "30/08/2024"
  }
];


const years = ["All", "2025", "2024"];

export default function PatentsPage() {
  const [selectedYear, setSelectedYear] = useState("All");

  const filteredPatents =
    selectedYear === "All"
      ? patents
      : patents.filter(
          (patent) => new Date(patent.date).getFullYear().toString() === selectedYear
        );

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
            Patents Published
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
            <h1 className="text-3xl font-semibold text-gray-900 dark:text-gray-100">
              
            </h1>

            <div className="mt-4 sm:mt-0">
              <label className="text-sm font-medium text-gray-700 dark:text-gray-300 mr-2">
                Filter by Year:
              </label>
              <select
                value={selectedYear}
                onChange={(e) => setSelectedYear(e.target.value)}
                className="rounded-md border-gray-300 bg-white dark:border-gray-600 dark:bg-gray-800 dark:text-white px-4 py-2 shadow-sm focus:ring-primary focus:border-primary"
              >
                {years.map((year) => (
                  <option key={year} value={year}>
                    {year}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div className="overflow-x-auto rounded-lg shadow-lg bg-white dark:bg-gray-800 transition-colors duration-500">
            <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
              <thead className="bg-gray-100 dark:bg-gray-700">
                <tr>
                  {["SNo.", "Application No.", "Status", "Name", "Title", "Date"].map(
                    (heading) => (
                      <th
                        key={heading}
                        className="px-6 py-3 text-left text-xs font-bold text-gray-700 dark:text-gray-200 uppercase tracking-wider"
                      >
                        {heading}
                      </th>
                    )
                  )}
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
                {filteredPatents.length > 0 ? (
                  filteredPatents.map((patent, idx) => (
                    <tr
                      key={idx}
                      className="hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors duration-300"
                    >
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 dark:text-gray-100">
                        {idx+1}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 dark:text-gray-100">
                        {patent.appNo}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 dark:text-gray-100">
                        {patent.status}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 dark:text-gray-100">
                        {patent.name}
                      </td>
                      <td className="px-6 py-4 whitespace-normal text-sm text-gray-900 dark:text-gray-100">
                        {patent.title}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 dark:text-gray-100">
                        {patent.date}
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td
                      colSpan="6"
                      className="text-center py-6 text-gray-500 dark:text-gray-400"
                    >
                      No patents found for {selectedYear}.
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
            className="fixed bottom-6 right-6 z-50 p-3 rounded-full bg-primary text-white shadow-lg hover:bg-primary/90 transition-all"
            aria-label="Scroll to top"
          >
            <ArrowUp className="w-5 h-5" />
          </button>
      </main>
      <Footer />
    </div>
  );
}
