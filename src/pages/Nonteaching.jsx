import React, { useState } from "react";
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { ArrowUp } from "lucide-react";
import { FaSearch, FaEnvelope, FaPhoneAlt, FaUsers } from "react-icons/fa";
import Nav from "./Nav";
import Footer from "./Footer";
import Sumathi from "../assets/Sumathi.jpg";
import Rajeshwar from "../assets/Rajeshwar.JPG";
import Ramesh from "../assets/Ramesh.jpeg";
import Ashwini from "../assets/Ashwini.jpeg";
import Anand from "../assets/Anand.jpeg";
import Srikanth from "../assets/Srikanth.jpg";
import Yamuna from "../assets/Yamuna.jpeg";

import keerthana from "../assets/keerthana.png";


const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15, duration: 0.6, ease: "easeOut" },
  }),
};

// Scroll to top function
const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
};

// Placeholder avatar generator
const getPlaceholderAvatar = (name) => {
  const initial = name ? name.charAt(0).toUpperCase() : "S";
  const colors = ["2563EB", "9333EA", "DC2626", "16A34A", "EA580C"];
  const color = colors[initial.charCodeAt(0) % colors.length];
  return `https://placehold.co/160x160/${color}/FFFFFF?text=${initial}`;
};

// Staff data with optional real images
const nonTeachingStaffData = [
  {
    title: "Lab Programmers (CSE/DS)",
    members: [
      {
        code: "CVRETN002",
        name: "B. Rajeshwar Rao",
        designation: "Lab Programmer",
        mobile: "9866212054",
        joined: "19.12.2022",
        email: "rajeswarrao.2054@cvr.ac.in",
        image: Rajeshwar,
      },
      {
        code: "CVRETN005",
        name: "K. Sumathi",
        designation: "Lab Programmer",
        mobile: "9849541269",
        joined: "15.11.2023",
        email: "kunchapu.sumathi@cvr.ac.in",
        image: Sumathi,
      },
      {
        code: "CVRETN008",
        name: "Ch. Ashwini",
        designation: "Lab Programmer",
        mobile: "8270490206",
        joined: "15.02.2024",
        email: "mahimaashwini123@gmail.com",
        image: Ashwini,
      },
      {
        code: "CVRETN011",
        name: "A. Anand Kumar",
        designation: "Lab Programmer",
        mobile: "7013280468",
        joined: "10.02.2025",
        email: "anand.anamaina@cvr.ac.in",
        image: Anand,
      },
      {
        code: "CVRETN013",
        name: "H. Srikanth",
        designation: "Lab Programmer",
        mobile: "9381302297",
        joined: "01.08.2025",
        email: "hakeesrikanth2002@cvr.ac.in",
        image: Srikanth,
      },

      {
        code: "CVRETN016",
        name: "M.Sai Keerthana",
        designation: "Lab Programmer",
        mobile: "9100181694",
        joined: "8.10.2025",
        email: "keerthanamittapalli07@cvr.ac.in",
        image: keerthana,
      },





    ],
  },
  {
    title: "DTP Operators (CSE/DS)",
    members: [
      {
        code: "CVRADM202",
        name: "G. Yamuna",
        designation: "DTP Operator",
        mobile: "8008651251",
        joined: "15.12.2023",
        email: "g.yamuna@cvr.ac.in",
        image: Yamuna,
      },
      {
        code: "CVRADM229",
        name: "S. Ramesh",
        designation: "DTP Operator",
        mobile: "9963692405",
        joined: "02.12.2024",
        email: "rameshsoma.kumar@cvr.ac.in",
        image: Ramesh,
      },
    ],
  },
];

const NonTeachingStaff = () => {
  const [search, setSearch] = useState("");

  // Filter staff based on search input
  const filteredData = nonTeachingStaffData
    .map((group) => ({
      ...group,
      members: group.members.filter(
        (m) =>
          m.name.toLowerCase().includes(search.toLowerCase()) ||
          m.designation.toLowerCase().includes(search.toLowerCase()) ||
          m.code.toLowerCase().includes(search.toLowerCase())
      ),
    }))
    .filter((group) => group.members.length > 0);

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
            Non-Teaching Staff
          </motion.h1>
          <motion.p
            className="text-lg text-gray-700"
            variants={fadeInUp}
            initial="hidden"
            animate="visible"
            custom={1}
          >
            Meet the dedicated staff members who provide technical and administrative support to the CSE (Data Science) department.
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
            placeholder="Search by name, role, or code..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full sm:w-80 border-blue-300 focus-visible:ring-blue-500"
          />
          <Button className="bg-blue-700 hover:bg-blue-800 flex items-center gap-2">
            <FaSearch className="text-white" />
            Search
          </Button>
        </motion.div>

        {/* Staff Cards */}
        <section className="max-w-7xl mx-auto space-y-16">
          {filteredData.length === 0 && search.length > 0 ? (
            <div className="text-center text-gray-500 text-lg">
              No results found for "{search}".
            </div>
          ) : (
            filteredData.map((group, index) => (
              <motion.div
                key={group.title}
                variants={fadeInUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={index + 3}
              >
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent flex items-center gap-2">
                    <FaUsers className="text-blue-700" />
                    {group.title}
                  </h2>
                  <Separator className="flex-grow ml-4" />
                </div>

                <div className="grid md:grid-cols-3 lg:grid-cols-4 sm:grid-cols-2 gap-8">
                  {group.members.map((member, i) => (
                    <motion.div
                      key={i}
                      variants={fadeInUp}
                      custom={i}
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true }}
                    >
                      <Card className="hover:shadow-xl hover:-translate-y-1 transition duration-300 rounded-2xl border border-gray-100">
                        <CardHeader className="flex flex-col items-center gap-2">
                          <div className="w-28 h-28 rounded-full overflow-hidden shadow-lg border-4 border-blue-100 flex items-center justify-center">
                            <img
                              src={member.image || getPlaceholderAvatar(member.name)}
                              alt={member.name}
                              className="w-30 h-30 object-cover object-top shadow rounded-full object-center"
                            />
                          </div>
                          <h3 className="text-lg font-semibold text-gray-900">{member.name}</h3>
                          <p className="text-sm text-gray-500">({member.code})</p>
                          <p className="text-sm font-medium text-blue-700 bg-blue-50 rounded-full px-3 py-1">
                            {member.designation}
                          </p>
                        </CardHeader>



                        <CardContent className="text-center text-gray-600 space-y-2">
                          <a
                            href={`mailto:${member.email}`}
                            className="flex items-center justify-center gap-2 text-blue-600 hover:underline"
                          >
                            <FaEnvelope /> {member.email}
                          </a>
                          <a
                            href={`tel:${member.mobile}`}
                            className="flex items-center justify-center gap-2 text-blue-600 hover:underline"
                          >
                            <FaPhoneAlt /> {member.mobile}
                          </a>
                          <p className="text-xs text-gray-400">Joined: {member.joined}</p>
                        </CardContent>
                      </Card>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))
          )}
        </section>

        {/* Scroll To Top Button */}
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

export default NonTeachingStaff;
