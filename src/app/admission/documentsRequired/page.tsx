'use client';

import Link from "next/link";

import "bootstrap/dist/css/bootstrap.min.css";

export default function DocumentsRequirementsPage() {
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
              Documents Requirements
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
              <Link href="/admission/documentsRequired" className="list-group-item list-group-item-action active">Documents Requirements</Link>
              <Link href="/admission/form" className="list-group-item list-group-item-action">Admission Form</Link>
              <Link href="/admission/age-criteria" className="list-group-item list-group-item-action">Age Criteria</Link>
            </div>
          </div>

          {/* Main Content Section */}
          <div className="col-md-8 col-lg-9">
            <div className="card shadow-sm p-4">
              <h1 className="mb-3">Documents Requirements At The Time Of Admission</h1>
              
              <table className="table table-bordered">
                <thead>
                  <tr>
                    <th>Category</th>
                    <th>Details</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Age Proof</td>
                    <td>Birth Certificate, LC From Last Attended School</td>
                  </tr>
                  <tr>
                    <td>KYC</td>
                    <td>Student&apos;s Aadhaar Card Xerox, Aadhaar Of Parents Xerox</td>
                  </tr>
                  <tr>
                    <td>Photo</td>
                    <td>4 Passport Size Photographs Of The Child, 3 Passport Size Photographs Of Each Parent</td>
                  </tr>
                  <tr>
                    <td>If Applicable</td>
                    <td>Caste Certificate For Categories Other Than General</td>
                  </tr>
                  <tr>
                    <td>Academics</td>
                    <td>Report Card Of Last Examination Or School</td>
                  </tr>
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
