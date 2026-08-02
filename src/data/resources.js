




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

/*

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
        code: "ENG",
        name: "Communicative English",
        icon: "📘",
        faculty: "Faculty Name",
        resources: { ...emptyResources },
      },
      {
        id: 103,
        code: "MATHS-I",
        name: "Mathematics-I",
        icon: "📐",
        faculty: "Faculty Name",
        resources: { ...emptyResources },
      },
      {
        id: 104,
        code: "PHY",
        name: "Engineering Physics",
        icon: "⚛️",
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
        name: "Data Structures",
        icon: "📊",
        faculty: "Faculty Name",
        resources: { ...emptyResources },
      },
      {
        id: 202,
        code: "JAVA",
        name: "Programming Through Java",
        icon: "☕",
        faculty: "Faculty Name",
        resources: { ...emptyResources },
      },
      {
        id: 203,
        code: "MATHS-II",
        name: "Mathematics-II",
        icon: "📐",
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
        code: "OS",
        name: "Operating Systems",
        icon: "💽",
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
        code: "CN",
        name: "Computer Networks",
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
        code: "SE",
        name: "Software Engineering",
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
        code: "AI",
        name: "Artificial Intelligence",
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
    ],
  },

  {
    id: 7,
    semester: "IV-I",
    fullName: "Fourth Year - First Semester",
    subjects: [
      {
        id: 701,
        code: "DL",
        name: "Deep Learning",
        icon: "🧠",
        faculty: "Faculty Name",
        resources: { ...emptyResources },
      },
      {
        id: 702,
        code: "BDA",
        name: "Big Data Analytics",
        icon: "📊",
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

*/



//Part 1 – I-I Semester (resources.js)


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

      resources: {

        notes: [
          {
            title: "PSC Notes",
            //file: "https://drive.google.com/drive/folders/PSC_NOTES_FOLDER"
 
file: "https://drive.google.com/drive/folders/1mtrt4HuVYySmg5_Yc1FesYjdNynD5s-t"
         }
        ],

        ppt: [
          {
            title: "PSC PPT",
            file: "https://drive.google.com/drive/folders/PSC_PPT_FOLDER"
          }
        ],

        lab: [
          {
            title: "PSC Lab Manual",
            file: "https://drive.google.com/drive/folders/PSC_LAB_FOLDER"
          }
        ],

        videos: [
          {
            title: "PSC Video Lectures",
            file: "https://drive.google.com/drive/folders/PSC_VIDEO_FOLDER"
          }
        ],

        books: [
          {
            title: "PSC Reference Books",
            file: "https://drive.google.com/drive/folders/PSC_BOOK_FOLDER"
          }
        ],

        papers: [
          {
            title: "PSC Previous Papers",
            file: "https://drive.google.com/drive/folders/PSC_PAPER_FOLDER"
          }
        ],

        syllabus: [
          {
            title: "PSC Syllabus",
            file: "https://drive.google.com/drive/folders/PSC_SYLLABUS_FOLDER"
          }
        ],

        assignments: [
          {
            title: "PSC Assignments",
            file: "https://drive.google.com/drive/folders/PSC_ASSIGNMENT_FOLDER"
          }
        ]

      }
    },

    {
      id: 102,
      code: "ESWI",
      name: "Essentials of System and Web Interfacing Lab",
      icon: "📘",
      faculty: "Faculty Name",

      resources: {

        notes: [
          {
            title: "ESWI Notes",
            file: "https://drive.google.com/drive/folders/ENG_NOTES_FOLDER"
          }
        ],

        ppt: [
          {
            title: "ESWI PPT",
            file: "https://drive.google.com/drive/folders/ENG_PPT_FOLDER"
          }
        ],

        lab: [],

        videos: [
          {
            title: "ESWI Videos",
            file: "https://drive.google.com/drive/folders/ENG_VIDEO_FOLDER"
          }
        ],

        books: [
          {
            title: "ESWI Books",
            file: "https://drive.google.com/drive/folders/ENG_BOOK_FOLDER"
          }
        ],

        papers: [
          {
            title: "ESWI Previous Papers",
            file: "https://drive.google.com/drive/folders/ENG_PAPER_FOLDER"
          }
        ],

        syllabus: [
          {
            title: "ESWI Syllabus",
            file: "https://drive.google.com/drive/folders/ENG_SYLLABUS_FOLDER"
          }
        ],

        assignments: [
          {
            title: "ESWI Assignments",
            file: "https://drive.google.com/drive/folders/ENG_ASSIGNMENT_FOLDER"
          }
        ]

      }
    },

    
  ]
},


