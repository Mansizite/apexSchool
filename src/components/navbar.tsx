// 'use client';
// import '../css/templatemo-leadership-event.css';
// import Link from 'next/link';
// import { useState } from 'react';
// import Image from 'next/image';
// import { FaAngleDown } from 'react-icons/fa';

// const Navbar = () => {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);
//   const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

//   const toggleMenu = () => {
//     setIsMenuOpen(!isMenuOpen);
//   };

//   const toggleDropdown = (dropdown: string) => {
//     setActiveDropdown((prev) => (prev === dropdown ? null : dropdown));
//   };

//   return (
//     <div>
//       {/* Header Section */}
//     <div
//   className="school-header sticky-header"
//   style={{
//     backgroundColor: 'white',
//     padding: '10px 0',
//     position: 'sticky',
//     top: '0',
//     zIndex: 1030,
//   }}
// >
//   <div
//     className="d-flex align-items-center justify-content-center"
//     style={{ gap: '15px' }} // adds spacing between logo and title
//   >
//     <Link href="#section_1">
//       <Image
//         unoptimized
//         width={100}
//         height={80}
//         src="https://apexpreschool.in/assets/img/Logo2.png"
//         alt="logo"
//         className="rounded-circle"
//       />
//     </Link>
//     <h2
//       style={{
//         color: '#1e3c72',
//         fontFamily: 'Georgia, serif',
//         margin: 0,
//         fontSize: '1.8rem',
//       }}
//     >
//       Apex International School
//     </h2>
//   </div>
// </div>


//       {/* Navbar */}
//       <nav className="navbar navbar-expand-lg navbar-light" style={{ backgroundColor: '#003366' }}>
//         <div className="container">
//           <button
//             className="navbar-toggler"
//             type="button"
//             onClick={toggleMenu}
//             aria-controls="navbarNav"
//             aria-expanded={isMenuOpen ? 'true' : 'false'}
//             aria-label="Toggle navigation"
//           >
//             <span className="navbar-toggler-icon"></span>
//           </button>

//           <div className={`collapse navbar-collapse ${isMenuOpen ? 'show' : ''}`} id="navbarNav">
//             <ul className="navbar-nav ms-auto" style={{ color: 'white' }}>
//             <li className="nav-item" style={{fontSize: '15px'}}>
//   <Link href="/" className="nav-link custom-nav-link" style={{ color: 'white' }}>
//     About Us
//   </Link>
// </li>

              
//               {/* Academics Dropdown */}
//               <li className="nav-item dropdown" style={{fontSize:'15px'}}>
//                 <span
//                   className="nav-link custom-nav-link"
//                   style={{ display: 'flex', flexDirection: 'row', color: 'white' }}
//                   onClick={() => toggleDropdown('academics')}
//                 >
//                   Academics 
//                 </span>
//                 <ul className={`dropdown-menu ${activeDropdown === 'academics' ? 'show' : ''}`}>
//                   {/* <li><Link href="#curriculum">Curriculum</Link></li> */}
//                   {/* <li><Link href="#progress">Progress and Promotions</Link></li>
//                   <li><Link href="/academics/language">Language</Link></li>
//                   <li><Link href="/academics/conveyance">Conveyance</Link></li>
//                   <li><Link href="/academics/school-and-exam-detail#school-uniform">School Uniform</Link></li> */}
//                 </ul>
//               </li>

//               {/* Admission Dropdown */}
//               <li className="nav-item dropdown" style={{fontSize:'15px'}}>
//                 <span
//                   className="nav-link custom-nav-link"
//                   style={{ display: 'flex', flexDirection: 'row', color: 'white' }}
//                   onClick={() => toggleDropdown('admission')}
//                 >
//                   Admission 
//                 </span>
//                 <ul className={`dropdown-menu ${activeDropdown === 'admission' ? 'show' : ''}`}>
//                   {/* <li><Link href="#policy">Admission Policy</Link></li> */}
//                   {/* <li><Link href="/admission/enquiry-form">Enquiry Form</Link></li>
//                   <li><Link href="#procedure">Admission Procedure</Link></li>
//                   <li><Link href="/admission/documentsRequired">Documents</Link></li>
//                   <li><Link href="#form">Admission Form</Link></li>
//                   <li><Link href="/admission/age-criteria">Age Criteria</Link></li> */}
//                 </ul>
//               </li>

//               {/* Co-Curricular Dropdown */}
//               <li className="nav-item dropdown" style={{fontSize:'15px'}}>
//                 <span
//                   className="nav-link custom-nav-link"
//                   style={{ display: 'flex', flexDirection: 'row', color: 'white' }}
//                   onClick={() => toggleDropdown('coCurricular')}
//                 >
//                   Co-Curricular 
//                 </span>
//                  {/* <ul className={`dropdown-menu ${activeDropdown === 'coCurricular' ? 'show' : ''}`}>
//                   {/* <li><Link href="#scouts">Scouts</Link></li>
//                   <li><Link href="#physical-education">Physical Education</Link></li>
//                   <li><Link href="#sports">Sports Activity</Link></li>
//                   <li><Link href="#music">Music</Link></li>
//                   <li><Link href="#dance">Dance</Link></li> 
//                 </ul>  */}
//               </li>

