import React, { useState } from "react";
import Nav from "./Nav";
import Footer from "./Footer";
import { ArrowUp } from "lucide-react";
import { motion } from "framer-motion";

const fdps = [
  {
    year: "2023-24",
    resourcePersons: [
      { name: "Geethanjali Srivastava" },
      { name: "Rupesh Srivastava" },
    ],
    date: "31/8/2023 to 5/9/2023",
    title: `Hands-On Skill Development Programme on "Data Analytics & Visualization using Power BI"`,
    from: "Senior Product Success Analyst ServiceNow, Senior Lead engineer Qualcomm India Pvt.Ltd",
    count: 20,
  },
  {
    year: "2023-24",
    resourcePersons: [
      { name: "Mr P.Aswin Kumar" },
      { name: "Ms A.Srichandana" },
      { name: "Mr.Nayani Sateesh" },
      { name: "Mr.D.Prashanth" },
    ],
    date: "5/2/2024 to 14/2/2024",
    title: `Two week Workshop On "Python For Computing"`,
    from: "CVR College of Engineering",
    count: 22,
  },
  {
    year: "2024-25",
    resourcePersons: [{ name: "Mr P.Sudheer" }],
    date: "1/7/2024 to 5/7/2024",
    title: `Hands-On Skill Development Programme on "Data Analytics & Visualization using Power BI"`,
    from: "CVR College of Engineering",
    count: 20,
  },
  {
    year: "2024-25",
    resourcePersons: [{ name: "Dr Yasmeen" }],
    date: "2/12/2024 to 7/12/2024",
    title: `Skill Enhancement Program "Cloud Computing & Devops"`,
    from: "CVR College of Engineering",
    count: 33,
  },
  {
    year: "2024-25",
    resourcePersons: [{ name: "Dr J.Somasekar" }],
    date: "24/3/2025 to 29/3/2025",
    title: "Mastering the Essentials of Data Science for Practitioners",
    from: "JAIN University, Bangalore",
    count: 90,
  },
];

const uniqueYears = ["All", ...Array.from(new Set(fdps.map((item) => item.year)))];


export default function FDPsPage() {
  const [selectedYear, setSelectedYear] = useState(() => uniqueYears?.[0] || "");

  const filteredFDPs = selectedYear === "All" ? fdps : fdps.filter((item) => item.year === selectedYear);


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
        <Nav/>
        <main className="min-h-screen py-24 px-4 md:px-16 space-y-16">
                <section className="text-center max-w-3xl mx-auto">
                  <motion.h1
                    className="text-4xl md:text-5xl font-bold text-black mb-4"
                    initial="hidden"
                    animate="visible"
                    variants={fadeInUp}
                  >
                    FDPs / STTPs Organized
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
        <div className="mb-6 flex items-center space-x-3">
        <label className="text-sm font-medium text-gray-700 dark:text-gray-300 mr-2">
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
        </div>
        <div className="overflow-x-auto rounded-lg shadow-lg bg-white dark:bg-gray-800 transition-colors duration-500">
          <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
            <thead className="bg-gray-100 dark:bg-gray-700">
              <tr>
              <th className="px-6 py-3 text-left text-xs font-bold text-gray-700 dark:text-gray-200 uppercase tracking-wider">
                  SNO.
                </th>
                <th className="px-6 py-3 text-left text-xs font-bold text-gray-700 dark:text-gray-200 uppercase tracking-wider">
                  Name of Resource Person(s)
                </th>
                <th className="px-6 py-3 text-left text-xs font-bold text-gray-700 dark:text-gray-200 uppercase tracking-wider">
                  Date
                </th>
                <th className="px-6 py-3 text-left text-xs font-bold text-gray-700 dark:text-gray-200 uppercase tracking-wider">
                  Title
                </th>
                <th className="px-6 py-3 text-left text-xs font-bold text-gray-700 dark:text-gray-200 uppercase tracking-wider">
                  From
                </th>
                <th className="px-6 py-3 text-left text-xs font-bold text-gray-700 dark:text-gray-200 uppercase tracking-wider">
                  Count
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
              {filteredFDPs.map((item, idx) => (
                <tr
                  key={idx}
                  className="hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors duration-300"
                >
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 dark:text-gray-100">
                    {idx+1}
                  </td>
                  <td className="px-6 py-4 whitespace-normal text-sm text-gray-900 dark:text-gray-100">
                    {item.resourcePersons.map((rp, i) => (
                      <div key={i}>{rp.name}</div>
                    ))}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 dark:text-gray-100">
                    {item.date}
                  </td>
                  <td className="px-6 py-4 whitespace-normal text-sm text-gray-900 dark:text-gray-100">
                    {item.title}
                  </td>
                  <td className="px-6 py-4 whitespace-normal text-sm text-gray-900 dark:text-gray-100">
                    {item.from}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 dark:text-gray-100">
                    {item.count}
                  </td>
                </tr>
              ))}
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
    <Footer/>
    </div>
  );
}