//1-2


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

      resources: {
        notes: [
          {
            title: "Data Structures Notes",
            file: "https://drive.google.com/drive/folders/DS_NOTES_FOLDER"
          }
        ],
        ppt: [
          {
            title: "Data Structures PPT",
            file: "https://drive.google.com/drive/folders/DS_PPT_FOLDER"
          }
        ],
        lab: [
          {
            title: "Data Structures Lab",
            file: "https://drive.google.com/drive/folders/DS_LAB_FOLDER"
          }
        ],
        videos: [
          {
            title: "Data Structures Videos",
            file: "https://drive.google.com/drive/folders/DS_VIDEO_FOLDER"
          }
        ],
        books: [
          {
            title: "Data Structures Books",
            file: "https://drive.google.com/drive/folders/DS_BOOK_FOLDER"
          }
        ],
        papers: [
          {
            title: "Previous Papers",
            file: "https://drive.google.com/drive/folders/DS_PAPER_FOLDER"
          }
        ],
        syllabus: [
          {
            title: "Syllabus",
            file: "https://drive.google.com/drive/folders/DS_SYLLABUS_FOLDER"
          }
        ],
        assignments: [
          {
            title: "Assignments",
            file: "https://drive.google.com/drive/folders/DS_ASSIGNMENT_FOLDER"
          }
        ]
      }
    },

    {
      id: 202,
      code: "PFC",
      name: "Python for Computing",
      icon: "☕",
      faculty: "Faculty Name",

      resources: {
        notes: [
          {
            title: "Python Notes",
            file: "https://drive.google.com/drive/folders/Python_NOTES_FOLDER"
          }
        ],
        ppt: [
          {
            title: "Python PPT",
            file: "https://drive.google.com/drive/folders/Python_PPT_FOLDER"
          }
        ],
        lab: [
          {
            title: "Python Lab",
            file: "https://drive.google.com/drive/folders/Python_LAB_FOLDER"
          }
        ],
        videos: [
          {
            title: "Python Videos",
            file: "https://drive.google.com/drive/folders/Python_VIDEO_FOLDER"
          }
        ],
        books: [
          {
            title: "Python Books",
            file: "https://drive.google.com/drive/folders/Python_BOOK_FOLDER"
          }
        ],
        papers: [
          {
            title: "Previous Papers",
            file: "https://drive.google.com/drive/folders/Python_PAPER_FOLDER"
          }
        ],
        syllabus: [
          {
            title: "Syllabus",
            file: "https://drive.google.com/drive/folders/Python_SYLLABUS_FOLDER"
          }
        ],
        assignments: [
          {
            title: "Assignments",
            file: "https://drive.google.com/drive/folders/Python_ASSIGNMENT_FOLDER"
          }
        ]
      }
    },

    
  ]
},

