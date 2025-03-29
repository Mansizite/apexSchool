'use client';
import Link from "next/link";
import { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

export default function StaffTeachingResultsPage() {
  const [activeLink, setActiveLink] = useState("staffTeaching");

  useEffect(() => {
    setActiveLink("staffTeaching");
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
              <Link href="/mandatory-public-disclosure">Mandatory Public Disclosure</Link>
            </li>
            <li className="breadcrumb-item active text-primary" aria-current="page">
              Staff (Teaching) & Results
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
              <h4 className="list-group-item list-group-item-action">Mandatory Disclosure</h4>
              <Link href="/mpd/general-info" className="list-group-item list-group-item-action">General Information</Link>
              <Link href="/infrastructure" className="list-group-item list-group-item-action">School Infrastructure</Link>
              <Link href="/mpd/staffTeaching" className={`list-group-item list-group-item-action ${activeLink === "staffTeaching" ? "active" : ""}`} onClick={() => setActiveLink("staffTeaching")}>Staff (Teaching)</Link>
              <Link href="/mpd/documents" className="list-group-item list-group-item-action">Documents and Information</Link>
              <Link href="/mpd/resultsAcademics" className="list-group-item list-group-item-action">Results and Academics</Link>
            </div>
          </div>

          {/* Main Content Section */}
          <div className="col-md-8 col-lg-9">
            <div className="card shadow-sm p-4">
              <h1 className="mb-3">Staff (Teaching)</h1>
              <table className="table table-bordered">
                <thead>
                  <tr>
                    <th>SL No.</th>
                    <th>INFORMATION</th>
                    <th>DETAILS</th>
                  </tr>
                </thead>
                <tbody>
                  <tr><td>1</td><td>PRINCIPAL</td><td>Dr. Manasi Gill</td></tr>
                  <tr><td>2</td><td>TOTAL NO. OF TEACHERS</td><td>38</td></tr>
                  <tr><td></td><td>PGT</td><td>-</td></tr>
                  <tr><td></td><td>TGT</td><td>12</td></tr>
                  <tr><td></td><td>PRT</td><td>20</td></tr>
                  <tr><td>3</td><td>TEACHERS SECTION RATIO</td><td>1:1:5</td></tr>
                  <tr><td>4</td><td>DETAILS OF SPECIAL EDUCATOR</td><td>Mr._________________________ RCI</td></tr>
                  <tr><td>5</td><td>DETAILS OF COUNSELLOR AND WELLNESS TEACHER</td><td>Mr.__________________________ BA, Psychology</td></tr>
                </tbody>
              </table>

              <h2 className="mt-4">Result Class: X</h2>
              <table className="table table-bordered">
                <thead>
                  <tr>
                    <th>SL No.</th>
                    <th>YEAR</th>
                    <th>No. OF REGISTERED STUDENTS</th>
                    <th>No. OF STUDENTS PASSED</th>
                    <th>PASS PERCENTAGE</th>
                    <th>REMARKS</th>
                  </tr>
                </thead>
                <tbody>
                  <tr><td>1</td><td>--</td><td>--</td><td>--</td><td>--</td><td>--</td></tr>
                </tbody>
              </table>

              <h2 className="mt-4">Result Class: XII</h2>
              <table className="table table-bordered">
                <thead>
                  <tr>
                    <th>SL No.</th>
                    <th>YEAR</th>
                    <th>No. OF REGISTERED STUDENTS</th>
                    <th>No. OF STUDENTS PASSED</th>
                    <th>PASS PERCENTAGE</th>
                    <th>REMARKS</th>
                  </tr>
                </thead>
                <tbody>
                  <tr><td>1</td><td>--</td><td>--</td><td>--</td><td>--</td><td>--</td></tr>
                </tbody>
              </table>

              {/* Back Button */}
              <div className="text-center mt-4">
                <Link href="/mandatory-public-disclosure" className="btn btn-primary">Back to Mandatory Public Disclosure</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
