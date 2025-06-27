
// 'use client';

// import Link from "next/link";
// import Image from "next/image";
// import { motion } from "framer-motion";
// import "bootstrap/dist/css/bootstrap.min.css";

// export default function SchoolDetailsPage() {
//   const categories = [
//     {
//       name: "Administrative",
//       items: [
//         {
//           title: "School Accreditation/Affiliation Status",
//           href: "/school-details/accreditation",
//           icon: "bi bi-award"
//         },
//         // {
//         //   title: "List of School Managing Committee Members",
//         //   href: "/school-details/committee",
//         //   icon: "bi bi-people"
//         // },
//         // {
//         //   title: "Staff Statement",
//         //   href: "/school-details/staff-statement",
//         //   icon: "bi bi-person-lines-fill"
//         // },
//       ]
//     },
//     {
//       name: "Academic",
//       items: [
//         {
//           title: "Details of the Curriculum",
//           href: "/school-details/curriculum",
//           icon: "bi bi-journal-bookmark"
//         },
//         {
//           title: "List of Books",
//           href: "/school-details/list-of-books",
//           icon: "bi bi-book"
//         },
//         {
//           title: "Academic Achievements",
//           href: "/school-details/academic-achievements",
//           icon: "bi bi-trophy"
//         },
//         {
//           title: "Details of Teacher Trainings",
//           href: "/school-details/teacher-trainings",
//           icon: "bi bi-mortarboard"
//         },
//       ]
//     },
//     {
//       name: "Policies",
//       items: [
//         {
//           title: "No Homework Policy for Std I and II",
//           href: "/school-details/no-homework-policy",
//           icon: "bi bi-file-earmark-text"
//         },
//         {
//           title: "School Circulars, Norms, and Rules",
//           href: "/school-details/school-circulars",
//           icon: "bi bi-file-earmark-ruled"
//         },
//         // {
//         //   title: "Fee Structure and Fixation Norms",
//         //   href: "/school-details/fee-structure",
//         //   icon: "bi bi-cash-stack"
//         // },
//       ]
//     },
//     {
//       name: "Committees",
//       items: [
//         {
//           title: "Vishakha Committee Details",
//           href: "vishakha-commitee.pdf",
//           icon: "bi bi-shield-check"
//         },
//         {
//           title: "POCSO Committee Information",
//           href: "posco.pdf",
//           icon: "bi bi-shield-lock"
//         },
      
//         {
//           title: "Anti-Bullying Committee Details",
//           href: "anti-bulling.pdf",
//           icon: "bi bi-heart-pulse"
//         },
//         {
//           title: "Grievance Redressal Committee",
//           href: "Grievance-redressa.pdf",
//           icon: "bi bi-chat-square-text"
//         },
//       ]
//     },
//     {
//       name: "Reports & Documents",
//       items: [
//         {
//           title: "Copies of Issued Transfer Certificates",
//           href: "/school-details/transfer-certificates",
//           icon: "bi bi-file-earmark-pdf"
//         },
//         {
//           title: "Self-Affidavit",
//           href: "/school-details/self-affidavit",
//           icon: "bi bi-file-earmark-check"
//         },
    
//         {
//           title: "Annual Report",
//           href: "/school-details/annual-report",
//           icon: "bi bi-file-earmark-bar-graph"
//         },
//       ]
//     },
//     {
//       name: "Facilities & Statistics",
//       items: [
//         {
//           title: "Infrastructure Facilities",
//           href: "/school-details/infrastructure",
//           icon: "bi bi-building"
//         },
//         {
//           title: "Student Strength",
//           href: "/school-details/student-strength",
//           icon: "bi bi-graph-up"
//         },
//       ]
//     }
//   ];