//2-1

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

      resources: {
        notes: [
          {
            title: "DBMS Notes",
            file: "https://drive.google.com/drive/folders/DBMS_NOTES_FOLDER"
          }
        ],
        ppt: [
          {
            title: "DBMS PPT",
            file: "https://drive.google.com/drive/folders/DBMS_PPT_FOLDER"
          }
        ],
        lab: [
          {
            title: "DBMS Lab Manual",
            file: "https://drive.google.com/drive/folders/DBMS_LAB_FOLDER"
          }
        ],
        videos: [
          {
            title: "DBMS Video Lectures",
            file: "https://drive.google.com/drive/folders/DBMS_VIDEO_FOLDER"
          }
        ],
        books: [
          {
            title: "DBMS Reference Books",
            file: "https://drive.google.com/drive/folders/DBMS_BOOK_FOLDER"
          }
        ],
        papers: [
          {
            title: "DBMS Previous Papers",
            file: "https://drive.google.com/drive/folders/DBMS_PAPER_FOLDER"
          }
        ],
        syllabus: [
          {
            title: "DBMS Syllabus",
            file: "https://drive.google.com/drive/folders/DBMS_SYLLABUS_FOLDER"
          }
        ],
        assignments: [
          {
            title: "DBMS Assignments",
            file: "https://drive.google.com/drive/folders/DBMS_ASSIGNMENT_FOLDER"
          }
        ]
      }
    },

    {
      id: 302,
      code: "OOPS",
      name: "Object Oriented Programming through Java",
      icon: "☕",
      faculty: "Faculty Name",

      resources: {
        notes: [
          {
            title: "OOP Through Java Notes",
            file: "https://drive.google.com/drive/folders/java_NOTES_FOLDER"
          }
        ],
        ppt: [
          {
            title: "OOP Through Java PPT",
            file: "https://drive.google.com/drive/folders/java_PPT_FOLDER"
          }
        ],
        lab: [
          {
            title: "OOP Through Java Lab",
            file: "https://drive.google.com/drive/folders/java_LAB_FOLDER"
          }
        ],
        videos: [
          {
            title: "OOP Through Java Videos",
            file: "https://drive.google.com/drive/folders/java_VIDEO_FOLDER"
          }
        ],
        books: [
          {
            title: "OOP Through Java Books",
            file: "https://drive.google.com/drive/folders/java_BOOK_FOLDER"
          }
        ],
        papers: [
          {
            title: "OOP Through Java Previous Papers",
            file: "https://drive.google.com/drive/folders/java_PAPER_FOLDER"
          }
        ],
        syllabus: [
          {
            title: "OOP Through Java Syllabus",
            file: "https://drive.google.com/drive/folders/java_SYLLABUS_FOLDER"
          }
        ],
        assignments: [
          {
            title: "OOP Through Java Assignments",
            file: "https://drive.google.com/drive/folders/java_ASSIGNMENT_FOLDER"
          }
        ]
      }
    },

    {
      id: 303,
      code: "DED",
      name: "Digital Electronics and Design",
      icon: "☕",
      faculty: "Faculty Name",

      resources: {
        notes: [
          {
            title: "DED Notes",
            file: "https://drive.google.com/drive/folders/OOPS_NOTES_FOLDER"
          }
        ],
        ppt: [
          {
            title: "DED PPT",
            file: "https://drive.google.com/drive/folders/OOPS_PPT_FOLDER"
          }
        ],
        lab: [
          {
            title: "DED Lab",
            file: "https://drive.google.com/drive/folders/OOPS_LAB_FOLDER"
          }
        ],
        videos: [
          {
            title: "DED Video Lectures",
            file: "https://drive.google.com/drive/folders/OOPS_VIDEO_FOLDER"
          }
        ],
        books: [
          {
            title: "DED Books",
            file: "https://drive.google.com/drive/folders/OOPS_BOOK_FOLDER"
          }
        ],
        papers: [
          {
            title: "DED Previous Papers",
            file: "https://drive.google.com/drive/folders/OOPS_PAPER_FOLDER"
          }
        ],
        syllabus: [
          {
            title: "DED Syllabus",
            file: "https://drive.google.com/drive/folders/OOPS_SYLLABUS_FOLDER"
          }
        ],
        assignments: [
          {
            title: "DED Assignments",
            file: "https://drive.google.com/drive/folders/OOPS_ASSIGNMENT_FOLDER"
          }
        ]
      }
    },

    
  ]
},



