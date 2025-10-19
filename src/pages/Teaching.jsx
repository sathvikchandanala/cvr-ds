import React, { useState } from "react";
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { ArrowUp } from "lucide-react";
import { FaSearch, FaUsers, FaEnvelope, FaCalendarAlt, FaIdBadge } from "react-icons/fa";
import Nav from "./Nav";
import Footer from "./Footer";

//  Images you already imported (keep these paths as-is)
import hod from "../assets/hod.webp";
import nikitha_manne from "../assets/NikitaManne.jpg";
import prasanna from "../assets/Prasanna.jpeg";
import Suman from "../assets/Suman.jpg";
import SriLaxmiKuna from "../assets/SriLaxmiKuna.jpeg";
import Yaseen_pasha from "../assets/Yaseen-PashaMoghal.jpg";
import Phaniraj from "../assets/PhanirajKumar.jpg";
import Yasmeen_Aashu from "../assets/YasmeenAashu.jpeg";
import AfreenMohammed from "../assets/AfreenMohammed.jpeg";
import SrinivasaReddyA from "../assets/Srinivasa-ReddyA.jpg";
import SrichandanaA from "../assets/SrichandanaA.jpg";
import SatyanarayanaN from "../assets/SatyanarayanaN.jpg";
import SabithaB from "../assets/SabithaB.jpg";
import vijay from "../assets/vijay.jpg";
import vineela from "../assets/vineela.jpg";
import nitya from "../assets/nitya.jpg";
import RanadheerKumarKS from "../assets/Ranadheer-KumarK-S.jpeg";
import RamyaT from "../assets/RamyaT.jpg";
import RameshVankudoth from "../assets/RameshVankudoth.jpg";
import RamaKrishnaB from "../assets/Rama-KrishnaB.jpg";
import PraveenKumarV from "../assets/Praveen-KumarV.jpg";
import PrashanthDonda from "../assets/PrashanthDonda.jpg";
import PadmaParshapu from "../assets/PadmaParshapu.jpg";
import NagasriArava from "../assets/NagasriArava.jpg";
import NagaraniP from "../assets/NagaraniP.jpg";
import LalithaS from "../assets/LalithaS.jpg";
import KrishnaErugu from "../assets/KrishnaErugu.jpg";
import HarishKumarK from "../assets/Harish-KumarK.jpg";
import HariShankarP from "../assets/Hari-ShankarP.jpg";
import BalakrishnaReddyS from "../assets/Balakrishna-ReddyS.jpg";
import AhmedShahebaaz from "../assets/AhmedShahebaaz.jpg";
import Annapurna from "../assets/Annapurna.jpg";
import baswaraj from "../assets/baswaraj.jpeg";
import jhanbhasha from "../assets/jhan bhasha.jpeg";
import klncprakash from "../assets/klnc prakash.jpg";
import Ravikiran from "../assets/Ravikiran.jpeg";
import Sreenu from "../assets/Sreenu.jpg";
import swathi from "../assets/swathi.jpg";
import varaprasad from "../assets/varaprasad.jpeg";
import sreevani from "../assets/sreevani.jpeg";

// Fallback: some faculty images are not present — leave image: null for those so placeholder will be used.

// Helper for generated placeholder avatar (same logic as NonTeachingStaff.jsx)
const getImageUrl = (name) => {
  const initial = name ? name.charAt(0).toUpperCase() : "S";
  const colors = ["2563EB", "9333EA", "DC2626", "16A34A", "EA580C"];
  const color = colors[initial.charCodeAt(0) % colors.length];
  return `https://placehold.co/160x160/${color}/FFFFFF?text=${initial}`;
};

