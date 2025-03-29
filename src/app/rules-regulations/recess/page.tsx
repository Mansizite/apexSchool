'use client';
import Link from "next/link";
import { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

export default function Page() {
  const [activeLink, setActiveLink] = useState("");

  useEffect(() => {
    setActiveLink("rulesForRecess");
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
              Rules for Recess
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
              <Link href="/rules-regulations/school" className={`list-group-item list-group-item-action ${activeLink === "rulesForSchool" ? "active" : ""}`} onClick={() => setActiveLink("rulesForSchool")}>
                Rules for School
              </Link>
              <Link href="/rules-regulations/fees" className={`list-group-item list-group-item-action ${activeLink === "rulesForFees" ? "active" : ""}`} onClick={() => setActiveLink("rulesForFees")}>
                Rules for Fees
              </Link>
              <Link href="/rules-regulations/bus" className={`list-group-item list-group-item-action ${activeLink === "rulesForBus" ? "active" : ""}`} onClick={() => setActiveLink("rulesForBus")}>
                Rules for Bus
              </Link>
              <Link href="/rules-regulations/absenteeism" className={`list-group-item list-group-item-action ${activeLink === "absenteeism" ? "active" : ""}`} onClick={() => setActiveLink("absenteeism")}>
                Absenteeism
              </Link>
              <Link href="/rules-regulations/attendance" className={`list-group-item list-group-item-action ${activeLink === "attendance" ? "active" : ""}`} onClick={() => setActiveLink("attendance")}>
                Attendance
              </Link>
              <Link href="/rules-regulations/recess" className={`list-group-item list-group-item-action ${activeLink === "rulesForRecess" ? "active" : ""}`} onClick={() => setActiveLink("rulesForRecess")}>
                Rules for Recess
              </Link>
              <Link href="/rules-regulations/leaving" className={`list-group-item list-group-item-action ${activeLink === "leaving" ? "active" : ""}`} onClick={() => setActiveLink("leaving")}>
                Leaving Class & School
              </Link>
              <Link href="/rules-regulations/general" className={`list-group-item list-group-item-action ${activeLink === "general" ? "active" : ""}`} onClick={() => setActiveLink("general")}>
                General
              </Link>
            </div>
          </div>

          {/* Main Content Section */}
          <div className="col-md-8 col-lg-9">
            <div className="card shadow-sm p-4">
              <h1 className="mb-3">Rules for Recess</h1>
              <ul className="list-group list-group-flush">
                <li className="list-group-item">Food and drinks should only be consumed during recess.</li>
                <li className="list-group-item">While eating, students should display good table manners and not throw leftover food on the table or floor.</li>
                <li className="list-group-item">Empty bottles and other litter must be cleared from the table and put into the rubbish bins.</li>
                <li className="list-group-item">Five minutes prior to the end of recess, students should start moving to their classroom.</li>
                <li className="list-group-item">Kindly ensure that you have sent a tiffin with your child only in the morning, and after that, no tiffin will be allowed to be delivered later for health security reasons.</li>
                <li className="list-group-item">Important Note: Please send a napkin daily with the tiffin.</li>
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
