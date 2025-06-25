'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';


const AdmissionPage = () => {
  return (
    <div className="admission-page" style={{ fontFamily: "Georgia, sans-serif" }}>
     
      {/* Hero Section */}
      {/* <div className="hero-section position-relative mb-5">
        <Image
          src="/ApexBuilding.jpg"
          alt="Admission Hero"
          width={1200}
          height={250}
          priority
          style={{
            objectFit: 'cover',
            borderBottom: '4px solid #1a365d',
            width: '100%',
            height: '250',
          }}
        />
        <motion.div
          className="hero-text position-absolute top-50 start-50 translate-middle text-white text-center px-3"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
        >
          <h1 className="display-5 fw-bold">Admission Process</h1>
          <p className="lead" style={{ maxWidth: '700px', margin: '0 auto' }}>
            Everything you need to know about joining Apex International School
          </p>
        </motion.div>
      </div> */}
      <motion.div 
              className="hero-section position-relative mb-5 overflow-hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8 }}
            >
              <div className="position-absolute w-100 h-100" style={{ backgroundColor: 'rgba(26, 54, 93, 0.7)', zIndex: 1 }}></div>
              <Image
                src="/ApexBuilding.jpg"
                alt="Admission Hero"
                width={1200}
                height={400}
                priority
                className="position-relative"
                style={{
                  objectFit: 'cover',
                  width: '100%',
                  height: '400px',
                  zIndex: 0
                }}
              />
              <motion.div
                className="hero-text position-absolute top-50 start-50 translate-middle text-white text-center px-3"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.8 }}
                style={{ zIndex: 2 }}
              >
                <h1 className="display-4 fw-bold mb-3">Admission Process</h1>
                <p className="lead fs-5 mb-4" style={{ maxWidth: '700px', margin: '0 auto', fontWeight: 300,color:'white' }}>
                  Everything you need to know about joining Apex International School
                </p>
                {/* <motion.button 
                  className="btn btn-light btn-lg rounded-pill px-4 py-2 fw-bold mt-2"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  style={{ background: 'rgba(255,255,255,0.9)', color: '#1a365d' }}
                >
                  Explore Our Programs <i className="bi bi-arrow-right ms-2"></i>
                </motion.button> */}
              </motion.div>
            </motion.div>

      <div className="container" style={{ maxWidth: '1200px' }}>
        <div className="row g-4 mb-5">
          {/* Admission Process */}
          <motion.div
            className="col-lg-7"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="card border-0 shadow-sm h-100">
              <div className="card-body p-4 p-lg-5">
                <div className="d-flex align-items-center mb-4">
                  <div className="bg-primary bg-opacity-10 text-primary rounded-2 p-2 me-3">
                    <i className="bi bi-list-ol fs-4"></i>
                  </div>
                  <h2 className="fw-bold mb-0" style={{ color: '#1e3c72', fontSize: '1.8rem' }}>Admission Process</h2>
                </div>

                <div className="timeline-steps">
                  {[
                    {
                      icon: 'bi-chat-square-text',
                      title: 'Initial Inquiry',
                      desc: 'Submit our online form or call our admissions office',
                      highlight: 'We respond within 24 hours'
                    },
                    {
                      icon: 'bi-building',
                      title: 'School Tour',
                      desc: 'Visit our campus for a personalized tour',
                      highlight: 'Virtual tours available'
                    },
                    {
                      icon: 'bi-clipboard2-check',
                      title: 'Assessment',
                      desc: 'Age-appropriate evaluation for your child',
                      highlight: 'No pressure testing'
                    },
                    {
                      icon: 'bi-file-earmark-text',
                      title: 'Enrollment',
                      desc: 'Complete paperwork and join our community',
                      highlight: 'Dedicated support'
                    }
                  ].map((step, index) => (
                    <motion.div
                      key={index}
                      className="timeline-step"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.2 }}
                      viewport={{ once: true }}
                    >
                      <div className="timeline-marker">
                        <div className="bg-primary text-white rounded-circle d-flex align-items-center justify-content-center"
                          style={{ width: '40px', height: '40px' }}>
                          <i className={`bi ${step.icon}`}></i>
                        </div>
                      </div>
                      <div className="timeline-content ps-4 pb-4">
                        <h5 className="fw-bold mb-2" style={{ color: '#1a365d' }}>{step.title}</h5>
                        <p className="mb-2" style={{ color: '#4a5568' }}>{step.desc}</p>
                        <small className="text-primary fw-semibold">
                          <i className="bi bi-info-circle me-1"></i> {step.highlight}
                        </small>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Documents Required */}
          <motion.div
            className="col-lg-5"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="card border-0 shadow-sm h-100">
              <div className="card-body p-4 p-lg-5">
                <div className="d-flex align-items-center mb-4">
                  <div className="bg-primary bg-opacity-10 text-primary rounded-2 p-2 me-3">
                    <i className="bi bi-folder fs-4"></i>
                  </div>
                  <h2 className="fw-bold mb-0" style={{ color: '#1e3c72', fontSize: '1.8rem' }}>Documents Required</h2>
                </div>

                <div className="list-group list-group-flush">
                  {[
                    'Birth Certificate (Original + copy)',
                    'Previous year report card',
                    'Aadhar Cards (Child & Parents)',
                    '4 passport-size photographs',
                    'Caste Certificate (if applicable)',
                    'Transfer Certificate (if applicable)',
                    '3 cheque leaves for fee payment',
                    'Medical history (if any special needs)'
                  ].map((item, index) => (
                    <div key={index} className="list-group-item border-0 px-0 py-2 bg-transparent">
                      <div className="d-flex align-items-center">
                        <div className="bg-primary bg-opacity-10 text-primary rounded-circle d-flex align-items-center justify-content-center me-3"
                          style={{ width: '32px', height: '32px' }}>
                          <i className="bi bi-check-lg"></i>
                        </div>
                        <span style={{ color: '#4a5568' }}>{item}</span>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-4 p-3 rounded-3" style={{ backgroundColor: '#f8f9fa' }}>
                  <div className="d-flex">
                    <i className="bi bi-info-circle text-primary me-2"></i>
                    <small style={{ color: '#4a5568' }}>
                      All documents should be submitted within 7 days of admission confirmation
                    </small>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* CTA Section */}
        <motion.div
          className="text-center mb-5 p-4 p-lg-5 rounded-3"
          style={{
            backgroundColor: '#f8f9fa',
            border: '1px dashed #1a365d'
          }}
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="fw-bold mb-3" style={{ color: '#1a365d' }}>Ready to Apply?</h2>
          <p className="mb-4" style={{ color: '#4a5568', maxWidth: '600px', margin: '0 auto' }}>
            Begin your child&apos;s educational journey with us today
          </p>
           <button className="btn btn-primary px-4 py-2 fw-bold me-2">
            <i className="bi bi-calendar-check me-2"></i>Schedule Tour
          </button> 
         <a href="/contact">
  <button className="btn btn-outline-primary px-4 py-2 fw-bold">
    <i className="bi bi-telephone me-2"></i>Contact Us
  </button>
</a>

        </motion.div>
      </div>

      <style jsx>{`
        .timeline-steps {
          position: relative;
          padding-left: 30px;
          border-left: 2px solid #e2e8f0;
        }
        .timeline-marker {
          position: absolute;
          left: -20px;
          top: 4px;
        }
        .timeline-step {
          padding-bottom: 2rem;
          margin-bottom: 1rem;
          position: relative;
        }
        .timeline-step:last-child {
          padding-bottom: 0;
          margin-bottom: 0;
        }
        .card {
          border-radius: 0.75rem;
          transition: box-shadow 0.3s ease;
        }
        .card:hover {
          box-shadow: 0 1rem 2rem rgba(0, 0, 0, 0.08);
        }
        .btn-outline-primary:hover {
          background-color: #2c5282;
          color: white;
        }
        .list-group-item:hover span {
          color: #1a365d;
          font-weight: 500;
        }
        .hero-text {
          text-shadow: 0 1px 3px rgba(0,0,0,0.6);
        }
        @media (max-width: 768px) {
          .timeline-steps {
            padding-left: 20px;
          }
          .timeline-marker {
            left: -16px;
          }
        }
      `}</style>
    </div>
  );
};

export default AdmissionPage;
