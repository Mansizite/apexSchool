'use client';
import '../css/templatemo-leadership-event.css';
import Link from 'next/link';
import { useState } from 'react';
import Image from 'next/image';
import { FaAngleDown } from 'react-icons/fa';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleDropdown = (dropdown: string) => {
    setActiveDropdown((prev) => (prev === dropdown ? null : dropdown));
  };

  return (
    <div>
      {/* Header Section */}
      <div
        className="school-header text-center fs-2 fw-bold sticky-header"
        style={{
          backgroundColor: 'white',
          color: 'black',
          padding: '10px 0',
          position: 'sticky',
          top: '0',
        }}
      >
        <div
          style={{
            position: 'absolute',
            left: '20px',
            top: '50%',
            transform: 'translateY(-50%)',
          }}
        >
          <Link href="#section_1">
            <Image
              unoptimized
              width={50}
              height={80}
              src="https://apexpreschool.in/assets/img/Logo2.png"
              className="w-auto h-full rounded-circle"
              alt="logo"
            />
          </Link>
        </div>
        <span style={{ color: 'orange', marginLeft: '80px', fontFamily:'Georgia, serif'}}>
          Apex International School
        </span>
      </div>

      {/* Navbar */}
      <nav className="navbar navbar-expand-lg navbar-light" style={{ backgroundColor: '#003366' }}>
        <div className="container">
          <button
            className="navbar-toggler"
            type="button"
            onClick={toggleMenu}
            aria-controls="navbarNav"
            aria-expanded={isMenuOpen ? 'true' : 'false'}
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className={`collapse navbar-collapse ${isMenuOpen ? 'show' : ''}`} id="navbarNav">
            <ul className="navbar-nav ms-auto" style={{ color: 'white' }}>
            <li className="nav-item" style={{fontSize: '15px'}}>
  <Link href="/" className="nav-link custom-nav-link" style={{ color: 'white' }}>
    About Us
  </Link>
</li>

              
              {/* Academics Dropdown */}
              <li className="nav-item dropdown" style={{fontSize:'15px'}}>
                <span
                  className="nav-link custom-nav-link"
                  style={{ display: 'flex', flexDirection: 'row', color: 'white' }}
                  onClick={() => toggleDropdown('academics')}
                >
                  Academics <FaAngleDown />
                </span>
                <ul className={`dropdown-menu ${activeDropdown === 'academics' ? 'show' : ''}`}>
                  <li><Link href="#curriculum">Curriculum</Link></li>
                  <li><Link href="#progress">Progress and Promotions</Link></li>
                  <li><Link href="/academics/language">Language</Link></li>
                  <li><Link href="/academics/conveyance">Conveyance</Link></li>
                  <li><Link href="/academics/school-and-exam-detail#school-uniform">School Uniform</Link></li>
                </ul>
              </li>

              {/* Admission Dropdown */}
              <li className="nav-item dropdown" style={{fontSize:'15px'}}>
                <span
                  className="nav-link custom-nav-link"
                  style={{ display: 'flex', flexDirection: 'row', color: 'white' }}
                  onClick={() => toggleDropdown('admission')}
                >
                  Admission <FaAngleDown />
                </span>
                <ul className={`dropdown-menu ${activeDropdown === 'admission' ? 'show' : ''}`}>
                  <li><Link href="#policy">Admission Policy</Link></li>
                  <li><Link href="/admission/enquiry-form">Enquiry Form</Link></li>
                  <li><Link href="#procedure">Admission Procedure</Link></li>
                  <li><Link href="/admission/documentsRequired">Documents</Link></li>
                  <li><Link href="#form">Admission Form</Link></li>
                  <li><Link href="/admission/age-criteria">Age Criteria</Link></li>
                </ul>
              </li>

              {/* Co-Curricular Dropdown */}
              <li className="nav-item dropdown" style={{fontSize:'15px'}}>
                <span
                  className="nav-link custom-nav-link"
                  style={{ display: 'flex', flexDirection: 'row', color: 'white' }}
                  onClick={() => toggleDropdown('coCurricular')}
                >
                  Co-Curricular <FaAngleDown />
                </span>
                <ul className={`dropdown-menu ${activeDropdown === 'coCurricular' ? 'show' : ''}`}>
                  <li><Link href="#scouts">Scouts</Link></li>
                  <li><Link href="#physical-education">Physical Education</Link></li>
                  <li><Link href="#sports">Sports Activity</Link></li>
                  <li><Link href="#music">Music</Link></li>
                  <li><Link href="#dance">Dance</Link></li>
                </ul>
              </li>

              {/* Apex Gallery Dropdown */}
              <li className="nav-item dropdown" style={{fontSize:'15px'}}>
                <span
                  className="nav-link custom-nav-link"
                  style={{ display: 'flex', flexDirection: 'row', color: 'white' }}
                  onClick={() => toggleDropdown('gallery')}
                >
                  Apex Gallery <FaAngleDown />
                </span>
                <ul className={`dropdown-menu ${activeDropdown === 'gallery' ? 'show' : ''}`}>
                  <li><Link href="#event">Event</Link></li>
                  <li><Link href="#magazines">Magazines</Link></li>
                  <li><Link href="#student">Student Corner</Link></li>
                  <li><Link href="#achievement">Achievement</Link></li>
                  <li><Link href="#hierarchy">Hierarchy</Link></li>
                  <li><Link href="#classmates">Classmates</Link></li>
                  <li><Link href="#school-activities">School Activities</Link></li>
                </ul>
              </li>

              {/* Rules & Regulations Dropdown */}
              <li className="nav-item dropdown" style={{fontSize:'15px'}}>
                <span
                  className="nav-link custom-nav-link"
                  style={{ display: 'flex', flexDirection: 'row', color: 'white' }}
                  onClick={() => toggleDropdown("rules")}
                >
                  Rules & Regulations <FaAngleDown />
                </span>
                <ul className={`dropdown-menu ${activeDropdown === "rules" ? "show" : ""}`}>
                  <li><Link href="#school">Rules of the School</Link></li>
                  <li><Link href="/rules-regulations/fees">Rules for Fees</Link></li>
                  <li><Link href="/rules-regulations/bus">Rules for Bus</Link></li>
                  <li><Link href="/rules-regulations/absenteeism">Absenteeism</Link></li>
                  <li><Link href="/rules-regulations/attendance">Attendance</Link></li>
                  <li><Link href="/rules-regulations/recess">Rules of Recess</Link></li>
                  <li><Link href="/rules-regulations/leaving">Leaving Class & School</Link></li>
                  <li><Link href="/rules-regulations/general">General</Link></li>
                </ul>
              </li>

              {/* Mandatory Public Disclosure Dropdown */}
              <li className="nav-item dropdown" style={{fontSize:'15px'}}>
                <span
                  className="nav-link custom-nav-link"
                  style={{ display: 'flex', flexDirection: 'row', color: 'white' }}
                  onClick={() => toggleDropdown('mpd')}
                >
                  Mandatory Public Disclosure <FaAngleDown />
                </span>
                <ul className={`dropdown-menu ${activeDropdown === 'mpd' ? 'show' : ''}`}>
                  <li><Link href="/mpd/general-info">General Information</Link></li>
                  <li><Link href="/mpd/staffTeaching">Staff (Teaching)</Link></li>
                  <li><Link href="/mpd/documents">Documents and Information</Link></li>
                  <li><Link href="/mpd/resultsAcademics">Results And Academics</Link></li>
                </ul>
              </li>

              {/* Other Links */}
              <li className="nav-item"><Link href="/career" className="nav-link custom-nav-link" style={{ color: 'white',fontSize:'14px' }}>Career</Link></li>
              <li className="nav-item"><Link href="/comprehensive" className="nav-link custom-nav-link" style={{ color: 'white',fontSize:'14px' }}>Comprehensive Information</Link></li>
              <li className="nav-item"><Link href="/contact" className="nav-link custom-nav-link" style={{ color: 'white',fontSize:'14px' }}>Contact</Link></li>
              <li className="nav-item"><Link href="/login" className="nav-link custom-nav-link" style={{ color: 'white',fontSize:'14px' }}>Login</Link></li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
