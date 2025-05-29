import React from "react";
import Nav from "./Nav";
import Footer from "./Footer";
import { Card } from "@/components/ui/card";
import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
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

const facultyData = [
  {
    title: "Professors",
    slug: "professors",
    members: [
      {
        name: "Dr. S.V.Suryanarayana",
        degree: "M.Tech., Ph.D.",
        designation: "Head of the Department",
        image: hod,
      },
      {
        name: "Dr. N. Satyanarayana",
        degree: "M.Tech., Ph.D.",
        designation: "Professor",
        image: SatyanarayanaN,
      },
    ],
  },
  {
    title: "Associate Professors",
    slug: "associate-professors",
    members: [
      {
        name: "Dr. LNC Prakash K",
        degree: "M.Tech., Ph.D.",
        designation: "Associate Professor",
        image: "/faculty/prakash.jpg",
      },
      {
        name: "Dr. A.Srinivasa Reddy",
        degree: "M.Tech., Ph.D.",
        designation: "Associate Professor",
        image: SrinivasaReddyA,
      },
      {
        name: "Dr. Varaprasad Rao M",
        degree: "M.Tech., Ph.D.",
        designation: "Associate Professor",
        image: "/faculty/varaprasad.jpg",
      },
      {
        name: "Dr. Rama Krishna B",
        degree: "M.Tech., Ph.D.",
        designation: "Associate Professor",
        image: RamaKrishnaB,
      },
      {
        name: "Dr. Shaik Janbhasha",
        degree: "M.Tech., Ph.D.",
        designation: "Associate Professor",
        image: "/faculty/shaik_janbhasha.jpg",
      },
      {
        name: "Dr. Basavaraj Chunchure",
        degree: "M.Tech., Ph.D.",
        designation: "Associate Professor",
        image: "/faculty/basavaraj.jpg",
      },
      {
        name: "Dr. M.Sreenu",
        degree: "M.Tech., Ph.D.",
        designation: "Associate Professor",
        image: "/faculty/sreenu.jpg",
      },
    ],
  },
  {
    title: "Sr. Assistant Professors",
    slug: "sr-assistant-professors",
    members: [
      {
        name: "Mrs. A Srichandana",
        degree: "M.Tech., (Ph.D.)",
        designation: "Sr. Assistant Professor",
        image: SrichandanaA,
      },
      {
        name: "Mrs. S. Vineela Krishna",
        degree: "M.Tech., (Ph.D.)",
        designation: "Sr. Assistant Professor",
        image: "/faculty/vineela_krishna.jpg",
      },
      {
        name: "Mr. Ahmed Shahebaaz",
        degree: "M.Tech., (Ph.D.)",
        designation: "Sr. Assistant Professor",
        image: AhmedShahebaaz,
      },
      {
        name: "Dr. Annapurna Gummadi",
        degree: "M.Tech., Ph.D.",
        designation: "Sr. Assistant Professor",
        image: "/faculty/annapurna.jpg",
      },
      {
        name: "Dr. Yasmeen",
        degree: "M.Tech., Ph.D.",
        designation: "Sr. Assistant Professor",
        image: Yasmeen_Aashu,
      },
      {
        name: "Mrs. E.Nitya",
        degree: "M.Tech., (Ph.D.)",
        designation: "Sr. Assistant Professor",
        image: "/faculty/nitya.jpg",
      },
      {
        name: "Mrs. P.Padma",
        degree: "M.Tech., (Ph.D.)",
        designation: "Sr. Assistant Professor",
        image: PadmaParshapu,
      },
      {
        name: "Mr. P.Hari Shankar",
        degree: "M.Tech., (Ph.D.)",
        designation: "Sr. Assistant Professor",
        image: HariShankarP,
      },
      {
        name: "Mr. K. Harish Kumar",
        degree: "M.Tech., (Ph.D.)",
        designation: "Sr. Assistant Professor",
        image: HarishKumarK,
      },
      {
        name: "Mr. K.S.Ranadheer Kumar",
        degree: "M.Tech., (Ph.D.)",
        designation: "Sr. Assistant Professor",
        image: RanadheerKumarKS,
      },
    ],
  },
  {
    title: "Assistant Professors",
    slug: "assistant-professors",
    members: [
      {
        name: "Mrs. S. Lalitha",
        degree: "M.Tech., (Ph.D.)",
        designation: "Assistant Professor",
        image: LalithaS,
      },
      {
        name: "Mr. Krishna Erugu",
        degree: "M.Tech., (Ph.D.)",
        designation: "Assistant Professor",
        image: KrishnaErugu,
      },
      {
        name: "Mr. Balakrishna Reddy S",
        degree: "M.Tech., (Ph.D.)",
        designation: "Assistant Professor",
        image: BalakrishnaReddyS,
      },
      {
        name: "Mr. Praveen Kumar V",
        degree: "M.Tech., (Ph.D.)",
        designation: "Assistant Professor",
        image: PraveenKumarV,
      },
      {
        name: "Mr. Prashanth Donda",
        degree: "M.Tech., (Ph.D.)",
        designation: "Assistant Professor",
        image: PrashanthDonda,
      },
      {
        name: "Mrs. Ramya T",
        degree: "M.Tech., (Ph.D.)",
        designation: "Assistant Professor",
        image: RamyaT,
      },
      {
        name: "Mr. Ramesh Vankudoth",
        degree: "M.Tech., (Ph.D.)",
        designation: "Assistant Professor",
        image: RameshVankudoth,
      },
      {
        name: "Mrs. Nagarani P",
        degree: "M.Tech., (Ph.D.)",
        designation: "Assistant Professor",
        image: NagaraniP,
      },
      {
        name: "Mrs. Nagasri Arava",
        degree: "M.Tech., (Ph.D.)",
        designation: "Assistant Professor",
        image: NagasriArava,
      },
      {
        name: "Mrs. Sabitha B",
        degree: "M.Tech., (Ph.D.)",
        designation: "Assistant Professor",
        image: SabithaB,
      },
      {
        name: "Ms. Nikitha Manne",
        degree: "M.Tech., (Ph.D.)",
        designation: "Assistant Professor",
        image: nikitha_manne,
      },
      {
        name: "Mr. Yaseen Pasha Moghal",
        degree: "M.Tech., (Ph.D.)",
        designation: "Assistant Professor",
        image: Yaseen_pasha,
      },
      {
        name: "Ms. Afreen Mohammed",
        degree: "M.Tech., (Ph.D.)",
        designation: "Assistant Professor",
        image: AfreenMohammed,
      },
    ],
  },
  {
    title: "Programmers & Admin",
    slug: "programmers-admin",
    members: [
      {
        name: "N/A",
        degree: "",
        designation: "N/A",
        image: "",
      },
    ],
  },
];

