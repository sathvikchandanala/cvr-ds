import React from "react";
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { FaBullseye, FaEye } from "react-icons/fa";
import Nav from "./Nav";
import Footer from "./Footer";
import { ArrowUp } from "lucide-react";

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

const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
};

const Objectives = () => {
  return (
    <>
      <Nav />
      <main className="min-h-screen py-24 px-4 md:px-16 space-y-16">
        <section className="text-center max-w-3xl mx-auto">
          <motion.h1
            className="text-4xl md:text-5xl font-bold text-black mb-4"
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
          >
            Department Objectives
          </motion.h1>
          <motion.p
            className="text-lg text-gray-700"
            variants={fadeInUp}
            initial="hidden"
            animate="visible"
            custom={1}
          >
            Our department is committed to excellence in teaching, research, and innovation in Computer Science and Engineering with a specialization in Data Science.
          </motion.p>
        </section>

        <section className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={2}
          >
            <Card className="hover:shadow-xl transition duration-300">
              <CardHeader className="flex items-center gap-3">
                <FaEye className="text-blue-700 text-3xl" />
                <h2 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">Vision</h2>
              </CardHeader>
              <Separator />
              <CardContent className="text-gray-700 text-md mt-4 text-justify">
                To nurture pioneering Computer Science Engineers with a focus on Data Science by providing them with an outstanding educational experience that fosters all-round development, academic excellence and creative thinking, thereby propelling advancements in technology and society.
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={3}
          >
            <Card className="hover:shadow-xl transition duration-300">
              <CardHeader className="flex items-center gap-3">
                <FaBullseye className="text-blue-700 text-3xl" />
                <h2 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">Mission</h2>
              </CardHeader>
              <Separator />
              <CardContent className="text-gray-700 text-md mt-4 space-y-3 text-justify">
                <p><span className="font-bold bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">M1:</span> To offer a comprehensive educational program that integrates academic training with a solid foundation in data science concepts, techniques and applications.</p>
                <p><span className="font-bold bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">M2:</span> To encourage students for applying the tools of data analytics and conceptual knowledge for solving societal problems.</p>
                <p><span className="font-bold bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">M3:</span> To enable researchers and students to discover implicit patterns in large and complex data sets.</p>
                <p><span className="font-bold bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">M4:</span> To accustom the students with current industry practices, environment and entrepreneurship.</p>
              </CardContent>
            </Card>
          </motion.div>
        </section>

        <section className="max-w-6xl mx-auto flex flex-col md:flex-row gap-8">
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={4}
            className="md:w-1/2"
          >
            <Card className="hover:shadow-xl transition duration-300 h-full">
              <CardHeader>
                <h2 className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent text-left">
                  Program Educational Objectives (PEOs)
                </h2>
              </CardHeader>
              <Separator />
              <CardContent className="text-gray-700 text-md space-y-4 mt-4 text-justify">
                <p><span className="font-bold bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">PEO 1: Professional Excellence –</span> Graduates will establish themselves as competent professionals in Data Science and related fields, applying analytical, computational, and domain-specific knowledge to address complex problems in industry and research.</p>
                <p><span className="font-bold bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">PEO 2: Lifelong Learning and Innovation –</span> Graduates will continuously learn and stay updated with emerging technologies, methodologies, and tools in Data Science, contributing to innovation and knowledge advancement.</p>
                <p><span className="font-bold bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">PEO 3: Ethical and Social Responsibility –</span> Graduates will demonstrate ethical behaviour, effective communication, and leadership skills while contributing to data-driven decision-making in a socially responsible and inclusive manner.</p>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={5}
            className="md:w-1/2"
          >
            <Card className="hover:shadow-xl transition duration-300 h-full">
              <CardHeader>
                <h2 className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent text-left">
                  Program Specific Outcomes (PSOs)
                </h2>
              </CardHeader>
              <Separator />
              <CardContent className="text-gray-700 text-md space-y-4 mt-4 text-justify">
                <p><span className="font-bold bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">PSO 1: Data Analysis and Modeling –</span> Apply statistical, machine learning, and data mining techniques to analyze complex datasets and develop predictive and prescriptive models for solving real-world problems.</p>
                <p><span className="font-bold bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">PSO 2: Data Engineering and Visualization –</span> Design and implement efficient data pipelines, manage large-scale data using appropriate tools and technologies, and create insightful visualizations to support data-driven decision-making.</p>
              </CardContent>
            </Card>
          </motion.div>
        </section>

        <section className="max-w-6xl mx-auto">
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={6}
          >
            <Card className="hover:shadow-xl transition duration-300">
              <CardHeader>
                <h2 className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent text-left">
                  Program Outcomes (POs)
                </h2>
              </CardHeader>
              <Separator />
              <CardContent className="text-gray-700 text-md mt-4 text-justify space-y-4 max-h-[500px] overflow-y-auto">
                <p><span className="font-bold bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">PO1 - Engineering knowledge:</span> Apply knowledge of mathematics, natural science, computing, engineering fundamentals and an engineering specialization as specified in WK1 to WK4 respectively to develop to the solution of complex engineering problems.</p>
                <p><span className="font-bold bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">PO2 - Problem analysis:</span> Identify, formulate, review research literature and analyze complex engineering problems reaching substantiated conclusions with consideration for sustainable development. (WK1 to WK4).</p>
                <p><span className="font-bold bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">PO3 - Design/development of solutions:</span> Design creative solutions for complex engineering problems and design/develop systems/components/processes to meet identified needs with consideration for the public health and safety, whole-life cost, net zero carbon, culture, society and environment as required. (WK5)</p>
                <p><span className="font-bold bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">PO4 - Conduct investigations of complex problems:</span> Conduct investigations of complex engineering problems using research-based knowledge including design of experiments, modelling, analysis & interpretation of data to provide valid conclusions. (WK8).</p>
                <p><span className="font-bold bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">PO5 - Engineering Tool Usage:</span> Create, select and apply appropriate techniques, resources and modern engineering & IT tools, including prediction and modelling recognizing their limitations to solve complex engineering problems. (WK2 and WK6).</p>
                <p><span className="font-bold bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">PO6 - The Engineer and The World: </span> Analyze and evaluate societal and environmental aspects while solving complex engineering problems for its impact on sustainability with reference to economy, health, safety, legal framework, culture and environment. (WK1, WK5, and WK7).</p>
                <p><span className="font-bold bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">PO7 - Ethics:</span> Apply ethical principles and commit to professional ethics, human values, diversity and inclusion; adhere to national & international laws. (WK9)</p>
                <p><span className="font-bold bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">PO8 - Individual and Collaborative Team work: </span> Function effectively as an individual, and as a member or leader in diverse/multi-disciplinary teams.</p>
                <p><span className="font-bold bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">PO9 - Communication:</span> Communicate effectively and inclusively within the engineering community and society at large, such as being able to comprehend and write effective reports and design documentation, make effective presentations considering cultural, language, and learning differences.</p>
                <p><span className="font-bold bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">PO10 - Project Management and Finance: </span> Apply knowledge and understanding of engineering management principles and economic decision-making and apply these to one’s own work, as a member and leader in a team, and to manage projects and in multidisciplinary environments.</p>
                <p><span className="font-bold bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">PO11 - Life-Long Learning:</span> Recognize the need for, and have the preparation and ability for i) independent and life-long learning
                  ii) adaptability to new and emerging technologies and iii) critical thinking in the broadest context of technological change. (WK8)
                </p>
              </CardContent>
            </Card>

          </motion.div>
        </section>
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 z-50 bg-primary hover:bg-primary/90 text-white rounded-full p-3 shadow-lg transition-transform transform hover:scale-110"
          aria-label="Scroll to top"
        >
          <ArrowUp className="w-5 h-5" />
        </button>
      </main>
      <Footer />
    </>
  );
};

export default Objectives;
