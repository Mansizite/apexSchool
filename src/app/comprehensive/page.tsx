// // 'use client';

// // import Link from "next/link";
// // import Image from "next/image";
// // import { motion } from "framer-motion";
// // import "bootstrap/dist/css/bootstrap.min.css";

// // export default function SchoolDetailsPage() {
// //   const items = [
// //     {
// //       title: "School Accreditation/Affiliation Status",
// //       href: "/school-details/accreditation",
// //     },
// //     {
// //       title: "Details of the Curriculum",
// //       href: "/school-details/curriculum",
// //     },
// //     {
// //       title: "List of School Managing Committee Members",
// //       href: "/school-details/committee",
// //     },
// //     {
// //       title: "Copies of Issued Transfer Certificates",
// //       href: "/school-details/transfer-certificates",
// //     },
// //     {
// //       title: "Fee Structure and Fixation Norms",
// //       href: "/school-details/fee-structure",
// //     },
// //     {
// //       title: "Self-Affidavit",
// //       href: "/school-details/self-affidavit",
// //     },
// //     {
// //       title: "Annual Planner/Calendar",
// //       href: "/school-details/annual-planner",
// //     },
// //     {
// //       title: "Annual Report",
// //       href: "/school-details/annual-report",
// //     },
// //     {
// //       title: "No Homework Policy for Std I and II",
// //       href: "/school-details/no-homework-policy",
// //     },
// //     {
// //       title: "Vishakha Committee Details",
// //       href: "/school-details/vishakha-committee",
// //     },
// //     {
// //       title: "List of Books",
// //       href: "/school-details/list-of-books",
// //     },
// //     {
// //       title: "Academic Achievements",
// //       href: "/school-details/academic-achievements",
// //     },
// //     {
// //       title: "Details of Teacher Trainings",
// //       href: "/school-details/teacher-trainings",
// //     },
// //     {
// //       title: "POCSO Committee Information",
// //       href: "/school-details/pocso-committee",
// //     },
// //     {
// //       title: "PTA Committee Details",
// //       href: "/school-details/pta-committee",
// //     },
// //     {
// //       title: "Staff Statement",
// //       href: "/school-details/staff-statement",
// //     },
// //     {
// //       title: "School Circulars, Norms, and Rules Related to Students, Parents, Admissions, and Withdrawals",
// //       href: "/school-details/school-circulars",
// //     },
// //     {
// //       title: "Anti-Bullying Committee Details",
// //       href: "/school-details/anti-bullying",
// //     },
// //     {
// //       title: "Grievance Redressal Committee Information",
// //       href: "/school-details/grievance-redressal",
// //     },
// //     {
// //       title: "Infrastructure Facilities",
// //       href: "/school-details/infrastructure",
// //     },
// //     {
// //       title: "Student Strength",
// //       href: "/school-details/student-strength",
// //     },
// //   ];

// //   return (
// //     <div className="school-details-page bg-light" style={{ fontFamily: 'Georgia, serif' }}>
// //       {/* Hero Section */}
// //       <motion.div 
// //         className="hero-section position-relative mb-5 overflow-hidden"
// //         initial={{ opacity: 0 }}
// //         animate={{ opacity: 1 }}
// //         transition={{ duration: 0.8 }}
// //       >
// //         <div className="position-absolute w-100 h-100" style={{ backgroundColor: 'rgba(26, 54, 93, 0.7)', zIndex: 1 }}></div>
// //         <Image
// //           src="/ApexBuilding.jpg"
// //           alt="School Details Hero"
// //           width={1200}
// //           height={400}
// //           priority
// //           className="position-relative"
// //           style={{ objectFit: 'cover', width: '100%', height: '400px', zIndex: 0 }}
// //         />
// //         <motion.div
// //           className="hero-text position-absolute top-50 start-50 translate-middle text-white text-center px-3"
// //           initial={{ opacity: 0, y: 20 }}
// //           animate={{ opacity: 1, y: 0 }}
// //           transition={{ delay: 0.3, duration: 0.8 }}
// //           style={{ zIndex: 2 }}
// //         >
// //           <h1 className="display-4 fw-bold mb-3">School Information</h1>
// //           <p className="lead fs-5 mb-4" style={{ maxWidth: '700px', margin: '0 auto', fontWeight: 300 }}>
// //             Detailed records of our school's structure, systems, and standards
// //           </p>
// //         </motion.div>
// //       </motion.div>

