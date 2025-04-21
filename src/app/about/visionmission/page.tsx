'use client';
import Link from "next/link";
import { FaBullseye, FaRocket } from "react-icons/fa";
import { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

export default function VisionMissionPage() {
  const [activeLink, setActiveLink] = useState("");

  useEffect(() => {
    setActiveLink("visionMission");
  }, []);

  return (
    <div className="container-fluid min-vh-90 bg-light">
      {/* Breadcrumb */}
      <nav aria-label="breadcrumb" className="py-3 bg-white shadow-sm">
        <div className="container">
          <ol className="breadcrumb mb-0">
            <li className="breadcrumb-item">
              <Link href="/">Home</Link>
            </li>
            <li className="breadcrumb-item">
              <Link href="/about">About Us</Link>
            </li>
            <li className="breadcrumb-item active text-primary" aria-current="page">
              Vision & Mission
            </li>
          </ol>
        </div>
      </nav>

      {/* Main Content */}
      <div className="container mt-4">
        <div className="row">
          {/* Sidebar */}
          <div className="col-md-4 col-lg-3 mb-1">
            <div className="list-group">
              <h4 className="list-group-item list-group-item-action">About Us</h4>
              <Link href="/about/early-glimpse"  className="list-group-item list-group-item-action">Early Glimpses</Link>
              <Link href="/about/visionmission" className={`list-group-item list-group-item-action ${activeLink === "visionmission" ? "active" : ""}`} onClick={() => setActiveLink("visionmission")}>Mission and Vision</Link>
              <Link href="#committee" className="list-group-item list-group-item-action">Committee</Link>
              
              <Link href="#facilities" className="list-group-item list-group-item-action">Facilities</Link>
              <Link href="#apex-team" className="list-group-item list-group-item-action">Apex Team</Link>
              <Link href="#location" className="list-group-item list-group-item-action">Location</Link>
            </div>
          </div>
          {/* Main Content Section */}
          <div className="col-md-8 col-lg-9">
            <div className="card shadow-sm p-4">
              <h1 className="mb-3">Vision & Mission</h1>
              
              {/* Mission Section */}
              <div className="mb-4">
                <h2><FaBullseye className="me-2 text-primary" /> Mission</h2>
                <p>
                  To provide quality and comprehensive educational opportunities for all students in a safe and caring environment to enable students to achieve individual excellence, become productive citizens, and be successful in their future endeavors.
                </p>
                <p>
                  Inspire our children to be passionate lifelong learners through a curriculum with pedagogical integrity, which allows them to always inquire, innovate, and contribute in meaningful ways to society.
                </p>
              </div>

              {/* Vision Section */}
              <div>
                <h2><FaRocket className="me-2 text-primary" /> Vision</h2>
                <p>
                  Every student is a secure individual, a leader of self-worth, and a significant citizen. Apex International School aims to build a community of confident, global leaders with social conscience and national pride, committed to excellence and continuous learning.
                </p>
                <p>
                  Our vision is to be a school that provides a standard education, empowering students to meet their future with clarity, courage, compassion, and creativity.
                </p>
                <p>
                  Our highest endeavor is to develop free human beings who are able to impart purpose and direction to their lives.
                </p>
              </div>

              {/* Back Button */}
              <div className="text-center mt-4">
                <Link href="/about" className="btn btn-primary">Back to About Us</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