//               {/* Apex Gallery Dropdown */}
//               <li className="nav-item dropdown" style={{fontSize:'15px'}}>
//                 <span
//                   className="nav-link custom-nav-link"
//                   style={{ display: 'flex', flexDirection: 'row', color: 'white' }}
//                   onClick={() => toggleDropdown('gallery')}
//                 >
//                   Apex Gallery 
//                 </span>
//                 {/* <ul className={`dropdown-menu ${activeDropdown === 'gallery' ? 'show' : ''}`}>
//                   <li><Link href="#event">Event</Link></li>
//                   <li><Link href="#magazines">Magazines</Link></li>
//                   <li><Link href="#student">Student Corner</Link></li>
//                   <li><Link href="#achievement">Achievement</Link></li>
//                   <li><Link href="#hierarchy">Hierarchy</Link></li>
//                   <li><Link href="#classmates">Classmates</Link></li>
//                   <li><Link href="#school-activities">School Activities</Link></li>
//                 </ul> */}
//               </li>

//               {/* Rules & Regulations Dropdown */}
//               <li className="nav-item dropdown" style={{fontSize:'15px'}}>
//                 <span
//                   className="nav-link custom-nav-link"
//                   style={{ display: 'flex', flexDirection: 'row', color: 'white' }}
//                   onClick={() => toggleDropdown("rules")}
//                 >
//                   Rules & Regulations 
//                 </span>
//                 {/* <ul className={`dropdown-menu ${activeDropdown === "rules" ? "show" : ""}`}>
//                   <li><Link href="#school">Rules of the School</Link></li>
//                   <li><Link href="/rules-regulations/fees">Rules for Fees</Link></li>
//                   <li><Link href="/rules-regulations/bus">Rules for Bus</Link></li>
//                   <li><Link href="/rules-regulations/absenteeism">Absenteeism</Link></li>
//                   <li><Link href="/rules-regulations/attendance">Attendance</Link></li>
//                   <li><Link href="/rules-regulations/recess">Rules of Recess</Link></li>
//                   <li><Link href="/rules-regulations/leaving">Leaving Class & School</Link></li>
//                   <li><Link href="/rules-regulations/general">General</Link></li>
//                 </ul> */}
//               </li>

//               {/* Mandatory Public Disclosure Dropdown */}
//               <li className="nav-item dropdown" style={{fontSize:'15px'}}>
//                 <span
//                   className="nav-link custom-nav-link"
//                   style={{ display: 'flex', flexDirection: 'row', color: 'white' }}
//                   onClick={() => toggleDropdown('mpd')}
//                 >
//                   Mandatory Public Disclosure 
//                  </span>
//                 {/* <ul className={`dropdown-menu ${activeDropdown === 'mpd' ? 'show' : ''}`}>
//                   <li><Link href="/mpd/general-info">General Information</Link></li>
//                   <li><Link href="/mpd/staffTeaching">Staff (Teaching)</Link></li>
//                   <li><Link href="/mpd/documents">Documents and Information</Link></li>
//                   <li><Link href="/mpd/resultsAcademics">Results And Academics</Link></li>
//                 </ul> */} 
//               </li>

//               {/* Other Links */}
//               <li className="nav-item"><Link href="/career" className="nav-link custom-nav-link" style={{ color: 'white',fontSize:'14px' }}>Career</Link></li>
//               <li className="nav-item"><Link href="/comprehensive" className="nav-link custom-nav-link" style={{ color: 'white',fontSize:'14px' }}>Comprehensive Information</Link></li>
//               <li className="nav-item"><Link href="/contact" className="nav-link custom-nav-link" style={{ color: 'white',fontSize:'14px' }}>Contact</Link></li>
//               <li className="nav-item"><Link href="/login" className="nav-link custom-nav-link" style={{ color: 'white',fontSize:'14px' }}>Login</Link></li>
//             </ul>
//           </div>
//         </div>
//       </nav>
//     </div>
//   );
// };

// export default Navbar;
'use client';
import '../css/templatemo-leadership-event.css';
import Link from 'next/link';
import { useState } from 'react';
import Image from 'next/image';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen((prev) => !prev);

  return (
    <header>
      {/* Header Section */}
      <div className="school-header sticky-header">
        <div className="header-content d-flex align-items-center justify-content-center">
          <Link href="/" className="logo-link">
            <Image
              unoptimized
              width={100}
              height={80}
              src="https://apexpreschool.in/assets/img/Logo2.png"
              alt="Apex International School Logo"
              className="logo-img"
            />
          </Link>
          <h1 className="school-title">Apex  International  School</h1>
        </div>
      </div>

      {/* Navbar */}
      <nav className="navbar navbar-expand-lg navbar-custom" role="navigation" aria-label="Main navigation">
        <div className="container">
          <button
            className={`navbar-toggler${isMenuOpen ? ' open' : ''}`}
            onClick={toggleMenu}
            aria-controls="navbarNav"
            aria-expanded={isMenuOpen}
            aria-label="Toggle navigation menu"
          >
            <span className="bar bar1"></span>
            <span className="bar bar2"></span>
            <span className="bar bar3"></span>
          </button>

          <div className={`navbar-collapse${isMenuOpen ? ' show' : ''}`} id="navbarNav">
            <ul className="navbar-nav ms-auto">
              {[
                { label: 'About Us', href: '/' },
                { label: 'Academics', href: '/academics' },
                { label: 'Admission', href: '/admission' },
                { label: 'Co-Curricular', href: '/co-curricular' },
                { label: 'Apex Gallery', href: '/gallery' },
                { label: 'Rules & Regulations', href: '/rules-regulations' },
                { label: 'Mandatory Public Disclosure', href: '/mpd' },
                { label: 'Career', href: '/career' },
                { label: 'Comprehensive Information', href: '/comprehensive' },
                { label: 'Contact', href: '/contact' },
                { label: 'Login', href: '/login' },
              ].map(({ label, href }) => (
                <li key={label} className="nav-item">
                  <Link href={href} className="nav-link">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
