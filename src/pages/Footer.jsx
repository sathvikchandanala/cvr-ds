import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <div className="bg-white">
      <footer className="bg-gray-100 border-t mt-16 px-6 py-10">
        <div className="max-w-7xl mx-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-8 text-sm text-gray-700">
          
          <div>
            <h4 className="font-semibold text-gray-900 mb-2">Academics</h4>
            <ul className="space-y-1">
              <li><Link to="/academics/objectives" className="hover:text-blue-600">Objectives</Link></li>
              <li><Link to="/academics/calendar" className="hover:text-blue-600">Academic Calendar</Link></li>
              <li><Link to="/academics/syllabus" className="hover:text-blue-600">Syllabus Books</Link></li>
              <li><Link to="/academics/timetables" className="hover:text-blue-600">Time Tables</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-gray-900 mb-2">Infrastructure</h4>
            <ul className="space-y-1">
              <li><Link to="/infrastructure/labs" className="hover:text-blue-600">Laboratories</Link></li>
              <li><Link to="/infrastructure/classrooms" className="hover:text-blue-600">Classrooms</Link></li>
              <li><Link to="/infrastructure/seminar" className="hover:text-blue-600">Seminar Hall</Link></li>
              <li><Link to="/infrastructure/library" className="hover:text-blue-600">Library</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-gray-900 mb-2">Faculty</h4>
            <ul className="space-y-1">
              <li><Link to="/teaching" className="hover:text-blue-600">Teaching</Link></li>
              <li><Link to="/faculty/non-teaching" className="hover:text-blue-600">Non-Teaching</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-gray-900 mb-2">Student Corner</h4>
            <ul className="space-y-1">
              <li><Link to="/student-corner/e-resources" className="hover:text-blue-600">E-Resources</Link></li>
              <li><Link to="/student-corner/gallery" className="hover:text-blue-600">Gallery</Link></li>
              <li><Link to="/student-corner/placements" className="hover:text-blue-600">Placements</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-gray-900 mb-2">Publications Hub</h4>
            <ul className="space-y-1">
              <li><Link to="/publications/technical" className="hover:text-blue-600">Technical</Link></li>
              <li><Link to="/publications/non-technical" className="hover:text-blue-600">Non-Technical</Link></li>
              <li><Link to="/publications/newsletter" className="hover:text-blue-600">News Letter</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-gray-900 mb-2">Research</h4>
            <ul className="space-y-1">
              <li><Link to="/research/conferences" className="hover:text-blue-600">Conferences</Link></li>
              <li><Link to="/research/workshops" className="hover:text-blue-600">Workshops</Link></li>
              <li><Link to="/research/fdps" className="hover:text-blue-600">FDPs</Link></li>
              <li><Link to="/research/patents" className="hover:text-blue-600">Patents</Link></li>
              <li><Link to="/research/publications" className="hover:text-blue-600">Publications</Link></li>
            </ul>
          </div>
        </div>

        <div className="text-center text-xs text-gray-500 mt-10">
          &copy; {new Date().getFullYear()} CVR College of Engineering — Department of CSE (Data Science).
        </div>
      </footer>
    </div>
  );
};

export default Footer;