// === Faculty data with the additional fields you provided (S.No. 1-40) ===
const facultyData = [
  {
    title: "Professors",
    members: [
      {
        name: "Dr. S.V.Suryanarayana",
        designation: "Professor & HoD",
        qualification: "M.Tech Ph.D",
        joined: "29.05.2017",
        nature: "Regular",
        specialization: "Data Mining",
        email: "suryanarayana@cvr.ac.in",
        image: hod,
        profileLink: "https://portal.vmedulife.com/institute/Faculty/viewDetails/Cvr-Telangana/37438",
      },
      {
        name: "Dr. N. Satyanarayana",
        designation: "Professor",
        qualification: "M.Tech Ph.D",
        joined: "01.03.2024",
        nature: "Regular",
        specialization: "Machine Learning",
        email: "n.satyanarayana@cvr.ac.in",
        image: SatyanarayanaN,
        profileLink: "https://portal.vmedulife.com/institute/Faculty/viewDetails/Cvr-Telangana/37439",
      },
    ],
  },

  {
    title: "Associate Professors",
    members: [
      {
        name: "Dr. LNC Prakash K",
        designation: "Associate Professor",
        qualification: "M.Tech Ph.D",
        joined: "22.03.2021",
        nature: "Regular",
        specialization: "Data Mining",
        email: "klnc.prakash@cvr.ac.in",
        image: klncprakash,
        profileLink: "https://portal.vmedulife.com/institute/Faculty/viewDetails/Cvr-Telangana/37440",
      },
      {
        name: "Dr. A.Srinivasa Reddy",
        designation: "Associate Professor",
        qualification: "M.Tech Ph.D",
        joined: "24.03.2021",
        nature: "Regular",
        specialization: "Image Processing",
        email: "a.srinivasareddy@cvr.ac.in",
        image: SrinivasaReddyA,
        profileLink: "https://portal.vmedulife.com/institute/Faculty/viewDetails/Cvr-Telangana/37441",
      },
      {
        name: "Dr. Varaprasad Rao M",
        designation: "Associate Professor",
        qualification: "M.Tech Ph.D",
        joined: "04.01.2023",
        nature: "Regular",
        specialization: "Natural Language Processing",
        email: "varam78@cvr.ac.in",
        image: varaprasad,
        profileLink: "https://portal.vmedulife.com/institute/Faculty/viewDetails/Cvr-Telangana/37442",
      },
      {
        name: "Dr. Rama Krishna B",
        designation: "Associate Professor",
        qualification: "M.Tech Ph.D",
        joined: "22.01.2024",
        nature: "Regular",
        specialization: "Data Mining",
        email: "ramakrishnabasude@cvr.ac.in",
        image: RamaKrishnaB,
        profileLink: "https://portal.vmedulife.com/institute/Faculty/viewDetails/Cvr-Telangana/37443",
      },
      {
        name: "Dr. Shaik Janbhasha",
        designation: "Associate Professor",
        qualification: "M.Tech Ph.D",
        joined: "28.11.2024",
        nature: "Regular",
        specialization: "Deep Learning",
        email: "afreen.jbasha@cvr.ac.in",
        image: jhanbhasha,
        profileLink: "https://portal.vmedulife.com/institute/Faculty/viewDetails/Cvr-Telangana/38754",
      },
      {
        name: "Dr. Basavaraj Chunchure",
        designation: "Associate Professor",
        qualification: "M.Tech Ph.D",
        joined: "18.12.2024",
        nature: "Regular",
        specialization: "Artificial Intelligence",
        email: "p9880636942@cvr.ac.in",
        image: baswaraj,
        profileLink: "https://portal.vmedulife.com/institute/Faculty/viewDetails/Cvr-Telangana/38755",
      },
      {
        name: "Dr. M.Sreenu",
        designation: "Associate Professor",
        qualification: "M.Tech Ph.D",
        joined: "26.12.2024",
        nature: "Regular",
        specialization: "Blockchain technology",
        email: "pittunaik723@cvr.ac.in",
        image: Sreenu,
        profileLink: "https://portal.vmedulife.com/institute/Faculty/viewDetails/Cvr-Telangana/39612",
      },
      // Dr Sri Laxmi Kuna (from the table)
      {
        name: "Dr. Sri Laxmi Kuna",
        designation: "Associate Professor",
        qualification: "M.Tech Ph.D",
        joined: "01.09.2025",
        nature: "Regular",
        specialization: "Deep Learning",
        email: "drsrilaxmi2019@cvr.ac.in",
        image: SriLaxmiKuna,
        profileLink: "https://portal.vmedulife.com/institute/Faculty/viewDetails/Cvr-Telangana/54188",
      },
    ],
  },

  {
    title: "Sr. Assistant Professors",
    members: [
      {
        name: "Mrs. A Srichandana",
        designation: "Sr. Assistant Professor",
        qualification: "M.Tech (Ph.D.)",
        joined: "01.06.2010",
        nature: "Regular",
        specialization: "Natural Language Processing",
        email: "srichandana@cvr.ac.in",
        image: SrichandanaA,
        profileLink:"https://portal.vmedulife.com/institute/Faculty/viewDetails/Cvr-Telangana/37444",
      },
      {
        name: "Mrs. S. Vineela Krishna",
        designation: "Sr. Assistant Professor",
        qualification: "M.Tech (Ph.D.)",
        joined: "24.06.2021",
        nature: "Regular",
        specialization: "Cloud Computing",
        email: "vineela.krishna@cvr.ac.in",
        image: vineela,
        profileLink: "https://portal.vmedulife.com/institute/Faculty/viewDetails/Cvr-Telangana/37445",
      },
      {
        name: "Mr. Ahmed Shahebaaz",
        designation: "Sr. Assistant Professor",
        qualification: "M.Tech (Ph.D.)",
        joined: "08.01.2022",
        nature: "Regular",
        specialization: "Data Structures",
        email: "ahmed.shahebaaz@cvr.ac.in",
        image: AhmedShahebaaz,
        profileLink: "https://portal.vmedulife.com/institute/Faculty/viewDetails/Cvr-Telangana/37451",
      },
      {
        name: "Dr. Annapurna Gummadi",
        designation: "Sr. Assistant Professor",
        qualification: "M.Tech Ph.D",
        joined: "17.01.2022",
        nature: "Regular",
        specialization: "Machine Learning",
        email: "g.annapurna@cvr.ac.in",
        image: Annapurna,
        profileLink: "https://portal.vmedulife.com/institute/Faculty/viewDetails/Cvr-Telangana/37446",
      },
      {
        name: "Dr. Yasmeen",
        designation: "Sr. Assistant Professor",
        qualification: "M.Tech Ph.D",
        joined: "07.03.2022",
        nature: "Regular",
        specialization: "Cloud Computing",
        email: "yasmeen.aashu@cvr.ac.in",
        image: Yasmeen_Aashu,
        profileLink: "https://portal.vmedulife.com/institute/Faculty/viewDetails/Cvr-Telangana/37447",
      },
      {
        name: "Mrs. E. Nitya",
        designation: "Sr. Assistant Professor",
        qualification: "M.Tech (Ph.D.)",
        joined: "28.04.2022",
        nature: "Regular",
        specialization: "Deep Learning",
        email: "e.nitya@cvr.ac.in",
        image: nitya,
        profileLink: "https://portal.vmedulife.com/institute/Faculty/viewDetails/Cvr-Telangana/37448",
      },
      {
        name: "Mrs. P. Padma",
        designation: "Sr. Assistant Professor",
        qualification: "M.Tech (Ph.D.)",
        joined: "25.01.2023",
        nature: "Regular",
        specialization: "Machine Learning",
        email: "p.padma@cvr.ac.in",
        image: PadmaParshapu,
        profileLink: "https://portal.vmedulife.com/institute/Faculty/viewDetails/Cvr-Telangana/37458",
      },
      {
        name: "Mr. P. Hari Shankar",
        designation: "Sr. Assistant Professor",
        qualification: "M.Tech (Ph.D.)",
        joined: "27.01.2023",
        nature: "Regular",
        specialization: "Cloud Computing",
        email: "harishankar@cvr.ac.in",
        image: HariShankarP,
        profileLink: "https://portal.vmedulife.com/institute/Faculty/viewDetails/Cvr-Telangana/37459",
      },
      {
        name: "Mr. K. Harish Kumar",
        designation: "Sr. Assistant Professor",
        qualification: "M.Tech (Ph.D.)",
        joined: "06.02.2023",
        nature: "Regular",
        specialization: "Cloud Computing",
        email: "k.harish@cvr.ac.in",
        image: HarishKumarK,
        profileLink: "https://portal.vmedulife.com/institute/Faculty/viewDetails/Cvr-Telangana/37463",
      },
      {
        name: "Mr. K.S. Ranadheer Kumar",
        designation: "Sr. Assistant Professor",
        qualification: "M.Tech (Ph.D.)",
        joined: "16.03.2023",
        nature: "Regular",
        specialization: "Artificial Intelligence",
        email: "ranadheer@cvr.ac.in",
        image: RanadheerKumarKS,
        profileLink: "https://portal.vmedulife.com/institute/Faculty/viewDetails/Cvr-Telangana/37464",
      },
    ],
  },

  {
    title: "Assistant Professors",
    members: [
      {
        name: "Ms. S. Lalitha",
        designation: "Assistant Professor",
        qualification: "M.Tech",
        joined: "01.05.2015",
        nature: "Regular",
        specialization: "Artificial Intelligence",
        email: "s.lalitha@cvr.ac.in",
        image: LalithaS,
        profileLink: "https://portal.vmedulife.com/institute/Faculty/viewDetails/Cvr-Telangana/37449",
      },
      {
        name: "Mrs. P. Nagarani",
        designation: "Assistant Professor",
        qualification: "M.Tech",
        joined: "28.12.2019",
        nature: "Regular",
        specialization: "Machine Learning Programming",
        email: "p.nagarani@cvr.ac.in",
        image: NagaraniP,
        profileLink: "https://portal.vmedulife.com/institute/Faculty/viewDetails/Cvr-Telangana/37450",
      },
      {
        name: "Mr. S. Balakrishna Reddy",
        designation: "Assistant Professor",
        qualification: "M.Tech (Ph.D.)",
        joined: "10.01.2022",
        nature: "Regular",
        specialization: "Computer Networks",
        email: "s.balakrishna@cvr.ac.in",
        image: BalakrishnaReddyS,
        profileLink: "https://portal.vmedulife.com/institute/Faculty/viewDetails/Cvr-Telangana/37452",
      },
      {
        name: "Mrs. M. Nikita",
        designation: "Assistant Professor",
        qualification: "M.Tech (Ph.D.)",
        joined: "07.03.2022",
        nature: "Regular",
        specialization: "Cloud Computing",
        email: "sainikita@cvr.ac.in",
        image: nikitha_manne,
        profileLink: "https://portal.vmedulife.com/institute/Faculty/viewDetails/Cvr-Telangana/37453",
      },
      {
        name: "Mr. Prashanth Donda",
        designation: "Assistant Professor",
        qualification: "M.Tech",
        joined: "14.03.2022",
        nature: "Regular",
        specialization: "Operating Systems",
        email: "teaching.prashanth@cvr.ac.in",
        image: PrashanthDonda,
        profileLink: "https://portal.vmedulife.com/institute/Faculty/viewDetails/Cvr-Telangana/37454",
      },
      {
        name: "Mr. V. Ramesh",
        designation: "Assistant Professor",
        qualification: "M.Tech (Ph.D.)",
        joined: "22.03.2022",
        nature: "Regular",
        specialization: "Block Chain Technologies",
        email: "v.ramesh406@cvr.ac.in",
        image: RameshVankudoth,
        profileLink: "https://portal.vmedulife.com/institute/Faculty/viewDetails/Cvr-Telangana/37455",
      },
      {
        name: "Ms. Arava Nagasri",
        designation: "Assistant Professor",
        qualification: "M.Tech (Ph.D.)",
        joined: "07.04.2022",
        nature: "Regular",
        specialization: "Programming in C",
        email: "nagasri.arava@cvr.ac.in",
        image: NagasriArava,
        profileLink: "https://portal.vmedulife.com/institute/Faculty/viewDetails/Cvr-Telangana/37456",
      },
      {
        name: "Mrs. M. Srivani",
        designation: "Assistant Professor",
        qualification: "M.Tech",
        joined: "23.01.2023",
        nature: "Regular",
        specialization: "Cyber Security",
        email: "m.srivani@cvr.ac.in",
        image: sreevani,
        profileLink: "https://portal.vmedulife.com/institute/Faculty/viewDetails/Cvr-Telangana/37457",
      },
      {
        name: "Mrs. T. Ramya",
        designation: "Assistant Professor",
        qualification: "M.Tech (Ph.D.)",
        joined: "30.01.2023",
        nature: "Regular",
        specialization: "Artificial Intelligence",
        email: "t.ramya@cvr.ac.in",
        image: RamyaT,
        profileLink: "https://portal.vmedulife.com/institute/Faculty/viewDetails/Cvr-Telangana/37460",
      },
      {
        name: "Mr. V. Praveen Kumar",
        designation: "Assistant Professor",
        qualification: "M.Tech (Ph.D.)",
        joined: "01.02.2023",
        nature: "Regular",
        specialization: "Database Management Systems",
        email: "v.praveen@cvr.ac.in",
        image: PraveenKumarV,
        profileLink: "https://portal.vmedulife.com/institute/Faculty/viewDetails/Cvr-Telangana/37461",
      },
      {
        name: "Mrs. B. Sabitha",
        designation: "Assistant Professor",
        qualification: "M.Tech",
        joined: "01.02.2023",
        nature: "Regular",
        specialization: "Data Science",
        email: "b.sabitha@cvr.ac.in",
        image: SabithaB,
        profileLink: "https://portal.vmedulife.com/institute/Faculty/viewDetails/Cvr-Telangana/37462",
      },
      {
        name: "Mr. Moghal. Yaseen Pasha",
        designation: "Assistant Professor",
        qualification: "M.Tech",
        joined: "01.02.2024",
        nature: "Regular",
        specialization: "Cloud Computing",
        email: "moghal.yaseenpasha@cvr.ac.in",
        image: Yaseen_pasha,
        profileLink: "https://portal.vmedulife.com/institute/Faculty/viewDetails/Cvr-Telangana/37465",
      },
      {
        name: "Dr. Afreen Fatima Mohammed",
        designation: "Assistant Professor",
        qualification: "M.Tech Ph.D",
        joined: "05.03.2024",
        nature: "Regular",
        specialization: "Data Mining",
        email: "afreen0422@cvr.ac.in",
        image: AfreenMohammed,
        profileLink: "https://portal.vmedulife.com/institute/Faculty/viewDetails/Cvr-Telangana/37466",
      },
      {
        name: "Mr. Erugu Krishna",
        designation: "Assistant Professor",
        qualification: "M.Tech(Ph.D)",
        joined: "28.03.2024",
        nature: "Regular",
        specialization: "Cloud Computing",
        email: "krishna.cseit@cvr.ac.in",
        image: KrishnaErugu,
        profileLink: "https://portal.vmedulife.com/institute/Faculty/viewDetails/Cvr-Telangana/37467",
      },
      {
        name: "Mrs. V. Swathi",
        designation: "Assistant Professor",
        qualification: "M.Tech (Ph.D)",
        joined: "26.12.2024",
        nature: "Regular",
        specialization: "Cloud Computing",
        email: "swathivelugoti@cvr.ac.in",
        image: swathi,
        profileLink: "https://portal.vmedulife.com/institute/Faculty/viewDetails/Cvr-Telangana/40110",
      },
      {
        name: "Mr. K. Ravikiran Reddy",
        designation: "Assistant Professor",
        qualification: "M.Tech (Ph.D)",
        joined: "30.12.2024",
        nature: "Regular",
        specialization: "Programming in C",
        email: "ravikiranreddykandadi.asstprof@cvr.ac.in",
        image: Ravikiran,
        profileLink: "https://portal.vmedulife.com/institute/Faculty/viewDetails/Cvr-Telangana/40109",
      },
      // Newly added (from S.No. 37 onwards) - images not provided yet
      {
        name: "Mr. T. Phaniraj Kumar",
        designation: "Assistant Professor",
        qualification: "M.Tech",
        joined: "12.08.2025",
        nature: "Regular",
        specialization: "Programming in C",
        email: "tphanirk@cvr.ac.in",
        image: Phaniraj,
        profileLink: "https://portal.vmedulife.com/institute/Faculty/viewDetails/Cvr-Telangana/52487",
      },
      {
        name: "Mr. N. Suman",
        designation: "Assistant Professor",
        qualification: "M.Tech (P.hD)",
        joined: "13.08.2025",
        nature: "Regular",
        specialization: "Artificial Intelligence",
        email: "sumannayaka14@cvr.ac.in",
        image: Suman,
        profileLink: "https://portal.vmedulife.com/institute/Faculty/viewDetails/Cvr-Telangana/52547",
      },
      {
        name: "Ms. M. Prasanna Lakshmi",
        designation: "Assistant Professor",
        qualification: "M.Tech",
        joined: "01.09.2025",
        nature: "Regular",
        specialization: "Machine Learning",
        email: "mplprasanna9@cvr.ac.in",
        image: prasanna,
        profileLink: "https://portal.vmedulife.com/institute/Faculty/viewDetails/Cvr-Telangana/53132",
      },
      {
        name: "G. Vijay Kumar",
        designation: "Assistant Professor",
        qualification: "M.Tech",
        joined: "22.09.2025",
        nature: "Regular",
        specialization: "Data Sciences",
        email: "vijaygovindu@cvr.ac.in",
        image: vijay,
        profileLink: "https://portal.vmedulife.com/institute/Faculty/viewDetails/Cvr-Telangana/37794",
      },
    ],
  },
];