//ii-ii

 id: 4,
  semester: "II-II",
  fullName: "Second Year - Second Semester",

  subjects: [

{
  id: 4,
 {
      id: 401,
      code: "COA",
      name: "Computer Organization & Architecture",
      icon: "🖥️",
      faculty: "Faculty Name",

      resources: {
        notes: [
          {
            title: "COA Notes",
            file: "https://drive.google.com/drive/folders/COA_NOTES_FOLDER"
          }
        ],
        ppt: [
          {
            title: "COA PPT",
            file: "https://drive.google.com/drive/folders/COA_PPT_FOLDER"
          }
        ],
        lab: [],
        videos: [
          {
            title: "COA Videos",
            file: "https://drive.google.com/drive/folders/COA_VIDEO_FOLDER"
          }
        ],
        books: [
          {
            title: "COA Books",
            file: "https://drive.google.com/drive/folders/COA_BOOK_FOLDER"
          }
        ],
        papers: [
          {
            title: "COA Previous Papers",
            file: "https://drive.google.com/drive/folders/COA_PAPER_FOLDER"
          }
        ],
        syllabus: [
          {
            title: "COA Syllabus",
            file: "https://drive.google.com/drive/folders/COA_SYLLABUS_FOLDER"
          }
        ],
        assignments: [
          {
            title: "COA Assignments",
            file: "https://drive.google.com/drive/folders/COA_ASSIGNMENT_FOLDER"
          }
        ]
      }
    }
,

    {
      id: 402,
      code: "DAA",
      name: "Design and Analysis of Algorithms",
      icon: "📈",
      faculty: "Faculty Name",

      resources: {
        notes: [
          {
            title: "DAA Notes",
            file: "https://drive.google.com/drive/folders/DAA_NOTES_FOLDER"
          }
        ],
        ppt: [
          {
            title: "DAA PPT",
            file: "https://drive.google.com/drive/folders/DAA_PPT_FOLDER"
          }
        ],
        lab: [],
        videos: [
          {
            title: "DAA Videos",
            file: "https://drive.google.com/drive/folders/DAA_VIDEO_FOLDER"
          }
        ],
        books: [
          {
            title: "DAA Books",
            file: "https://drive.google.com/drive/folders/DAA_BOOK_FOLDER"
          }
        ],
        papers: [
          {
            title: "DAA Previous Papers",
            file: "https://drive.google.com/drive/folders/DAA_PAPER_FOLDER"
          }
        ],
        syllabus: [
          {
            title: "DAA Syllabus",
            file: "https://drive.google.com/drive/folders/DAA_SYLLABUS_FOLDER"
          }
        ],
        assignments: [
          {
            title: "DAA Assignments",
            file: "https://drive.google.com/drive/folders/DAA_ASSIGNMENT_FOLDER"
          }
        ]
      }
    },

    {
      id: 403,
      code: "SE",
      name: "Software Engineering and DevOps",
      icon: "🛠️",
      faculty: "Faculty Name",

      resources: {
        notes: [
          {
            title: "Software Engineering and DevOps Notes",
            file: "https://drive.google.com/drive/folders/SE_NOTES_FOLDER"
          }
        ],
        ppt: [
          {
            title: "Software Engineering and DevOps PPT",
            file: "https://drive.google.com/drive/folders/SE_PPT_FOLDER"
          }
        ],
        lab: [],
        videos: [
          {
            title: "Software Engineering and DevOps Videos",
            file: "https://drive.google.com/drive/folders/SE_VIDEO_FOLDER"
          }
        ],
        books: [
          {
            title: "Software Engineering and DevOps Books",
            file: "https://drive.google.com/drive/folders/SE_BOOK_FOLDER"
          }
        ],
        papers: [
          {
            title: "Software Engineering and DevOps Previous Papers",
            file: "https://drive.google.com/drive/folders/SE_PAPER_FOLDER"
          }
        ],
        syllabus: [
          {
            title: "Software Engineering and DevOps Syllabus",
            file: "https://drive.google.com/drive/folders/SE_SYLLABUS_FOLDER"
          }
        ],
        assignments: [
          {
            title: "Software Engineering and DevOps Assignments",
            file: "https://drive.google.com/drive/folders/SE_ASSIGNMENT_FOLDER"
          }
        ]
      }
    },

    {
      id: 404,
      code: "OS",
      name: "Operating Systems",
      icon: "📊",
      faculty: "Faculty Name",

      resources: {
        notes: [
          {
            title: "Operating Systems Notes",
            file: "https://drive.google.com/drive/folders/PS_NOTES_FOLDER"
          }
        ],
        ppt: [
          {
            title: "Operating Systems PPT",
            file: "https://drive.google.com/drive/folders/PS_PPT_FOLDER"
          }
        ],
        lab: [],
        videos: [
          {
            title: "Operating Systems Videos",
            file: "https://drive.google.com/drive/folders/PS_VIDEO_FOLDER"
          }
        ],
        books: [
          {
            title: "Operating Systems Books",
            file: "https://drive.google.com/drive/folders/PS_BOOK_FOLDER"
          }
        ],
        papers: [
          {
            title: "Previous Papers",
            file: "https://drive.google.com/drive/folders/PS_PAPER_FOLDER"
          }
        ],
        syllabus: [
          {
            title: "Syllabus",
            file: "https://drive.google.com/drive/folders/PS_SYLLABUS_FOLDER"
          }
        ],
        assignments: [
          {
            title: "Assignments",
            file: "https://drive.google.com/drive/folders/PS_ASSIGNMENT_FOLDER"
          }
        ]
      }
    }

  ]
},

   {
      id: 405,
      code: "ADSJ",
      name: "Advanced Data Structures through Java",
      icon: "📊",
      faculty: "Faculty Name",

      resources: {
        notes: [
          {
            title: "ADSJ Notes",
            file: "https://drive.google.com/drive/folders/PS_NOTES_FOLDER"
          }
        ],
        ppt: [
          {
            title: "ADSJ PPT",
            file: "https://drive.google.com/drive/folders/PS_PPT_FOLDER"
          }
        ],
        lab: [],
        videos: [
          {
            title: "ADSJ Videos",
            file: "https://drive.google.com/drive/folders/PS_VIDEO_FOLDER"
          }
        ],
        books: [
          {
            title: "ADSJ Books",
            file: "https://drive.google.com/drive/folders/PS_BOOK_FOLDER"
          }
        ],
        papers: [
          {
            title: "Previous Papers",
            file: "https://drive.google.com/drive/folders/PS_PAPER_FOLDER"
          }
        ],
        syllabus: [
          {
            title: "Syllabus",
            file: "https://drive.google.com/drive/folders/PS_SYLLABUS_FOLDER"
          }
        ],
        assignments: [
          {
            title: "Assignments",
            file: "https://drive.google.com/drive/folders/PS_ASSIGNMENT_FOLDER"
          }
        ]
      }
    }

  ]
},






