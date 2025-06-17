
// 'use client';

// import React from "react";

// const Footer = () => {
//   return (
//     <div>
//       {/* Campus Location Section */}
//       <section
//         className="venue section-padding"
//         id="section_6"
//         style={{ fontFamily: 'Georgia, serif' }}
//       >
//         <div className="container">
//           {/* Centered Header */}
//           <div className="row justify-content-center mb-4">
//             <div className="col-lg-8 text-center">
//               <h2
//                 className="mb-4 fw-bold border-bottom pb-2 d-inline-block"
//                 style={{ color: '#1e3c72' }}
//               >
//                 Our Campus Location
//               </h2>
//             </div>
//           </div>

//           {/* Map and Address */}
//           <div className="row">
//             <div className="col-lg-6 col-12">
//               <iframe
//                 src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3779.9816911171933!2d73.89686257429071!3d18.664817564753996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2c76405e6f861%3A0x494dec67d252d9b7!2sAPEX%20INTERNATIONAL%20SCHOOL!5e0!3m2!1sen!2sin!4v1741069730023!5m2!1sen!2sin"
//                 width="100%"
//                 height="450"
//                 style={{ border: 0 }}
//                 allowFullScreen
//                 loading="lazy"
//                 referrerPolicy="no-referrer-when-downgrade"
//                 title="Apex International School Location"
//               ></iframe>
//             </div>

//             <div className="col-lg-6 col-12 mt-5 mt-lg-0">
//               <div className="venue-thumb bg-white shadow-lg">
//                 <div className="venue-info-title">
//                   <h2>Apex International School</h2>
//                 </div>
//                 <div className="venue-info-body">
//                   <h4 className="d-flex align-items-center">
//                     <i className="bi-geo-alt me-2"></i>
//                     <span>
//                       Sr No 501/3, Near Prism City, Behind Tanish Orchid Phase II, Charholi BK 412105.
//                     </span>
//                   </h4>
//                   <h5 className="mt-4 mb-3">
//                     <a href="mailto:apexinternationalschool22@gmail.com">
//                       <i className="bi-envelope me-2"></i>
//                       apexinternationalschool22@gmail.com
//                     </a>
//                   </h5>
//                   <h5 className="mb-0">
//                     <a href="tel:+918625837474">
//                       <i className="bi-telephone me-2"></i>
//                       8625837474, 9763200020
//                     </a>
//                   </h5>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Footer Section */}
//       <footer style={{ backgroundColor: "#fff", fontFamily: 'Georgia, serif' }}>
//         <div className="container p-4">
//           <div className="row">
//             {/* School Info */}
//             <div className="col-lg-6 col-md-12 mb-4">
//               <h5 className="mb-3" style={{ letterSpacing: "2px", color: '#1e3c72' }}>
//                 Apex International School
//               </h5>
//               <p>
//                 Apex International School is committed to providing quality education with a holistic approach. 
//                 Our curriculum nurtures students&apos; intellectual and personal growth, empowering them to excel in life.
//               </p>
//             </div>

//             {/* Quick Links */}
//             <div className="col-lg-3 col-md-6 mb-4">
//               <h5 className="mb-3" style={{ letterSpacing: "2px", color: '#1e3c72' }}>Quick Links</h5>
//               <ul className="list-unstyled mb-0">
//                 <li className="mb-1">
//                   <a href="#" style={{ color: "#4f4f4f" }}>Admissions</a>
//                 </li>
//                 <li className="mb-1">
//                   <a href="#" style={{ color: "#4f4f4f" }}>Facilities</a>
//                 </li>
//                 <li>
//                   <a href="#" style={{ color: "#4f4f4f" }}>Contact Us</a>
//                 </li>
//               </ul>
//             </div>
//           </div>
//         </div>

//         {/* Footer Bottom */}
//         <div className="text-center p-3" style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}>
//           © {new Date().getFullYear()} Apex International School | All Rights Reserved
//           <br />
//           Designed by <a href="https://www.sunrayztechnology.com/" target="_blank" rel="noopener noreferrer" style={{ color: "#000" }}>SunRayz Technology</a>
//         </div>
//       </footer>

//       {/* Styles */}
//       <style jsx>{`
//         .venue-thumb {
//           max-width: 350px;
//           margin-left: auto;
//           margin-right: auto;
//           padding: 20px;
//           border-radius: 8px;
//           background: white;
//           box-shadow: 0 4px 8px rgba(0,0,0,0.1);
//         }

//         .venue-info-title h2 {
//           background-color: #1e3c72;
//           color: white;
//           padding: 10px 15px;
//           border-radius: 6px 6px 0 0;
//           margin-bottom: 0;
//           font-size: 1.5rem;
//           text-align: center;
//           font-weight: 600;
//         }

//         .venue-info-body {
//           padding: 15px 15px 20px 15px;
//           border-radius: 0 0 6px 6px;
//           font-size: 0.95rem;
//           color: #333;
//         }

//         .venue-info-body h4,
//         .venue-info-body h5 {
//           margin-bottom: 10px;
//           font-weight: 500;
//           display: flex;
//           align-items: center;
//         }

//         .venue-info-body a {
//           color: #1e3c72;
//           text-decoration: none;
//           font-weight: 600;
//           display: inline-flex;
//           align-items: center;
//         }

