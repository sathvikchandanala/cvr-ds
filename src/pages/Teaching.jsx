/*
import React, { useState } from "react";
import Nav from "./Nav";
import Footer from "./Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ArrowUp } from "lucide-react";
import { FaSearch } from "react-icons/fa";

// ✅ Faculty Images Imports
import hod from "../assets/hod.webp";
import nikitha_manne from "../assets/NikitaManne.jpg";
import Yaseen_pasha from "../assets/Yaseen-PashaMoghal.jpg";
import Yasmeen_Aashu from "../assets/YasmeenAashu.jpeg";
import AfreenMohammed from "../assets/AfreenMohammed.jpeg";
import SrinivasaReddyA from "../assets/Srinivasa-ReddyA.jpg";
import SrichandanaA from "../assets/SrichandanaA.jpg";
import SatyanarayanaN from "../assets/SatyanarayanaN.jpg";
import SabithaB from "../assets/SabithaB.jpg";
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
import vineela_krishna from "../assets/vineela_krishna.jpg";
import nitya from "../assets/nitya.jpg";
import phaniraj from "../assets/phaniraj.jpg";
import suman from "../assets/suman.jpg";

// ✅ Faculty Data with profile links
const facultyData = [
  {
    title: "Professors",
    count: 2,
    members: [
      {
        name: "Dr. Venkata Suryanarayana S",
        degree: "M.Tech., Ph.D.",
        designation: "Head of the Department",
        image: hod,
        profileUrl: "https://portal.vmedulife.com/institute/Faculty/viewDetails/Cvr-Telangana/37438",
      },
      {
        name: "Dr. N. Satyanarayana",
        degree: "M.Tech., Ph.D.",
        designation: "Professor",
        image: SatyanarayanaN,
        profileUrl: "https://portal.vmedulife.com/institute/Faculty/viewDetails/Cvr-Telangana/37439",
      },
    ],
  },
  {
    title: "Associate Professors",
    count: 7,
    members: [
      { name: "LNC Prakash K", degree: "M.Tech., Ph.D.", designation: "Associate Professor", image: klncprakash, profileUrl: "https://portal.vmedulife.com/institute/Faculty/viewDetails/Cvr-Telangana/37440" },
      { name: "A Srinivas Reddy", degree: "M.Tech., Ph.D.", designation: "Associate Professor", image: SrinivasaReddyA, profileUrl: "https://portal.vmedulife.com/institute/Faculty/viewDetails/Cvr-Telangana/37441" },
      { name: "Varaprasad Rao M", degree: "M.Tech., Ph.D.", designation: "Associate Professor", image: varaprasad, profileUrl: "https://portal.vmedulife.com/institute/Faculty/viewDetails/Cvr-Telangana/37442" },
      { name: "Rama Krishna B", degree: "M.Tech., Ph.D.", designation: "Associate Professor", image: RamaKrishnaB, profileUrl: "https://portal.vmedulife.com/institute/Faculty/viewDetails/Cvr-Telangana/37443" },
      { name: "Janbhasha Shaik", degree: "M.Tech., Ph.D.", designation: "Associate Professor", image: jhanbhasha, profileUrl: "https://portal.vmedulife.com/institute/Faculty/viewDetails/Cvr-Telangana/38754" },
      { name: "Basavaraj Chunchure", degree: "M.Tech., Ph.D.", designation: "Associate Professor", image: baswaraj, profileUrl: "https://portal.vmedulife.com/institute/Faculty/viewDetails/Cvr-Telangana/38755" },
      { name: "M Sreenu", degree: "M.Tech., Ph.D.", designation: "Associate Professor", image: Sreenu, profileUrl: "https://portal.vmedulife.com/institute/Faculty/viewDetails/Cvr-Telangana/39612" },
    ],
  },
  {
    title: "Sr. Assistant Professors",
    count: 10,
    members: [
      { name: "Srichandana Abbineni", degree: "M.Tech., (Ph.D)", designation: "Sr. Assistant Professor", image: SrichandanaA, profileUrl: "https://portal.vmedulife.com/institute/Faculty/viewDetails/Cvr-Telangana/37444" },
      { name: "Vineela Krishna Suri", degree: "M.Tech., (Ph.D)", designation: "Sr. Assistant Professor", image: vineela_krishna, profileUrl: "https://portal.vmedulife.com/institute/Faculty/viewDetails/Cvr-Telangana/37445" },
      { name: "Ahmed Shahebaaz", degree: "M.Tech., (Ph.D)", designation: "Sr. Assistant Professor", image: AhmedShahebaaz, profileUrl: "https://portal.vmedulife.com/institute/Faculty/viewDetails/Cvr-Telangana/37451" },
      { name: "Annapurna Gummadi", degree: "M.Tech., Ph.D.", designation: "Sr. Assistant Professor", image: Annapurna, profileUrl: "https://portal.vmedulife.com/institute/Faculty/viewDetails/Cvr-Telangana/37446" },
      { name: "Yasmeen MD", degree: "M.Tech., Ph.D.", designation: "Sr. Assistant Professor", image: Yasmeen_Aashu, profileUrl: "https://portal.vmedulife.com/institute/Faculty/viewDetails/Cvr-Telangana/37447" },
      { name: "Nitya Erupaka", degree: "M.Tech., (Ph.D)", designation: "Sr. Assistant Professor", image: nitya, profileUrl: "https://portal.vmedulife.com/institute/Faculty/viewDetails/Cvr-Telangana/37448" },
      { name: "Padma Parshapu", degree: "M.Tech., (Ph.D)", designation: "Sr. Assistant Professor", image: PadmaParshapu, profileUrl: "https://portal.vmedulife.com/institute/Faculty/viewDetails/Cvr-Telangana/37458" },
      { name: "Hari Shankar Punna", degree: "M.Tech., (Ph.D)", designation: "Sr. Assistant Professor", image: HariShankarP, profileUrl: "https://portal.vmedulife.com/institute/Faculty/viewDetails/Cvr-Telangana/37459" },
      { name: "Harish Kumar K", degree: "M.Tech., (Ph.D)", designation: "Sr. Assistant Professor", image: HarishKumarK, profileUrl: "https://portal.vmedulife.com/institute/Faculty/viewDetails/Cvr-Telangana/37463" },
      { name: "Ranadheer Kumar K S", degree: "M.Tech., (Ph.D)", designation: "Sr. Assistant Professor", image: RanadheerKumarKS, profileUrl: "https://portal.vmedulife.com/institute/Faculty/viewDetails/Cvr-Telangana/37464" },
    ],
  },
  {
    title: "Assistant Professors",
    count: 18,
    members: [
      { name: "Lalitha S", degree: "M.Tech.", designation: "Assistant Professor", image: LalithaS, profileUrl: "https://portal.vmedulife.com/institute/Faculty/viewDetails/Cvr-Telangana/37449" },
      { name: "Nagarani P", degree: "M.Tech.", designation: "Assistant Professor", image: NagaraniP, profileUrl: "https://portal.vmedulife.com/institute/Faculty/viewDetails/Cvr-Telangana/37450" },
      { name: "Balakrishna Reddy S", degree: "M.Tech., (Ph.D)", designation: "Assistant Professor", image: BalakrishnaReddyS, profileUrl: "https://portal.vmedulife.com/institute/Faculty/viewDetails/Cvr-Telangana/37452" },
      { name: "Nikita Manne", degree: "M.Tech., (Ph.D)", designation: "Assistant Professor", image: nikitha_manne, profileUrl: "https://portal.vmedulife.com/institute/Faculty/viewDetails/Cvr-Telangana/37453" },
      { name: "Prashanth Donda", degree: "M.Tech.", designation: "Assistant Professor", image: PrashanthDonda, profileUrl: "https://portal.vmedulife.com/institute/Faculty/viewDetails/Cvr-Telangana/37454" },
      { name: "Ramesh Vankudoth", degree: "M.Tech., (Ph.D)", designation: "Assistant Professor", image: RameshVankudoth, profileUrl: "https://portal.vmedulife.com/institute/Faculty/viewDetails/Cvr-Telangana/37455" },
      { name: "Nagasri Arava", degree: "M.Tech., (Ph.D)", designation: "Assistant Professor", image: NagasriArava, profileUrl: "https://portal.vmedulife.com/institute/Faculty/viewDetails/Cvr-Telangana/37456" },
      { name: "Srivani M", degree: "M.Tech.", designation: "Assistant Professor", image: sreevani, profileUrl: "https://portal.vmedulife.com/institute/Faculty/viewDetails/Cvr-Telangana/37457" },
      { name: "Ramya T", degree: "M.Tech., (Ph.D)", designation: "Assistant Professor", image: RamyaT, profileUrl: "https://portal.vmedulife.com/institute/Faculty/viewDetails/Cvr-Telangana/37460" },
      { name: "Vadapally Praveen", degree: "M.Tech., (Ph.D)", designation: "Assistant Professor", image: PraveenKumarV, profileUrl: "https://portal.vmedulife.com/institute/Faculty/viewDetails/Cvr-Telangana/37461" },
      { name: "Sabitha B", degree: "M.Tech.", designation: "Assistant Professor", image: SabithaB, profileUrl: "https://portal.vmedulife.com/institute/Faculty/viewDetails/Cvr-Telangana/37462" },
      { name: "Moghal Yaseen Pasha", degree: "M.Tech.", designation: "Assistant Professor", image: Yaseen_pasha, profileUrl: "https://portal.vmedulife.com/institute/Faculty/viewDetails/Cvr-Telangana/37465" },
      { name: "Afreen Mohammed", degree: "M.Tech., Ph.D.", designation: "Assistant Professor", image: AfreenMohammed, profileUrl: "https://portal.vmedulife.com/institute/Faculty/viewDetails/Cvr-Telangana/37466" },
      { name: "Krishna Erugu", degree: "M.Tech., (Ph.D)", designation: "Assistant Professor", image: KrishnaErugu, profileUrl: "https://portal.vmedulife.com/institute/Faculty/viewDetails/Cvr-Telangana/37467" },
      { name: "Swathi Velugoti", degree: "M.Tech., (Ph.D)", designation: "Assistant Professor", image: swathi, profileUrl: "https://portal.vmedulife.com/institute/Faculty/viewDetails/Cvr-Telangana/40110" },
      { name: "RaviKiranReddy Kandadi", degree: "M.Tech., (Ph.D)", designation: "Assistant Professor", image: Ravikiran, profileUrl: "https://portal.vmedulife.com/institute/Faculty/viewDetails/Cvr-Telangana/40109" },
      { name: "Phaniraj Thatha", degree: "M.Tech.", designation: "Assistant Professor", image: phaniraj, profileUrl: "https://portal.vmedulife.com/institute/Faculty/viewDetails/Cvr-Telangana/52487" },
      { name: "Suman N", degree: "M.Tech.", designation: "Assistant Professor", image: suman, profileUrl: "https://portal.vmedulife.com/institute/Faculty/viewDetails/Cvr-Telangana/52547" },
    ],
  },
];

const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

export default function Teaching() {
  const [search, setSearch] = useState("");
  const [query, setQuery] = useState("");

  const filteredData = facultyData
    .map((group) => ({
      ...group,
      members: group.members.filter((member) =>
        member.name.toLowerCase().includes(query.toLowerCase())
      ),
    }))
    .filter((group) => group.members.length > 0);

  const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    visible: (i = 1) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.15, duration: 0.6, ease: "easeOut" },
    }),
  };

  return (
    <div className="min-h-screen bg-white font-sans">
      <Nav />
      <div className="flex flex-col items-center justify-center text-center py-24 px-4 sm:px-6 bg-gradient-to-b from-blue-50 to-white space-y-12">
        <div className="w-full max-w-7xl mx-auto">
          <div className="flex flex-col sm:flex-row justify-between items-center mb-10 gap-4">
            <motion.h1 initial="hidden" animate="visible" variants={fadeInUp} className="text-4xl sm:text-5xl font-bold text-gray-800 mb-6">
              Teaching Faculty
            </motion.h1>
            <motion.div className="flex w-full sm:w-auto gap-2 items-center" variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={2}>
              <Input placeholder="Search by name" value={search} onChange={(e) => setSearch(e.target.value)} className="w-full sm:w-64" />
              <Button onClick={() => setQuery(search)} className="flex items-center gap-2">
                <FaSearch /> Search
              </Button>
            </motion.div>
          </div>

          {filteredData.map((group, index) => (
            <motion.div key={index} variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={2} className="mb-16">
              <h2 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent mb-6 text-left">
                {group.title} - {group.count}
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {group.members.map((member, i) => (
                  <motion.div key={i} whileHover={{ scale: 1.05 }} className="w-full">
                    <Card className="rounded-2xl shadow-md bg-white border border-gray-200 hover:shadow-lg transition-shadow">
                      <CardContent className="flex flex-col items-center text-center p-4">
                        <img
                          src={member.image}
                          alt={member.name}
                          onClick={() => window.open(member.profileUrl, "_blank")}
                          className="w-40 h-40 object-cover object-top mb-4 shadow rounded-full cursor-pointer transition-transform hover:scale-105"
                        />
                        <a
                          href={member.profileUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-lg font-semibold text-gray-900 hover:underline"
                        >
                          {member.name}
                        </a>
                        <p className="text-sm text-gray-600">{member.degree}</p>
                        <p className="text-sm text-black-600 mt-1">{member.designation}</p>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 z-50 bg-primary hover:bg-primary/90 text-white rounded-full p-3 shadow-lg transition-transform transform hover:scale-110"
          aria-label="Scroll to top"
        >
          <ArrowUp className="w-5 h-5" />
        </button>
      </div>
      <Footer />
    </div>
  );
}

*/