//iii-i

{
  id: 5,
  semester: "III-I",
  fullName: "Third Year - First Semester",

  subjects: [

    {
      id: 501,
      code: "WT",
      name: "Web Technologies",
      icon: "🌐",
      faculty: "Moghal Yaseen Pasha",

      resources: {
        notes: [
          {
            title: "Web Technologies Notes",
            file: "https://drive.google.com/drive/folders/WT_NOTES_FOLDER"
          }
        ],
        ppt: [
          {
            title: "Web Technologies PPT",
            file: "https://drive.google.com/drive/folders/WT_PPT_FOLDER"
          }
        ],
        lab: [
          {
            title: "Web Technologies Lab Manual",
            file: "https://drive.google.com/drive/folders/WT_LAB_FOLDER"
          }
        ],
        videos: [
          {
            title: "Web Technologies Video Lectures",
            file: "https://drive.google.com/drive/folders/WT_VIDEO_FOLDER"
          }
        ],
        books: [
          {
            title: "Reference Books",
            file: "https://drive.google.com/drive/folders/WT_BOOK_FOLDER"
          }
        ],
        papers: [
          {
            title: "Previous Question Papers",
            file: "https://drive.google.com/drive/folders/WT_PAPER_FOLDER"
          }
        ],
        syllabus: [
          {
            title: "Course Syllabus",
            file: "https://drive.google.com/drive/folders/WT_SYLLABUS_FOLDER"
          }
        ],
        assignments: [
          {
            title: "Assignments",
            file: "https://drive.google.com/drive/folders/WT_ASSIGNMENT_FOLDER"
          }
        ]
      }
    },

    {
      id: 502,
      code: "IDA",
      name: "Introduction to Data Analysis",
      icon: "🤖",
      faculty: "Faculty Name",

      resources: {
        notes: [{ title: "Introduction to Data Analysis Notes", file: "https://drive.google.com/drive/folders/ML_NOTES_FOLDER" }],
        ppt: [{ title: "Introduction to Data Analysis PPT", file: "https://drive.google.com/drive/folders/ML_PPT_FOLDER" }],
        lab: [{ title: "R PROGRAMMING Lab", file: "https://drive.google.com/drive/folders/ML_LAB_FOLDER" }],
        videos: [{ title: "Introduction to Data Analysis Videos", file: "https://drive.google.com/drive/folders/ML_VIDEO_FOLDER" }],
        books: [{ title: "Reference Books", file: "https://drive.google.com/drive/folders/ML_BOOK_FOLDER" }],
        papers: [{ title: "Previous Papers", file: "https://drive.google.com/drive/folders/ML_PAPER_FOLDER" }],
        syllabus: [{ title: "Syllabus", file: "https://drive.google.com/drive/folders/ML_SYLLABUS_FOLDER" }],
        assignments: [{ title: "Assignments", file: "https://drive.google.com/drive/folders/ML_ASSIGNMENT_FOLDER" }]
      }
    },

    {
      id: 503,
      code: "ATCD",
      name: "Automata Theory and Compiler Design",
      icon: "⚙️",
      faculty: "Faculty Name",

      resources: {
        notes: [{ title: "Compiler Design Notes", file: "https://drive.google.com/drive/folders/CD_NOTES_FOLDER" }],
        ppt: [{ title: "Compiler Design PPT", file: "https://drive.google.com/drive/folders/CD_PPT_FOLDER" }],
        lab: [{ title: "Compiler Design Lab", file: "https://drive.google.com/drive/folders/CD_LAB_FOLDER" }],
        videos: [{ title: "Compiler Design Videos", file: "https://drive.google.com/drive/folders/CD_VIDEO_FOLDER" }],
        books: [{ title: "Reference Books", file: "https://drive.google.com/drive/folders/CD_BOOK_FOLDER" }],
        papers: [{ title: "Previous Papers", file: "https://drive.google.com/drive/folders/CD_PAPER_FOLDER" }],
        syllabus: [{ title: "Syllabus", file: "https://drive.google.com/drive/folders/CD_SYLLABUS_FOLDER" }],
        assignments: [{ title: "Assignments", file: "https://drive.google.com/drive/folders/CD_ASSIGNMENT_FOLDER" }]
      }
    },

    {
      id: 504,
      code: "DWDM",
      name: "Data Warehousing and Data Mining",
      icon: "📊",
      faculty: "Faculty Name",

      resources: {
        notes: [{ title: "DWDM Notes", file: "https://drive.google.com/drive/folders/DWDM_NOTES_FOLDER" }],
        ppt: [{ title: "DWDM PPT", file: "https://drive.google.com/drive/folders/DWDM_PPT_FOLDER" }],
        lab: [{ title: "DWDM Lab", file: "https://drive.google.com/drive/folders/DWDM_LAB_FOLDER" }],
        videos: [{ title: "DWDM Videos", file: "https://drive.google.com/drive/folders/DWDM_VIDEO_FOLDER" }],
        books: [{ title: "Reference Books", file: "https://drive.google.com/drive/folders/DWDM_BOOK_FOLDER" }],
        papers: [{ title: "Previous Papers", file: "https://drive.google.com/drive/folders/DWDM_PAPER_FOLDER" }],
        syllabus: [{ title: "Syllabus", file: "https://drive.google.com/drive/folders/DWDM_SYLLABUS_FOLDER" }],
        assignments: [{ title: "Assignments", file: "https://drive.google.com/drive/folders/DWDM_ASSIGNMENT_FOLDER" }]
      }
    }

  ]
},




