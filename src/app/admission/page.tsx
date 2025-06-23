
// 'use client';

// import React, { useState } from 'react';
// import Head from 'next/head';
// import Image from 'next/image';

// const AdmissionPage = () => {
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
//     <>
//       <Head>
//         <title>Admissions | University Name</title>
//         <meta name="description" content="Apply to our prestigious university programs" />
//         <link 
//           href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" 
//           rel="stylesheet" 
//           integrity="sha384-9ndCyUaIbzAi2FUVXJi0CjmCapSmO7SnpJef0486qhLnuZ2cdeRhO02iuK6FUUVM" 
//           crossOrigin="anonymous"
//         />
//         <link 
//           rel="stylesheet" 
//           href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.3/font/bootstrap-icons.css"
//         />
//         <style>{`
//           :root {
//             --primary-dark: #1e3c72;
//             --primary-medium: #2a5298;
//             --primary-light: #3a66b4;
//             --accent: #f39c12;
//             --accent-light: #f8c471;
//             --light-bg: #f8f9fa;
//             --dark-text: #2c3e50;
//           }
          
//           .bg-primary-gradient {
//             background: linear-gradient(135deg, var(--primary-dark) 0%, var(--primary-medium) 100%);
//           }
          
//           .btn-accent {
//             background-color: var(--accent);
//             border-color: var(--accent);
//             color: white;
//           }
          
//           .btn-accent:hover {
//             background-color: #e67e22;
//             border-color: #e67e22;
//             color: white;
//           }
          
//           .btn-outline-accent {
//             border-color: var(--accent);
//             color: var(--accent);
//           }
          
//           .btn-outline-accent:hover {
//             background-color: var(--accent);
//             color: white;
//           }
          
//           .card-hover:hover {
//             transform: translateY(-5px);
//             box-shadow: 0 10px 20px rgba(0,0,0,0.1);
//             transition: all 0.3s ease;
//           }
          
//           .icon-wrapper {
//             width: 80px;
//             height: 80px;
//             display: flex;
//             align-items: center;
//             justify-content: center;
//             border-radius: 50%;
//             margin: 0 auto 20px;
//             background: rgba(30, 60, 114, 0.1);
//             color: var(--primary-dark);
//           }
          
//           .section-title {
//             position: relative;
//             padding-bottom: 15px;
//             margin-bottom: 30px;
//           }
          
//           .section-title:after {
//             content: '';
//             position: absolute;
//             bottom: 0;
//             left: 50%;
//             transform: translateX(-50%);
//             width: 80px;
//             height: 4px;
//             background: var(--accent);
//             border-radius: 2px;
//           }
          
//           .highlight-box {
//             border-left: 4px solid var(--accent);
//             background: var(--light-bg);
//             padding: 20px;
//             border-radius: 0 8px 8px 0;
//           }
          
//           .footer-social a {
//             display: inline-flex;
//             align-items: center;
//             justify-content: center;
//             width: 40px;
//             height: 40px;
//             border-radius: 50%;
//             background: rgba(255,255,255,0.1);
//             color: white;
//             transition: all 0.3s ease;
//           }
          
//           .footer-social a:hover {
//             background: var(--accent);
//             transform: translateY(-3px);
//           }
          
//           .timeline-item {
//             position: relative;
//             padding-left: 30px;
//             margin-bottom: 30px;
//           }
          
//           .timeline-item:before {
//             content: '';
//             position: absolute;
//             left: 0;
//             top: 5px;
//             width: 16px;
//             height: 16px;
//             border-radius: 50%;
//             background: var(--accent);
//           }
          
//           .timeline-item:after {
//             content: '';
//             position: absolute;
//             left: 7px;
//             top: 21px;
//             width: 2px;
//             height: calc(100% + 10px);
//             background: #ddd;
//           }
          
//           .timeline-item:last-child:after {
//             display: none;
//           }
//         `}</style>
//       </Head>

//       <div className="bg-light">
       
       

      

//         {/* Steps Section */}
//         <section className="py-5 bg-light">
//           <div className="container">
//             <div className="text-center mb-5">
//               <h2 className="fw-bold mb-3 section-title">Admission Process</h2>
//               <p className="text-muted mx-auto" style={{maxWidth: '700px'}}>
//                 Our straightforward application process makes it easy to start your academic journey.
//                 Follow these simple steps to apply.
//               </p>
//             </div>

