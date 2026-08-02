
//const resources = [];

//export default resources;

/*

const resources = [
  {
    id: 1,
    semester: "I-I",
    fullName: "First Year - First Semester",
    subjects: [
      {
        id: 101,
        code: "PSC",
        name: "Problem Solving Through C",
        icon: "💻",
        faculty: "Dr. ABC",
        resources: {
          notes: [],
          ppt: [],
          lab: [],
          videos: [],
          books: [],
          papers: [],
          syllabus: [],
          assignments: [],
        },
      },
    ],
  },

  {
    id: 2,
    semester: "I-II",
    fullName: "First Year - Second Semester",
    subjects: [],
  },

  // Remaining semesters...
];

export default resources;

*/



const emptyResources = {
  notes: [],
  ppt: [],
  lab: [],
  videos: [],
  books: [],
  papers: [],
  syllabus: [],
  assignments: [],
};

const resources = [
  {
    id: 1,
    semester: "I-I",
    fullName: "First Year - First Semester",
    subjects: [
      {
        id: 101,
        code: "PSC",
        name: "Problem Solving Through C",
        icon: "💻",
        faculty: "Faculty Name",
        resources: { ...emptyResources },
      },
      {
        id: 102,
        code: "ESWI",
        name: "Essentials of System and Web Interfacing",
        icon: "📘",
        faculty: "Faculty Name",
        resources: { ...emptyResources },
      },
    ],
  },

  {
    id: 2,
    semester: "I-II",
    fullName: "First Year - Second Semester",
    subjects: [
      {
        id: 201,
        code: "DS",
        name: "Data Structures through C",
        icon: "📊",
        faculty: "Faculty Name",
        resources: { ...emptyResources },
      },
      {
        id: 202,
        code: "PFC",
        name: "Python for Computing",
        icon: "☕",
        faculty: "Faculty Name",
        resources: { ...emptyResources },
      },
      ],
  },

  {
    id: 3,
    semester: "II-I",
    fullName: "Second Year - First Semester",
    subjects: [
      {
        id: 301,
        code: "DBMS",
        name: "Database Management Systems",
        icon: "🗄️",
        faculty: "Faculty Name",
        resources: { ...emptyResources },
      },
      {
        id: 302,
        code: "Java",
        name: "Object Oriented Programming through Java",
        icon: "☕",
        faculty: "Faculty Name",
        resources: { ...emptyResources },
      },
    ],
  },

  {
    id: 4,
    semester: "II-II",
    fullName: "Second Year - Second Semester",
    subjects: [
      {
        id: 401,
        code: "SE",
        name: "Software Engineering and DevOps",
        icon: "🌐",
        faculty: "Faculty Name",
        resources: { ...emptyResources },
      },
      {
        id: 402,
        code: "DAA",
        name: "Design and Analysis of Algorithms",
        icon: "📈",
        faculty: "Faculty Name",
        resources: { ...emptyResources },
      },

{
        id: 403,
        code: "ADSJ",
        name: "Advanced Data Structures through Java",
        icon: "📈",
        faculty: "Faculty Name",
        resources: { ...emptyResources },
      },


{
        id: 404,
        code: "COA",
        name: "Computer Organization and Architecture",
        icon: "📈",
        faculty: "Faculty Name",
        resources: { ...emptyResources },
      },

{
        id: 405,
        code: "OS",
        name: "Operating Systems",
        icon: "📈",
        faculty: "Faculty Name",
        resources: { ...emptyResources },
      },





    ],
  },

  {
    id: 5,
    semester: "III-I",
    fullName: "Third Year - First Semester",
    subjects: [
      {
        id: 501,
        code: "WT",
        name: "Web Technologies",
        icon: "🌍",
        faculty: "Faculty Name",
        resources: { ...emptyResources },
      },
      {
        id: 502,
        code: "CN",
        name: "Computer Networks",
        icon: "🛠️",
        faculty: "Faculty Name",
        resources: { ...emptyResources },
      },

{
        id: 503,
        code: "ATCD",
        name: "Automata Theory and Compiler Design",
        icon: "🛠️",
        faculty: "Faculty Name",
        resources: { ...emptyResources },
      },


{
        id: 504,
        code: "IDA",
        name: "Introduction to Data Analysis",
        icon: "🛠️",
        faculty: "Faculty Name",
        resources: { ...emptyResources },
      },



    ],
  },

  {
    id: 6,
    semester: "III-II",
    fullName: "Third Year - Second Semester",
    subjects: [
      {
        id: 601,
        code: "PA",
        name: "Predictive Analytics",
        icon: "🤖",
        faculty: "Faculty Name",
        resources: { ...emptyResources },
      },
      {
        id: 602,
        code: "ML",
        name: "Machine Learning",
        icon: "🧠",
        faculty: "Faculty Name",
        resources: { ...emptyResources },
      },

 {
        id: 603,
        code: "BDA",
        name: "Big Data Analytics",
        icon: "🧠",
        faculty: "Faculty Name",
        resources: { ...emptyResources },
      },


{
        id: 604,
        code: "FCC",
        name: "Fundamentals of Cloud Computing",
        icon: "🧠",
        faculty: "Faculty Name",
        resources: { ...emptyResources },
      },







    ],
  },

  {
    id: 7,
    semester: "IV-I",
    fullName: "Fourth Year - First Semester",
    subjects: [
      {
        id: 701,
        code: "WASMA",
        name: "Web and Social Media Analytics",
        icon: "🧠",
        faculty: "Faculty Name",
        resources: { ...emptyResources },
      },
      {
        id: 702,
        code: "IDL",
        name: "Introduction to Deep Learning",
        icon: "📊",
        faculty: "Faculty Name",
        resources: { ...emptyResources },
      },

{
        id: 703,
        code: "NSDB",
        name: "NoSQL Databases",
        icon: "🧠",
        faculty: "Faculty Name",
        resources: { ...emptyResources },
      },












    ],
  },

  {
    id: 8,
    semester: "IV-II",
    fullName: "Fourth Year - Second Semester",
    subjects: [
      {
        id: 801,
        code: "PROJECT",
        name: "Major Project",
        icon: "🚀",
        faculty: "Faculty Name",
        resources: { ...emptyResources },
      },
      {
        id: 802,
        code: "INTERNSHIP",
        name: "Internship",
        icon: "🏢",
        faculty: "Faculty Name",
        resources: { ...emptyResources },
      },
    ],
  },
];

export default resources;