//   return (
//     <div className="school-details-page bg-light" style={{ fontFamily: "Georgia, serif" }}>
//       {/* Hero Section */}
//       {/* <motion.div 
//         className="hero-section position-relative mb-5 overflow-hidden"
//         initial={{ opacity: 0 }}
//         animate={{ opacity: 1 }}
//         transition={{ duration: 0.8 }}
//       >
//         <div className="position-absolute w-100 h-100" style={{ 
//           background: 'linear-gradient(135deg, rgba(26, 54, 93, 0.9) 0%, rgba(52, 152, 219, 0.7) 100%)', 
//           zIndex: 1 
//         }}></div>
//         <Image
//           src="/ApexBuilding.jpg"
//           alt="School Details Hero"
//           width={1200}
//           height={500}
//           priority
//           className="position-relative"
//           style={{ objectFit: 'cover', width: '100%', height: '500px', zIndex: 0 }}
//         />
//         <motion.div
//           className="hero-text position-absolute top-50 start-50 translate-middle text-white text-center px-3 w-100"
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ delay: 0.3, duration: 0.8 }}
//           style={{ zIndex: 2 }}
//         >
//           <div className="container">
//             <motion.h1 
//               className="display-4 fw-bold mb-4"
//               initial={{ opacity: 0 }}
//               animate={{ opacity: 1 }}
//               transition={{ delay: 0.5 }}
//             >
//               School Information 
//             </motion.h1>
//             <motion.p 
//               className="lead fs-4 mb-4 mx-auto" 
//               style={{ maxWidth: '700px', fontWeight: 300 }}
//               initial={{ opacity: 0 }}
//               animate={{ opacity: 1 }}
//               transition={{ delay: 0.7 }}
//             >
//               Transparent access to our school's comprehensive documentation and policies
//             </motion.p>
//             <motion.div
//               initial={{ opacity: 0 }}
//               animate={{ opacity: 1 }}
//               transition={{ delay: 0.9 }}
//             >
//               <div className="d-flex justify-content-center gap-3 mt-4">
//                 <Link href="#categories" className="btn btn-primary btn-lg px-4 py-2 rounded-pill">
//                   Explore Categories <i className="bi bi-arrow-down ms-2"></i>
//                 </Link>
                
//               </div>
//             </motion.div>
//           </div>
//         </motion.div>
//       </motion.div> */}

//       {/* Introduction Section */}
//       <section className="py-5 bg-white">
//         <div className="container">
//           <div className="row align-items-center">
//             <div className="col-lg-6 mb-4 mb-lg-0">
//               <motion.div
//                 initial={{ opacity: 0, x: -20 }}
//                 whileInView={{ opacity: 1, x: 0 }}
//                 transition={{ duration: 0.6 }}
//                 viewport={{ once: true }}
//               >
//                 {/* <h2 className="fw-bold mb-4">Our Commitment to Transparency</h2> */}
//                  <h2 className="mb-4 fw-bold border-bottom pb-2 d-inline-block text-center" style={{ color: '#1e3c72' }}>
//       Our Commitment to Transparency
//       </h2>
//                 <p className="lead text-muted mb-4">
//                   At our school, we believe in open communication and easy access to all important 
//                   documents and policies that govern our institution.
//                 </p>
//                 <p>
//                   This portal provides parents, students, and stakeholders with comprehensive 
//                   information about our operations, academic framework, and administrative processes.
//                 </p>
//                 <div className="d-flex align-items-center mt-4">
//                   <i className="bi bi-shield-check fs-3 text-primary me-3"></i>
//                   <div>
//                     <h5 className="mb-1">Verified Information</h5>
//                     <p className="small text-muted mb-0">All documents are officially verified</p>
//                   </div>
//                 </div>
//               </motion.div>
//             </div>
//             <div className="col-lg-6">
//               <motion.div
//                 className="card border-0 shadow-lg rounded-3 overflow-hidden"
//                 initial={{ opacity: 0, x: 20 }}
//                 whileInView={{ opacity: 1, x: 0 }}
//                 transition={{ duration: 0.6 }}
//                 viewport={{ once: true }}
//               >
//                 <Image
//                   src="/ApexBuilding.jpg"
//                   alt="School Documents"
//                   width={600}
//                   height={400}
//                   className="img-fluid"
//                   style={{ objectFit: 'cover', height: '100%', width: '100%' }}
//                 />
//               </motion.div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Categories Section */}
//       <section id="categories" className="py-5 bg-light">
//         <div className="container">
//           <motion.div
//             className="text-center mb-5"
//             initial={{ opacity: 0 }}
//             whileInView={{ opacity: 1 }}
//             transition={{ duration: 0.5 }}
//             viewport={{ once: true }}
//           >
//             {/* <h2 className="fw-bold mb-3">Information Categories</h2> */}
//                <h2 className="mb-4 fw-bold border-bottom pb-2 d-inline-block text-center" style={{ color: '#1e3c72' }}>
//      Information Categories
//       </h2>
//             <p className="lead text-muted mx-auto" style={{ maxWidth: '700px' }}>
//               Browse through our organized categories to find the specific information you need
//             </p>
//           </motion.div>

