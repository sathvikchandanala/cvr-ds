import HomePage from "./pages/Home"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Teaching from "./pages/Teaching";
import NonTeaching from "./pages/Nonteaching";
import Objectives from "./pages/Objectives";
import DepartmentLaboratories from "./pages/Labs"
import NotFound from "./pages/NotFound";
import FacultyPage from "./pages/FacultyPage";
import ScrollToTop from "./pages/ScrollToTop";
import PatentsPage from "./pages/PatentsPage";
import ConferencePage from "./pages/ConferencePage";
import FDPsPage from "./pages/FDPPage";
import JournalsPage from "./pages/JournalsPage";
import BookChapter from "./pages/BookChapter";
import Contact from "./pages/Contact";
import AcademicCalendar from "./pages/AcademicCalendar";
import LibraryPage from "./pages/Library";
import EResources from "./pages/Eresources";
import Classroom from "./pages/Classroom";
import Seminar from "./pages/Seminar"
import Gallery from "./pages/Gallary";
import Placement from "./pages/Placements";
import Magazine from "./pages/Magazine";
import Newsletter from "./pages/Newsletter";

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/faculty/:category" element={<FacultyPage />} />
        <Route path="/teaching" element={<Teaching />} />
        <Route path="/Nonteaching" element={<NonTeaching />} />
        <Route path="/academics/objectives" element={<Objectives />} />
        <Route path="/academics/calendar" element={<AcademicCalendar />} />
        <Route path="/infrastructure/labs" element={<DepartmentLaboratories />} />
        <Route path="/infrastructure/library" element={<LibraryPage />} />
        <Route path="/student-corner/eresources" element={<EResources />} />
        <Route path="/infrastructure/classrooms" element={<Classroom />} />
        <Route path="/infrastructure/seminar" element={<Seminar />} />
        <Route path="/research/conferencepublications" element={<ConferencePage />} />
        <Route path="/research/patents" element={<PatentsPage />} />
        <Route path="/research/fdps" element={<FDPsPage />} />
        <Route path="/student-corner/gallery" element={<Gallery />} />
        <Route path="/research/journalpublications" element={<JournalsPage />} />
        <Route path="/research/bookchapterpublications" element={<BookChapter />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/student-corner/placements" element={<Placement />} />
        <Route path="/publications/Magazines" element={<Magazine />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/publications/newsletter" element={<Newsletter />} />
      </Routes>
    </Router>
  )
}

export default App

