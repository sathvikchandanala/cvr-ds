import HomePage from "./pages/Home"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Teaching from "./pages/Teaching";
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
function App() {
  return (
  <Router>
  <ScrollToTop />
      <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/faculty/:category" element={<FacultyPage />} />
        <Route path="/teaching" element={<Teaching/>}/>
        <Route path="/academics/objectives" element={<Objectives/>}/>
        <Route path="/infrastructure/labs" element={<DepartmentLaboratories/>}/> 
        <Route path="/research/conferencepublications" element={<ConferencePage/>}/>
        <Route path="/research/patents" element={<PatentsPage/>}/>
        <Route path="/research/fdps" element={<FDPsPage/>}/>
        <Route path="/research/journalpublications" element={<JournalsPage/>}/>
        <Route path="/research/bookchapterpublications" element={<BookChapter/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="*" element={<NotFound/>}/>
      </Routes>
  </Router>
  )
}

export default App