//           <div className="row g-4">
//             {categories.map((category, catIndex) => (
//               <motion.div
//                 key={catIndex}
//                 className="col-lg-4 col-md-6"
//                 initial={{ opacity: 0, y: 20 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 transition={{ delay: catIndex * 0.1 }}
//                 viewport={{ once: true }}
//               >
//                 <div className="card border-0 shadow-sm h-100">
//                   <div className="card-header bg-white border-bottom-0 py-3">
//                     <h3 className="h5 fw-bold mb-0 d-flex align-items-center">
//                       <i className="bi bi-folder2-open text-primary me-2"></i>
//                       {category.name}
//                     </h3>
//                   </div>
//                   <div className="card-body py-3">
//                     <ul className="list-unstyled mb-0">
//                       {category.items.map((item, itemIndex) => (
//                         <motion.li 
//                           key={itemIndex}
//                           className="mb-2"
//                           whileHover={{ x: 5 }}
//                           transition={{ type: 'spring', stiffness: 300 }}
//                         >
//                           <Link 
//                             href={item.href} 
//                             className="d-flex align-items-center text-decoration-none text-dark p-2 rounded-3 hover-bg"
//                           >
//                             <i className={`${item.icon} me-3 text-primary`}></i>
//                             <span>{item.title}</span>
//                             <i className="bi bi-chevron-right ms-auto text-muted"></i>
//                           </Link>
//                         </motion.li>
//                       ))}
//                     </ul>
//                   </div>
//                 </div>
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </section>

     
//       <style jsx global>{`
//         @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap');
        
//         .hover-bg:hover {
//           background-color: rgba(26, 54, 93, 0.05);
//         }
        
//         .card {
//           transition: transform 0.3s ease, box-shadow 0.3s ease;
//         }
        
//         .card:hover {
//           transform: translateY(-5px);
//           box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1) !important;
//         }
        
//         .btn-primary {
//           background-color: #1a365d;
//           border-color: #1a365d;
//         }
        
//         .btn-primary:hover {
//           background-color: #142a4a;
//           border-color: #142a4a;
//         }
        
//         .btn-outline-primary {
//           color: #1a365d;
//           border-color: #1a365d;
//         }
        
//         .btn-outline-primary:hover {
//           background-color: #1a365d;
//           color: white;
//         }
//       `}</style>
//     </div>
//   );
// }
'use client';

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import "bootstrap/dist/css/bootstrap.min.css";

