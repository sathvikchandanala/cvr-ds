import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { FaLaptopCode, FaBullseye, FaEye } from "react-icons/fa";
import Nav from "./Nav";
import Footer from "./Footer";

export default function About() {
  const missions = [
    {
      id: "M1",
      text: "To offer a comprehensive educational program that integrates academic training with a solid foundation in data science concepts, techniques and applications."
    },
    {
      id: "M2",
      text: "To encourage students for applying the tools of data analytics and conceptual knowledge for solving societal problems."
    },
    {
      id: "M3",
      text: "To enable researchers and students to discover implicit patterns in large and complex data sets."
    },
    {
      id: "M4",
      text: "To accustom the students with current industry practices, environment and entrepreneurship."
    }
  ];

  return (
    <div className="text-gray-800">
      <Nav />
      <div className="min-h-screen">
        <section className="max-w-7xl mx-auto px-6 py-16 text-center space-y-6">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl sm:text-5xl font-bold text-gray-800 mb-6"
          >
            About Our Department
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-lg text-gray-600 max-w-3xl mx-auto"
          >
            Our Computer Science department is dedicated to excellence in teaching, learning, and research. We equip students with technical and analytical skills to thrive in today’s digital world.
          </motion.p>
        </section>

        <section className="py-16">
          <div className="max-w-6xl mx-auto px-6 grid gap-8 md:grid-cols-3 text-center">
            {[{
              icon: <FaBullseye className="text-4xl text-blue-700 mx-auto mb-4" />, title: "Our Mission",
              desc: "To foster innovation and empower students with cutting-edge skills for real-world challenges."
            }, {
              icon: <FaEye className="text-4xl text-blue-700 mx-auto mb-4" />, title: "Our Vision",
              desc: "To nurture pioneering Computer Science Engineers with a focus on Data Science by providing them with an outstanding educational experience that fosters all-round development, academic excellence and creative thinking, thereby propelling advancements in technology and society."
            }, {
              icon: <FaLaptopCode className="text-4xl text-blue-700 mx-auto mb-4" />, title: "Why Choose Us",
              desc: "Our department features high-end labs equipped with cutting-edge technology, supported by 36 experienced and dedicated faculty members committed to mentoring students. Together, they create a supportive and inspiring learning environment designed to nurture and shape future tech leaders."
            }].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 * index }}
                viewport={{ once: true }}
              >
                <Card className="rounded-2xl shadow-md hover:shadow-xl transition duration-300">
                  <CardHeader>{item.icon}</CardHeader>
                  <CardTitle className="text-xl font-semibold mb-2">{item.title}</CardTitle>
                  <CardContent className="text-gray-600 px-6 pb-6 text-justify text-sm">{item.desc}</CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </section>

        <section className="px-6 sm:px-12 py-20 max-w-7xl mx-auto space-y-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center space-y-6"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-blue-700">Vision</h2>
            <p className="text-gray-700 text-base sm:text-lg max-w-4xl mx-auto leading-relaxed">
              To nurture pioneering Computer Science Engineers with a focus on Data Science by providing them with an outstanding educational experience that fosters all-round development, academic excellence and creative thinking, thereby propelling advancements in technology and society.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-10"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-blue-700 text-center">Mission</h2>
    <div className="grid gap-6 md:grid-cols-3 max-w-6xl mx-auto">
  {missions.map((mission, index) => (
    <motion.div
      key={mission.id}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2 * index }}
      viewport={{ once: true }}
      className={`flex ${mission.id === 'M4' ? 'md:col-start-2' : ''}`}
    >
      <Card className="rounded-2xl shadow-md hover:shadow-xl transition duration-300 flex flex-col w-full h-full min-h-[260px]">
        <CardHeader>
          <CardTitle className="text-lg sm:text-xl font-bold text-blue-700">{mission.id}</CardTitle>
        </CardHeader>
        <CardContent className="text-gray-700 text-sm sm:text-base px-6 pb-6 flex-grow">
          {mission.text}
        </CardContent>
      </Card>
    </motion.div>
  ))}
</div>
          </motion.div>
        </section>
      </div>
      <Footer />
    </div>
  );
}