// //       {/* Content Grid */}
// //       <div className="container mb-5">
// //         <motion.div 
// //           className="row g-4"
// //           initial={{ opacity: 0 }}
// //           whileInView={{ opacity: 1 }}
// //           transition={{ duration: 0.5 }}
// //           viewport={{ once: true }}
// //         >
// //           {items.map((item, index) => (
// //             <motion.div
// //               key={index}
// //               className="col-md-6 col-lg-4"
// //               initial={{ opacity: 0, y: 20 }}
// //               whileInView={{ opacity: 1, y: 0 }}
// //               transition={{ delay: index * 0.03 }}
// //               viewport={{ once: true }}
// //             >
// //               <div className="card shadow-sm border-0 h-100">
// //                 <div className="card-body p-4 d-flex flex-column justify-content-between">
// //                   <h5 className="fw-bold mb-3 text-primary" style={{ minHeight: '3rem' }}>{item.title}</h5>
// //                   <Link href={item.href} className="btn btn-outline-primary w-100 mt-auto">
// //                     View Details <i className="bi bi-arrow-right ms-2"></i>
// //                   </Link>
// //                 </div>
// //               </div>
// //             </motion.div>
// //           ))}
// //         </motion.div>
// //       </div>

// //       <style jsx>{`
// //         .hero-text {
// //           text-shadow: 0 1px 3px rgba(0,0,0,0.6);
// //         }
// //         .card:hover {
// //           box-shadow: 0 1rem 2rem rgba(0, 0, 0, 0.08);
// //           transform: translateY(-4px);
// //           transition: all 0.3s ease;
// //         }
// //         .btn-outline-primary:hover {
// //           background-color: #1a365d;
// //           color: white;
// //         }
// //       `}</style>
// //     </div>
// //   );
// // }
// 'use client';

// import Link from "next/link";
// import Image from "next/image";
// import { motion } from "framer-motion";
// import "bootstrap/dist/css/bootstrap.min.css";

// export default function SchoolDetailsPage() {
//   const items = [
//     { title: "School Accreditation/Affiliation Status", href: "/school-details/accreditation" },
//     { title: "Details of the Curriculum", href: "/school-details/curriculum" },
//     { title: "List of School Managing Committee Members", href: "/school-details/committee" },
//     { title: "Copies of Issued Transfer Certificates", href: "/school-details/transfer-certificates" },
//     { title: "Fee Structure and Fixation Norms", href: "/school-details/fee-structure" },
//     { title: "Self-Affidavit", href: "/school-details/self-affidavit" },
//     { title: "Annual Planner/Calendar", href: "/school-details/annual-planner" },
//     { title: "Annual Report", href: "/school-details/annual-report" },
//     { title: "No Homework Policy for Std I and II", href: "/school-details/no-homework-policy" },
//     { title: "Vishakha Committee Details", href: "/school-details/vishakha-committee" },
//     { title: "List of Books", href: "/school-details/list-of-books" },
//     { title: "Academic Achievements", href: "/school-details/academic-achievements" },
//     { title: "Details of Teacher Trainings", href: "/school-details/teacher-trainings" },
//     { title: "POCSO Committee Information", href: "/school-details/pocso-committee" },
//     { title: "PTA Committee Details", href: "/school-details/pta-committee" },
//     { title: "Staff Statement", href: "/school-details/staff-statement" },
//     { title: "School Circulars, Norms, and Rules Related to Students, Parents, Admissions, and Withdrawals", href: "/school-details/school-circulars" },
//     { title: "Anti-Bullying Committee Details", href: "/school-details/anti-bullying" },
//     { title: "Grievance Redressal Committee Information", href: "/school-details/grievance-redressal" },
//     { title: "Infrastructure Facilities", href: "/school-details/infrastructure" },
//     { title: "Student Strength", href: "/school-details/student-strength" }
//   ];