//             <div className="row g-4">
//               {[
//                 {icon: 'bi-pencil', title: 'Complete Application', text: 'Fill out our online application form with your personal details'},
//                 {icon: 'bi-file-earmark', title: 'Submit Documents', text: 'Upload required academic records and supporting materials'},
//                 {icon: 'bi-calendar-check', title: 'Schedule Interview', text: 'Meet with our admissions team to discuss your goals'},
//                 {icon: 'bi-check-circle', title: 'Receive Decision', text: 'Get your admission status within 2-4 weeks'}
//               ].map((step, index) => (
//                 <div key={index} className="col-md-6 col-lg-3">
//                   <div className="card h-100 shadow-sm border-0 card-hover">
//                     <div className="card-body text-center p-4">
//                       <div className="icon-wrapper">
//                         <i className={`bi ${step.icon}`} style={{fontSize: '2rem'}}></i>
//                       </div>
//                       <h5 className="card-title fw-bold text-dark">{step.title}</h5>
//                       <p className="card-text text-muted">{step.text}</p>
//                     </div>
//                     <div className="card-footer bg-transparent border-0">
//                       <span className="badge bg-primary-light">Step {index + 1}</span>
//                     </div>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </section>

        // {/* Requirements */}
        // <section className="py-5 bg-white">
        //   <div className="container">
        //     <div className="row g-5 align-items-stretch">
        //       <div className="col-lg-6">
        //         <div className="p-4 p-md-5 rounded h-100 highlight-box">
        //           <h2 className="fw-bold mb-4">Application Requirements</h2>
                  
        //           <div className="mb-4">
        //             <h5 className="fw-bold mb-3">For All Applicants</h5>
        //             <ul className="list-group list-group-flush">
        //               {[
        //                 "Completed application form",
        //                 "Official academic transcripts",
        //                 "Personal statement (500-700 words)",
        //                 "Two letters of recommendation",
        //                 "Application fee payment"
        //               ].map((item, index) => (
        //                 <li key={index} className="list-group-item bg-transparent border-0 ps-0">
        //                   <i className="bi bi-check-circle-fill text-success me-2"></i>
        //                   {item}
        //                 </li>
        //               ))}
        //             </ul>
        //           </div>
                  
        //           <div className="mb-4">
        //             <h5 className="fw-bold mb-3">International Students</h5>
        //             <ul className="list-group list-group-flush">
        //               {[
        //                 "Proof of English proficiency (TOEFL/IELTS)",
        //                 "Passport copy",
        //                 "Financial support documentation",
        //                 "Visa documentation"
        //               ].map((item, index) => (
        //                 <li key={index} className="list-group-item bg-transparent border-0 ps-0">
        //                   <i className="bi bi-check-circle-fill text-success me-2"></i>
        //                   {item}
        //                 </li>
        //               ))}
        //             </ul>
        //           </div>
                  
        //           <div className="mt-4">
        //             <button className="btn btn-accent px-4 py-2 me-3">
        //               <i className="bi bi-download me-2"></i> Requirements PDF
        //             </button>
        //             <button className="btn btn-outline-dark px-4 py-2">
        //               <i className="bi bi-printer me-2"></i> Print Checklist
        //             </button>
        //           </div>
        //         </div>
        //       </div>
              
        //       <div className="col-lg-6">
        //         <div className="p-4 p-md-5 border rounded h-100">
        //           <h2 className="fw-bold mb-4 section-title">Important Dates</h2>
                  
        //           <div className="timeline">
        //             {[
        //               {term: "Fall 2023", deadline: "June 15, 2023", decision: "July 30, 2023", status: "past"},
        //               {term: "Spring 2024", deadline: "November 1, 2023", decision: "December 15, 2023", status: "current"},
        //               {term: "Summer 2024", deadline: "March 15, 2024", decision: "April 30, 2024", status: "upcoming"},
        //               {term: "Fall 2024", deadline: "June 15, 2024", decision: "July 30, 2024", status: "upcoming"},
        //             ].map((date, index) => (
        //               <div key={index} className="timeline-item">
        //                 <div className="d-flex justify-content-between">
        //                   <h5 className={`fw-bold ${date.status === 'current' ? 'text-accent' : ''}`}>
        //                     {date.term}
        //                     {date.status === 'current' && <span className="badge bg-accent ms-2">Current</span>}
        //                   </h5>
        //                   <span className={`badge ${
        //                     date.status === 'past' ? 'bg-secondary' : 
        //                     date.status === 'current' ? 'bg-accent-light text-dark' : 'bg-primary-light'
        //                   }`}>
        //                     {date.status.charAt(0).toUpperCase() + date.status.slice(1)}
        //                   </span>
        //                 </div>
        //                 <div className="d-md-flex justify-content-between mt-2">
        //                   <div>
        //                     <i className="bi bi-calendar-check me-2 text-primary"></i>
        //                     <strong>Deadline:</strong> {date.deadline}
        //                   </div>
        //                   <div>
        //                     <i className="bi bi-envelope-open me-2 text-primary"></i>
        //                     <strong>Decision:</strong> {date.decision}
        //                   </div>
        //                 </div>
        //               </div>
        //             ))}
        //           </div>
                  
        //           <div className="alert alert-warning mt-4 d-flex align-items-center">
        //             <i className="bi bi-exclamation-circle me-2 fs-4"></i>
        //             <div>
        //               <strong>International Students:</strong> Apply at least 3 months before deadlines to allow 
        //               sufficient time for visa processing and travel arrangements.
        //             </div>
        //           </div>
        //         </div>
        //       </div>
        //     </div>
        //   </div>
        // </section>

        

     

        // {/* Contact */}
        // <section className="py-5 bg-light">
        //   <div className="container">
        //     <div className="row justify-content-center">
        //       <div className="col-lg-10">
        //         <div className="card shadow-sm border-0 overflow-hidden">
        //           <div className="row g-0">
        //             <div className="col-md-5 bg-primary-gradient text-white p-4 p-md-5">
        //               <h2 className="fw-bold mb-4">Contact Admissions</h2>
        //               <p className="mb-4">Have questions? Our team is here to help you with the application process.</p>
                      
        //               <div className="mb-4">
        //                 <h5 className="fw-bold mb-3"><i className="bi bi-geo-alt me-2"></i> Location</h5>
        //                 <p>123 Education Boulevard<br />Academic City, AC 12345</p>
        //               </div>
                      
        //               <div className="mb-4">
        //                 <h5 className="fw-bold mb-3"><i className="bi bi-telephone me-2"></i> Contact</h5>
        //                 <p className="mb-1">Phone: (123) 456-7890</p>
        //                 <p>Email: admissions@university.edu</p>
        //               </div>
                      
        //               <div>
        //                 <h5 className="fw-bold mb-3"><i className="bi bi-clock me-2"></i> Office Hours</h5>
        //                 <p className="mb-1">Monday-Friday: 9:00 AM - 5:00 PM</p>
        //                 <p>Saturday: 10:00 AM - 2:00 PM</p>
        //               </div>
        //             </div>
                    
        //             <div className="col-md-7">
        //               <div className="card-body p-4 p-md-5">
        //                 <h3 className="fw-bold mb-4">Send us a Message</h3>
        //                 <form>
        //                   <div className="row g-3 mb-3">
        //                     <div className="col-md-6">
        //                       <label htmlFor="firstName" className="form-label">First Name *</label>
        //                       <input type="text" className="form-control" id="firstName" required />
        //                     </div>
        //                     <div className="col-md-6">
        //                       <label htmlFor="lastName" className="form-label">Last Name *</label>
        //                       <input type="text" className="form-control" id="lastName" required />
        //                     </div>
        //                   </div>
                          
        //                   <div className="row g-3 mb-3">
        //                     <div className="col-md-6">
        //                       <label htmlFor="email" className="form-label">Email Address *</label>
        //                       <input type="email" className="form-control" id="email" required />
        //                     </div>
        //                     <div className="col-md-6">
        //                       <label htmlFor="phone" className="form-label">Phone Number</label>
        //                       <input type="tel" className="form-control" id="phone" />
        //                     </div>
        //                   </div>
                          
        //                   <div className="mb-3">
        //                     <label htmlFor="program" className="form-label">Program of Interest *</label>
        //                     <select className="form-select" id="program" required>
        //                       <option value="">Select a program</option>
        //                       <option>Undergraduate Programs</option>
        //                       <option>Graduate Programs</option>
        //                       <option>Doctoral Programs</option>
        //                       <option>Professional Certificates</option>
        //                     </select>
        //                   </div>
                          
        //                   <div className="mb-3">
        //                     <label htmlFor="message" className="form-label">Your Question *</label>
        //                     <textarea className="form-control" id="message" rows={4} required></textarea>
        //                   </div>
                          
        //                   <div className="d-grid mt-4">
        //                     <button type="submit" className="btn btn-accent btn-lg py-3">
        //                       Submit Inquiry
        //                     </button>
        //                   </div>
        //                 </form>
        //               </div>
        //             </div>
        //           </div>
        //         </div>
        //       </div>
        //     </div>
        //   </div>
        // </section>

        // {/* CTA Section */}
        // <section className="py-5 bg-primary-gradient text-white">
        //   <div className="container">
        //     <div className="row align-items-center">
        //       <div className="col-md-8">
        //         <h2 className="fw-bold mb-3">Ready to Begin Your Journey?</h2>
        //         <p className="mb-4">Start your application today and take the first step toward your future.</p>
        //       </div>
        //       <div className="col-md-4 text-md-end">
        //         <button className="btn btn-light btn-lg px-4 py-3 fw-bold me-2">
        //           Apply Now
        //         </button>
        //         <button className="btn btn-outline-light btn-lg px-4 py-3">
        //           Visit Campus
        //         </button>
        //       </div>
        //     </div>
        //   </div>
        // </section>