//         .venue-info-body a:hover,
//         .venue-info-body a:focus {
//           text-decoration: underline;
//         }

//         /* Responsive tweaks */
//         @media (max-width: 991px) {
//           .venue-thumb {
//             max-width: 100%;
//             margin-top: 20px;
//             padding: 15px;
//           }
//         }
//       `}</style>
//     </div>
//   );
// };

// export default Footer;
'use client';

import React from "react";

const Footer = () => {
  return (
    <div>
      {/* Campus Location Section */}
      <section
        className="venue section-padding"
        id="section_6"
        style={{ fontFamily: 'Georgia, serif' }}
      >
        <div className="container">
          {/* Centered Header */}
          <div className="row justify-content-center mb-4">
            <div className="col-lg-8 text-center">
              <h2
                className="mb-4 fw-bold border-bottom pb-2 d-inline-block"
                style={{ color: '#1e3c72' }}
              >
                Our Campus Location
              </h2>
            </div>
          </div>

          {/* Map and Address */}
          <div className="row align-items-center">
            <div className="col-lg-6 col-12">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!2d3779.9816911171933!2d73.89686257429071!3d18.664817564753996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2c76405e6f861%3A0x494dec67d252d9b7!2sAPEX%20INTERNATIONAL%20SCHOOL!5e0!3m2!1sen!2sin!4v1741069730023!5m2!1sen!2sin"
                width="100%"
                height="350"
                style={{ border: 0, borderRadius: '8px' }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Apex International School Location"
              ></iframe>
            </div>

            <div className="col-lg-6 col-12 mt-4 mt-lg-0 d-flex justify-content-center">
              <div className="venue-thumb bg-white shadow-lg">
                <div className="venue-info-title">
                  <h2>Apex International School</h2>
                </div>
                <div className="venue-info-body">
                  <h4 style={{fontSize:'1.2rem'}}><i className="bi-geo-alt me-2" ></i>Sr No 501/3, Near Prism City, Behind Tanish Orchid Phase II, Charholi BK 412105.</h4>
                  <h5 className="mt-3">
                    <a href="mailto:apexinternationalschool22@gmail.com">
                      <i className="bi-envelope me-2"></i>apexinternationalschool22@gmail.com
                    </a>
                  </h5>
                  <h5>
                    <a href="tel:+918625837474">
                      <i className="bi-telephone me-2"></i>8625837474, 9763200020
                    </a>
                  </h5>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer Section */}
      <footer className="footer-section">
        <div className="container py-5">
          <div className="row">
            {/* About School */}
            <div className="col-lg-6 col-md-12 mb-4">
              <h5 className="footer-title">Apex International School</h5>
              <p>
                Committed to providing quality education with a holistic approach. 
                Our curriculum nurtures students’ intellectual and personal growth, empowering them to excel.
              </p>
            </div>

            {/* Quick Links */}
            <div className="col-lg-3 col-md-6 mb-4">
              <h5 className="footer-title">Quick Links</h5>
              <ul className="list-unstyled">
                <li><a href="#">Admissions</a></li>
                <li><a href="#">Facilities</a></li>
                <li><a href="#">Contact Us</a></li>
              </ul>
            </div>
          </div>
        </div>

        <div className="footer-bottom text-center py-3">
          © {new Date().getFullYear()} Apex International School | All Rights Reserved
          <br />
          Designed by <a href="https://www.sunrayztechnology.com/" target="_blank" rel="noopener noreferrer">SunRayz Technology</a>
        </div>
      </footer>

      {/* Styles */}
      <style jsx>{`
        .venue-thumb {
          max-width: 400px;
          width: 100%;
          padding: 15px;
          border-radius: 10px;
         
        }

        .venue-info-title h2 {
          background-color: #1e3c72;
          color: #fff;
          padding: 10px;
          border-radius: 6px 6px 0 0;
          font-size: 1.25rem;
          text-align: center;
        }

        .venue-info-body {
          padding: 8px;
          font-size: 0.5rem;
          color: #333;
        }

        .venue-info-body h4, .venue-info-body h5 {
          margin-bottom: 10px;
          font-weight: 200;
        }

        .venue-info-body a {
          color: #1e3c72;
          font-weight: 300;
          text-decoration: none;
        }

        .venue-info-body a:hover {
          text-decoration: underline;
        }

        .footer-section {
           background-color: #f8f9fa;
          color: #333;
          font-family: Georgia, serif;
        }

        .footer-title {
          letter-spacing: 1px;
          font-weight: bold;
          color: #1e3c72;
          margin-bottom: 15px;
        }

        .footer-section ul {
          padding-left: 0;
          list-style: none;
        }

        .footer-section ul li {
          margin-bottom: 10px;
        }

        .footer-section ul li a {
          color: #4f4f4f;
          text-decoration: none;
          transition: color 0.3s ease;
        }

        .footer-section ul li a:hover {
          color: #1e3c72;
        }

        .footer-bottom {
          background-color: rgba(0, 0, 0, 0.05);
          font-size: 0.9rem;
        }

        @media (max-width: 768px) {
          .venue-thumb {
            max-width: 100%;
          }
        }
      `}</style>
    </div>
  );
};

export default Footer;
