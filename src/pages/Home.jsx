import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { ArrowUp, ArrowLeft, ArrowRight } from "lucide-react";
import hod from "../assets/hod.webp";
import dean from "../assets/dean.jpg";
import hero1 from "../assets/CSE_DS.jpg";
import hero2 from "../assets/CSE_DS.jpg";
import hero3 from "../assets/CSE_DS.jpg";
import Nav from "./Nav";
import Footer from "./Footer";

const stats = [
  { title: "Professors", count: 2 },
  { title: "Associate Professors", count: 7 },
  { title: "Sr. Assistant Professors", count: 10 },
  { title: "Assistant Professors", count: 17 },
  { title: "Programmers & Admin", count: 3 },
];

// Counter animation for stats
function Counter({ target }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isInView) return;
    let current = 0;
    const duration = 2000;
    const incrementTime = 40;
    const steps = Math.ceil(duration / incrementTime);
    const step = Math.ceil(target / steps);
    const interval = setInterval(() => {
      current += step;
      if (current >= target) {
        current = target;
        clearInterval(interval);
      }
      setCount(current);
    }, incrementTime);
    return () => clearInterval(interval);
  }, [isInView, target]);

  return <span ref={ref}>{count}</span>;
}

export default function HomePage() {
  const slides = [
    { src: hero1, alt: "CSE DS Slide 1" },
    { src: hero2, alt: "CSE DS Slide 2" },
    { src: hero3, alt: "CSE DS Slide 3" },
  ];
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => setCurrentIndex((prev) => (prev + 1) % slides.length);
  const prevSlide = () =>
    setCurrentIndex((prev) => (prev - 1 + slides.length) % slides.length);

  const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    visible: (i = 1) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.15, duration: 0.6, ease: "easeOut" },
    }),
  };

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <div className="min-h-screen bg-white">
      <Nav />

      {/*  Centered Professional Carousel */}
      <section className="max-w-4xl mx-auto px-4 sm:px-8 lg:px-16 py-16 relative">
        <div className="relative w-full h-100 overflow-hidden rounded-2xl shadow-xl">
          <AnimatePresence initial={false}>
            <motion.img
              key={slides[currentIndex].src}
              src={slides[currentIndex].src}
              alt={slides[currentIndex].alt}
              className="absolute top-0 left-0 w-full h-full object-cover"
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
            />
          </AnimatePresence>

          {/* Navigation Arrows */}
          <button
            onClick={prevSlide}
            className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-white bg-opacity-60 hover:bg-opacity-90 rounded-full p-2 shadow-lg"
            aria-label="Previous slide"
          >
            <ArrowLeft className="w-6 h-6 text-gray-800" />
          </button>
          <button
            onClick={nextSlide}
            className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-white bg-opacity-60 hover:bg-opacity-90 rounded-full p-2 shadow-lg"
            aria-label="Next slide"
          >
            <ArrowRight className="w-6 h-6 text-gray-800" />
          </button>
        </div>

        {/* Dots Navigation */}
        <div className="flex justify-center gap-3 mt-6">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${index === currentIndex ? "bg-blue-700" : "bg-gray-300"
                }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </section>


      {/* Dean Message */}
      <motion.section className="py-24 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <motion.img
            src={dean}
            alt="Associate Dean - CSE(DS)"
            className="rounded-lg w-full h-auto shadow-lg object-cover"
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          />
          <div>
            <motion.h2
              className="text-3xl font-bold text-gray-900 mb-4"
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              Message from the Associate Dean, Emerging Technologies
            </motion.h2>
            <motion.p
              className="text-gray-700 leading-relaxed text-lg text-justify"
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
 Welcome to the Department of Computer Science and Engineering (Data Science) at CVR College of Engineering. 
 At our institution, we are committed to equipping students, researchers, and innovators with the skills, mindset, and vision needed to lead this transformation.
 We emphasize interdisciplinary learning, research excellence, and collaboration with industry leaders to ensure our graduates are not only future-ready but also capable of driving technological change responsibly.
 Our initiatives in Data Science, Artificial Intelligence, Cybersecurity  and related domains are designed to empower learners to explore, experiment, and excel.
            </motion.p>
            <motion.p
              className="mt-6 font-bold tracking-tight bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent"
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              Dr. Lakshmi H N, Ph.D.
            </motion.p>
          </div>
        </div>
      </motion.section>

      {/* HOD Message */}
      <motion.section className="py-24 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <motion.img
            src={hod}
            alt="HOD - CSE DS"
            className="rounded-lg w-full h-auto shadow-lg object-cover"
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          />
          <div>
            <motion.h2
              className="text-3xl font-bold text-gray-900 mb-4"
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              Message from the Head of the Department
            </motion.h2>
            <motion.p
              className="text-gray-700 leading-relaxed text-lg text-justify"
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              Welcome to the Department of Computer Science and Engineering
              (Data Science) at CVR College of Engineering. Our department is
              committed to academic excellence and research innovation.
            </motion.p>
            <motion.p
              className="mt-6 font-bold tracking-tight bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent"
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              Dr. S. V. Suryanarayana
            </motion.p>
          </div>
        </div>
      </motion.section>

      {/* Stats */}
      <motion.section
        variants={fadeInUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="py-24 px-6"
      >
        <div className="max-w-7xl mx-auto text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900">Department Strength</h2>
          <p className="text-gray-600 mt-2">
            Dedicated team supporting education and research excellence.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 max-w-6xl mx-auto">
          {stats.map((item, index) => (
            <Card
              key={index}
              className="p-6 text-center shadow-md rounded-2xl bg-white text-black hover:scale-105 transition-transform duration-300 cursor-pointer"
            >
              <Link to={`/faculty/${encodeURIComponent(item.title)}`} className="block">
                <h3 className="text-4xl font-bold mb-2">
                  <Counter target={item.count} />
                </h3>
                <p className="font-medium tracking-tight bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
                  {item.title}
                </p>
              </Link>
            </Card>
          ))}
        </div>
      </motion.section>

      {/* Scroll to top */}
      <button
        onClick={scrollToTop}
        className="fixed bottom-6 right-6 z-50 bg-black hover:bg-black-800 text-white rounded-full p-3 shadow-lg transition-transform transform hover:scale-110"
        aria-label="Scroll to top"
      >
        <ArrowUp className="w-5 h-5" />
      </button>

      <Footer />
    </div>
  );
}