//   return (
//     <div className="school-details-page bg-light" style={{ fontFamily: 'Georgia, serif' }}>
//       {/* Hero Section */}
//       <motion.div 
//         className="hero-section position-relative mb-5 overflow-hidden"
//         initial={{ opacity: 0 }}
//         animate={{ opacity: 1 }}
//         transition={{ duration: 0.8 }}
//       >
//         <div className="position-absolute w-100 h-100" style={{ backgroundColor: 'rgba(26, 54, 93, 0.7)', zIndex: 1 }}></div>
//         <Image
//           src="/ApexBuilding.jpg"
//           alt="School Details Hero"
//           width={1200}
//           height={400}
//           priority
//           className="position-relative"
//           style={{ objectFit: 'cover', width: '100%', height: '400px', zIndex: 0 }}
//         />
//         <motion.div
//           className="hero-text position-absolute top-50 start-50 translate-middle text-white text-center px-3"
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ delay: 0.3, duration: 0.8 }}
//           style={{ zIndex: 2 }}
//         >
//           <h1 className="display-4 fw-bold mb-3">School Information</h1>
//           <p className="lead fs-5 mb-4" style={{ maxWidth: '700px', margin: '0 auto', fontWeight: 300 }}>
//             Detailed records of our school's structure, systems, and standards
//           </p>
//         </motion.div>
//       </motion.div>

//       {/* Content Grid */}
//       <div className="container mb-5">
//         <motion.div 
//           className="row g-4"
//           initial={{ opacity: 0 }}
//           whileInView={{ opacity: 1 }}
//           transition={{ duration: 0.5 }}
//           viewport={{ once: true }}
//         >
//           {items.map((item, index) => (
//             <motion.div
//               key={index}
//               className="col-md-6 col-lg-4"
//               initial={{ opacity: 0, y: 20 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               transition={{ delay: index * 0.03 }}
//               viewport={{ once: true }}
//             >
//               <div className="card shadow-sm border-0 h-100 bg-white position-relative">
//                 <div className="position-absolute top-0 end-0 m-3">
//                   <i className="bi bi-info-circle text-primary fs-5"></i>
//                 </div>
//                 <div className="card-body p-4 d-flex flex-column justify-content-between">
//                   <h5 className="fw-bold mb-3 text-primary" style={{ minHeight: '3rem' }}>{item.title}</h5>
//                   <Link href={item.href} className="btn btn-outline-primary w-100 mt-auto rounded-pill">
//                     View Details <i className="bi bi-arrow-right ms-2"></i>
//                   </Link>
//                 </div>
//               </div>
//             </motion.div>
//           ))}
//         </motion.div>

//         {/* CTA Section */}
//         <motion.div
//           className="text-center mt-5 p-4 p-lg-5 rounded-3 border"
//           style={{ borderColor: '#cbd5e0', backgroundColor: '#f1f5f9' }}
//           initial={{ opacity: 0, scale: 0.95 }}
//           whileInView={{ opacity: 1, scale: 1 }}
//           transition={{ duration: 0.5 }}
//           viewport={{ once: true }}
//         >
//           <h2 className="fw-bold mb-3 text-primary">Need Help Navigating?</h2>
//           <p className="mb-4" style={{ maxWidth: '600px', margin: '0 auto', color: '#4a5568' }}>
//             For questions or additional information about our school policies or structure, feel free to reach out to our administration team.
//           </p>
//           <Link href="/contact" className="btn btn-primary btn-lg px-4 fw-bold">
//             <i className="bi bi-telephone me-2"></i> Contact Us
//           </Link>
//         </motion.div>
//       </div>

