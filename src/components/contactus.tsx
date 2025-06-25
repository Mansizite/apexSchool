

// 'use client'
// import React from 'react';
// import { motion } from 'framer-motion';

// const ContactUs = () => {
//   return (
//     <div className="contact-page" style={{
//       background: 'linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%)',
//       padding: '4rem 0'
//     }}>
//       {/* Contact Section */}
//       <section className="contact section-padding" id="section_7">
//         <div className="container">
//           <div className="row justify-content-center">
//             <div className="col-lg-10 col-12">
//               <motion.div 
//                 initial={{ opacity: 0, y: 20 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 transition={{ duration: 0.6 }}
//                 className="text-center mb-5"
//               >
//                 <h1 className="display-5 fw-bold mb-3" style={{ 
//                   color: 'white',
//                   // background: 'linear-gradient(90deg, #1a237e, #283593)',
//                   WebkitBackgroundClip: 'text',
//                   WebkitTextFillColor: 'transparent'
//                 }}>
//                   Get In Touch
//                 </h1>
//                 <p className="lead text-muted">
//                   Have questions or need assistance? Our team is here to help you.
//                 </p>
//                 <div className="divider mx-auto" style={{
//                   width: '80px',
//                   height: '4px',
//                   background: 'linear-gradient(90deg, #1a237e, #283593)',
//                   borderRadius: '2px',
//                   margin: '1.5rem auto'
//                 }}></div>
//               </motion.div>
//             </div>

//             <div className="col-lg-8 col-md-10 col-12">
//               <motion.div
//                 initial={{ opacity: 0, scale: 0.98 }}
//                 animate={{ opacity: 1, scale: 1 }}
//                 transition={{ duration: 0.5, delay: 0.2 }}
//                 className="custom-form contact-form bg-white shadow-lg p-4 p-md-5 rounded-3"
//                 style={{ border: '1px solid rgba(0,0,0,0.05)' }}
//               >
//                 <h2 className="text-center mb-4 fw-bold" style={{ color: '#1a237e' }}>
//                   Contact Us for More Information
//                 </h2>
                
//                 <form action="#" method="post" role="form">
//                   <div className="row g-3">
//                     <div className="col-lg-6 col-md-6 col-12">
//                       <div className="form-floating">
//                         <input
//                           type="text"
//                           name="name"
//                           id="name"
//                           className="form-control p-3"
//                           style={{ 
//                             border: '1px solid #ced4da',
//                             borderRadius: '8px'
//                           }}
//                           placeholder="Your Name"
//                           required
//                         />
//                         <label htmlFor="name" className="text-muted">Your Name</label>
//                       </div>
//                     </div>
                    
//                     <div className="col-lg-6 col-md-6 col-12">
//                       <div className="form-floating">
//                         <input
//                           type="email"
//                           name="email"
//                           id="email"
//                           pattern="[^ @]*@[^ @]*"
//                           className="form-control p-3"
//                           style={{ 
//                             border: '1px solid #ced4da',
//                             borderRadius: '8px'
//                           }}
//                           placeholder="Your Email"
//                           required
//                         />
//                         <label htmlFor="email" className="text-muted">Your Email</label>
//                       </div>
//                     </div>
                    
//                     <div className="col-12">
//                       <div className="form-floating">
//                         <input
//                           type="text"
//                           name="subject"
//                           id="subject"
//                           className="form-control p-3"
//                           style={{ 
//                             border: '1px solid #ced4da',
//                             borderRadius: '8px'
//                           }}
//                           placeholder="Subject"
//                         />
//                         <label htmlFor="subject" className="text-muted">Subject</label>
//                       </div>
//                     </div>
                    
//                     <div className="col-12">
//                       <div className="form-floating">
//                         <textarea
//                           className="form-control p-3"
//                           style={{ 
//                             border: '1px solid #ced4da',
//                             borderRadius: '8px',
//                             height: '150px'
//                           }}
//                           id="message"
//                           name="message"
//                           placeholder="Your Message or Query"
//                         ></textarea>
//                         <label htmlFor="message" className="text-muted">Your Message</label>
//                       </div>
//                     </div>

//                     <div className="col-12 mt-3">
//                       <motion.button
//                         whileHover={{ 
//                           scale: 1.02,
//                           boxShadow: '0 8px 15px rgba(26, 35, 126, 0.2)'
//                         }}
//                         whileTap={{ scale: 0.98 }}
//                         type="submit"
//                         className="btn btn-primary btn-lg w-100 py-3 fw-bold"
//                         style={{
//                           background: 'linear-gradient(90deg, #1a237e, #283593)',
//                           border: 'none',
//                           borderRadius: '8px',
//                           transition: 'all 0.3s ease'
//                         }}
//                       >
//                         Send Message
//                         <i className="bi bi-send-fill ms-2"></i>
//                       </motion.button>
//                     </div>
//                   </div>
//                 </form>
//               </motion.div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Contact Info Section */}
//       <section className="container mt-5">
//         <div className="row g-4 justify-content-center">
//           <motion.div 
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ delay: 0.3, duration: 0.6 }}
//             className="col-md-4"
//           >
//             <div className="card border-0 shadow-sm h-100" style={{ borderRadius: '12px' }}>
//               <div className="card-body text-center p-4">
//                 <div className="icon-box mb-3" style={{
//                   width: '70px',
//                   height: '70px',
//                   margin: '0 auto',
//                   background: 'linear-gradient(135deg, rgba(26,35,126,0.1) 0%, rgba(40,53,147,0.1) 100%)',
//                   borderRadius: '50%',
//                   display: 'flex',
//                   alignItems: 'center',
//                   justifyContent: 'center'
//                 }}>
//                   <i className="bi bi-geo-alt-fill" style={{ fontSize: '1.75rem', color: '#1a237e' }}></i>
//                 </div>
//                 <h5 style={{ color: '#1a237e' }}>Our Location</h5>
//                 <p className="text-muted mb-0">123 Education Street<br />Knowledge City, 560001</p>
//               </div>
//             </div>
//           </motion.div>
          
