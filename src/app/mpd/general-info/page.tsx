'use client';

import Link from "next/link";
import { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

export default function GeneralInformationPage() {
  const [activeLink, setActiveLink] = useState("");

  useEffect(() => {
    setActiveLink("generalInformation");
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
              <Link href="/mandatory-disclosure">Mandatory Public Disclosure</Link>
            </li>
            <li className="breadcrumb-item active text-primary" aria-current="page">
              General Information
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
              <Link href="/mpd/general-info" className={`list-group-item list-group-item-action ${activeLink === "generalInformation" ? "active" : ""}`} onClick={() => setActiveLink("generalInformation")}>General Information</Link>
              <Link href="/infrastructure" className="list-group-item list-group-item-action">School Infrastructure</Link>
              <Link href="/mpd/staffTeaching" className="list-group-item list-group-item-action">Staff (Teaching)</Link>
              <Link href="/mpd/documents" className="list-group-item list-group-item-action">Documents and Information</Link>
              <Link href="/mpd/resultsAcademics" className="list-group-item list-group-item-action">Results And Academics</Link>
            </div>
          </div>

          {/* Main Content Section */}
          <div className="col-md-8 col-lg-9">
            <div className="card shadow-sm p-4">
              <h1 className="mb-3">General Information</h1>
              <table className="table table-bordered">
                <thead className="table-primary">
                  <tr>
                    <th>SL No.</th>
                    <th>INFORMATION</th>
                    <th>DETAILS</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>1</td>
                    <td>NAME OF THE SCHOOL</td>
                    <td>APEX INTERNATIONAL SCHOOL</td>
                  </tr>
                  <tr>
                    <td>2</td>
                    <td>AFFILIATION NO.(IF APPLICABLE)</td>
                    <td>Under Process</td>
                  </tr>
                  <tr>
                    <td>3</td>
                    <td>SCHOOL CODE (IF APPLICABLE)</td>
                    <td>Under Process</td>
                  </tr>
                  <tr>
                    <td>4</td>
                    <td>COMPLETE ADDRESS WITH PIN CODE</td>
                    <td>
                      APEX INTERNATIONAL SCHOOL<br/>
                      Survey No. 501/3, Charholi Bk Tal. Haveli, Dist. Pune-412105
                    </td>
                  </tr>
                  <tr>
                    <td>5</td>
                    <td>PRINCIPAL NAME</td>
                    <td>Dr. Manasi Gill</td>
                  </tr>
                  <tr>
                    <td>6</td>
                    <td>PRINCIPAL QUALIFICATION</td>
                    <td>-</td>
                  </tr>
                </tbody>
              </table>
              
              {/* Back Button */}
              <div className="text-center mt-4">
                <Link href="/mandatory-disclosure" className="btn btn-primary">Back to Mandatory Disclosure</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
