
'use client';

import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { motion } from 'framer-motion';

const CareersPage = () => {
  const [form, setForm] = useState({
    orgName: 'Apex International School',
    branch: '',
    mobile: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`Thank you for your interest in joining Apex International School! We received your application: ${JSON.stringify(form, null, 2)}`);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="careers-page"
      style={{
       
        minHeight: '100vh',
        padding: '2rem 0'
      }}
    >
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-8">
            {/* Header Section */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="text-center mb-5"
            >
              <h1 className="display-5 fw-bold mb-3" style={{ 
                color: '#1e3c72',
                background: 'linear-gradient(90deg, #1e3c72, #2a5298)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent'
              }}>
                Join Our Team
              </h1>
              <p className="lead text-muted">
  At Apex International School, we&rsquo;re looking for passionate educators and staff to help shape the future.
</p>

              <div className="divider mx-auto" style={{
                width: '80px',
                height: '4px',
                background: 'linear-gradient(90deg, #1e3c72, #2a5298)',
                borderRadius: '2px',
                margin: '1.5rem auto'
              }}></div>
            </motion.div>

            {/* Form Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="card shadow-lg border-0"
              style={{ borderRadius: '12px', overflow: 'hidden' }}
            >
              <div className="card-header py-3" style={{ 
                background: 'linear-gradient(90deg, #1e3c72, #2a5298)',
                color: 'white'
              }}>
                <h3 className="mb-0 text-center">Application Form</h3>
              </div>
              
              <div className="card-body p-4 p-md-5">
                <form onSubmit={handleSubmit}>
                  <div className="mb-4">
                    <label className="form-label fw-semibold" style={{ color: '#1e3c72' }}>
                      Organisation Name <span className="text-danger">*</span>
                    </label>
                    <input
                      type="text"
                      className="form-control p-3"
                      style={{ borderColor: '#ced4da', borderRadius: '8px' }}
                      name="orgName"
                      value={form.orgName}
                      readOnly
                    />
                  </div>

                  <div className="mb-4">
                    <label className="form-label fw-semibold" style={{ color: '#1e3c72' }}>
                      Branch Name <span className="text-danger">*</span>
                    </label>
                    <select
                      className="form-select p-3"
                      style={{ borderColor: '#ced4da', borderRadius: '8px' }}
                      name="branch"
                      value={form.branch}
                      onChange={handleChange}
                      required
                    >
                      <option value="">- Select Branch -</option>
                      <option value="Charholi">Charholi</option>
                      <option value="Wagholi">Wagholi</option>
                      <option value="Hadapsar">Hadapsar</option>
                    </select>
                  </div>

                  <div className="mb-4">
                    <label className="form-label fw-semibold" style={{ color: '#1e3c72' }}>
                      Mobile Number <span className="text-danger">*</span>
                    </label>
                    <input
                      type="tel"
                      className="form-control p-3"
                      style={{ borderColor: '#ced4da', borderRadius: '8px' }}
                      name="mobile"
                      value={form.mobile}
                      onChange={handleChange}
                      required
                      maxLength={10}
                      pattern="[0-9]{10}"
                      placeholder="Enter 10-digit mobile number"
                    />
                   <small className="text-muted">We&rsquo;ll contact you on this number</small>

                  </div>

                  <div className="text-center mt-4">
                    <button 
                      type="submit" 
                      className="btn btn-primary px-5 py-3 fw-bold"
                      style={{
                        background: 'linear-gradient(90deg, #1e3c72, #2a5298)',
                        border: 'none',
                        borderRadius: '8px',
                        fontSize: '1.1rem',
                        transition: 'all 0.3s ease',
                        boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)'
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.transform = 'translateY(-2px)';
                        e.currentTarget.style.boxShadow = '0 6px 12px rgba(0, 0, 0, 0.15)';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.transform = 'translateY(0)';
                        e.currentTarget.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.1)';
                      }}
                    >
                      <i className="bi bi-send-fill me-2"></i>Submit Application
                    </button>
                  </div>
                </form>
              </div>
            </motion.div>

            {/* Additional Info Section */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="mt-5 text-center"
            >
              <h4 className="mb-3" style={{ color: '#1e3c72' }}>Why Join Apex International School?</h4>
              <div className="row g-4">
                <div className="col-md-4">
                  <div className="p-3 h-100" style={{ 
                    background: 'white', 
                    borderRadius: '10px',
                    boxShadow: '0 2px 10px rgba(0,0,0,0.05)'
                  }}>
                    <div className="icon-wrapper mb-3" style={{
                      width: '60px',
                      height: '60px',
                      margin: '0 auto',
                      background: 'linear-gradient(135deg, rgba(30,60,114,0.1) 0%, rgba(42,82,152,0.1) 100%)',
                      borderRadius: '50%',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center'
                    }}>
                      <i className="bi bi-people-fill" style={{ fontSize: '1.5rem', color: '#1e3c72' }}></i>
                    </div>
                    <h5 style={{ color: '#1e3c72' }}>Supportive Community</h5>
                    <p className="text-muted">Join a team that values collaboration and professional growth.</p>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="p-3 h-100" style={{ 
                    background: 'white', 
                    borderRadius: '10px',
                    boxShadow: '0 2px 10px rgba(0,0,0,0.05)'
                  }}>
                    <div className="icon-wrapper mb-3" style={{
                      width: '60px',
                      height: '60px',
                      margin: '0 auto',
                      background: 'linear-gradient(135deg, rgba(30,60,114,0.1) 0%, rgba(42,82,152,0.1) 100%)',
                      borderRadius: '50%',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center'
                    }}>
                      <i className="bi bi-award-fill" style={{ fontSize: '1.5rem', color: '#1e3c72' }}></i>
                    </div>
                    <h5 style={{ color: '#1e3c72' }}>Professional Development</h5>
                    <p className="text-muted">Regular training and opportunities for career advancement.</p>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="p-3 h-100" style={{ 
                    background: 'white', 
                    borderRadius: '10px',
                    boxShadow: '0 2px 10px rgba(0,0,0,0.05)'
                  }}>
                    <div className="icon-wrapper mb-3" style={{
                      width: '60px',
                      height: '60px',
                      margin: '0 auto',
                      background: 'linear-gradient(135deg, rgba(30,60,114,0.1) 0%, rgba(42,82,152,0.1) 100%)',
                      borderRadius: '50%',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center'
                    }}>
                      <i className="bi bi-heart-fill" style={{ fontSize: '1.5rem', color: '#1e3c72' }}></i>
                    </div>
                    <h5 style={{ color: '#1e3c72' }}>Competitive Benefits</h5>
                    <p className="text-muted">Comprehensive benefits package and work-life balance.</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default CareersPage;