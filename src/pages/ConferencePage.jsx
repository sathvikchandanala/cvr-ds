import React, { useState } from "react";
import Nav from "./Nav";
import Footer from "./Footer";
import { ArrowUp } from "lucide-react";
import { motion } from "framer-motion";

const conferences = [
  {
    year: "2025",
    name: "Dr. Satyanarayana Nimmala",
    title: "A Comprehensive Review on Bio Inspired Optimization Techniques",
    source: "5th International Conference on Data Science, Machine Learning and Applications, ICDSMLA 2023",
  },
  {
    year: "2025",
    name: "Dr. Satyanarayana Nimmala",
    title: "An Intelli BEF: An Intelligent Bio Inspired Energy-Efficient and Fault Tolerant Routing for IoT-Enabled WSNs",
    source: "6th International Conference on Mobile Computing and Sustainable Informatics, ICMCSI 2025 - Proceedings",
  },
  {
    year: "2025",
    name: "Dr. L N C Prakash K",
    title: "Data Analytics in Farming: Crop Yield Projection in Telangana State Employing Machine Learning Methods",
    source: "Lecture Notes in Electrical Engineering",
  },
  {
    year: "2025",
    name: "Dr. L N C Prakash K",
    title: "Sentiment Analysis of Amazon Alexa Product Reviews: A Comprehensive Comparative Study of Learning Algorithms",
    source: "Lecture Notes in Electrical Engineering",
  },
  {
    year: "2025",
    name: "Mr. Kotha Harishkumar",
    title: "A Comprehensive Analysis of Machine Learning Methods for Bug Prediction in Software Development",
    source: "Lecture Notes in Electrical Engineering",
  },
  {
    year: "2025",
    name: "Mr. Praveen Kumar Vadapally",
    title: "Wireless Energy Harvesting (WEH) and Spectrum Sharing in Cognitive Radio Networks",
    source: "6th International Conference on Mobile Computing and Sustainable Informatics, ICMCSI 2025 - Proceedings",
  },
  
{ year: "2024", title: "Survival Analysis of Heart Failure Patients with Advanced Machine Learning Models", name: "Dr. S. Venkata Suryanarayana", source: "Lecture Notes in Networks and Systems" },
  { year: "2024", title: "Crop and Weed Detection From Images Using YOLOv5 Family", name: "Dr. S. Venkata Suryanarayana", source: "Lecture Notes in Networks and Systems" },
  { year: "2024", title: "Convolution Neural Network for Weed Detection", name: "Dr. S. Venkata Suryanarayana", source: "Lecture Notes in Networks and Systems" },
  { year: "2024", title: "Using Computer Vision to enhance Safety in a Post COVID World", name: "Dr. S. Venkata Suryanarayana", source: "2022 International Conference on Data Science, Agents and Artificial Intelligence, ICDSAAI 2022" },
  { year: "2024", title: "Dynamic RL-ACO: Reinforcement Learning-based Ant Colony Optimization for Load Balancing in Cloud Networks", name: "Dr. Satyanarayana Nimmala", source: "Proceedings of the 5th International Conference on Smart Electronics and Communication, ICOSEC 2024 " },
  { year: "2024", title: "A Study Article on Concepts, Applications and Accomplishments of Artificial Intelligence: Net App AI", name: "Dr. Satyanarayana Nimmala", source: "15th International Conference on Advances in Computing, Control, and Telecommunication Technologies, ACT 2024 " },
  { year: "2024", title: "A Recent Survey on AI Enabled Practices for Smart Agriculture", name: "Dr. Satyanarayana Nimmala", source: "2024 International Conference on Intelligent Systems for Cybersecurity, ISCS 2024" },
  { year: "2024", title: "An Intelli BPS: An Intelligent Biopsychosocial Parameters-Based Machine Learning Model to Predict Hypertension", name: "Dr. Satyanarayana Nimmala", source: "Lecture Notes in Networks and Systems" },
  { year: "2024", title: "A Recent Survey on Risk Factors Affecting the Blood Pressure in India", name: "Dr. Satyanarayana Nimmala", source: "Lecture Notes in Networks and Systems" },
  { year: "2024", title: "High Blood Pressure Classification Using Meta-heuristic Based Data-Centric Hybrid Machine Learning Model", name: "Dr. Satyanarayana Nimmala", source: "Communications in Computer and Information Science" },
  { year: "2024", title: "Efficient Brain Tumor Segmentation using Kernel Representation", name: "Dr. A. Srinivasa Reddy", source: "Proceedings of the 7th International Conference on Intelligent Computing and Control Systems, CICCS 2023" },
  { year: "2024", title: "Adaptive Energy Routing Protocol using Spider Optimization in Wireless Sensor Networks", name: "Dr. A. Srinivasa Reddy", source: "2023 International Conference on Computer Communication and Informatics, ICCCI 2023 " },
  { year: "2024", title: "Performance of VANET over MANET in Mobile Computing Environment", name: "Dr. A. Srinivasa Reddy", source: "7th International Conference on Communication and Electronics Systems, ICCES 2022 - Proceedings" },
  { year: "2024", title: "Centralized Network Infrastructure and Virtualization of Inter Wireless Networks", name: "Dr. L N C Prakash K", source: "AIP Conference Proceedings" },
  { year: "2024", title: "A Comparative Analysis: Autism Spectrum Disorder Among Children Using Classification Models", name: "Dr. L N C Prakash K", source: "2023 2nd International Conference on Ambient Intelligence in Health Care, ICAIHC 2023 " },
  { year: "2024", title: "A Novel DDOS Attack Detection and Prevention Using DSA-DPI Method", name: "Dr. L N C Prakash K", source: "Lecture Notes in Networks and Systems" },
  { year: "2024", title: "Data Analytics in Farming: Rice price prediction in Andhra Pradesh", name: "Dr. L N C Prakash K", source: "2022 5th International Conference on Multimedia, Signal Processing and Communication Technologies, IMPACT 2022 " },
  { year: "2024", title: "Optimization of K-Means Clustering with Modified Spiral Phenomena", name: "Dr. L N C Prakash K", source: "Lecture Notes in Electrical Engineering" },
  { year: "2024", title: "Swarm Intelligence for Multi-Robot Coordination in Agricultural Automation", name: "Dr. Annapurna Gummadi", source: "10th International Conference on Advanced Computing and Communication Systems, ICACCS 2024 " },
  { year: "2024", title: "Human Centric Explainable AI for Personalized Educational Chatbots", name: "Dr. Annapurna Gummadi", source: "10th International Conference on Advanced Computing and Communication Systems, ICACCS 2024" },
  { year: "2024", title: "Creating A Resilient Blockchain Framework To Enhance The Efficiency And Security Of Data Management Within Internet Of Things Networks", name: "Dr. Annapurna Gummadi", source: "2024 3rd International Conference on Smart Technologies and Systems for Next Generation Computing, ICSTSN 2024" },
  { year: "2024", title: "Monte Carlo Tree Search Algorithms for Strategic Planning in Humanoid Robotics", name: "Dr. Annapurna Gummadi", source: "2024 International Conference on Cognitive Robotics and Intelligent Systems, ICC - ROBINS 2024 " },
  { year: "2024", title: "Neuromorphic Computing Architectures for EnergyEfficient Edge Devices in Autonomous Vehicles", name: "Dr. Annapurna Gummadi", source: "2024 IEEE International Conference on Intelligent Techniques in Control, Optimization and Signal Processing, INCOS 2024 - Proceedings" },
  { year: "2024", title: "Deep Learning Techniques to Analysis Facial Expression and Gender Detection", name: "Dr. Annapurna Gummadi", source: "2023 International Conference on New Frontiers in Communication, Automation, Management and Security, ICCAMS 2023 " },
  { year: "2024", title: "A Hybrid Algorithm for Adopting the WSM System to Park the Massive Number of Vehicles in Linear and Manage the Energy Consumption", name: "Dr. Annapurna Gummadi", source: "2023 3rd International Conference on Advancement in Electronics and Communication Engineering, AECE 2023" },
  { year: "2024", title: "Bivariate Gibbs based deep prediction for uncertain spatial environmental big data analytics", name: "Dr. K. Sankar", source: "AIP Conference Proceedings" },
  { year: "2024", title: "COX Regressive Winsorized Correlated Convolutional Deep Belief Boltzmann Network for Covid-19 Prediction with Big Data", name: "Dr. K. Sankar", source: "14th International Conference on Advances in Computing, Control, and Telecommunication Technologies, ACT 2023" },
  { year: "2024", title: "An Integration of Deep Learning Approach for prediction of Consumer Reviews using Sentiment Analysis", name: "Dr. K. Sankar", source: "3rd International Conference on Electronics and Sustainable Communication Systems, ICESC 2022 - Proceedings" },
  { year: "2024", title: "Fake News Detection: A Comprehensive Methodology Utilizing Topic Modeling and Machine Learning", name: "Dr. R. Srilakshmi", source: "Proceedings of International Conference on Communication, Computer Sciences and Engineering, IC3SE 2024 " },
  { year: "2024", title: "A Deep Reinforcement Learning-Based Task Offloading Framework for Edge-Cloud Computing", name: "Dr. Vara Prasad Rao M", source: "2nd International Conference on Integrated Circuits and Communication Systems, ICICACS 2024" },
  { year: "2024", title: "Advancements in Brain Tumor Detection using Machine Learning Applications from MRI Image Analysis", name: "Dr. Vara Prasad Rao M", source: "7th International Conference on I-SMAC (IoT in Social, Mobile, Analytics and Cloud), ISMAC 2023 - Proceedings" },
  { year: "2024", title: "A Yolo-Based Deep Learning Approach for Vehicle Class Classification", name: "Dr. Vara Prasad Rao M", source: "Lecture Notes in Computer Science (including subseries Lecture Notes in Artificial Intelligence and Lecture Notes in Bioinformatics) " },
  { year: "2024", title: "Machine learning based human interacted robotic intelligence to detect the different categories of speech", name: "Dr. Yasmeen", source: "Proceedings of the 2nd IEEE International Conference on Advances in Computing, Communication and Applied Informatics, ACCAI 2023" },
  { year: "2024", title: "Responsive Mechanism for Cloud Offloading Data Intrusion Detection Using Spark—Machine Learning Model", name: "Mr. Harishankar P", source: "Lecture Notes in Networks and Systems" },
  { year: "2024", title: "Green IoT Edge Computing Towards Sustainable and Distributed Data Processing", name: "Mr. Harishankar P", source: "2023 10th IEEE Uttar Pradesh Section International Conference on Electrical, Electronics and Computer Engineering, UPCON 2023 " },
  { year: "2024", title: "Optimizing Task Completion Rate in Multi-user Edge Intelligence Networks Through Neural Network-Based Energy Management with Partitioning and Offloading", name: "Mr. Kotha Harishkumar", source: "Communications in Computer and Information Science" },
  { year: "2024", title: "Fraud Fighters - How AI and ML are Revolutionizing UPI Security", name: "Mr. Praveen Kumar Vadapally", source: "Proceedings of 2024 International Conference on Science, Technology, Engineering and Management, ICSTEM 2024 " },
  { year: "2024", title: "Classification of Credit Card Delinquent Customers Using Random Forest Algorithm", name: "Mr. Praveen Kumar Vadapally", source: "Lecture Notes in Networks and Systems" },
  { year: "2024", title: "Transformative Advancements: Sign Language Conversion to Text and Speech", name: "Mr. S. Balakrishna Reddy", source: "2024 International Conference on Emerging Smart Computing and Informatics, ESCI 2024" },
  { year: "2024", title: "Intrusion Detection in IoT Environment Using Stochastic Gradient Descent with Warm Restarts and Gated Recurrent Unit", name: "Mr. Vankudoth Ramesh", source: "2nd IEEE International Conference on Data Science and Network Security, ICDSNS 2024" },
  { year: "2024", title: "Deep Feature Extraction Technique Based Multimodal Biometric Identification Approach", name: "Mr. Vankudoth Ramesh", source: "2nd IEEE International Conference on Data Science and Network Security, ICDSNS 2024" },
  { year: "2024", title: "Deep Belief Network Based Intrusion Detection in Vehicle Ad Hoc Network", name: "Mr. Vankudoth Ramesh", source: "International Conference on Distributed Computing and Optimization Techniques, ICDCOT 2024 " },
  { year: "2024", title: "An Intelligent Framework for Smart Automated House Implementation via Integration of IOT and DL", name: "Ms. A. Srichandana", source: "2024 4th International Conference on Advance Computing and Innovative Technologies in Engineering, ICACITE 2024 " },
  { year: "2024", title: "Machine Learning Approach to Lung Cancer Survivability Analysis", name: "Ms. A. Srichandana", source: "Lecture Notes in Networks and Systems" },
  { year: "2024", title: "Deep Learning Integration in Teletherapy for Modernizing Mental Health Support", name: "Ms. Arava Nagasri", source: "2024 2nd World Conference on Communication and Computing, WCONF 2024" },
  { year: "2024", title: "Phishing Websites Classification using Extreme Learning Machine", name: "Ms. Burra Sabitha", source: "Proceedings of International Conference on Communication, Computer Sciences and Engineering, IC3SE 2024 " },
  { 
    year: "2024",
    name: "Ms. Burra Sabitha",
    title: "Forensics-as-a-service: A Review of Mobile Forensics",
    source: "Proceedings of 5th International Conference on Contemporary Computing and Informatics, IC3I 2022 "
  },
  { year: "2024", title: "Optimizing Algorithmic Efficiency: Exploring Advanced Data Structures for High-Performance Computing", name: "Ms. Erupaka Nitya", source: "Proceedings - 2024 3rd International Conference on Computational Modelling, Simulation and Optimization, ICCMSO 2024" },
   {year: "2024", title: "Security of Electronic Health Record using Attribute based Encryption on Cloud", name: "Ms. M. Srivani ",source:"2023 4th International Conference on Electronics and Sustainable Communication Systems, ICESC 2023 - Proceedings"},
  { year: "2024", title: "A Smart Irrigation System Powered by IoT and Machine Learning for Optimal Water Management", name: "Ms. Manne Nikita", source: "2024 4th International Conference on Advance Computing and Innovative Technologies in Engineering, ICACITE 2024 " },
  {year: "2024", title:"Design of AED Based Drone to Deliver the Medical Kit on an Emergency Basis", name:" Ms. Paloju Nagarani",source:"2023 3rd International Conference on Advancement in Electronics and Communication Engineering, AECE 2023"},
  { year: "2024", title: "Hand Talk: Sign Language to Text Converter using CNN", name: "Ms. Parshapa Padma", source: "8th International Conference on I-SMAC (IoT in Social, Mobile, Analytics and Cloud), ISMAC 2024 - Proceedings" },
  { year: "2024", title: "Sky Guardians- AI and DL for Drone Detection", name: "Ms. Parshapa Padma", source: "Proceedings of 2024 International Conference on Science, Technology, Engineering and Management, ICSTEM 2024" },
  { year: "2024", title: "AI-Enhanced Elderly Care Companion", name: "Ms. Parshapa Padma", source: "Proceedings of 2024 International Conference on Science, Technology, Engineering and Management, ICSTEM 2024" },
  { year: "2024", title: "Detection of Vulnerability in Websites Predominantly Against CSRF Using Machine Learning", name: "Ms. Parshapa Padma", source: "Proceedings - International Conference on Technological Advancements in Computational Sciences, ICTACS 2023 " },
  {year: "2024", title:"Identification of Brain Tumors in MR Images Using UNet CNN Model",name:"Ms. S. Lalitha",source:"7th International Conference on Electronics, Communication and Aerospace Technology, ICECA 2023 - Proceedings"},
  { year: "2024", title: "Blockchain integrated optimized e-commerce business process model", name: "Ms. Souza Cheryl D", source: "AIP Conference Proceedings" },
  { year: "2024", title: "Comparative Performance Analysis of Fine Tuned Optimized Deep Transfer Learning Techniques for Fruit Quality Assessment ", name: "Ms. Souza Cheryl D", source: "2023 International Conference on Evolutionary Algorithms and Soft Computing Techniques, EASCT 2023" },
 { year: "2024", title: "AI Model for Bird Species Prediction with Detection of Rare, Migratory and Extinction Birds using ELM Boosted by OBS ", name: "Ms. Souza Cheryl D", source: "Winter Summit on Smart Computing and Networks, WiSSCoN 2023" },
 {year:"2024", title:"Enhancing Cloud Computing Security through Deep Learning and Attention Mechanism Intrusion Detection Systems ", name:"Ms. Tadaboina Ramya", source:"2024 4th International Conference on Intelligent Technologies, CONIT 2024"}, 
 { year: "2024", title: "Securing Asymmetric Key Cryptography in 6G Wireless and Mobile Environments: A Comprehensive Review and Proposed Hybrid Cryptosystem", name: "Ms. Vineela Krishna Suri", source: "2024 IEEE 3rd World Conference on Applied Intelligence and Computing, AIC 2024" },
  { year: "2024", title: "Federated Learning and Adaptive Privacy Preserving in Healthcare", name: "Ms. Vineela Krishna Suri", source: "Lecture Notes in Networks and Systems" },
  {
    year: "2023",
    name: "Dr. S. Venkata Suryanarayana",
    title: "Crop and Weed Detection From Images Using YOLOv5 Family",
    source: "Lecture Notes in Networks and Systems"
  },
  {
    year: "2023",
    name: "Dr. S. Venkata Suryanarayana",
    title: "Convolution Neural Network for Weed Detection",
    source: "Lecture Notes in Networks and Systems"
  },
  {
    year: "2023",
    name: "Dr. S. Venkata Suryanarayana",
    title: "Using Computer Vision to enhance Safety in a Post COVID World",
    source: "2022 International Conference on Data Science, Agents and Artificial Intelligence, ICDSAAI 2022"
  },
  {
    year: "2023",
    name: "Dr. Satyanarayana Nimmala",
    title: "High Blood Pressure Classification Using Meta-heuristic Based Data Centric Hybrid Machine Learning Model",
    source: "Communications in Computer and Information Science"
  },
  {
    year: "2023",
    name: "Dr. L N C Prakash K",
    title: "Centralized Network Infrastructure and Virtualization of Inter Wireless Networks",
    source: "AIP Conference Proceedings"
  },
  {
    year: "2023",
    name: "Dr. L N C Prakash K",
    title: "A Comparative Analysis: Autism Spectrum Disorder Among Children Using Classification Models",
    source: "2023 2nd International Conference on Ambient Intelligence in Health Care, ICAIHC 2023"
  },
  {
    year: "2023",
    name: "Dr. L N C Prakash K",
    title: "A Novel DDOS Attack Detection and Prevention Using DSA-DPI Method",
    source: "Lecture Notes in Networks and Systems"
  },
  {
    year: "2023",
    name: "Dr. L N C Prakash K",
    title: "Data Analytics in Farming: Rice price prediction in Andhra Pradesh",
    source: "2022 5th International Conference on Multimedia, Signal Processing and Communication Technologies, IMPACT 2022"
  },
  {
    year: "2023",
    name: "Dr. L N C Prakash K",
    title: "Optimization of K-Means Clustering with Modified Spiral Phenomena",
    source: "Lecture Notes in Electrical Engineering"
  },
  {
    year: "2023",
    name: "Dr. A. Srinivasa Reddy",
    title: "Efficient Brain Tumor Segmentation using Kernel Representation",
    source: "Proceedings of the 7th International Conference on Intelligent Computing and Control Systems, ICICCS 2023"
  },
  {
    year: "2023",
    name: "Dr. A. Srinivasa Reddy",
    title: "Adaptive Energy Routing Protocol using Spider Optimization in Wireless Sensor Networks",
    source: "2023 International Conference on Computer Communication and Informatics, ICCCI 2023"
  },
  {
    year: "2023",
    name: "Dr. A. Srinivasa Reddy",
    title: "Performance of VANET over MANET in Mobile Computing Environment",
    source: "7th International Conference on Communication and Electronics Systems, ICCES 2022 - Proceedings"
  },
  {
    year: "2023",
    name: "Dr. Annapurna Gummadi",
    title: "Deep Learning Techniques to Analysis Facial Expression and Gender Detection",
    source: "2023 International Conference on New Frontiers in Communication, Automation, Management and Security, ICCAMS 2023"
  },
  {
    year: "2023",
    name: "Dr. Annapurna Gummadi",
    title: "A Hybrid Algorithm for Adopting the WSM System to Park the Massive Number of Vehicles in Linear and Manage the Energy Consumption",
    source: "2023 3rd International Conference on Advancement in Electronics and Communication Engineering, AECE 2023"
  },
  {
    year: "2023",
    name: "Dr. K. Sankar",
    title: "Bivariate Gibbs based deep prediction for uncertain spatial environmental big data analytics",
    source: "AIP Conference Proceedings"
  },
  {
    year: "2023",
    name: "Dr. K. Sankar",
    title: "COX Regressive Winsorized Correlated Convolutional Deep Belief Boltzmann Network for Covid-19 Prediction with Big Data",
    source: "14th International Conference on Advances in Computing, Control, and Telecommunication Technologies, ACT 2023"
  },
  {
    year: "2023",
    name: "Dr. K. Sankar",
    title: "An Integration of Deep Learning Approach for prediction of Consumer Reviews using Sentiment Analysis",
    source: "3rd International Conference on Electronics and Sustainable Communication Systems, ICESC 2022 - Proceedings"
  },
  {
    year: "2023",
    name: "Dr. Vara Prasad Rao M",
    title: "Advancements in Brain Tumor Detection using Machine Learning Applications from MRI Image Analysis",
    source: "7th International Conference on I-SMAC (IoT in Social, Mobile, Analytics and Cloud), ISMAC 2023 - Proceedings"
  },
  {
    year: "2023",
    name: "Dr. Vara Prasad Rao M",
    title: "A Yolo-Based Deep Learning Approach for Vehicle Class Classification",
    source: "Lecture Notes in Computer Science (including subseries Lecture Notes in Artificial Intelligence and Lecture Notes in Bioinformatics)"
  },
  {
    year: "2023",
    name: "Dr. Yasmeen",
    title: "Machine learning based human interacted robotic intelligence to detect the different categories of speech",
    source: "Proceedings of the 2nd IEEE International Conference on Advances in Computing, Communication and Applied Informatics, ACCAI 2023"
  },
  {
    year: "2023",
    name: "Mr. Harishankar P",
    title: "Green IoT Edge Computing Towards Sustainable and Distributed Data Processing",
    source: "2023 10th IEEE Uttar Pradesh Section International Conference on Electrical, Electronics and Computer Engineering, UPCON 2023"
  },
  {
    year: "2023",
    name: "Ms. Burra Sabitha",
    title: "Forensics-as-a-service: A Review of Mobile Forensics",
    source: "Proceedings of 5th International Conference on Contemporary Computing and Informatics, IC3I 2022"
  },
  {
    year: "2023",
    name: "Ms. M. Srivani",
    title: "Security of Electronic Health Record using Attribute based Encryption on Cloud",
    source: "2023 4th International Conference on Electronics and Sustainable Communication Systems, ICESC 2023 - Proceedings"
  },
  {
    year: "2023",
    name: "Ms. Paloju Nagarani",
    title: "Design of AED Based Drone to Deliver the Medical Kit on an Emergency Basis",
    source: "2023 3rd International Conference on Advancement in Electronics and Communication Engineering, AECE 2023"
  },
  {
    year: "2023",
    name: "Ms. Parshapa Padma",
    title: "Detection of Vulnerability in Websites Predominantly Against CSRF Using Machine Learning",
    source: "Proceedings - International Conference on Technological Advancements in Computational Sciences, ICTACS 2023"
  },
  {
    year: "2023",
    name: "Ms. S. Lalitha",
    title: "Identification of Brain Tumors in MR Images Using UNet CNN Model",
    source: "7th International Conference on Electronics, Communication and Aerospace Technology, ICECA 2023 - Proceedings"
  },
  {
    year: "2023",
    name: "Ms. Souza Cheryl D",
    title: "Comparative Performance Analysis of Fine Tuned Optimized Deep Transfer Learning Techniques for Fruit Quality Assessment",
    source: "2023 International Conference on Evolutionary Algorithms and Soft Computing Techniques, EASCT 2023"
  },
  {
    year: "2023",
    name: "Ms. Souza Cheryl D",
    title: "AI Model for Bird Species Prediction with Detection of Rare, Migratory and Extinction Birds using ELM Boosted by OBS",
    source: "Winter Summit on Smart Computing and Networks, WiSSCoN 2023"
  },
  {
    year: "2023",
    name: "Ms. Vineela Krishna Suri",
    title: "Federated Learning and Adaptive Privacy Preserving in Healthcare",
    source: "Lecture Notes in Networks and Systems"
  },
  {
    year: "2022",
    name: "Dr. S. Venkata Suryanarayana",
    title: "Using Computer Vision to enhance Safety in a Post COVID World",
    source: "2022 International Conference on Data Science, Agents and Artificial Intelligence, ICDSAAI 2022"
  },
  {
    year: "2022",
    name: "Dr. L N C Prakash K",
    title: "Data Analytics in Farming: Rice price prediction in Andhra Pradesh",
    source: "2022 5th International Conference on Multimedia, Signal Processing and Communication Technologies, IMPACT 2022"
  },
  {
    year: "2022",
    name: "Dr. L N C Prakash K",
    title: "Optimization of K-Means Clustering with Modified Spiral Phenomena",
    source: "Lecture Notes in Electrical Engineering"
  },
  {
    year: "2022",
    name: "Dr. A. Srinivasa Reddy",
    title: "Performance of VANET over MANET in Mobile Computing Environment",
    source: "7th International Conference on Communication and Electronics Systems, ICCES 2022 - Proceedings"
  },
  {
    year: "2022",
    name: "Ms. Burra Sabitha",
    title: "Forensics-as-a-service: A Review of Mobile Forensics",
    source: "Proceedings of 5th International Conference on Contemporary Computing and Informatics, IC3I 2022"
  },
  {
    year: "2022",
    name: "Dr. K. Sankar",
    title: "An Integration of Deep Learning Approach for prediction of Consumer Reviews using Sentiment Analysis",
    source: "3rd International Conference on Electronics and Sustainable Communication Systems, ICESC 2022 - Proceedings"
  }
];


const uniqueYears = ["All", ...Array.from(new Set(conferences.map(c => c.year)))];
const uniqueFaculty = ["All", ...Array.from(new Set(conferences.map(c => c.name)))];

export default function ConferencePage() {
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
            Conference Publications
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
                    Source Title
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
                        {conf.source}
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan="4" className="px-6 py-4 text-center text-gray-600 dark:text-gray-300">
                      No conference publications found for selected filters.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>

          <button
            onClick={scrollToTop}
            className="fixed bottom-6 right-6 z-50 bg-primary hover:bg-primary/90 text-white rounded-full p-3 shadow-lg transition-transform transform hover:scale-110"
            aria-label="Scroll to top"
          >
            <ArrowUp className="w-5 h-5" />
          </button>
        </div>
      </div>
      </motion.div>
    </main>
      <Footer />
    </div>
  );
}