//       <style jsx>{`
//         .hero-text {
//           text-shadow: 0 1px 3px rgba(0,0,0,0.6);
//         }
//         .card:hover {
//           box-shadow: 0 1rem 2rem rgba(0, 0, 0, 0.08);
//           transform: translateY(-4px);
//           transition: all 0.3s ease;
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
        },
        // {
        //   title: "List of School Managing Committee Members",
        //   href: "/school-details/committee",
        //   icon: "bi bi-people"
        // },
        // {
        //   title: "Staff Statement",
        //   href: "/school-details/staff-statement",
        //   icon: "bi bi-person-lines-fill"
        // },
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
        },
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
        },
        // {
        //   title: "Fee Structure and Fixation Norms",
        //   href: "/school-details/fee-structure",
        //   icon: "bi bi-cash-stack"
        // },
      ]
    },
    {
      name: "Committees",
      items: [
        {
          title: "Vishakha Committee Details",
          href: "/school-details/vishakha-committee",
          icon: "bi bi-shield-check"
        },
        {
          title: "POCSO Committee Information",
          href: "/school-details/pocso-committee",
          icon: "bi bi-shield-lock"
        },
      
        {
          title: "Anti-Bullying Committee Details",
          href: "/school-details/anti-bullying",
          icon: "bi bi-heart-pulse"
        },
        {
          title: "Grievance Redressal Committee",
          href: "/school-details/grievance-redressal",
          icon: "bi bi-chat-square-text"
        },
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
          href: "/school-details/self-affidavit",
          icon: "bi bi-file-earmark-check"
        },
    
        {
          title: "Annual Report",
          href: "/school-details/annual-report",
          icon: "bi bi-file-earmark-bar-graph"
        },
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
        },
      ]
    }
  ];

  return (
    <div className="school-details-page bg-light" style={{ fontFamily: "Georgia, serif" }}>
      {/* Hero Section */}
      {/* <motion.div 
        className="hero-section position-relative mb-5 overflow-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <div className="position-absolute w-100 h-100" style={{ 
          background: 'linear-gradient(135deg, rgba(26, 54, 93, 0.9) 0%, rgba(52, 152, 219, 0.7) 100%)', 
          zIndex: 1 
        }}></div>
        <Image
          src="/ApexBuilding.jpg"
          alt="School Details Hero"
          width={1200}
          height={500}
          priority
          className="position-relative"
          style={{ objectFit: 'cover', width: '100%', height: '500px', zIndex: 0 }}
        />
        <motion.div
          className="hero-text position-absolute top-50 start-50 translate-middle text-white text-center px-3 w-100"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          style={{ zIndex: 2 }}
        >
          <div className="container">
            <motion.h1 
              className="display-4 fw-bold mb-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              School Information 
            </motion.h1>
            <motion.p 
              className="lead fs-4 mb-4 mx-auto" 
              style={{ maxWidth: '700px', fontWeight: 300 }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7 }}
            >
              Transparent access to our school's comprehensive documentation and policies
            </motion.p>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.9 }}
            >
              <div className="d-flex justify-content-center gap-3 mt-4">
                <Link href="#categories" className="btn btn-primary btn-lg px-4 py-2 rounded-pill">
                  Explore Categories <i className="bi bi-arrow-down ms-2"></i>
                </Link>
                
              </div>
            </motion.div>
          </div>
        </motion.div>
      </motion.div> */}

      {/* Introduction Section */}
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
                {/* <h2 className="fw-bold mb-4">Our Commitment to Transparency</h2> */}
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

      {/* Categories Section */}
      <section id="categories" className="py-5 bg-light">
        <div className="container">
          <motion.div
            className="text-center mb-5"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            {/* <h2 className="fw-bold mb-3">Information Categories</h2> */}
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