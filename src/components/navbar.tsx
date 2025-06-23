
// 'use client';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import Link from 'next/link';
// import { useState } from 'react';
// import Image from 'next/image';

// const Navbar = () => {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);

//   const toggleMenu = () => setIsMenuOpen(prev => !prev);

//   const navLinks = [
//     { label: 'About Us', href: '/' },
//     { label: 'Academics', href: '/academics' },
//     { label: 'Admission', href: '/admission' },
//     { label: 'Co-Curricular', href: '/co-curricular' },
//     { label: 'Apex Gallery', href: '/gallery' },
//     { label: 'Rules & Regulations', href: '/rules-regulations' },
//     { label: 'Mandatory Public Disclosure', href: '/mpd' },
//     { label: 'Career', href: '/career' },
//     { label: 'Comprehensive Info', href: '/comprehensive' },
//     { label: 'Contact', href: '/contact' },
//     { label: 'Login', href: '/login' },
//   ];

//   return (
//     <header>
//       {/* School Header */}
//       <div className="py-2 border-bottom text-center" style={{ fontFamily: 'Georgia, serif' }}>
//         <div className="d-flex flex-column flex-md-row align-items-center justify-content-center gap-3">
//           <Link href="/" className="d-block">
//             <Image
//               unoptimized
//               width={100}
//               height={80}
//               src="https://apexpreschool.in/assets/img/Logo2.png"
//               alt="Apex Logo"
//               className="img-fluid"
//             />
//           </Link>
//           <h1 className="h4 m-0 text-uppercase fw-bold" style={{ color: '#1e3c72' }}>
//             Apex International School
//           </h1>
//         </div>
//       </div>

//       {/* Bootstrap Navbar */}
//       <nav className="navbar navbar-expand-lg " style={{ backgroundColor: '#1e3c72', fontFamily: 'Georgia, serif', marginTop: '-12px' }}>
//         <div className="container-fluid">
//           <button
//             className="navbar-toggler"
//             type="button"
//             onClick={toggleMenu}
//             aria-controls="navbarNav"
//             aria-expanded={isMenuOpen}
//             aria-label="Toggle navigation"
//           >
//             <span className="navbar-toggler-icon"></span>
//           </button>

//           <div className={`collapse navbar-collapse${isMenuOpen ? ' show' : ''}`} id="navbarNav">
//             <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
//               {navLinks.map(({ label, href }) => (
//                 <li key={label} className="nav-item">
//                   <Link href={href} className="nav-link text-white px-3">
//                     {label}
//                   </Link>
//                 </li>
//               ))}
//             </ul>
//           </div>
//         </div>
//       </nav>

//       {/* Inline custom style to make hamburger icon white */}
//       <style jsx>{`
//         .navbar-dark .navbar-toggler-icon {
//           background-image: url("data:image/svg+xml;charset=utf8,%3Csvg viewBox='0 0 30 30' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath stroke='white' stroke-width='2' stroke-linecap='round' stroke-miterlimit='10' d='M4 7h22M4 15h22M4 23h22'/%3E%3C/svg%3E");
//         }
//       `}</style>
//     </header>
//   );
// };

// export default Navbar;
'use client';
import 'bootstrap/dist/css/bootstrap.min.css';
import Link from 'next/link';
import { useState } from 'react';
import Image from 'next/image';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(prev => !prev);

  const navLinks = [
    { label: 'About Us', href: '/' },
    { label: 'Academics', href: '/academics' },
    { label: 'Admission', href: '/admission' },
    { label: 'Co-Curricular', href: '/co-curricular' },
    { label: 'Apex Gallery', href: '/gallery' },
    { label: 'Rules & Regulations', href: '/rules-regulations' },
    { label: 'Mandatory Public Disclosure', href: '/mpd' },
    { label: 'Career', href: '/career' },
    { label: 'Comprehensive Info', href: '/comprehensive' },
    { label: 'Contact', href: '/contact' },
    { label: 'Login', href: '/login' },
  ];

  return (
    <header>
      {/* School Header */}
      <div className="py-2 border-bottom text-center" style={{ fontFamily: 'Georgia, serif' }}>
        <div className="d-flex flex-column flex-md-row align-items-center justify-content-center gap-3">
          <Link href="/" className="d-block">
            <Image
              unoptimized
              width={100}
              height={80}
              src="https://apexpreschool.in/assets/img/Logo2.png"
              alt="Apex Logo"
              className="img-fluid"
            />
          </Link>
          <h1 className="h4 m-0 text-uppercase fw-bold" style={{ color: '#1e3c72' }}>
            Apex International School
          </h1>
        </div>
      </div>

      {/* Bootstrap Navbar */}
      <nav
        className="navbar navbar-expand-lg navbar-dark"  // <-- add navbar-dark here
        style={{ backgroundColor: '#1e3c72', fontFamily: 'Georgia, serif', marginTop: '-12px' }}
      >
        <div className="container-fluid">
          <button
            className="navbar-toggler"
            type="button"
            onClick={toggleMenu}
            aria-controls="navbarNav"
            aria-expanded={isMenuOpen}
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" style={{color:'white'}}></span>
          </button>

          <div className={`collapse navbar-collapse${isMenuOpen ? ' show' : ''}`} id="navbarNav">
            <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
              {navLinks.map(({ label, href }) => (
                <li key={label} className="nav-item">
                  <Link href={href} className="nav-link text-white px-3">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>

      {/* Custom inline style is optional now */}
      <style jsx>{`
        /* Just in case, force white icon */
        .navbar-toggler-icon {
          background-image: url("data:image/svg+xml;charset=utf8,%3Csvg viewBox='0 0 30 30' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath stroke='white' stroke-width='2' stroke-linecap='round' stroke-miterlimit='10' d='M4 7h22M4 15h22M4 23h22'/%3E%3C/svg%3E");
        }
      `}</style>
    </header>
  );
};

export default Navbar;