//3-2


{
  id: 6,
  semester: "III-II",
  fullName: "Third Year - Second Semester",

  subjects: [

    {
      id: 601,
      code: "AI",
      name: "Artificial Intelligence",
      icon: "🧠",
      faculty: "Faculty Name",

      resources: {
        notes: [{
          title: "Artificial Intelligence Notes",
          file: "https://drive.google.com/drive/folders/AI_NOTES_FOLDER"
        }],
        ppt: [{
          title: "Artificial Intelligence PPT",
          file: "https://drive.google.com/drive/folders/AI_PPT_FOLDER"
        }],
        lab: [{
          title: "Artificial Intelligence Lab",
          file: "https://drive.google.com/drive/folders/AI_LAB_FOLDER"
        }],
        videos: [{
          title: "Artificial Intelligence Videos",
          file: "https://drive.google.com/drive/folders/AI_VIDEO_FOLDER"
        }],
        books: [{
          title: "Reference Books",
          file: "https://drive.google.com/drive/folders/AI_BOOK_FOLDER"
        }],
        papers: [{
          title: "Previous Papers",
          file: "https://drive.google.com/drive/folders/AI_PAPER_FOLDER"
        }],
        syllabus: [{
          title: "Syllabus",
          file: "https://drive.google.com/drive/folders/AI_SYLLABUS_FOLDER"
        }],
        assignments: [{
          title: "Assignments",
          file: "https://drive.google.com/drive/folders/AI_ASSIGNMENT_FOLDER"
        }]
      }
    },

    {
      id: 602,
      code: "DL",
      name: "Deep Learning",
      icon: "🤖",
      faculty: "Faculty Name",

      resources: {
        notes: [{
          title: "Deep Learning Notes",
          file: "https://drive.google.com/drive/folders/DL_NOTES_FOLDER"
        }],
        ppt: [{
          title: "Deep Learning PPT",
          file: "https://drive.google.com/drive/folders/DL_PPT_FOLDER"
        }],
        lab: [{
          title: "Deep Learning Lab",
          file: "https://drive.google.com/drive/folders/DL_LAB_FOLDER"
        }],
        videos: [{
          title: "Deep Learning Videos",
          file: "https://drive.google.com/drive/folders/DL_VIDEO_FOLDER"
        }],
        books: [{
          title: "Reference Books",
          file: "https://drive.google.com/drive/folders/DL_BOOK_FOLDER"
        }],
        papers: [{
          title: "Previous Papers",
          file: "https://drive.google.com/drive/folders/DL_PAPER_FOLDER"
        }],
        syllabus: [{
          title: "Syllabus",
          file: "https://drive.google.com/drive/folders/DL_SYLLABUS_FOLDER"
        }],
        assignments: [{
          title: "Assignments",
          file: "https://drive.google.com/drive/folders/DL_ASSIGNMENT_FOLDER"
        }]
      }
    },

    {
      id: 603,
      code: "BDA",
      name: "Big Data Analytics",
      icon: "📊",
      faculty: "Faculty Name",

      resources: {
        notes: [{
          title: "Big Data Analytics Notes",
          file: "https://drive.google.com/drive/folders/BDA_NOTES_FOLDER"
        }],
        ppt: [{
          title: "Big Data Analytics PPT",
          file: "https://drive.google.com/drive/folders/BDA_PPT_FOLDER"
        }],
        lab: [{
          title: "Big Data Analytics Lab",
          file: "https://drive.google.com/drive/folders/BDA_LAB_FOLDER"
        }],
        videos: [{
          title: "Big Data Analytics Videos",
          file: "https://drive.google.com/drive/folders/BDA_VIDEO_FOLDER"
        }],
        books: [{
          title: "Reference Books",
          file: "https://drive.google.com/drive/folders/BDA_BOOK_FOLDER"
        }],
        papers: [{
          title: "Previous Papers",
          file: "https://drive.google.com/drive/folders/BDA_PAPER_FOLDER"
        }],
        syllabus: [{
          title: "Syllabus",
          file: "https://drive.google.com/drive/folders/BDA_SYLLABUS_FOLDER"
        }],
        assignments: [{
          title: "Assignments",
          file: "https://drive.google.com/drive/folders/BDA_ASSIGNMENT_FOLDER"
        }]
      }
    },

    {
      id: 604,
      code: "CC",
      name: "Cloud Computing",
      icon: "☁️",
      faculty: "Faculty Name",

      resources: {
        notes: [{
          title: "Cloud Computing Notes",
          file: "https://drive.google.com/drive/folders/CC_NOTES_FOLDER"
        }],
        ppt: [{
          title: "Cloud Computing PPT",
          file: "https://drive.google.com/drive/folders/CC_PPT_FOLDER"
        }],
        lab: [{
          title: "Cloud Computing Lab",
          file: "https://drive.google.com/drive/folders/CC_LAB_FOLDER"
        }],
        videos: [{
          title: "Cloud Computing Videos",
          file: "https://drive.google.com/drive/folders/CC_VIDEO_FOLDER"
        }],
        books: [{
          title: "Reference Books",
          file: "https://drive.google.com/drive/folders/CC_BOOK_FOLDER"
        }],
        papers: [{
          title: "Previous Papers",
          file: "https://drive.google.com/drive/folders/CC_PAPER_FOLDER"
        }],
        syllabus: [{
          title: "Syllabus",
          file: "https://drive.google.com/drive/folders/CC_SYLLABUS_FOLDER"
        }],
        assignments: [{
          title: "Assignments",
          file: "https://drive.google.com/drive/folders/CC_ASSIGNMENT_FOLDER"
        }]
      }
    }

  ]
},



