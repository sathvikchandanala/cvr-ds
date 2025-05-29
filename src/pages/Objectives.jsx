import React from "react";
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { FaBullseye, FaEye } from "react-icons/fa";
import Nav from "./Nav";
import Footer from "./Footer";

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
                <h2 className="text-2xl font-semibold text-blue-700">Vision</h2>
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
                <h2 className="text-2xl font-semibold text-blue-700">Mission</h2>
              </CardHeader>
              <Separator />
              <CardContent className="text-gray-700 text-md mt-4 space-y-3 text-justify">
                <p><span className="font-semibold text-blue-600">M1:</span> To offer a comprehensive educational program that integrates academic training with a solid foundation in data science concepts, techniques and applications.</p>
                <p><span className="font-semibold text-blue-600">M2:</span> To encourage students for applying the tools of data analytics and conceptual knowledge for solving societal problems.</p>
                <p><span className="font-semibold text-blue-600">M3:</span> To enable researchers and students to discover implicit patterns in large and complex data sets.</p>
                <p><span className="font-semibold text-blue-600">M4:</span> To accustom the students with current industry practices, environment and entrepreneurship.</p>
              </CardContent>
            </Card>
          </motion.div>
        </section>

        <section className="max-w-4xl mx-auto">
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={4}
          >
            <Card className="hover:shadow-xl transition duration-300">
              <CardHeader>
                <h2 className="text-3xl font-bold text-blue-700 text-left">
                  Program Educational Objectives (PEOs)
                </h2>
              </CardHeader>
              <Separator />
              <CardContent className="text-gray-700 text-md space-y-4 mt-4 text-justify">
                <p><span className="font-bold text-blue-600">PEO 1: Professional Excellence –</span> Graduates will establish themselves as competent professionals in Data Science and related fields, applying analytical, computational, and domain-specific knowledge to address complex problems in industry and research.</p>
                <p><span className="font-bold text-blue-600">PEO 2: Lifelong Learning and Innovation –</span> Graduates will continuously learn and stay updated with emerging technologies, methodologies, and tools in Data Science, contributing to innovation and knowledge advancement.</p>
                <p><span className="font-bold text-blue-600">PEO 3: Ethical and Social Responsibility –</span> Graduates will demonstrate ethical behaviour, effective communication, and leadership skills while contributing to data-driven decision-making in a socially responsible and inclusive manner.</p>
              </CardContent>
            </Card>
          </motion.div>
        </section>

        <section className="max-w-4xl mx-auto">
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={5}
          >
            <Card className="hover:shadow-xl transition duration-300">
              <CardHeader>
                <h2 className="text-3xl font-bold text-blue-700 text-center text-justify">
                  Program Specific Outcomes (PSOs)
                </h2>
              </CardHeader>
              <Separator />
              <CardContent className="text-gray-700 text-md space-y-4 mt-4">
                <p><span className="font-bold text-blue-600">PSO 1: Data Analysis and Modeling –</span> Apply statistical, machine learning, and data mining techniques to analyze complex datasets and develop predictive and prescriptive models for solving real-world problems.</p>
                <p><span className="font-bold text-blue-600">PSO 2: Data Engineering and Visualization –</span> Design and implement efficient data pipelines, manage large-scale data using appropriate tools and technologies, and create insightful visualizations to support data-driven decision-making.</p>
              </CardContent>
            </Card>
          </motion.div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Objectives;