// Animation preset (same as NonTeachingStaff)
const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15, duration: 0.6, ease: "easeOut" },
  }),
};

const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
};

export default function Teaching() {
  const [search, setSearch] = useState("");

  // filter by name, designation, qualification, specialization, email
  const filteredData = facultyData
    .map((group) => ({
      ...group,
      members: group.members.filter((m) => {
        const q = search.trim().toLowerCase();
        if (!q) return true;
        return (
          (m.name || "").toLowerCase().includes(q) ||
          (m.designation || "").toLowerCase().includes(q) ||
          (m.qualification || "").toLowerCase().includes(q) ||
          (m.specialization || "").toLowerCase().includes(q) ||
          (m.email || "").toLowerCase().includes(q)
        );
      }),
    }))
    .filter((g) => g.members.length > 0);

  return (
    <>
      <Nav />
      <main className="min-h-screen py-24 px-4 md:px-16 space-y-16 bg-gradient-to-b from-white to-gray-50">
        {/* Header */}
        <section className="text-center max-w-3xl mx-auto">
          <motion.h1
            className="text-4xl md:text-5xl font-bold text-black mb-4"
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
          >
            Teaching Faculty
          </motion.h1>
          <motion.p
            className="text-lg text-gray-700"
            variants={fadeInUp}
            initial="hidden"
            animate="visible"
            custom={1}
          >
            Explore our experienced and dedicated teaching faculty who guide students
            in Computer Science & Data Science.
          </motion.p>
        </section>

        {/* Search Bar */}
        <motion.div
          className="flex flex-col sm:flex-row gap-3 justify-center items-center max-w-lg mx-auto"
          variants={fadeInUp}
          initial="hidden"
          animate="visible"
          custom={2}
        >
          <Input
            placeholder="Search by name, designation, specialization, or email..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full sm:w-80 border-blue-300 focus-visible:ring-blue-500"
          />
          <Button
            className="bg-blue-700 hover:bg-blue-800 flex items-center gap-2"
            onClick={() => { }}
          >
            <FaSearch className="text-white" /> Search
          </Button>
        </motion.div>

        {/* Sections */}
        <section className="max-w-7xl mx-auto space-y-16">
          {filteredData.length === 0 && search.length > 0 ? (
            <div className="text-center text-gray-500 text-lg">
              No results found for "{search}".
            </div>
          ) : (
            filteredData.map((group, index) => (
              <motion.div
                key={group.title + index}
                variants={fadeInUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={index + 3}
              >
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent flex items-center gap-2">
                    <FaUsers className="text-blue-700" />
                    {group.title} ({group.members.length})
                  </h2>
                  <Separator className="flex-grow ml-4" />
                </div>

                <div className="grid md:grid-cols-3 lg:grid-cols-4 sm:grid-cols-2 gap-8">
                  {group.members.map((member, i) => (
                    <motion.div
                      key={member.name + i}
                      variants={fadeInUp}
                      custom={i}
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true }}
                    >
                      <Card className="hover:shadow-xl hover:-translate-y-1 transition duration-300 rounded-2xl border border-gray-100">
                        <CardHeader className="flex flex-col items-center gap-2 pt-6">
                          {member.profileLink ? (
                            <a href={member.profileLink} target="_blank" rel="noopener noreferrer">
                              <img
                                src={member.image ? member.image : getImageUrl(member.name)}
                                alt={member.name}
                                className="w-30 h-30 object-cover object-top mb-4 shadow rounded-full shadow-lg border-4 border-blue-100"
                              />
                            </a>
                          ) : (
                            <img
                              src={member.image ? member.image : getImageUrl(member.name)}
                              alt={member.name}
                              className="w-30 h-30 object-cover object-top mb-4 shadow rounded-full shadow-lg border-4 border-blue-100"
                            />
                          )}
                          <h3 className="text-lg font-semibold text-gray-900">{member.name}</h3>
                          <p className="text-sm text-gray-500">{member.qualification}</p>
                          <p className="text-sm font-medium text-blue-700 bg-blue-50 rounded-full px-3 py-1">
                            {member.designation}
                          </p>
                        </CardHeader>

                        <CardContent className="text-center text-gray-700 space-y-2 pb-6">
                          <p className="text-sm"><strong>Specialization:</strong> {member.specialization || "-"}</p>
                          <p className="text-sm"><strong>Date of Joining:</strong> {member.joined || "-"}</p>
                          {member.email && (
                            <a
                              href={`mailto:${member.email}`}
                              className="flex items-center justify-center gap-2 text-blue-600 hover:underline mt-2"
                            >
                              <FaEnvelope /> {member.email}
                            </a>
                          )}
                        </CardContent>
                      </Card>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))
          )}
        </section>

        {/* Scroll To Top */}
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
}