//         {/* Footer */}
//         <footer className="bg-dark text-white py-5" style={{backgroundColor: 'var(--primary-dark)'}}>
//           <div className="container">
//             <div className="row g-5">
//               <div className="col-md-4">
//                 <Image
//                   unoptimized
//                   width={120}
//                   height={100}
//                   src="https://apexpreschool.in/assets/img/Logo2.png"
//                   alt="Apex Logo"
//                   className="img-fluid mb-3"
//                 />
//                 <p className="mb-3">
//                   Apex International School is dedicated to academic excellence and holistic development, 
//                   preparing students for success in a global society.
//                 </p>
//                 <div className="d-flex gap-3 footer-social">
//                   <a href="#"><i className="bi bi-facebook"></i></a>
//                   <a href="#"><i className="bi bi-twitter"></i></a>
//                   <a href="#"><i className="bi bi-instagram"></i></a>
//                   <a href="#"><i className="bi bi-linkedin"></i></a>
//                   <a href="#"><i className="bi bi-youtube"></i></a>
//                 </div>
//               </div>
              
//               <div className="col-md-4">
//                 <h5 className="fw-bold mb-4">Quick Links</h5>
//                 <div className="row">
//                   <div className="col-6">
//                     <ul className="list-unstyled">
//                       <li className="mb-2"><a href="#" className="text-white text-decoration-none">About Us</a></li>
//                       <li className="mb-2"><a href="#" className="text-white text-decoration-none">Academics</a></li>
//                       <li className="mb-2"><a href="#" className="text-white text-decoration-none">Admissions</a></li>
//                       <li className="mb-2"><a href="#" className="text-white text-decoration-none">Campus Life</a></li>
//                       <li className="mb-2"><a href="#" className="text-white text-decoration-none">News & Events</a></li>
//                     </ul>
//                   </div>
//                   <div className="col-6">
//                     <ul className="list-unstyled">
//                       <li className="mb-2"><a href="#" className="text-white text-decoration-none">Contact Us</a></li>
//                       <li className="mb-2"><a href="#" className="text-white text-decoration-none">Careers</a></li>
//                       <li className="mb-2"><a href="#" className="text-white text-decoration-none">Alumni</a></li>
//                       <li className="mb-2"><a href="#" className="text-white text-decoration-none">Giving</a></li>
//                       <li className="mb-2"><a href="#" className="text-white text-decoration-none">Portal Login</a></li>
//                     </ul>
//                   </div>
//                 </div>
//               </div>
              