export default function SchoolDetailsPage() {
  const categories = [
    {
      name: "Administrative",
      items: [
        {
          title: "School Accreditation/Affiliation Status",
          href: "/school-details/accreditation",
          icon: "bi bi-award"
        }
      ]
    },
    {
      name: "Academic",
      items: [
        {
          title: "Details of the Curriculum",
          href: "/school-details/curriculum",
          icon: "bi bi-journal-bookmark"
        },
        {
          title: "List of Books",
          href: "/school-details/list-of-books",
          icon: "bi bi-book"
        },
        {
          title: "Academic Achievements",
          href: "/school-details/academic-achievements",
          icon: "bi bi-trophy"
        },
        {
          title: "Details of Teacher Trainings",
          href: "/school-details/teacher-trainings",
          icon: "bi bi-mortarboard"
        }
      ]
    },
    {
      name: "Policies",
      items: [
        {
          title: "No Homework Policy for Std I and II",
          href: "/school-details/no-homework-policy",
          icon: "bi bi-file-earmark-text"
        },
        {
          title: "School Circulars, Norms, and Rules",
          href: "/school-details/school-circulars",
          icon: "bi bi-file-earmark-ruled"
        }
      ]
    },
    {
      name: "Committees",
      items: [
        {
          title: "Vishakha Committee Details",
          href: "vishakha-commitee.pdf",
          icon: "bi bi-shield-check"
        },
        {
          title: "POCSO Committee Information",
          href: "posco.pdf",
          icon: "bi bi-shield-lock"
        },
        {
          title: "Anti-Bullying Committee Details",
          href: "anti-bulling.pdf",
          icon: "bi bi-heart-pulse"
        },
        {
          title: "Grievance Redressal Committee",
          href: "Grievance-redressa.pdf",
          icon: "bi bi-chat-square-text"
        }
      ]
    },
    {
      name: "Reports & Documents",
      items: [
        {
          title: "Copies of Issued Transfer Certificates",
          href: "/school-details/transfer-certificates",
          icon: "bi bi-file-earmark-pdf"
        },
        {
          title: "Self-Affidavit",
          href: "self-affidavit.pdf",
          icon: "bi bi-file-earmark-check"
        },
        {
          title: "Annual Report",
          href: "/school-details/annual-report",
          icon: "bi bi-file-earmark-bar-graph"
        }
      ]
    },
    {
      name: "Facilities & Statistics",
      items: [
        {
          title: "Infrastructure Facilities",
          href: "/school-details/infrastructure",
          icon: "bi bi-building"
        },
        {
          title: "Student Strength",
          href: "/school-details/student-strength",
          icon: "bi bi-graph-up"
        }
      ]
    }
  ];

  return (
    <div className="school-details-page bg-light" style={{ fontFamily: "Georgia, serif" }}>
      <section className="py-5 bg-white">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 mb-4 mb-lg-0">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <h2 className="mb-4 fw-bold border-bottom pb-2 d-inline-block text-center" style={{ color: '#1e3c72' }}>
                  Our Commitment to Transparency
                </h2>
                <p className="lead text-muted mb-4">
                  At our school, we believe in open communication and easy access to all important 
                  documents and policies that govern our institution.
                </p>
                <p>
                  This portal provides parents, students, and stakeholders with comprehensive 
                  information about our operations, academic framework, and administrative processes.
                </p>
                <div className="d-flex align-items-center mt-4">
                  <i className="bi bi-shield-check fs-3 text-primary me-3"></i>
                  <div>
                    <h5 className="mb-1">Verified Information</h5>
                    <p className="small text-muted mb-0">All documents are officially verified</p>
                  </div>
                </div>
              </motion.div>
            </div>
            <div className="col-lg-6">
              <motion.div
                className="card border-0 shadow-lg rounded-3 overflow-hidden"
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <Image
                  src="/ApexBuilding.jpg"
                  alt="School Documents"
                  width={600}
                  height={400}
                  className="img-fluid"
                  style={{ objectFit: 'cover', height: '100%', width: '100%' }}
                />
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      <section id="categories" className="py-5 bg-light">
        <div className="container">
          <motion.div
            className="text-center mb-5"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="mb-4 fw-bold border-bottom pb-2 d-inline-block text-center" style={{ color: '#1e3c72' }}>
              Information Categories
            </h2>
            <p className="lead text-muted mx-auto" style={{ maxWidth: '700px' }}>
              Browse through our organized categories to find the specific information you need
            </p>
          </motion.div>

          <div className="row g-4">
            {categories.map((category, catIndex) => (
              <motion.div
                key={catIndex}
                className="col-lg-4 col-md-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: catIndex * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="card border-0 shadow-sm h-100">
                  <div className="card-header bg-white border-bottom-0 py-3">
                    <h3 className="h5 fw-bold mb-0 d-flex align-items-center">
                      <i className="bi bi-folder2-open text-primary me-2"></i>
                      {category.name}
                    </h3>
                  </div>
                  <div className="card-body py-3">
                    <ul className="list-unstyled mb-0">
                      {category.items.map((item, itemIndex) => (
                        <motion.li 
                          key={itemIndex}
                          className="mb-2"
                          whileHover={{ x: 5 }}
                          transition={{ type: 'spring', stiffness: 300 }}
                        >
                          <Link 
                            href={item.href}
                            target={item.href.endsWith('.pdf') ? '_blank' : '_self'}
                            rel={item.href.endsWith('.pdf') ? 'noopener noreferrer' : ''}
                            className="d-flex align-items-center text-decoration-none text-dark p-2 rounded-3 hover-bg"
                          >
                            <i className={`${item.icon} me-3 text-primary`}></i>
                            <span>{item.title}</span>
                            <i className="bi bi-chevron-right ms-auto text-muted"></i>
                          </Link>
                        </motion.li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap');
        .hover-bg:hover {
          background-color: rgba(26, 54, 93, 0.05);
        }
        .card {
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }
        .card:hover {
          transform: translateY(-5px);
          box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1) !important;
        }
        .btn-primary {
          background-color: #1a365d;
          border-color: #1a365d;
        }
        .btn-primary:hover {
          background-color: #142a4a;
          border-color: #142a4a;
        }
        .btn-outline-primary {
          color: #1a365d;
          border-color: #1a365d;
        }
        .btn-outline-primary:hover {
          background-color: #1a365d;
          color: white;
        }
      `}</style>
    </div>
  );
}
