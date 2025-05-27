import React, { useState } from "react";
import Nav from "./Nav";
import Footer from "./Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import hod from "../assets/hod.webp";
import { FaSearch } from "react-icons/fa";

const facultyData = [
  {
    title: "Professors",
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
        image: "/faculty/satyanarayana.jpg"
      }
    ]
  },
  {
    title: "Associate Professors",
    members: [
      {
        name: "Dr. LNC Prakash K",
        degree: "M.Tech., Ph.D.",
        designation: "Associate Professor",
        image: "/faculty/prakash.jpg"
      },
      {
        name: "Dr. A.Srinivasa Reddy",
        degree: "M.Tech., Ph.D.",
        designation: "Associate Professor",
        image: "/faculty/srinivasa_reddy.jpg"
      },
      {
        name: "Dr. Varaprasad Rao M",
        degree: "M.Tech., Ph.D.",
        designation: "Associate Professor",
        image: "/faculty/varaprasad.jpg"
      },
      {
        name: "Dr. Rama Krishna B",
        degree: "M.Tech., Ph.D.",
        designation: "Associate Professor",
        image: "/faculty/rama_krishna.jpg"
      },
      {
        name: "Dr. Shaik Janbhasha",
        degree: "M.Tech., Ph.D.",
        designation: "Associate Professor",
        image: "/faculty/shaik_janbhasha.jpg"
      },
      {
        name: "Dr. Basavaraj Chunchure",
        degree: "M.Tech., Ph.D.",
        designation: "Associate Professor",
        image: "/faculty/basavaraj.jpg"
      },
      {
        name: "Dr. M.Sreenu",
        degree: "M.Tech., Ph.D.",
        designation: "Associate Professor",
        image: "/faculty/sreenu.jpg"
      }
    ]
  },
  {
    title: "Sr. Assistant Professors",
    members: [
      {
        name: "Mrs. A Srichandana",
        degree: "M.Tech., (Ph.D.)",
        designation: "Sr. Assistant Professor",
        image: "/faculty/srichandana.jpg"
      },
      {
        name: "Mrs. S. Vineela Krishna",
        degree: "M.Tech., (Ph.D.)",
        designation: "Sr. Assistant Professor",
        image: "/faculty/vineela_krishna.jpg"
      },
      {
        name: "Mr. Ahmed Shahebaaz",
        degree: "M.Tech., (Ph.D.)",
        designation: "Sr. Assistant Professor",
        image: "/faculty/ahmed_shahebaaz.jpg"
      },
      {
        name: "Dr. Annapurna Gummadi",
        degree: "M.Tech., Ph.D.",
        designation: "Sr. Assistant Professor",
        image: "/faculty/annapurna.jpg"
      },
      {
        name: "Dr. Yasmeen",
        degree: "M.Tech., Ph.D.",
        designation: "Sr. Assistant Professor",
        image: "/faculty/yasmeen.jpg"
      },
      {
        name: "Mrs. E.Nitya",
        degree: "M.Tech., (Ph.D.)",
        designation: "Sr. Assistant Professor",
        image: "/faculty/nitya.jpg"
      },
      {
        name: "Mrs. P.Padma",
        degree: "M.Tech., (Ph.D.)",
        designation: "Sr. Assistant Professor",
        image: "/faculty/padma.jpg"
      },
      {
        name: "Mr. P.Hari Shankar",
        degree: "M.Tech., (Ph.D.)",
        designation: "Sr. Assistant Professor",
        image: "/faculty/hari_shankar.jpg"
      },
      {
        name: "Mr. K. Harish Kumar",
        degree: "M.Tech., (Ph.D.)",
        designation: "Sr. Assistant Professor",
        image: "/faculty/harish_kumar.jpg"
      },
      {
        name: "Mr. K.S.Ranadheer Kumar",
        degree: "M.Tech., (Ph.D.)",
        designation: "Sr. Assistant Professor",
        image: "/faculty/ranadheer_kumar.jpg"
      }
    ]
  },
  {
    title: "Assistant Professors",
    members: [
      {
        name: "Mrs. S. Lalitha",
        degree: "M.Tech.",
        designation: "Assistant Professor",
        image: "/faculty/lalitha.jpg"
      },
      {
        name: "Mrs. P Nagarani",
        degree: "M.Tech.",
        designation: "Assistant Professor",
        image: "/faculty/nagarani.jpg"
      },
      {
        name: "Mr. S.Balakrishna Reddy",
        degree: "M.Tech., (Ph.D.)",
        designation: "Assistant Professor",
        image: "/faculty/balakrishna_reddy.jpg"
      },
      {
        name: "Mrs. M. Nikita",
        degree: "M.Tech., (Ph.D.)",
        designation: "Assistant Professor",
        image: "/faculty/nikita.jpg"
      },
      {
        name: "Mr. Prashanth Donda",
        degree: "M.Tech.",
        designation: "Assistant Professor",
        image: "/faculty/prashanth_donda.jpg"
      },
      {
        name: "Mr. V.Ramesh",
        degree: "M.Tech., (Ph.D.)",
        designation: "Assistant Professor",
        image: "/faculty/ramesh.jpg"
      },
      {
        name: "Mrs. Arava Nagasri",
        degree: "M.Tech., (Ph.D.)",
        designation: "Assistant Professor",
        image: "/faculty/nagasri.jpg"
      },
      {
        name: "Mrs. M.Srivani",
        degree: "M.Tech.",
        designation: "Assistant Professor",
        image: "/faculty/srivani.jpg"
      },
      {
        name: "Mrs. T. Ramya",
        degree: "M.Tech., (Ph.D.)",
        designation: "Assistant Professor",
        image: "/faculty/ramya.jpg"
      },
      {
        name: "Mr. V.Praveen Kumar",
        degree: "M.Tech., (Ph.D.)",
        designation: "Assistant Professor",
        image: "/faculty/praveen_kumar.jpg"
      },
      {
        name: "Mrs. B.Sabitha",
        degree: "M.Tech.",
        designation: "Assistant Professor",
        image: "/faculty/sabitha.jpg"
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
        image: "/faculty/yaseen_pasha.jpg"
      },
      {
        name: "Dr. Afreen Fatima Mohammed",
        degree: "M.Tech., Ph.D.",
        designation: "Assistant Professor",
        image: "/faculty/afreen_fatima.jpg"
      },
      {
        name: "Mr. Erugu Krishna",
        degree: "M.Tech., (Ph.D.)",
        designation: "Assistant Professor",
        image: "/faculty/erugu_krishna.jpg"
      },
      {
        name: "Mrs. V.Swathi",
        degree: "M.Tech., (Ph.D.)",
        designation: "Assistant Professor",
        image: "/faculty/swathi.jpg"
      },
      {
        name: "Mr. K.Ravikiran Reddy",
        degree: "M.Tech., (Ph.D.)",
        designation: "Assistant Professor",
        image: "/faculty/ravikiran_reddy.jpg"
      }
    ]
  }
];