//               <div className="col-md-4">
//                 <h5 className="fw-bold mb-4">Contact Information</h5>
//                 <ul className="list-unstyled">
//                   <li className="mb-3 d-flex">
//                     <i className="bi bi-geo-alt me-3 mt-1"></i>
//                     <span>123 Education Boulevard, Academic City, AC 12345</span>
//                   </li>
//                   <li className="mb-3 d-flex">
//                     <i className="bi bi-telephone me-3 mt-1"></i>
//                     <span>(123) 456-7890</span>
//                   </li>
//                   <li className="mb-3 d-flex">
//                     <i className="bi bi-envelope me-3 mt-1"></i>
//                     <span>info@university.edu</span>
//                   </li>
//                   <li className="mb-3 d-flex">
//                     <i className="bi bi-clock me-3 mt-1"></i>
//                     <span>Monday-Friday: 8:00 AM - 5:00 PM</span>
//                   </li>
//                 </ul>
//               </div>
//             </div>
            
//             <hr className="my-4 opacity-10" />
            
//             <div className="row align-items-center">
//               <div className="col-md-6">
//                 <p className="mb-0">© {new Date().getFullYear()} Apex International School. All rights reserved.</p>
//               </div>
//               <div className="col-md-6 text-md-end">
//                 <div className="d-flex gap-3 justify-content-md-end">
//                   <a href="#" className="text-white text-decoration-none">Privacy Policy</a>
//                   <a href="#" className="text-white text-decoration-none">Terms of Use</a>
//                   <a href="#" className="text-white text-decoration-none">Accessibility</a>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </footer>
//       </div>