export default function FacultyData() {
  const { category } = useParams();
  const facultyCategory = facultyData.find((f) => f.slug === category);

  if (!facultyCategory) {
    return (
      <>
        <Nav />
        <main className="flex min-h-[80vh] flex-col items-center justify-center">
          <h2 className="text-3xl font-bold">Category not found</h2>
          <Link to="/teaching" className="mt-4 text-blue-600 underline">
            Go Back
          </Link>
        </main>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Nav />
      <main className="min-h-[80vh] p-8 bg-gray-50 dark:bg-gray-900">
        <h1 className="mb-6 text-4xl font-extrabold text-center">
          {facultyCategory.title}
        </h1>
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {facultyCategory.members.map(({ name, degree, designation, image }) => (
            <Card
              key={name}
              className="flex flex-col items-center p-4 bg-white dark:bg-gray-800 rounded-lg shadow-md"
            >
              {image && (
                <img
                  src={image}
                  alt={name}
                  className="w-40 h-40 object-cover rounded-full mb-4"
                  loading="lazy"
                />
              )}
              <h3 className="text-xl font-semibold text-center">{name}</h3>
              <p className="text-center italic text-sm">{degree}</p>
              <p className="text-center text-gray-600 dark:text-gray-300 mt-1">
                {designation}
              </p>
            </Card>
          ))}
        </motion.div>
      </main>
      <Footer />
    </>
  );
}
