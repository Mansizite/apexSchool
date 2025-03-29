'use client';
import Link from "next/link";
import { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

export default function Page() {
  const [activeLink, setActiveLink] = useState("");

  useEffect(() => {
    setActiveLink("attendance");
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
              <Link href="/rules-regulations">Rules & Regulations</Link>
            </li>
            <li className="breadcrumb-item active text-primary" aria-current="page">
              Attendance
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
              <h4 className="list-group-item list-group-item-action">Rules & Regulations</h4>
              <Link href="/rules-regulations/school" className={`list-group-item list-group-item-action ${activeLink === "rulesForSchool" ? "active" : ""}`} onClick={() => setActiveLink("rulesForSchool")}>Rules for School</Link>
              <Link href="/rules-regulations/fees" className={`list-group-item list-group-item-action ${activeLink === "rulesForFees" ? "active" : ""}`} onClick={() => setActiveLink("rulesForFees")}>Rules for Fees</Link>
              <Link href="/rules-regulations/bus" className={`list-group-item list-group-item-action ${activeLink === "rulesForBus" ? "active" : ""}`} onClick={() => setActiveLink("rulesForBus")}>Rules for Bus</Link>
              <Link href="/rules-regulations/absenteeism" className={`list-group-item list-group-item-action ${activeLink === "absenteeism" ? "active" : ""}`} onClick={() => setActiveLink("absenteeism")}>Absenteeism</Link>
              <Link href="/rules-regulations/attendance" className={`list-group-item list-group-item-action ${activeLink === "attendance" ? "active" : ""}`} onClick={() => setActiveLink("attendance")}>Attendance</Link>
              <Link href="/rules-regulations/leaving" className={`list-group-item list-group-item-action ${activeLink === "leaving" ? "active" : ""}`} onClick={() => setActiveLink("leaving")}>Leaving Class & School</Link>
              <Link href="/rules-regulations/recess" className={`list-group-item list-group-item-action ${activeLink === "recess" ? "active" : ""}`} onClick={() => setActiveLink("recess")}>Rules For Recess</Link>
              <Link href="/rules-regulations/general" className={`list-group-item list-group-item-action ${activeLink === "general" ? "active" : ""}`} onClick={() => setActiveLink("general")}>General</Link>
            </div>
          </div>

          {/* Main Content Section */}
          <div className="col-md-8 col-lg-9">
            <div className="card shadow-sm p-4">
              <h1 className="mb-3">Attendance</h1>
              <ul className="list-group list-group-flush">
                <li className="list-group-item">Students must have 95% attendance to be eligible for promotion.</li>
                <li className="list-group-item">Late arrivals after the second period will not be permitted into the school premises.</li>
                <li className="list-group-item">For security reasons, no parcels, packages, or lunch boxes will be handed over to students once the school gates are closed.</li>
                <li className="list-group-item">Parents must notify the school in case of extended absences due to medical reasons.</li>
                <li className="list-group-item">Students missing school without prior approval will be marked absent and will not be allowed to make up for missed work.</li>
              </ul>

              {/* Back Button */}
              <div className="text-center mt-4">
                <Link href="/rules-regulations" className="btn btn-primary">Back to Rules & Regulations</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