import React, { useState } from "react";
import Nav from "./Nav";
import Footer from "./Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ArrowUp } from "lucide-react";
import { FaSearch } from "react-icons/fa";

// ✅ Import Images
import hod from "../assets/hod.webp";
import nikitha_manne from "../assets/NikitaManne.jpg"
import Yaseen_pasha from "../assets/Yaseen-PashaMoghal.jpg" 
import Yasmeen_Aashu from "../assets/YasmeenAashu.jpeg"
import AfreenMohammed from "../assets/AfreenMohammed.jpeg"
import SrinivasaReddyA from "../assets/Srinivasa-ReddyA.jpg"
import SrichandanaA from "../assets/SrichandanaA.jpg"
import SatyanarayanaN from "../assets/SatyanarayanaN.jpg"
import SabithaB from "../assets/SabithaB.jpg"
import RanadheerKumarKS  from "../assets/Ranadheer-KumarK-S.jpeg"
import RamyaT from "../assets/RamyaT.jpg"
import RameshVankudoth from "../assets/RameshVankudoth.jpg"
import RamaKrishnaB from "../assets/Rama-KrishnaB.jpg"
import PraveenKumarV from "../assets/Praveen-KumarV.jpg"
import PrashanthDonda from "../assets/PrashanthDonda.jpg"
import PadmaParshapu from "../assets/PadmaParshapu.jpg"
import NagasriArava from "../assets/NagasriArava.jpg"
import NagaraniP from "../assets/NagaraniP.jpg"
import LalithaS from "../assets/LalithaS.jpg"
import KrishnaErugu from "../assets/KrishnaErugu.jpg"
import HarishKumarK from "../assets/Harish-KumarK.jpg"
import HariShankarP from "../assets/Hari-ShankarP.jpg"
import BalakrishnaReddyS from "../assets/Balakrishna-ReddyS.jpg" 
import AhmedShahebaaz from "../assets/AhmedShahebaaz.jpg"
import Annapurna from "../assets/Annapurna.jpg"
import baswaraj from "../assets/baswaraj.jpeg"
import jhanbhasha from "../assets/jhan bhasha.jpeg"
import klncprakash from "../assets/klnc prakash.jpg"
import Ravikiran from "../assets/Ravikiran.jpeg"
import Sreenu from "../assets/Sreenu.jpg"
import swathi from "../assets/swathi.jpg"
import varaprasad from "../assets/varaprasad.jpeg"
import sreevani from "../assets/sreevani.jpeg"
//import phaniraj from "../assets/phaniraj.jpg";
//import suman from "../assets/suman.jpg";


