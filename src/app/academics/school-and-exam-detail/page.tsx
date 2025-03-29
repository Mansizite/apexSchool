'use client';

import Link from "next/link";
import { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

export default function SchoolHoursExamDetail() {
  const [activeLink, setActiveLink] = useState("");

  useEffect(() => {
    setActiveLink("schoolHoursExam");
  }, []);

  return (
    <div className="container-fluid min-vh-100 bg-light">
      {/* Breadcrumb */}
      <nav aria-label="breadcrumb" className="py-3 bg-white shadow-sm">
        <div className="container">
          <ol className="breadcrumb mb-0">
            <li className="breadcrumb-item">
              <Link href="/">Home</Link>
            </li>
            <li className="breadcrumb-item">
              <Link href="/academics">Academics</Link>
            </li>
            <li className="breadcrumb-item active text-primary" aria-current="page">
              School Hours & Exam Detail
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
              <h4 className="list-group-item list-group-item-action">Academics</h4>
              <Link href="/academics/yearly-planner" className={`list-group-item list-group-item-action ${activeLink === "yearlyPlanner" ? "active" : ""}`}>
                Yearly Planner
              </Link>
              <Link href="/academics/curriculum" className={`list-group-item list-group-item-action ${activeLink === "curriculum" ? "active" : ""}`}>
                Curriculum
              </Link>
              <Link href="/academics/progress-and-promotion" className={`list-group-item list-group-item-action ${activeLink === "progressAndPromotion" ? "active" : ""}`}>
                Progress and Promotion
              </Link>
              <Link href="/academics/conveyance" className={`list-group-item list-group-item-action ${activeLink === "conveyance" ? "active" : ""}`}>
                Conveyance
              </Link>
              <Link href="/academics/language" className={`list-group-item list-group-item-action ${activeLink === "language" ? "active" : ""}`}>
                Languages
              </Link>
              <Link href="/academics/school-and-exam-detail" className={`list-group-item list-group-item-action ${activeLink === "schoolHoursExam" ? "active" : ""}`}>
                School Hours & Exam Detail
              </Link>
              <Link href="/academics/school-and-exam-detail#Schoool-uniform" className={`list-group-item list-group-item-action ${activeLink === "schoolUniform" ? "active" : ""}`}>
                School Uniform
              </Link>
            </div>
          </div>

          {/* Main Content Section */}
          <div className="col-md-8 col-lg-9">
            <div className="card shadow-sm p-4">
              <h1 className="mb-3">School Timing</h1>
              <table className="table table-bordered">
                <thead>
                  <tr>
                    <th>School Hour</th>
                    <th>Timing</th>
                  </tr>
                </thead>
                <tbody>
                  <tr><td>Nursery</td><td>9:00 AM to 1:00 PM</td></tr>
                  <tr><td>Jr Kg</td><td>9:00 AM to 1:00 PM</td></tr>
                  <tr><td>Sr Kg</td><td>9:00 AM to 1:00 PM</td></tr>
                  <tr><td>Class-I to VIII</td><td>08:00 AM to 02:15 PM</td></tr>
                </tbody>
              </table>
              
              <h2 className="mt-4">Pre-Primary Exam Details</h2>
              <table className="table table-bordered">
                <thead>
                  <tr>
                    <th>Academic Terms</th>
                    <th>Start</th>
                    <th>End</th>
                  </tr>
                </thead>
                <tbody>
                  <tr><td>1st Term</td><td>03-10-2023</td><td>12-10-2023</td></tr>
                  <tr><td>Final Exam</td><td>04-03-2024</td><td>16-03-2024</td></tr>
                </tbody>
              </table>

              <h2 className="mt-4">Primary Section Exam Details</h2>
              <table className="table table-bordered">
                <thead>
                  <tr>
                    <th>Academic Terms</th>
                    <th>Start</th>
                    <th>End</th>
                  </tr>
                </thead>
                <tbody>
                  <tr><td>1st Periodic Test</td><td>10-07-2023</td><td>15-07-2023</td></tr>
                  <tr><td>1st Term</td><td>29-09-2023</td><td>12-10-2023</td></tr>
                  <tr><td>2nd Periodic Test</td><td>01-12-2023</td><td>06-12-2023</td></tr>
                  <tr><td>Final Exam</td><td>01-03-2024</td><td>16-03-2024</td></tr>
                </tbody>
              </table>

              <h2 className="mt-4" id="Schoool-uniform">School Uniform</h2>
              <table className="table table-bordered">
                <thead>
                  <tr>
                    <th>Classes</th>
                    <th>Girls</th>
                    <th>Boys</th>
                  </tr>
                </thead>
                <tbody>
                  <tr><td>Nursery</td><td>School Uniform, White hair band, and two ponytails</td><td>School Uniform, Soldiers haircut</td></tr>
                  <tr><td>Sr Kg and Jr. kg</td><td>School Uniform, White hair band, and two ponytails</td><td>School Uniform, Soldiers haircut</td></tr>
                  <tr><td>Class I - VIII</td><td>School Uniform, White hair band, and two ponytails</td><td>School Uniform, Soldiers haircut</td></tr>
                </tbody>
              </table>
              
              <div className="text-center mt-4">
                <Link href="/academics" className="btn btn-primary">Back to Academics</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
