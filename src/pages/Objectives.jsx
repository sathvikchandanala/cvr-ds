import React from "react";
import { Accordion, AccordionItem } from "@/components/ui/accordion";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import { FaLightbulb, FaLaptopCode } from "react-icons/fa";
import { MdOutlineChecklist } from "react-icons/md";
import { IoIosArrowDown } from "react-icons/io";
import Nav from "./Nav";
import Footer from "./Footer";

const peos = [
  "Graduates will acquire capability to apply their knowledge and skills to solve various kinds of computational engineering problems.",
  "Graduates will exhibit the ability to apply the acquired skills in various domains and multi-disciplinary areas, to function ethically and meet the ever-increasing technological and social challenges.",
  "To evolve as resourceful engineers catering to dynamic industrial needs and engage in life-long learning.",
  "Graduates will acquire soft skills to adapt and excel in diverse global environment.",
];

const psos = [
  "Make critical evaluation of the theories, techniques, tools and systems that are used to build data science based solutions in different domains.",
  "Apply analytic techniques and algorithms (including statistical, data mining, machine learning, Artificial Intelligence and soft computing approaches) to large data sets to extract meaningful insights by using relevant software tools, languages, data models, and environments for data analysis and visualization.",
  "Formalize data analysis problems in terms of the underlying statistical and computational principles and then provide technological pipeline to ingest, stage, transform and design solutions to the problems encountered in industry or academia.",
  "Interpret results of analysis, assess their credibility and communicate the results effectively (visually and verbally) to a broad audience within an organization.",
];

const pos = [
  "Engineering knowledge: Apply the knowledge of mathematics, science, engineering fundamentals, and an engineering specialization to the solution of complex engineering problems.",
  "Problem analysis: Identify, formulate, review research literature, and analyze complex engineering problems reaching substantiated conclusions using first principles of mathematics, natural sciences, and engineering sciences.",
  "Design/development of solutions: Design solutions for complex engineering problems and design system components or processes that meet the specified needs with appropriate consideration for public health, safety, cultural, societal, and environmental considerations.",
  "Conduct investigations of complex problems: Use research-based knowledge and research methods including design of experiments, analysis and interpretation of data, and synthesis of the information to provide valid conclusions.",
  "Modern tool usage: Create, select, and apply appropriate techniques, resources, and modern engineering and IT tools including prediction and modeling to complex engineering activities with an understanding of the limitations.",
  "The engineer and society: Apply reasoning informed by the contextual knowledge to assess societal, health, safety, legal and cultural issues and the consequent responsibilities relevant to professional engineering practice.",
  "Environment and sustainability: Understand the impact of the professional engineering solutions in societal and environmental contexts, and demonstrate the knowledge of, and need for sustainable development.",
  "Ethics: Apply ethical principles and commit to professional ethics and responsibilities and norms of engineering practice.",
  "Individual and team work: Function effectively as an individual, and as a member or leader in diverse teams, and in multidisciplinary settings.",
  "Communication: Communicate effectively on complex engineering activities with the engineering community and with society at large.",
  "Project management and finance: Demonstrate knowledge and understanding of engineering and management principles and apply these to one’s own work to manage projects and in multidisciplinary environments.",
  "Life-long learning: Recognize the need for, and have the preparation and ability to engage in independent and life-long learning in the context of technological change.",
];

export default function Objectiv() {
  return (
    <div>
      <Nav />
      <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white py-20 px-4 md:px-20">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, amount: 0.3 }}
          className="text-4xl font-bold text-center text-black mb-12"
        >
          Department Outcomes
        </motion.h1>

        <div className="space-y-12">
          {/* PEOs */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 1 }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <Card className="shadow-xl border border-gray-200">
              <CardContent className="p-6">
                <div className="flex items-center gap-4 mb-4">
                  <FaLightbulb className="text-black-500 text-3xl" />
                  <h2 className="text-2xl font-bold text-blue-700">
                    Program Educational Objectives (PEOs)
                  </h2>
                </div>
                <ul className="space-y-3 text-gray-700">
                  {peos.map((peo, index) => (
                    <li key={index} className="flex gap-2">
                      <span className="font-semibold text-blue-600">{`PEO${index + 1}:`}</span>
                      <span>{peo}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </motion.div>

          {/* PSOs */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 1 }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <Card className="shadow-xl border border-gray-200">
              <CardContent className="p-6">
                <div className="flex items-center gap-4 mb-4">
                  <FaLaptopCode className="text-black-600 text-3xl" />
                  <h2 className="text-2xl font-bold text-blue-700">
                    Program Specific Outcomes (PSOs)
                  </h2>
                </div>
                <ul className="space-y-3 text-gray-700">
                  {psos.map((pso, index) => (
                    <li key={index} className="flex gap-2">
                      <span className="font-semibold text-blue-700">{`${index + 1}: `}</span>
                      {pso}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </motion.div>

          {/* POs */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 1 }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <Card className="shadow-xl border border-gray-200">
              <CardContent className="p-6">
                <div className="flex items-center gap-4 mb-4">
                  <MdOutlineChecklist className="text-black-600 text-3xl" />
                  <h2 className="text-2xl font-bold text-blue-700">
                    Program Outcomes (POs)
                  </h2>
                </div>
                <ul className="space-y-3 text-gray-700">
                  {pos.map((pos, index) => (
                    <li key={index} className="flex gap-2">
                      <span className="font-semibold text-blue-700">{`PO${index + 1}: `}</span>
                      {pos}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