// ✅ Faculty Data
const facultyData = [
  {
    title: "Professors",
    count: 2,
    members: [
      {
        name: "Dr. S.V.Suryanarayana",
        degree: "M.Tech., Ph.D.",
        designation: "Head of the Department",
        image: hod,
        profileLink: "https://portal.vmedulife.com/institute/Faculty/viewDetails/Cvr-Telangana/37438"
      },
      {
        name: "Dr. N. Satyanarayana",
        degree: "M.Tech., Ph.D.",
        designation: "Professor",
        image: SatyanarayanaN,
        profileLink: "https://portal.vmedulife.com/institute/Faculty/viewDetails/Cvr-Telangana/37439"
      }
    ]
  },
  {
    title: "Associate Professors",
    count: 7,
    members: [
      {
        name: "Dr. LNC Prakash K",
        degree: "M.Tech., Ph.D.",
        designation: "Associate Professor",
        image: klncprakash,
        profileLink: "https://portal.vmedulife.com/institute/Faculty/viewDetails/Cvr-Telangana/37440"
      },
      {
        name: "Dr. A.Srinivasa Reddy",
        degree: "M.Tech., Ph.D.",
        designation: "Associate Professor",
        image: SrinivasaReddyA,
        profileLink: "https://portal.vmedulife.com/institute/Faculty/viewDetails/Cvr-Telangana/37441"
      },
      {
        name: "Dr. Varaprasad Rao M",
        degree: "M.Tech., Ph.D.",
        designation: "Associate Professor",
        image: varaprasad,
        profileLink: "https://portal.vmedulife.com/institute/Faculty/viewDetails/Cvr-Telangana/37442"
      },
      {
        name: "Dr. Rama Krishna B",
        degree: "M.Tech., Ph.D.",
        designation: "Associate Professor",
        image: RamaKrishnaB,
        profileLink: "https://portal.vmedulife.com/institute/Faculty/viewDetails/Cvr-Telangana/37443"
      },
      {
        name: "Dr. Shaik Janbhasha",
        degree: "M.Tech., Ph.D.",
        designation: "Associate Professor",
        image: jhanbhasha,
        profileLink: "https://portal.vmedulife.com/institute/Faculty/viewDetails/Cvr-Telangana/38754"
      },
      {
        name: "Dr. Basavaraj Chunchure",
        degree: "M.Tech., Ph.D.",
        designation: "Associate Professor",
        image: baswaraj,
        profileLink: "https://portal.vmedulife.com/institute/Faculty/viewDetails/Cvr-Telangana/38755"
      },
      {
        name: "Dr. M.Sreenu",
        degree: "M.Tech., Ph.D.",
        designation: "Associate Professor",
        image: Sreenu,
        profileLink: "https://portal.vmedulife.com/institute/Faculty/viewDetails/Cvr-Telangana/39612"
      }
    ]
  },

/*

{
    title: "Sr. Assistant Professors",
    count: 10,
    members: [
      { 
        name: "Srichandana Abbineni", degree: "M.Tech., (Ph.D)", designation: "Sr. Assistant Professor", image: SrichandanaA, profileUrl: "https://portal.vmedulife.com/institute/Faculty/viewDetails/Cvr-Telangana/37444" },
      { name: "Vineela Krishna Suri", degree: "M.Tech., (Ph.D)", designation: "Sr. Assistant Professor", image: vineela_krishna, profileUrl: "https://portal.vmedulife.com/institute/Faculty/viewDetails/Cvr-Telangana/37445" },
      { name: "Ahmed Shahebaaz", degree: "M.Tech., (Ph.D)", designation: "Sr. Assistant Professor", image: AhmedShahebaaz, profileUrl: "https://portal.vmedulife.com/institute/Faculty/viewDetails/Cvr-Telangana/37451" },
      { name: "Annapurna Gummadi", degree: "M.Tech., Ph.D.", designation: "Sr. Assistant Professor", image: Annapurna, profileUrl: "https://portal.vmedulife.com/institute/Faculty/viewDetails/Cvr-Telangana/37446" },
      { name: "Yasmeen MD", degree: "M.Tech., Ph.D.", designation: "Sr. Assistant Professor", image: Yasmeen_Aashu, profileUrl: "https://portal.vmedulife.com/institute/Faculty/viewDetails/Cvr-Telangana/37447" },
      { name: "Nitya Erupaka", degree: "M.Tech., (Ph.D)", designation: "Sr. Assistant Professor", image: nitya, profileUrl: "https://portal.vmedulife.com/institute/Faculty/viewDetails/Cvr-Telangana/37448" },
      { name: "Padma Parshapu", degree: "M.Tech., (Ph.D)", designation: "Sr. Assistant Professor", image: PadmaParshapu, profileUrl: "https://portal.vmedulife.com/institute/Faculty/viewDetails/Cvr-Telangana/37458" },
      { name: "Hari Shankar Punna", degree: "M.Tech., (Ph.D)", designation: "Sr. Assistant Professor", image: HariShankarP, profileUrl: "https://portal.vmedulife.com/institute/Faculty/viewDetails/Cvr-Telangana/37459" },
      { name: "Harish Kumar K", degree: "M.Tech., (Ph.D)", designation: "Sr. Assistant Professor", image: HarishKumarK, profileUrl: "https://portal.vmedulife.com/institute/Faculty/viewDetails/Cvr-Telangana/37463" },
      { name: "Ranadheer Kumar K S", degree: "M.Tech., (Ph.D)", designation: "Sr. Assistant Professor", image: RanadheerKumarKS, profileUrl: "https://portal.vmedulife.com/institute/Faculty/viewDetails/Cvr-Telangana/37464" },
    ],
  },
  */
  {
    title: "Assistant Professors",
    count: 18,
    members: [
      { name: "Lalitha S", degree: "M.Tech.", designation: "Assistant Professor", image: LalithaS, profileUrl: "https://portal.vmedulife.com/institute/Faculty/viewDetails/Cvr-Telangana/37449" },
      { name: "Nagarani P", degree: "M.Tech.", designation: "Assistant Professor", image: NagaraniP, profileUrl: "https://portal.vmedulife.com/institute/Faculty/viewDetails/Cvr-Telangana/37450" },
      { name: "Balakrishna Reddy S", degree: "M.Tech., (Ph.D)", designation: "Assistant Professor", image: BalakrishnaReddyS, profileUrl: "https://portal.vmedulife.com/institute/Faculty/viewDetails/Cvr-Telangana/37452" },
      { name: "Nikita Manne", degree: "M.Tech., (Ph.D)", designation: "Assistant Professor", image: nikitha_manne, profileUrl: "https://portal.vmedulife.com/institute/Faculty/viewDetails/Cvr-Telangana/37453" },
      { name: "Prashanth Donda", degree: "M.Tech.", designation: "Assistant Professor", image: PrashanthDonda, profileUrl: "https://portal.vmedulife.com/institute/Faculty/viewDetails/Cvr-Telangana/37454" },
      { name: "Ramesh Vankudoth", degree: "M.Tech., (Ph.D)", designation: "Assistant Professor", image: RameshVankudoth, profileUrl: "https://portal.vmedulife.com/institute/Faculty/viewDetails/Cvr-Telangana/37455" },
      { name: "Nagasri Arava", degree: "M.Tech., (Ph.D)", designation: "Assistant Professor", image: NagasriArava, profileUrl: "https://portal.vmedulife.com/institute/Faculty/viewDetails/Cvr-Telangana/37456" },
      { name: "Srivani M", degree: "M.Tech.", designation: "Assistant Professor", image: sreevani, profileUrl: "https://portal.vmedulife.com/institute/Faculty/viewDetails/Cvr-Telangana/37457" },
      { name: "Ramya T", degree: "M.Tech., (Ph.D)", designation: "Assistant Professor", image: RamyaT, profileUrl: "https://portal.vmedulife.com/institute/Faculty/viewDetails/Cvr-Telangana/37460" },
      { name: "Vadapally Praveen", degree: "M.Tech., (Ph.D)", designation: "Assistant Professor", image: PraveenKumarV, profileUrl: "https://portal.vmedulife.com/institute/Faculty/viewDetails/Cvr-Telangana/37461" },
      { name: "Sabitha B", degree: "M.Tech.", designation: "Assistant Professor", image: SabithaB, profileUrl: "https://portal.vmedulife.com/institute/Faculty/viewDetails/Cvr-Telangana/37462" },
      { name: "Moghal Yaseen Pasha", degree: "M.Tech.", designation: "Assistant Professor", image: Yaseen_pasha, profileUrl: "https://portal.vmedulife.com/institute/Faculty/viewDetails/Cvr-Telangana/37465" },
      { name: "Afreen Mohammed", degree: "M.Tech., Ph.D.", designation: "Assistant Professor", image: AfreenMohammed, profileUrl: "https://portal.vmedulife.com/institute/Faculty/viewDetails/Cvr-Telangana/37466" },
      { name: "Krishna Erugu", degree: "M.Tech., (Ph.D)", designation: "Assistant Professor", image: KrishnaErugu, profileUrl: "https://portal.vmedulife.com/institute/Faculty/viewDetails/Cvr-Telangana/37467" },
      { name: "Swathi Velugoti", degree: "M.Tech., (Ph.D)", designation: "Assistant Professor", image: swathi, profileUrl: "https://portal.vmedulife.com/institute/Faculty/viewDetails/Cvr-Telangana/40110" },
      { name: "RaviKiranReddy Kandadi", degree: "M.Tech., (Ph.D)", designation: "Assistant Professor", image: Ravikiran, profileUrl: "https://portal.vmedulife.com/institute/Faculty/viewDetails/Cvr-Telangana/40109" },
  //    { name: "Phaniraj Thatha", degree: "M.Tech.", designation: "Assistant Professor", image: phaniraj, profileUrl: "https://portal.vmedulife.com/institute/Faculty/viewDetails/Cvr-Telangana/52487" },
    //  { name: "Suman N", degree: "M.Tech.", designation: "Assistant Professor", image: suman, profileUrl: "https://portal.vmedulife.com/institute/Faculty/viewDetails/Cvr-Telangana/52547" },
    ],
  },
];


  


