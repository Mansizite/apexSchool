'use client';

import Link from "next/link";
import { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

export default function AgeCriteriaPage() {
  const [activeLink, setActiveLink] = useState("");

  useEffect(() => {
    setActiveLink("ageCriteria");
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
              <Link href="/admission">Admission</Link>
            </li>
            <li className="breadcrumb-item active text-primary" aria-current="page">
              Age Criteria
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
              <h4 className="list-group-item list-group-item-action">Admission</h4>
              <Link href="/admission/policy" className="list-group-item list-group-item-action">Admission Policy</Link>
              <Link href="/admission/enquiry-form" className="list-group-item list-group-item-action">Enquiry Form</Link>
              <Link href="/admission/procedure" className="list-group-item list-group-item-action">Admission Procedure</Link>
              <Link href="/admission/documentsRequired" className="list-group-item list-group-item-action">Documents</Link>
              <Link href="/admission/form" className="list-group-item list-group-item-action">Admission Form</Link>
              <Link href="/admission/age-criteria" className={`list-group-item list-group-item-action ${activeLink === "ageCriteria" ? "active" : ""}`} onClick={() => setActiveLink("ageCriteria")}>
                Age Criteria
              </Link>
            </div>
          </div>

          {/* Main Content Section */}
          <div className="col-md-8 col-lg-9">
            <div className="card shadow-sm p-4">
              <h1 className="mb-3">Age Criteria</h1>
              <table className="table table-bordered">
                <thead>
                  <tr>
                    <th>No</th>
                    <th>Class</th>
                    <th>Birth Date Range (2023-2024)</th>
                    <th>Age on 31st Dec 2022</th>
                  </tr>
                </thead>
                <tbody>
                  <tr><td>1</td><td>Nursery</td><td>1st July 2019 - 31st Dec 2020</td><td>4 Years 5 Months 30 Days</td></tr>
                  <tr><td>2</td><td>Jr.KG</td><td>1st July 2018 - 31st Dec 2019</td><td>5 Years 5 Months 30 Days</td></tr>
                  <tr><td>3</td><td>Sr.KG</td><td>1st July 2017 - 31st Dec 2018</td><td>6 Years 5 Months 30 Days</td></tr>
                  <tr><td>4</td><td>1st</td><td>1st July 2016 - 31st Dec 2017</td><td>7 Years 5 Months 30 Days</td></tr>
                  <tr><td>5</td><td>2nd Onward</td><td>LC, TC From Last Attended School (Compulsory)</td><td>-</td></tr>
                </tbody>
              </table>
              
              {/* Back Button */}
              <div className="text-center mt-4">
                <Link href="/admission" className="btn btn-primary">Back to Admission</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
