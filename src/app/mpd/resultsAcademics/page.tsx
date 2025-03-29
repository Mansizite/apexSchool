'use client';
import Link from "next/link";
import { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

export default function ResultsAcademicsPage() {
  const [activeLink, setActiveLink] = useState("resultsAcademics");

  useEffect(() => {
    setActiveLink("resultsAcademics");
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
              Results And Academics
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
              <h4 className="list-group-item list-group-item-action">Mandatory Public Disclosure</h4>
              <Link href="/mpd/general-info" className="list-group-item list-group-item-action">General Information</Link>
              <Link href="/infrastructure" className="list-group-item list-group-item-action">School Infrastructure</Link>
              <Link href="/mpd/staffTeaching" className="list-group-item list-group-item-action">Staff (Teaching)</Link>
              <Link href="/mpd/documents" className="list-group-item list-group-item-action">Documents and Information</Link>
              <Link href="/mpd/resultsAcademics" className={`list-group-item list-group-item-action ${activeLink === "resultsAcademics" ? "active" : ""}`}>Results And Academics</Link>
            </div>
          </div>

          {/* Main Content Section */}
          <div className="col-md-8 col-lg-9">
            <div className="card shadow-sm p-4">
              <h1 className="mb-3">Results And Academics</h1>
              <table className="table table-bordered table-striped">
                <thead>
                  <tr>
                    <th>SL No.</th>
                    <th>DOCUMENTS/INFORMATION</th>
                    <th>DOCUMENTS</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>1</td>
                    <td>Fee Structure of the School</td>
                    <td>Available on Request</td>
                  </tr>
                  <tr>
                    <td>2</td>
                    <td>Annual Academic Calendar</td>
                    <td>Available on Request</td>
                  </tr>
                  <tr>
                    <td>3</td>
                    <td>List of School Management Committee (SMC)</td>
                    <td>Available on Request</td>
                  </tr>
                  <tr>
                    <td>4</td>
                    <td>List of Parents Teachers Association (PTA) Members</td>
                    <td>Available on Request</td>
                  </tr>
                  <tr>
                    <td>5</td>
                    <td>Last Three-Year Result of the Board Examination as per Applicability</td>
                    <td>Available on Request</td>
                  </tr>
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