/*  
  {
    title: "Assistant Professors",
    count: 17,
    members: [
      {
        name: "Mr. Moghal.Yaseen Pasha",
        degree: "M.Tech.",
        designation: "Assistant Professor",
        image: Yaseen_pasha,
        profileLink: "https://portal.vmedulife.com/institute/Faculty/viewDetails/Cvr-Telangana/37465"
      },
      {
        name: "Dr. Afreen Fatima Mohammed",
        degree: "M.Tech., Ph.D.",
        designation: "Assistant Professor",
        image: AfreenMohammed,
        profileLink: "https://portal.vmedulife.com/institute/Faculty/viewDetails/Cvr-Telangana/37466"
      },
      {
        name: "Mrs. M. Nikita",
        degree: "M.Tech., (Ph.D).",
        designation: "Assistant Professor",
        image: nikitha_manne,
        profileLink: "https://portal.vmedulife.com/institute/Faculty/viewDetails/Cvr-Telangana/37453"
      },
      {
        name: "Mr. K.Ravikiran Reddy",
        degree: "M.Tech., (Ph.D).",
        designation: "Assistant Professor",
        image: Ravikiran,
        profileLink: "https://portal.vmedulife.com/institute/Faculty/viewDetails/Cvr-Telangana/40109"
      },
      // ✅ Add remaining Assistant Professors as needed
  
    ]
  }
];

*/