export default function Teaching() {
  const [search, setSearch] = useState("");
  const [query, setQuery] = useState("");

  const filteredData = facultyData.map((group) => ({
    ...group,
    members: group.members.filter((member) =>
      member.name.toLowerCase().includes(query.toLowerCase())
    )
  })).filter((group) => group.members.length > 0);

  return (
    <div className="min-h-screen bg-white font-sans">
      <Nav />
      <div className="flex flex-col items-center justify-center text-center py-24 px-4 sm:px-6 bg-gradient-to-b from-blue-50 to-white space-y-12">
        <div className="w-full max-w-7xl mx-auto">
          <div className="flex flex-col sm:flex-row justify-between items-center mb-10 gap-4">
              <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4, duration: 1 }}
                    className="text-4xl font-bold text-center text-black-800 mb-12"
                  >
                    Teaching Faculty
                  </motion.h1>
            <div className="flex w-full sm:w-auto gap-2 items-center">
              <Input
                placeholder="Search by name"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full sm:w-64"
              />
              <Button onClick={() => setQuery(search)} className="flex items-center gap-2">
                <FaSearch /> Search
              </Button>
            </div>
          </div>
          {filteredData.map((group, index) => (
            <motion.div
           key={index}
initial={{ opacity: 0, y: 20 }}
whileInView={{ opacity: 1, y: 0 }}
viewport={{ once: true }}
transition={{ delay: 0.4, duration: 1 }}
className="mb-12"
            >
              <h2 className="text-2xl font-bold text-blue-700 mb-6 text-left">
                {group.title}
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
                          className="w-50 h-50 rounded-full object-cover mb-4 shadow"
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
      </div>
      <Footer />
    </div>
  );
}
