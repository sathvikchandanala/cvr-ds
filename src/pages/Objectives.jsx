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
                <p><span className="font-bold bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">PO1 - Engineering knowledge:</span> Apply the knowledge of mathematics, science, engineering fundamentals, and an engineering specialization to the solution of complex engineering problems.</p>
                <p><span className="font-bold bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">PO2 - Problem analysis:</span> Identify, formulate, review research literature, and analyze complex engineering problems reaching substantiated conclusions using first principles of mathematics, natural sciences, and engineering sciences.</p>
                <p><span className="font-bold bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">PO3 - Design/development of solutions:</span> Design solutions for complex engineering problems and design system components or processes that meet the specified needs with appropriate consideration for the public health and safety, and the cultural, societal, and environmental considerations.</p>
                <p><span className="font-bold bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">PO4 - Conduct investigations of complex problems:</span> Use research-based knowledge and research methods including design of experiments, analysis and interpretation of data, and synthesis of the information to provide valid conclusions.</p>
                <p><span className="font-bold bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">PO5 - Modern tool usage:</span> Create, select, and apply appropriate techniques, resources, and modern engineering and IT tools including prediction and modeling to complex engineering activities with an understanding of the limitations.</p>
                <p><span className="font-bold bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">PO6 - The engineer and society:</span> Apply reasoning informed by the contextual knowledge to assess societal, health, safety, legal and cultural issues and the consequent responsibilities relevant to the professional engineering practice.</p>
                <p><span className="font-bold bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">PO7 - Environment and sustainability:</span> Understand the impact of the professional engineering solutions in societal and environmental contexts, and demonstrate the knowledge of, and need for sustainable development.</p>
                <p><span className="font-bold bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">PO8 - Ethics:</span> Apply ethical principles and commit to professional ethics and responsibilities and norms of the engineering practice.</p>
                <p><span className="font-bold bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">PO9 - Individual and team work:</span> Function effectively as an individual, and as a member or leader in diverse teams, and in multidisciplinary settings.</p>
                <p><span className="font-bold bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">PO10 - Communication:</span> Communicate effectively on complex engineering activities with the engineering community and with society at large, such as, being able to comprehend and write effective reports and design documentation, make effective presentations, and give and receive clear instructions.</p>
                <p><span className="font-bold bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">PO11 - Project management and finance:</span> Demonstrate knowledge and understanding of the engineering and management principles and apply these to one’s own work, as a member and leader in a team, to manage projects and in multidisciplinary environments.</p>
                <p><span className="font-bold bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">PO12 - Life-long learning:</span> Recognize the need for, and have the preparation and ability to engage in independent and life-long learning in the broadest context of technological change.</p>
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