/*
const facultyData = [
{
    title: "Professors",
    count: 2,
    members: [
      {
        name: "Dr. S.V.Suryanarayana",
        degree: "M.Tech., Ph.D.",
        designation: "Head of the Department",
        image: hod,
        profileLink: "https://portal.vmedulife.com/institute/Faculty/viewDetails/Cvr-Telangana/37438"
      },
      {
        name: "Dr. N. Satyanarayana",
        degree: "M.Tech., Ph.D.",
        designation: "Professor",
        image: SatyanarayanaN,
        profileLink: "https://portal.vmedulife.com/institute/Faculty/viewDetails/Cvr-Telangana/37439"
      }
    ]
  },
  {
    title: "Associate Professors",
    count: 7,
    members: [
      {
        name: "Dr. LNC Prakash K",
        degree: "M.Tech., Ph.D.",
        designation: "Associate Professor",
        image: klncprakash,
        profileLink: "https://portal.vmedulife.com/institute/Faculty/viewDetails/Cvr-Telangana/37440"
      },
      {
        name: "Dr. A.Srinivasa Reddy",
        degree: "M.Tech., Ph.D.",
        designation: "Associate Professor",
        image: SrinivasaReddyA,
        profileLink: "https://portal.vmedulife.com/institute/Faculty/viewDetails/Cvr-Telangana/37441"
      },
      {
        name: "Dr. Varaprasad Rao M",
        degree: "M.Tech., Ph.D.",
        designation: "Associate Professor",
        image: varaprasad,
        profileLink: "https://portal.vmedulife.com/institute/Faculty/viewDetails/Cvr-Telangana/37442"
      },
      {
        name: "Dr. Rama Krishna B",
        degree: "M.Tech., Ph.D.",
        designation: "Associate Professor",
        image: RamaKrishnaB,
        profileLink: "https://portal.vmedulife.com/institute/Faculty/viewDetails/Cvr-Telangana/37443"
      },
      {
        name: "Dr. Shaik Janbhasha",
        degree: "M.Tech., Ph.D.",
        designation: "Associate Professor",
        image: jhanbhasha,
        profileLink: "https://portal.vmedulife.com/institute/Faculty/viewDetails/Cvr-Telangana/38754"
      },
      {
        name: "Dr. Basavaraj Chunchure",
        degree: "M.Tech., Ph.D.",
        designation: "Associate Professor",
        image: baswaraj,
        profileLink: "https://portal.vmedulife.com/institute/Faculty/viewDetails/Cvr-Telangana/38755"
      },
      {
        name: "Dr. M.Sreenu",
        degree: "M.Tech., Ph.D.",
        designation: "Associate Professor",
        image: Sreenu,
        profileLink: "https://portal.vmedulife.com/institute/Faculty/viewDetails/Cvr-Telangana/39612"
      }
    ]
  },
  {
    title: "Sr. Assistant Professors",
    count: 10,
    members: [
      { name: "Srichandana Abbineni", degree: "M.Tech., (Ph.D)", designation: "Sr. Assistant Professor", image: SrichandanaA, profileUrl: "https://portal.vmedulife.com/institute/Faculty/viewDetails/Cvr-Telangana/37444" },
      { name: "Vineela Krishna Suri", degree: "M.Tech., (Ph.D)", designation: "Sr. Assistant Professor", image: vineela_krishna, profileUrl: "https://portal.vmedulife.com/institute/Faculty/viewDetails/Cvr-Telangana/37445" },
      { name: "Ahmed Shahebaaz", degree: "M.Tech., (Ph.D)", designation: "Sr. Assistant Professor", image: AhmedShahebaaz, profileUrl: "https://portal.vmedulife.com/institute/Faculty/viewDetails/Cvr-Telangana/37451" },
      { name: "Annapurna Gummadi", degree: "M.Tech., Ph.D.", designation: "Sr. Assistant Professor", image: Annapurna, profileUrl: "https://portal.vmedulife.com/institute/Faculty/viewDetails/Cvr-Telangana/37446" },
      { name: "Yasmeen MD", degree: "M.Tech., Ph.D.", designation: "Sr. Assistant Professor", image: Yasmeen_Aashu, profileUrl: "https://portal.vmedulife.com/institute/Faculty/viewDetails/Cvr-Telangana/37447" },
      { name: "Nitya Erupaka", degree: "M.Tech., (Ph.D)", designation: "Sr. Assistant Professor", image: nitya, profileUrl: "https://portal.vmedulife.com/institute/Faculty/viewDetails/Cvr-Telangana/37448" },
      { name: "Padma Parshapu", degree: "M.Tech., (Ph.D)", designation: "Sr. Assistant Professor", image: PadmaParshapu, profileUrl: "https://portal.vmedulife.com/institute/Faculty/viewDetails/Cvr-Telangana/37458" },
      { name: "Hari Shankar Punna", degree: "M.Tech., (Ph.D)", designation: "Sr. Assistant Professor", image: HariShankarP, profileUrl: "https://portal.vmedulife.com/institute/Faculty/viewDetails/Cvr-Telangana/37459" },
      { name: "Harish Kumar K", degree: "M.Tech., (Ph.D)", designation: "Sr. Assistant Professor", image: HarishKumarK, profileUrl: "https://portal.vmedulife.com/institute/Faculty/viewDetails/Cvr-Telangana/37463" },
      { name: "Ranadheer Kumar K S", degree: "M.Tech., (Ph.D)", designation: "Sr. Assistant Professor", image: RanadheerKumarKS, profileUrl: "https://portal.vmedulife.com/institute/Faculty/viewDetails/Cvr-Telangana/37464" },
    ],
  },
  {
    title: "Assistant Professors",
    count: 18,
    members: [
      { name: "Lalitha S", degree: "M.Tech.", designation: "Assistant Professor", image: LalithaS, profileUrl: "https://portal.vmedulife.com/institute/Faculty/viewDetails/Cvr-Telangana/37449" },
      { name: "Nagarani P", degree: "M.Tech.", designation: "Assistant Professor", image: NagaraniP, profileUrl: "https://portal.vmedulife.com/institute/Faculty/viewDetails/Cvr-Telangana/37450" },
      { name: "Balakrishna Reddy S", degree: "M.Tech., (Ph.D)", designation: "Assistant Professor", image: BalakrishnaReddyS, profileUrl: "https://portal.vmedulife.com/institute/Faculty/viewDetails/Cvr-Telangana/37452" },
      { name: "Nikita Manne", degree: "M.Tech., (Ph.D)", designation: "Assistant Professor", image: nikitha_manne, profileUrl: "https://portal.vmedulife.com/institute/Faculty/viewDetails/Cvr-Telangana/37453" },
      { name: "Prashanth Donda", degree: "M.Tech.", designation: "Assistant Professor", image: PrashanthDonda, profileUrl: "https://portal.vmedulife.com/institute/Faculty/viewDetails/Cvr-Telangana/37454" },
      { name: "Ramesh Vankudoth", degree: "M.Tech., (Ph.D)", designation: "Assistant Professor", image: RameshVankudoth, profileUrl: "https://portal.vmedulife.com/institute/Faculty/viewDetails/Cvr-Telangana/37455" },
      { name: "Nagasri Arava", degree: "M.Tech., (Ph.D)", designation: "Assistant Professor", image: NagasriArava, profileUrl: "https://portal.vmedulife.com/institute/Faculty/viewDetails/Cvr-Telangana/37456" },
      { name: "Srivani M", degree: "M.Tech.", designation: "Assistant Professor", image: sreevani, profileUrl: "https://portal.vmedulife.com/institute/Faculty/viewDetails/Cvr-Telangana/37457" },
      { name: "Ramya T", degree: "M.Tech., (Ph.D)", designation: "Assistant Professor", image: RamyaT, profileUrl: "https://portal.vmedulife.com/institute/Faculty/viewDetails/Cvr-Telangana/37460" },
      { name: "Vadapally Praveen", degree: "M.Tech., (Ph.D)", designation: "Assistant Professor", image: PraveenKumarV, profileUrl: "https://portal.vmedulife.com/institute/Faculty/viewDetails/Cvr-Telangana/37461" },
      { name: "Sabitha B", degree: "M.Tech.", designation: "Assistant Professor", image: SabithaB, profileUrl: "https://portal.vmedulife.com/institute/Faculty/viewDetails/Cvr-Telangana/37462" },
      { name: "Moghal Yaseen Pasha", degree: "M.Tech.", designation: "Assistant Professor", image: Yaseen_pasha, profileUrl: "https://portal.vmedulife.com/institute/Faculty/viewDetails/Cvr-Telangana/37465" },
      { name: "Afreen Mohammed", degree: "M.Tech., Ph.D.", designation: "Assistant Professor", image: AfreenMohammed, profileUrl: "https://portal.vmedulife.com/institute/Faculty/viewDetails/Cvr-Telangana/37466" },
      { name: "Krishna Erugu", degree: "M.Tech., (Ph.D)", designation: "Assistant Professor", image: KrishnaErugu, profileUrl: "https://portal.vmedulife.com/institute/Faculty/viewDetails/Cvr-Telangana/37467" },
      { name: "Swathi Velugoti", degree: "M.Tech., (Ph.D)", designation: "Assistant Professor", image: swathi, profileUrl: "https://portal.vmedulife.com/institute/Faculty/viewDetails/Cvr-Telangana/40110" },
      { name: "RaviKiranReddy Kandadi", degree: "M.Tech., (Ph.D)", designation: "Assistant Professor", image: Ravikiran, profileUrl: "https://portal.vmedulife.com/institute/Faculty/viewDetails/Cvr-Telangana/40109" },
      { name: "Phaniraj Thatha", degree: "M.Tech.", designation: "Assistant Professor", image: phaniraj, profileUrl: "https://portal.vmedulife.com/institute/Faculty/viewDetails/Cvr-Telangana/52487" },
      { name: "Suman N", degree: "M.Tech.", designation: "Assistant Professor", image: suman, profileUrl: "https://portal.vmedulife.com/institute/Faculty/viewDetails/Cvr-Telangana/52547" },
    ],
  },
];
*/
const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
};