//4-1

{
  id: 7,
  semester: "IV-I",
  fullName: "Fourth Year - First Semester",

  subjects: [

    {
      id: 701,
      code: "NLP",
      name: "Natural Language Processing",
      icon: "💬",
      faculty: "Faculty Name",

      resources: {
        notes: [{
          title: "NLP Notes",
          file: "https://drive.google.com/drive/folders/NLP_NOTES_FOLDER"
        }],
        ppt: [{
          title: "NLP PPT",
          file: "https://drive.google.com/drive/folders/NLP_PPT_FOLDER"
        }],
        lab: [{
          title: "NLP Lab",
          file: "https://drive.google.com/drive/folders/NLP_LAB_FOLDER"
        }],
        videos: [{
          title: "NLP Video Lectures",
          file: "https://drive.google.com/drive/folders/NLP_VIDEO_FOLDER"
        }],
        books: [{
          title: "Reference Books",
          file: "https://drive.google.com/drive/folders/NLP_BOOK_FOLDER"
        }],
        papers: [{
          title: "Previous Question Papers",
          file: "https://drive.google.com/drive/folders/NLP_PAPER_FOLDER"
        }],
        syllabus: [{
          title: "Course Syllabus",
          file: "https://drive.google.com/drive/folders/NLP_SYLLABUS_FOLDER"
        }],
        assignments: [{
          title: "Assignments",
          file: "https://drive.google.com/drive/folders/NLP_ASSIGNMENT_FOLDER"
        }]
      }
    },

    {
      id: 702,
      code: "IOT",
      name: "Internet of Things",
      icon: "📡",
      faculty: "Faculty Name",

      resources: {
        notes: [{
          title: "IoT Notes",
          file: "https://drive.google.com/drive/folders/IOT_NOTES_FOLDER"
        }],
        ppt: [{
          title: "IoT PPT",
          file: "https://drive.google.com/drive/folders/IOT_PPT_FOLDER"
        }],
        lab: [{
          title: "IoT Lab",
          file: "https://drive.google.com/drive/folders/IOT_LAB_FOLDER"
        }],
        videos: [{
          title: "IoT Videos",
          file: "https://drive.google.com/drive/folders/IOT_VIDEO_FOLDER"
        }],
        books: [{
          title: "Reference Books",
          file: "https://drive.google.com/drive/folders/IOT_BOOK_FOLDER"
        }],
        papers: [{
          title: "Previous Papers",
          file: "https://drive.google.com/drive/folders/IOT_PAPER_FOLDER"
        }],
        syllabus: [{
          title: "Syllabus",
          file: "https://drive.google.com/drive/folders/IOT_SYLLABUS_FOLDER"
        }],
        assignments: [{
          title: "Assignments",
          file: "https://drive.google.com/drive/folders/IOT_ASSIGNMENT_FOLDER"
        }]
      }
    },

    {
      id: 703,
      code: "MINI",
      name: "Mini Project",
      icon: "🚀",
      faculty: "Project Guide",

      resources: {
        notes: [{
          title: "Mini Project Guidelines",
          file: "https://drive.google.com/drive/folders/MINI_GUIDELINES_FOLDER"
        }],
        ppt: [{
          title: "Presentation Template",
          file: "https://drive.google.com/drive/folders/MINI_PPT_FOLDER"
        }],
        lab: [],
        videos: [{
          title: "Project Demo Videos",
          file: "https://drive.google.com/drive/folders/MINI_VIDEO_FOLDER"
        }],
        books: [],
        papers: [],
        syllabus: [{
          title: "Project Rubrics",
          file: "https://drive.google.com/drive/folders/MINI_SYLLABUS_FOLDER"
        }],
        assignments: [{
          title: "Progress Reports",
          file: "https://drive.google.com/drive/folders/MINI_REPORT_FOLDER"
        }]
      }
    },

    {
      id: 704,
      code: "MOOC",
      name: "MOOC / Professional Elective",
      icon: "🎓",
      faculty: "Faculty Coordinator",

      resources: {
        notes: [{
          title: "Course Material",
          file: "https://drive.google.com/drive/folders/MOOC_NOTES_FOLDER"
        }],
        ppt: [{
          title: "Lecture Slides",
          file: "https://drive.google.com/drive/folders/MOOC_PPT_FOLDER"
        }],
        lab: [],
        videos: [{
          title: "Recorded Sessions",
          file: "https://drive.google.com/drive/folders/MOOC_VIDEO_FOLDER"
        }],
        books: [{
          title: "Reference Material",
          file: "https://drive.google.com/drive/folders/MOOC_BOOK_FOLDER"
        }],
        papers: [],
        syllabus: [{
          title: "Course Syllabus",
          file: "https://drive.google.com/drive/folders/MOOC_SYLLABUS_FOLDER"
        }],
        assignments: [{
          title: "Assignments",
          file: "https://drive.google.com/drive/folders/MOOC_ASSIGNMENT_FOLDER"
        }]
      }
    }

  ]
},


