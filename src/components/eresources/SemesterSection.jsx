import React from "react";
import { motion } from "framer-motion";
import { FaBookOpen } from "react-icons/fa";
import ResourceCard from "./ResourceCard";

export default function SemesterSection({ semester }) {
  if (!semester || !semester.subjects) return null;

  return (
    <motion.section
      id={semester.semester}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="mb-20 scroll-mt-32"
    >
      {/* Semester Header */}

      <div className="flex items-center justify-between flex-wrap gap-4 mb-8">

        <div>

          <h2 className="text-3xl font-bold text-blue-800">
            {semester.fullName}
          </h2>

          <p className="text-gray-500 mt-1">
            Semester Code : {semester.semester}
          </p>

        </div>

        <div className="flex items-center gap-3 bg-blue-100 text-blue-800 px-5 py-3 rounded-full">

          <FaBookOpen />

          <span className="font-semibold">
            {semester.subjects.length} Subject
            {semester.subjects.length !== 1 ? "s" : ""}
          </span>

        </div>

      </div>

      {/* Divider */}

      <div className="h-1 bg-gradient-to-r from-blue-700 via-indigo-600 to-purple-600 rounded-full mb-10"></div>

      {/* Subject Cards */}

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">

        {semester.subjects.map((subject) => (

          <ResourceCard
            key={subject.id}
            subject={subject}
          />

        ))}

      </div>

    </motion.section>
  );
}