//           <motion.div 
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ delay: 0.4, duration: 0.6 }}
//             className="col-md-4"
//           >
//             <div className="card border-0 shadow-sm h-100" style={{ borderRadius: '12px' }}>
//               <div className="card-body text-center p-4">
//                 <div className="icon-box mb-3" style={{
//                   width: '70px',
//                   height: '70px',
//                   margin: '0 auto',
//                   background: 'linear-gradient(135deg, rgba(26,35,126,0.1) 0%, rgba(40,53,147,0.1) 100%)',
//                   borderRadius: '50%',
//                   display: 'flex',
//                   alignItems: 'center',
//                   justifyContent: 'center'
//                 }}>
//                   <i className="bi bi-telephone-fill" style={{ fontSize: '1.75rem', color: '#1a237e' }}></i>
//                 </div>
//                 <h5 style={{ color: '#1a237e' }}>Phone Number</h5>
//                 <p className="text-muted mb-0">
//                   <a href="tel:+911234567890" className="text-decoration-none">+91 12345 67890</a><br />
//                   <a href="tel:+919876543210" className="text-decoration-none">+91 98765 43210</a>
//                 </p>
//               </div>
//             </div>
//           </motion.div>
          
//           <motion.div 
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ delay: 0.5, duration: 0.6 }}
//             className="col-md-4"
//           >
//             <div className="card border-0 shadow-sm h-100" style={{ borderRadius: '12px' }}>
//               <div className="card-body text-center p-4">
//                 <div className="icon-box mb-3" style={{
//                   width: '70px',
//                   height: '70px',
//                   margin: '0 auto',
//                   background: 'linear-gradient(135deg, rgba(26,35,126,0.1) 0%, rgba(40,53,147,0.1) 100%)',
//                   borderRadius: '50%',
//                   display: 'flex',
//                   alignItems: 'center',
//                   justifyContent: 'center'
//                 }}>
//                   <i className="bi bi-envelope-fill" style={{ fontSize: '1.75rem', color: '#1a237e' }}></i>
//                 </div>
//                 <h5 style={{ color: '#1a237e' }}>Email Address</h5>
//                 <p className="text-muted mb-0">
//                   <a href="mailto:info@apexschool.edu" className="text-decoration-none">info@apexschool.edu</a><br />
//                   <a href="mailto:admissions@apexschool.edu" className="text-decoration-none">admissions@apexschool.edu</a>
//                 </p>
//               </div>
//             </div>
//           </motion.div>
//         </div>
//       </section>
//     </div>
//   );
// };

// export default ContactUs;
'use client'
import React from 'react';
import { motion } from 'framer-motion';

const ContactUs = () => {
  return (
    <div className="contact-page" style={{
      backgroundColor: '#f4f6f9',
      padding: '4rem 0'
    }}>
      {/* Contact Section */}
      <section className="contact section-padding" id="section_7">
        <div className="container">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-5"
          >
            <h1 className="display-5 fw-bold mb-3" style={{
              color: 'white',
              fontFamily: 'Georgia, serif'
            }}>
              Contact Us
            </h1>
            <p className="lead text-light">
              Have questions or need guidance? We’re here to assist you.
            </p>
            <div className="divider mx-auto" style={{
              width: '80px',
              height: '4px',
              backgroundColor: '#6a1b9a',
              borderRadius: '2px',
              margin: '1.5rem auto'
            }}></div>
          </motion.div>

          <div className="row justify-content-center">
            <div className="col-lg-8">
              <motion.div
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className="bg-white shadow p-5 rounded-4"
              >
                <h2 className="text-center mb-4 fw-semibold" style={{ color: '#4a148c' }}>
                  Send Us a Message
                </h2>

                <form>
                  <div className="row g-4">
                    <div className="col-md-6">
                      <input
                        type="text"
                        placeholder="Your Name"
                        className="form-control p-3"
                        style={{
                          borderRadius: '10px',
                          borderColor: '#ccc'
                        }}
                        required
                      />
                    </div>
                    <div className="col-md-6">
                      <input
                        type="email"
                        placeholder="Your Email"
                        className="form-control p-3"
                        style={{
                          borderRadius: '10px',
                          borderColor: '#ccc'
                        }}
                        required
                      />
                    </div>
                    <div className="col-12">
                      <input
                        type="text"
                        placeholder="Subject"
                        className="form-control p-3"
                        style={{
                          borderRadius: '10px',
                          borderColor: '#ccc'
                        }}
                      />
                    </div>
                    <div className="col-12">
                      <textarea
                        rows={5}
                        placeholder="Your Message"
                        className="form-control p-3"
                        style={{
                          borderRadius: '10px',
                          borderColor: '#ccc',
                          resize: 'none'
                        }}
                      />
                    </div>
                    <div className="col-12">
                      <motion.button
                        whileHover={{ scale: 1.03 }}
                        whileTap={{ scale: 0.98 }}
                        type="submit"
                        className="btn btn-lg w-100 text-white fw-bold"
                        style={{
                          background: 'linear-gradient(90deg, #6a1b9a, #8e24aa)',
                          border: 'none',
                          borderRadius: '10px'
                        }}
                      >
                        Submit Inquiry
                      </motion.button>
                    </div>
                  </div>
                </form>
              </motion.div>
            </div>
          </div>

          {/* Contact Cards */}
          
        </div>
      </section>
    </div>
  );
};

export default ContactUs;