//4-2


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
      faculty: "Project Guide",

      resources: {
        notes: [
          {
            title: "Project Guidelines",
            file: "https://drive.google.com/drive/folders/PROJECT_GUIDELINES_FOLDER"
          }
        ],

        ppt: [
          {
            title: "Project PPT Template",
            file: "https://drive.google.com/drive/folders/PROJECT_PPT_FOLDER"
          }
        ],

        lab: [],

        videos: [
          {
            title: "Project Demonstration Videos",
            file: "https://drive.google.com/drive/folders/PROJECT_VIDEO_FOLDER"
          }
        ],

        books: [
          {
            title: "Reference Documents",
            file: "https://drive.google.com/drive/folders/PROJECT_BOOK_FOLDER"
          }
        ],

        papers: [],

        syllabus: [
          {
            title: "Project Evaluation Rubrics",
            file: "https://drive.google.com/drive/folders/PROJECT_SYLLABUS_FOLDER"
          }
        ],

        assignments: [
          {
            title: "Weekly Progress Reports",
            file: "https://drive.google.com/drive/folders/PROJECT_REPORT_FOLDER"
          }
        ]
      }
    },

    {
      id: 802,
      code: "INTERNSHIP",
      name: "Internship",

      icon: "🏢",

      faculty: "Faculty Coordinator",

      resources: {

        notes: [
          {
            title: "Internship Guidelines",
            file: "https://drive.google.com/drive/folders/INTERNSHIP_NOTES_FOLDER"
          }
        ],

        ppt: [
          {
            title: "Internship Presentation",
            file: "https://drive.google.com/drive/folders/INTERNSHIP_PPT_FOLDER"
          }
        ],

        lab: [],

        videos: [
          {
            title: "Internship Orientation Videos",
            file: "https://drive.google.com/drive/folders/INTERNSHIP_VIDEO_FOLDER"
          }
        ],

        books: [],

        papers: [],

        syllabus: [
          {
            title: "Internship Evaluation",
            file: "https://drive.google.com/drive/folders/INTERNSHIP_SYLLABUS_FOLDER"
          }
        ],

        assignments: [
          {
            title: "Internship Reports",
            file: "https://drive.google.com/drive/folders/INTERNSHIP_ASSIGNMENT_FOLDER"
          }
        ]

      }

    }

  ]

},


];

export default resources;