//       {/* Bootstrap JS */}
//       <script 
//         src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js" 
//         integrity="sha384-geWF76RCwLtnZ8qwWowPQNguL3RmwHVBC9FhGdlKrxdiJJigb/j/68SIy3Te4Bkz" 
//         crossOrigin="anonymous"
//       ></script>
//     </>
//   );
// }

// export default AdmissionPage;
'use client';

import React from 'react';
import Head from 'next/head';



const AdmissionPage = () => {
  return (
    <>
      <Head>
        <title>Admissions | University Name</title>
        <meta name="description" content="Apply to our prestigious university programs" />
        <link 
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" 
          rel="stylesheet" 
          integrity="sha384-9ndCyUaIbzAi2FUVXJi0CjmCapSmO7SnpJef0486qhLnuZ2cdeRhO02iuK6FUUVM" 
          crossOrigin="anonymous"
        />
        <link 
          rel="stylesheet" 
          href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.3/font/bootstrap-icons.css"
        />
        <style>{`
          :root {
            --primary-dark: #1e3c72;
            --primary-medium: #2a5298;
            --primary-light: #3a66b4;
            --accent: #f39c12;
            --accent-light: #f8c471;
            --light-bg: #f8f9fa;
            --dark-text: #2c3e50;
          }

          .bg-primary-gradient {
            background: linear-gradient(135deg, var(--primary-dark) 0%, var(--primary-medium) 100%);
          }

          .btn-accent {
            background-color: var(--accent);
            border-color: var(--accent);
            color: white;
          }

          .btn-accent:hover {
            background-color: #e67e22;
            border-color: #e67e22;
            color: white;
          }

          .btn-outline-accent {
            border-color: var(--accent);
            color: var(--accent);
          }

          .btn-outline-accent:hover {
            background-color: var(--accent);
            color: white;
          }

          .card-hover:hover {
            transform: translateY(-5px);
            box-shadow: 0 10px 20px rgba(0,0,0,0.1);
            transition: all 0.3s ease;
          }

          .icon-wrapper {
            width: 80px;
            height: 80px;
            display: flex;
            align-items: center;
            justify-content: center;
            border-radius: 50%;
            margin: 0 auto 20px;
            background: rgba(30, 60, 114, 0.1);
            color: var(--primary-dark);
          }

          .section-title {
            position: relative;
            padding-bottom: 15px;
            margin-bottom: 30px;
          }

          .section-title:after {
            content: '';
            position: absolute;
            bottom: 0;
            left: 50%;
            transform: translateX(-50%);
            width: 80px;
            height: 4px;
            background: var(--accent);
            border-radius: 2px;
          }

          .highlight-box {
            border-left: 4px solid var(--accent);
            background: var(--light-bg);
            padding: 20px;
            border-radius: 0 8px 8px 0;
          }

          .footer-social a {
            display: inline-flex;
            align-items: center;
            justify-content: center;
            width: 40px;
            height: 40px;
            border-radius: 50%;
            background: rgba(255,255,255,0.1);
            color: white;
            transition: all 0.3s ease;
          }

          .footer-social a:hover {
            background: var(--accent);
            transform: translateY(-3px);
          }

          .timeline-item {
            position: relative;
            padding-left: 30px;
            margin-bottom: 30px;
          }

          .timeline-item:before {
            content: '';
            position: absolute;
            left: 0;
            top: 5px;
            width: 16px;
            height: 16px;
            border-radius: 50%;
            background: var(--accent);
          }

          .timeline-item:after {
            content: '';
            position: absolute;
            left: 7px;
            top: 21px;
            width: 2px;
            height: calc(100% + 10px);
            background: #ddd;
          }

          .timeline-item:last-child:after {
            display: none;
          }
        `}</style>
      </Head>

      <div className="bg-light">
        {/* Admission Process Section */}
        <section className="py-5 bg-light">
          <div className="container">
            <div className="text-center mb-5">
              <h2 className="fw-bold mb-3 section-title">Admission Process</h2>
              <p className="text-muted mx-auto" style={{ maxWidth: '700px' }}>
                Our straightforward application process makes it easy to start your academic journey.
                Follow these simple steps to apply.
              </p>
            </div>
            <div className="row g-4">
              {[
                { icon: 'bi-pencil', title: 'Complete Application', text: 'Fill out our online application form with your personal details' },
                { icon: 'bi-file-earmark', title: 'Submit Documents', text: 'Upload required academic records and supporting materials' },
                { icon: 'bi-calendar-check', title: 'Schedule Interview', text: 'Meet with our admissions team to discuss your goals' },
                { icon: 'bi-check-circle', title: 'Receive Decision', text: 'Get your admission status within 2-4 weeks' }
              ].map((step, index) => (
                <div key={index} className="col-md-6 col-lg-3">
                  <div className="card h-100 shadow-sm border-0 card-hover">
                    <div className="card-body text-center p-4">
                      <div className="icon-wrapper">
                        <i className={`bi ${step.icon}`} style={{ fontSize: '2rem' }}></i>
                      </div>
                      <h5 className="card-title fw-bold text-dark">{step.title}</h5>
                      <p className="card-text text-muted">{step.text}</p>
                    </div>
                    <div className="card-footer bg-transparent border-0">
                      <span className="badge bg-primary-light">Step {index + 1}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Add other sections: requirements, important dates, contact form, CTA, footer, etc. as per your original code */}
        
        {/* Requirements */}
        <section className="py-5 bg-white">
          <div className="container">
            <div className="row g-5 align-items-stretch">
              <div className="col-lg-6">
                <div className="p-4 p-md-5 rounded h-100 highlight-box">
                  <h2 className="fw-bold mb-4">Application Requirements</h2>
                  
                  <div className="mb-4">
                    <h5 className="fw-bold mb-3">For All Applicants</h5>
                    <ul className="list-group list-group-flush">
                      {[
                        "Completed application form",
                        "Official academic transcripts",
                        "Personal statement (500-700 words)",
                        "Two letters of recommendation",
                        "Application fee payment"
                      ].map((item, index) => (
                        <li key={index} className="list-group-item bg-transparent border-0 ps-0">
                          <i className="bi bi-check-circle-fill text-success me-2"></i>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="mb-4">
                    <h5 className="fw-bold mb-3">International Students</h5>
                    <ul className="list-group list-group-flush">
                      {[
                        "Proof of English proficiency (TOEFL/IELTS)",
                        "Passport copy",
                        "Financial support documentation",
                        "Visa documentation"
                      ].map((item, index) => (
                        <li key={index} className="list-group-item bg-transparent border-0 ps-0">
                          <i className="bi bi-check-circle-fill text-success me-2"></i>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="mt-4">
                    <button className="btn btn-accent px-4 py-2 me-3">
                      <i className="bi bi-download me-2"></i> Requirements PDF
                    </button>
                    <button className="btn btn-outline-dark px-4 py-2">
                      <i className="bi bi-printer me-2"></i> Print Checklist
                    </button>
                  </div>
                </div>
              </div>
              
              <div className="col-lg-6">
                <div className="p-4 p-md-5 border rounded h-100">
                  <h2 className="fw-bold mb-4 section-title">Important Dates</h2>
                  
                  <div className="timeline">
                    {[
                      {term: "Fall 2023", deadline: "June 15, 2023", decision: "July 30, 2023", status: "past"},
                      {term: "Spring 2024", deadline: "November 1, 2023", decision: "December 15, 2023", status: "current"},
                      {term: "Summer 2024", deadline: "March 15, 2024", decision: "April 30, 2024", status: "upcoming"},
                      {term: "Fall 2024", deadline: "June 15, 2024", decision: "July 30, 2024", status: "upcoming"},
                    ].map((date, index) => (
                      <div key={index} className="timeline-item">
                        <div className="d-flex justify-content-between">
                          <h5 className={`fw-bold ${date.status === 'current' ? 'text-accent' : ''}`}>
                            {date.term}
                            {date.status === 'current' && <span className="badge bg-accent ms-2">Current</span>}
                          </h5>
                          <span className={`badge ${
                            date.status === 'past' ? 'bg-secondary' : 
                            date.status === 'current' ? 'bg-accent-light text-dark' : 'bg-primary-light'
                          }`}>
                            {date.status.charAt(0).toUpperCase() + date.status.slice(1)}
                          </span>
                        </div>
                        <div className="d-md-flex justify-content-between mt-2">
                          <div>
                            <i className="bi bi-calendar-check me-2 text-primary"></i>
                            <strong>Deadline:</strong> {date.deadline}
                          </div>
                          <div>
                            <i className="bi bi-envelope-open me-2 text-primary"></i>
                            <strong>Decision:</strong> {date.decision}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                  
                  <div className="alert alert-warning mt-4 d-flex align-items-center">
                    <i className="bi bi-exclamation-circle me-2 fs-4"></i>
                    <div>
                      <strong>International Students:</strong> Apply at least 3 months before deadlines to allow 
                      sufficient time for visa processing and travel arrangements.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        

     

        {/* Contact */}
        <section className="py-5 bg-light">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-10">
                <div className="card shadow-sm border-0 overflow-hidden">
                  <div className="row g-0">
                    <div className="col-md-5 bg-primary-gradient text-white p-4 p-md-5">
                      <h2 className="fw-bold mb-4">Contact Admissions</h2>
                      <p className="mb-4">Have questions? Our team is here to help you with the application process.</p>
                      
                      <div className="mb-4">
                        <h5 className="fw-bold mb-3"><i className="bi bi-geo-alt me-2"></i> Location</h5>
                        <p>123 Education Boulevard<br />Academic City, AC 12345</p>
                      </div>
                      
                      <div className="mb-4">
                        <h5 className="fw-bold mb-3"><i className="bi bi-telephone me-2"></i> Contact</h5>
                        <p className="mb-1">Phone: (123) 456-7890</p>
                        <p>Email: admissions@university.edu</p>
                      </div>
                      
                      <div>
                        <h5 className="fw-bold mb-3"><i className="bi bi-clock me-2"></i> Office Hours</h5>
                        <p className="mb-1">Monday-Friday: 9:00 AM - 5:00 PM</p>
                        <p>Saturday: 10:00 AM - 2:00 PM</p>
                      </div>
                    </div>
                    
                    <div className="col-md-7">
                      <div className="card-body p-4 p-md-5">
                        <h3 className="fw-bold mb-4">Send us a Message</h3>
                        <form>
                          <div className="row g-3 mb-3">
                            <div className="col-md-6">
                              <label htmlFor="firstName" className="form-label">First Name *</label>
                              <input type="text" className="form-control" id="firstName" required />
                            </div>
                            <div className="col-md-6">
                              <label htmlFor="lastName" className="form-label">Last Name *</label>
                              <input type="text" className="form-control" id="lastName" required />
                            </div>
                          </div>
                          
                          <div className="row g-3 mb-3">
                            <div className="col-md-6">
                              <label htmlFor="email" className="form-label">Email Address *</label>
                              <input type="email" className="form-control" id="email" required />
                            </div>
                            <div className="col-md-6">
                              <label htmlFor="phone" className="form-label">Phone Number</label>
                              <input type="tel" className="form-control" id="phone" />
                            </div>
                          </div>
                          
                          <div className="mb-3">
                            <label htmlFor="program" className="form-label">Program of Interest *</label>
                            <select className="form-select" id="program" required>
                              <option value="">Select a program</option>
                              <option>Undergraduate Programs</option>
                              <option>Graduate Programs</option>
                              <option>Doctoral Programs</option>
                              <option>Professional Certificates</option>
                            </select>
                          </div>
                          
                          <div className="mb-3">
                            <label htmlFor="message" className="form-label">Your Question *</label>
                            <textarea className="form-control" id="message" rows={4} required></textarea>
                          </div>
                          
                          <div className="d-grid mt-4">
                            <button type="submit" className="btn btn-accent btn-lg py-3">
                              Submit Inquiry
                            </button>
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        
      </div>

      
    </>
  );
};

export default AdmissionPage;