export default function Teaching() {
  const [search, setSearch] = useState("");
  const [query, setQuery] = useState("");

  const filteredData = facultyData
    .map((group) => ({
      ...group,
      members: group.members.filter((member) =>
        member.name.toLowerCase().includes(query.toLowerCase())
      ),
    }))
    .filter((group) => group.members.length > 0);

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
    <div className="min-h-screen bg-white font-sans">
      <Nav />
      <div className="flex flex-col items-center justify-center text-center py-24 px-4 sm:px-6 bg-gradient-to-b from-blue-50 to-white space-y-12">
        <div className="w-full max-w-7xl mx-auto">
          <div className="flex flex-col sm:flex-row justify-between items-center mb-10 gap-4">
            <motion.h1
              initial="hidden"
              animate="visible"
              variants={fadeInUp}
              className="text-4xl md:text-5xl font-bold text-black mb-4"
            >
              <h1 className="text-4xl sm:text-5xl font-bold text-gray-800 mb-6">
                Teaching Faculty
              </h1>
            </motion.h1>
            <motion.div
              className="flex w-full sm:w-auto gap-2 items-center"
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={2}
            >
              <Input
                placeholder="Search by name"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full sm:w-64"
              />
              <Button onClick={() => setQuery(search)} className="flex items-center gap-2">
                <FaSearch /> Search
              </Button>
            </motion.div>
          </div>

          {filteredData.map((group, index) => (
            <motion.div
              key={index}
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={2}
              className="mb-16"
            >
              <h2 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent mb-6 text-left">
                {group.title} - {group.count}
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {group.members.map((member, i) => (
                  <motion.div key={i} whileHover={{ scale: 1.05 }} className="w-full">
                    <Card className="rounded-2xl shadow-md bg-white border border-gray-200 hover:shadow-lg transition-shadow">
                      <CardContent className="flex flex-col items-center text-center p-4">
                        <a href={member.profileLink} target="_blank" rel="noopener noreferrer">
                          <img
                            src={member.image}
                            alt={member.name}
                            className="w-40 h-40 object-cover object-top mb-4 shadow rounded-full hover:opacity-90 transition"
                          />
                        </a>
                        <h3 className="text-lg font-semibold text-gray-900">{member.name}</h3>
                        <p className="text-sm text-gray-600">{member.degree}</p>
                        <p className="text-sm text-black-600 mt-1">{member.designation}</p>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 z-50 bg-primary hover:bg-primary/90 text-white rounded-full p-3 shadow-lg transition-transform transform hover:scale-110"
          aria-label="Scroll to top"
        >
          <ArrowUp className="w-5 h-5" />
        </button>
      </div>
      <Footer />
    </div>
  );
}





/*

import React, { useState } from "react";
import Nav from "./Nav";
import Footer from "./Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import hod from "../assets/hod.webp";
import { ArrowUp } from "lucide-react";
import { FaSearch } from "react-icons/fa";
import nikitha_manne from "../assets/NikitaManne.jpg"
import Yaseen_pasha from "../assets/Yaseen-PashaMoghal.jpg" 
import Yasmeen_Aashu from "../assets/YasmeenAashu.jpeg"
import AfreenMohammed from "../assets/AfreenMohammed.jpeg"
import SrinivasaReddyA from "../assets/Srinivasa-ReddyA.jpg"
import SrichandanaA from "../assets/SrichandanaA.jpg"
import SatyanarayanaN from "../assets/SatyanarayanaN.jpg"
import SabithaB from "../assets/SabithaB.jpg"
import RanadheerKumarKS  from "../assets/Ranadheer-KumarK-S.jpeg"
import RamyaT from "../assets/RamyaT.jpg"
import RameshVankudoth from "../assets/RameshVankudoth.jpg"
import RamaKrishnaB from "../assets/Rama-KrishnaB.jpg"
import PraveenKumarV from "../assets/Praveen-KumarV.jpg"
import PrashanthDonda from "../assets/PrashanthDonda.jpg"
import PadmaParshapu from "../assets/PadmaParshapu.jpg"
import NagasriArava from "../assets/NagasriArava.jpg"
import NagaraniP from "../assets/NagaraniP.jpg"
import LalithaS from "../assets/LalithaS.jpg"
import KrishnaErugu from "../assets/KrishnaErugu.jpg"
import HarishKumarK from "../assets/Harish-KumarK.jpg"
import HariShankarP from "../assets/Hari-ShankarP.jpg"
import BalakrishnaReddyS from "../assets/Balakrishna-ReddyS.jpg" 
import AhmedShahebaaz from "../assets/AhmedShahebaaz.jpg"
import Annapurna from "../assets/Annapurna.jpg"
import baswaraj from "../assets/baswaraj.jpeg"
import jhanbhasha from "../assets/jhan bhasha.jpeg"
import klncprakash from "../assets/klnc prakash.jpg"
import Ravikiran from "../assets/Ravikiran.jpeg"
import Sreenu from "../assets/Sreenu.jpg"
import swathi from "../assets/swathi.jpg"
import varaprasad from "../assets/varaprasad.jpeg"
import sreevani from "../assets/sreevani.jpeg"

const facultyData = [
  {
    title: "Professors",
    count:2,
    members: [
      {
        name: "Dr. S.V.Suryanarayana",
        degree: "M.Tech., Ph.D.",
        designation: "Head of the Department",
        image: hod
      },
      {
        name: "Dr. N. Satyanarayana",
        degree: "M.Tech., Ph.D.",
        designation: "Professor",
        image: SatyanarayanaN
      }
    ]
  },
  {
    title: "Associate Professors",
    count:7,
    members: [
      {
        name: "Dr. LNC Prakash K",
        degree: "M.Tech., Ph.D.",
        designation: "Associate Professor",
        image: klncprakash
      },
      {
        name: "Dr. A.Srinivasa Reddy",
        degree: "M.Tech., Ph.D.",
        designation: "Associate Professor",
        image: SrinivasaReddyA
      },
      {
        name: "Dr. Varaprasad Rao M",
        degree: "M.Tech., Ph.D.",
        designation: "Associate Professor",
        image: varaprasad
      },
      {
        name: "Dr. Rama Krishna B",
        degree: "M.Tech., Ph.D.",
        designation: "Associate Professor",
        image: RamaKrishnaB
      },
      {
        name: "Dr. Shaik Janbhasha",
        degree: "M.Tech., Ph.D.",
        designation: "Associate Professor",
        image: jhanbhasha
      },
      {
        name: "Dr. Basavaraj Chunchure",
        degree: "M.Tech., Ph.D.",
        designation: "Associate Professor",
        image: baswaraj
      },
      {
        name: "Dr. M.Sreenu",
        degree: "M.Tech., Ph.D.",
        designation: "Associate Professor",
        image: Sreenu
      }
    ]
  },
  {
    title: "Sr. Assistant Professors",
    count:10,
    members: [
      {
        name: "Mrs. A Srichandana",
        degree: "M.Tech., (Ph.D).",
        designation: "Sr. Assistant Professor",
        image: SrichandanaA
      },
      {
        name: "Mrs. S. Vineela Krishna",
        degree: "M.Tech., (Ph.D).",
        designation: "Sr. Assistant Professor",
        image: "/faculty/vineela_krishna.jpg"
      },
      {
        name: "Mr. Ahmed Shahebaaz",
        degree: "M.Tech., (Ph.D).",
        designation: "Sr. Assistant Professor",
        image: AhmedShahebaaz
      },
      {
        name: "Dr. Annapurna Gummadi",
        degree: "M.Tech., Ph.D.",
        designation: "Sr. Assistant Professor",
        image: Annapurna
      },
      {
        name: "Dr. Yasmeen",
        degree: "M.Tech., Ph.D.",
        designation: "Sr. Assistant Professor",
        image: Yasmeen_Aashu
      },
      {
        name: "Mrs. E.Nitya",
        degree: "M.Tech., (Ph.D).",
        designation: "Sr. Assistant Professor",
        image: "/faculty/nitya.jpg"
      },
      {
        name: "Mrs. P.Padma",
        degree: "M.Tech., (Ph.D).",
        designation: "Sr. Assistant Professor",
        image: PadmaParshapu
      },
      {
        name: "Mr. P.Hari Shankar",
        degree: "M.Tech., (Ph.D).",
        designation: "Sr. Assistant Professor",
        image: HariShankarP
      },
      {
        name: "Mr. K. Harish Kumar",
        degree: "M.Tech., (Ph.D).",
        designation: "Sr. Assistant Professor",
        image: HarishKumarK
      },
      {
        name: "Mr. K.S.Ranadheer Kumar",
        degree: "M.Tech., (Ph.D).",
        designation: "Sr. Assistant Professor",
        image: RanadheerKumarKS
      }
    ]
  },
  {
    title: "Assistant Professors",
    count:17,
    members: [
      {
        name: "Mrs. S. Lalitha",
        degree: "M.Tech.",
        designation: "Assistant Professor",
        image: LalithaS
      },
      {
        name: "Mrs. P Nagarani",
        degree: "M.Tech.",
        designation: "Assistant Professor",
        image: NagaraniP
      },
      {
        name: "Mr. S.Balakrishna Reddy",
        degree: "M.Tech., (Ph.D).",
        designation: "Assistant Professor",
        image: BalakrishnaReddyS
      },
      {
        name: "Mrs. M. Nikita",
        degree: "M.Tech., (Ph.D).",
        designation: "Assistant Professor",
        image: nikitha_manne
      },
      {
        name: "Mr. Prashanth Donda",
        degree: "M.Tech.",
        designation: "Assistant Professor",
        image: PrashanthDonda
      },
      {
        name: "Mr. V.Ramesh",
        degree: "M.Tech., (Ph.D).",
        designation: "Assistant Professor",
        image: RameshVankudoth
      },
      {
        name: "Mrs. Arava Nagasri",
        degree: "M.Tech., (Ph.D).",
        designation: "Assistant Professor",
        image: NagasriArava
      },
      {
        name: "Mrs. M.Srivani",
        degree: "M.Tech.",
        designation: "Assistant Professor",
        image: sreevani
      },
      {
        name: "Mrs. T. Ramya",
        degree: "M.Tech., (Ph.D).",
        designation: "Assistant Professor",
        image: RamyaT
      },
      {
        name: "Mr. V.Praveen Kumar",
        degree: "M.Tech., (Ph.D).",
        designation: "Assistant Professor",
        image: PraveenKumarV
      },
      {
        name: "Mrs. B.Sabitha",
        degree: "M.Tech.",
        designation: "Assistant Professor",
        image: SabithaB
      },
      {
        name: "Mrs. K.Rajya Laxmi",
        degree: "M.Tech.",
        designation: "Assistant Professor",
        image: "/faculty/rajya_laxmi.jpg"
      },
      {
        name: "Mr. Moghal.Yaseen Pasha",
        degree: "M.Tech.",
        designation: "Assistant Professor",
        image: Yaseen_pasha
      },
      {
        name: "Dr. Afreen Fatima Mohammed",
        degree: "M.Tech., Ph.D.",
        designation: "Assistant Professor",
        image: AfreenMohammed
      },
      {
        name: "Mr. Erugu Krishna",
        degree: "M.Tech., (Ph.D).",
        designation: "Assistant Professor",
        image: KrishnaErugu
      },
      {
        name: "Mrs. V.Swathi",
        degree: "M.Tech., (Ph.D).",
        designation: "Assistant Professor",
        image: swathi
      },
      {
        name: "Mr. K.Ravikiran Reddy",
        degree: "M.Tech., (Ph.D).",
        designation: "Assistant Professor",
        image: Ravikiran
      }
    ]
  }
];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

export default function Teaching() {
  const [search, setSearch] = useState("");
  const [query, setQuery] = useState("");

  const filteredData = facultyData.map((group) => ({
    ...group,
    members: group.members.filter((member) =>
      member.name.toLowerCase().includes(query.toLowerCase())
    )
  })).filter((group) => group.members.length > 0);

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
    <div className="min-h-screen bg-white font-sans">
      <Nav />
      <div className="flex flex-col items-center justify-center text-center py-24 px-4 sm:px-6 bg-gradient-to-b from-blue-50 to-white space-y-12">
        <div className="w-full max-w-7xl mx-auto">
          <div className="flex flex-col sm:flex-row justify-between items-center mb-10 gap-4">
              <motion.h1
                   
               initial="hidden"
            animate="visible"
            variants={fadeInUp}
                    className="text-4xl md:text-5xl font-bold text-black mb-4"
                    
                  >
                    <h1 className="text-4xl sm:text-5xl font-bold text-gray-800 mb-6">Teaching Faculty</h1>
                  </motion.h1>
            <motion.div className="flex w-full sm:w-auto gap-2 items-center" variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={2}>
              <Input
                placeholder="Search by name"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full sm:w-64"
              />
              <Button onClick={() => setQuery(search)} className="flex items-center gap-2">
                <FaSearch /> Search
              </Button>
            </motion.div>
          </div>
          {filteredData.map((group, index) => (
            <motion.div
           key={index}
variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={2}
className="mb-16"
            >
              <h2 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-blue-800 
             bg-clip-text text-transparent mb-6 text-left">
                {group.title} - {group.count}
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {group.members.map((member, i) => (
                  <motion.div
                    key={i}
                    whileHover={{ scale: 1.05 }}
                    className="w-full"
                  >
                    <Card className="rounded-2xl shadow-md bg-white border border-gray-200 hover:shadow-lg transition-shadow">
                      <CardContent className="flex flex-col items-center text-center p-4">
                        <img
                          src={member.image}
                          alt={member.name}
                          className="w-40 h-40 object-cover object-top mb-4 shadow rounded-full"

                        />
                        <h3 className="text-lg font-semibold text-gray-900">{member.name}</h3>
                        <p className="text-sm text-gray-600">{member.degree}</p>
                        <p className="text-sm text-black-600 mt-1">{member.designation}</p>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
         <button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 z-50 bg-primary hover:bg-primary/90 text-white rounded-full p-3 shadow-lg transition-transform transform hover:scale-110"
          aria-label="Scroll to top"
        >
          <ArrowUp className="w-5 h-5" />
        </button>
      </div>
      <Footer />
    </div>
  );
}

*/

