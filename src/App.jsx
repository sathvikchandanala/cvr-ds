import HomePage from "./pages/Home"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Teaching from "./pages/Teaching";
import Objectives from "./pages/Objectives";
import DepartmentLaboratories from "./pages/Labs"
import NotFound from "./pages/NotFound";
function App() {
  return (
  <Router>
      <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/teaching" element={<Teaching/>}/>
        <Route path="/academics/objectives" element={<Objectives/>}/>
        <Route path="/infrastructure/labs" element={<DepartmentLaboratories/>}/> 
        <Route path="*" element={<NotFound/>}/>
      </Routes>
  </Router>
  )
}

export default App

