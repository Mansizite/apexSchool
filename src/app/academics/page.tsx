'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

const AcademicsPage = () => {
  const tiers = [
    {
      title: 'Pre-Primary School',
      desc: 'At Apex Juniors, we believe that every young mind is full of curiosity and wonder. Our nurturing environment and engaging approach to learning inspire creativity, critical thinking, and a lifelong love for exploration.',
      icon: '🎨',
      color: '#FF6B6B',
      features: ['Play-based learning', 'Social development', 'Creative expression'],
      cta: 'View More',
    },
    {
      title: 'Primary School',
      desc: 'At this stage, we lay the foundation for lifelong learning by fostering literacy, numeracy, and social skills. Our experiential and hands-on learning, complemented by world-class amenities, ensures your child\'s academic success.',
      icon: '📚',
      color: '#4ECDC4',
      features: ['Literacy & numeracy', 'Experiential learning', 'Holistic development'],
      cta: 'View More',
    },
    {
      title: 'Middle School',
      desc: 'Apex Middle School fosters independent learning and critical thinking, preparing students for success in secondary school and beyond with a comprehensive curriculum and holistic evaluation approach.',
      icon: '🔬',
      color: '#5567E9',
      features: ['Critical thinking', 'Project-based learning', 'Skill development'],
      cta: 'View More',
    },
  ];

  return (
    <div className="academics-page" style={{ fontFamily: "Georgia, sans-serif" }}>
      {/* Hero Section */}
      <motion.div 
        className="hero-section position-relative mb-5 overflow-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <div className="position-absolute w-100 h-100" style={{ backgroundColor: 'rgba(26, 54, 93, 0.7)', zIndex: 1 }}></div>
        <Image
          src="/ApexBuilding.jpg"
          alt="Academics Hero"
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
          <h1 className="display-4 fw-bold mb-3">Academic Excellence</h1>
          <p className="lead fs-5 mb-4" style={{ maxWidth: '700px', margin: '0 auto', fontWeight: 300 }}>
            Discover how our innovative teaching methodology helps each child achieve their full potential
          </p>
          <motion.button 
            className="btn btn-light btn-lg rounded-pill px-4 py-2 fw-bold mt-2"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            style={{ background: 'rgba(255,255,255,0.9)', color: '#1a365d' }}
          >
            Explore Our Programs <i className="bi bi-arrow-right ms-2"></i>
          </motion.button>
        </motion.div>
      </motion.div>

      <div className="container py-5" style={{ maxWidth: '1200px' }}>
        {/* Section Title */}
        <motion.div 
          className="text-center mb-5"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="display-5 fw-bold mb-3" style={{ color: '#1a365d' }}>Our Academic Tiers</h2>
          <div className="divider mx-auto mb-4" style={{ width: '80px', height: '4px', background: '#4ECDC4' }}></div>
          <p className="text-muted fs-5 mb-0" style={{ maxWidth: '700px', margin: '0 auto' }}>
            Tailored education programs designed for each stage of your child&apos;s development
          </p>
        </motion.div>

        {/* Academic Tiers Cards */}
        <div className="row g-4 mb-5">
          {tiers.map((tier, index) => (
            <motion.div 
              key={index}
              className="col-md-4"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <motion.div 
                className="card h-100 border-0 rounded-4 overflow-hidden shadow-lg"
                whileHover={{ y: -10, boxShadow: '0 20px 25px -5px rgba(0,0,0,0.2)' }}
                transition={{ type: 'spring', stiffness: 300 }}
              >
                <div 
                  className="card-header py-4 border-0 text-center" 
                  style={{ backgroundColor: tier.color }}
                >
                  <div className="icon-container mx-auto d-flex align-items-center justify-content-center rounded-circle mb-3" 
                    style={{ 
                      width: '80px', 
                      height: '80px', 
                      background: 'rgba(255,255,255,0.2)',
                      fontSize: '2.5rem'
                    }}
                  >
                    {tier.icon}
                  </div>
                  <h3 className="card-title fw-bold text-white mb-0">{tier.title}</h3>
                </div>
                <div className="card-body p-4">
                  <p className="card-text mb-4" style={{ color: '#4a5568', lineHeight: '1.7' }}>{tier.desc}</p>
                  
                  <div className="mb-4">
                    <h5 className="fw-semibold mb-3" style={{ color: tier.color }}>Key Features:</h5>
                    <ul className="list-unstyled">
                      {tier.features.map((feature, i) => (
                        <li key={i} className="d-flex align-items-center mb-2">
                          <i className="bi bi-check-circle-fill me-2" style={{ color: tier.color }}></i>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <motion.button 
                    className="btn btn-link p-0 mt-3 fw-bold d-flex align-items-center view-more-btn"
                    whileHover={{ x: 5 }}
                    style={{ color: tier.color }}
                  >
                    {tier.cta} <i className="bi bi-arrow-right ms-2"></i>
                  </motion.button>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Stats Section */}
        <motion.div 
          className="row g-4 mb-5 py-5 rounded-4 shadow-sm"
          style={{ backgroundColor: '#f8f9fa' }}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          {[
            { value: '98%', label: 'Graduation Rate' },
            { value: '12:1', label: 'Student-Teacher Ratio' },
            { value: '25+', label: 'Extracurricular Programs' },
            { value: '100%', label: 'College Acceptance' }
          ].map((stat, index) => (
            <div className="col-md-3 col-6 text-center" key={index}>
              <motion.div
                initial={{ scale: 0.8 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
              >
                <div className="display-4 fw-bold mb-2" style={{ color: '#1a365d' }}>{stat.value}</div>
                <div className="text-muted fw-medium">{stat.label}</div>
              </motion.div>
            </div>
          ))}
        </motion.div>

        {/* CTA Section */}
        <motion.div
          className="text-center mb-5 p-5 rounded-4 position-relative overflow-hidden"
          style={{
            background: 'linear-gradient(135deg, #1a365d 0%, #2c5282 100%)',
            color: 'white'
          }}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="position-absolute top-0 end-0 w-100 h-100 opacity-10">
            <div className="position-absolute end-0 top-0">
              <div style={{ 
                width: '300px', 
                height: '300px', 
                borderRadius: '50%', 
                background: 'radial-gradient(circle, rgba(255,255,255,0.3) 0%, transparent 70%)',
                transform: 'translate(40%, -40%)'
              }}></div>
            </div>
          </div>
          
          <h2 className="display-6 fw-bold mb-3">Ready to Begin Your Journey?</h2>
          <p className="mb-4 fs-5" style={{ maxWidth: '600px', margin: '0 auto', opacity: 0.9 }}>
            Schedule a campus tour or speak with our admissions team today
          </p>
          
          <div className="d-flex flex-wrap justify-content-center gap-3">
            <motion.button 
              className="btn btn-light px-4 py-3 fw-bold rounded-pill"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              style={{ color: '#1a365d' }}
            >
              <i className="bi bi-calendar-check me-2"></i>Schedule a Tour
            </motion.button>
            
            <motion.button 
              className="btn btn-outline-light px-4 py-3 fw-bold rounded-pill"
              whileHover={{ scale: 1.05, backgroundColor: 'rgba(255,255,255,0.1)' }}
              whileTap={{ scale: 0.95 }}
            >
              <i className="bi bi-chat-dots me-2"></i>Contact Admissions
            </motion.button>
          </div>
        </motion.div>
      </div>

      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap');
        
        body {
          background-color: #f8fafc;
        }
        
        .academic-card {
          border-radius: 1rem;
          transition: transform 0.3s ease, box-shadow 0.3s ease;
          overflow: hidden;
          border: none;
        }
        
        .view-more-btn {
          text-decoration: none;
          transition: all 0.3s ease;
        }
        
        .view-more-btn:hover {
          text-decoration: underline;
        }
        
        .card-header {
          transition: background-color 0.3s ease;
        }
        
        .hero-section {
          border-bottom: 6px solid #1a365d;
        }
        
        .divider {
          border-radius: 2px;
        }
        
        @media (max-width: 768px) {
          .hero-text h1 {
            font-size: 2.2rem;
          }
          
          .hero-text p {
            font-size: 1rem;
          }
        }
      `}</style>
    </div>
  );
};

export default AcademicsPage;
