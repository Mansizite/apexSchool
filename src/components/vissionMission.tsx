'use client';

import { FaBullseye, FaEye } from "react-icons/fa";
import "bootstrap/dist/css/bootstrap.min.css";

export default function VisionMissionPage() {
  return (
    <section className="bg-light py-5" id="section_4" style={{fontFamily:'Georgia, serif'}}>
      <div className="container">
        {/* Header */}
      <div className="col-lg-10 col-12">
        <h2 className="mb-4">
          Vision &<u className="text-info">Mission</u>
        </h2>
      </div>
        {/* Cards Section */}
        <div className="row g-4">
          {/* Mission */}
          <div className="col-md-6">
            <div className="card h-100 shadow-sm border-0">
              <div className="card-body">
                <div className="d-flex align-items-center mb-3">
                  <FaBullseye className="text-primary fs-1 me-3" />
                  <h3 className="card-title mb-0">Our Mission</h3>
                </div>
                <p>
                  To provide quality and comprehensive educational opportunities for all students in a safe and caring environment to enable students to achieve individual excellence, become productive citizens, and be successful in their future endeavours.
                </p>
                <p>
                  Inspire our children to be passionate lifelong learners through a curriculum with pedagogical integrity, which allows them to always inquire, innovate and contribute in meaningful ways to society.
                </p>
                <p>
                  Give quality education and promote the intellectual, emotional, social, and physical development of each student in a congenial and caring environment.
                </p>
              </div>
            </div>
          </div>

          {/* Vision */}
          <div className="col-md-6">
            <div className="card h-100 shadow-sm border-0">
              <div className="card-body">
                <div className="d-flex align-items-center mb-3">
                  <FaEye className="text-info fs-1 me-3" />
                  <h3 className="card-title mb-0">Our Vision</h3>
                </div>
                <p>
                  Every student is a secure individual, a leader of self-worth, and a significant citizen. Apex International School aims to build a community of confident, global leaders with social conscience and national pride, committed to excellence and continuous learning.
                </p>
                <p>
                  Our vision is a school that provides a standard education, empowering students to meet their future with clarity, courage, compassion, and creativity. Our highest endeavour must be to develop free human beings who are able of themselves to impart purpose and direction to their lives.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Back Button */}
        
      </div>
    </section>
  );
}
