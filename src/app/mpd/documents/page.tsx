'use client';

import Link from "next/link";

import "bootstrap/dist/css/bootstrap.min.css";

export default function DocumentsPage() {
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
              Documents and Information
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
              <Link href="/mpd/documents" className="list-group-item list-group-item-action active">Documents and Information</Link>
              <Link href="/mpd/resultsAcademics" className="list-group-item list-group-item-action">Results and Academics</Link>
            </div>
          </div>

          {/* Main Content Section */}
          <div className="col-md-8 col-lg-9">
            <div className="card shadow-sm p-4">
              <h1 className="mb-3">Documents and Information</h1>

              <table className="table table-bordered">
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
                    <td>Copies of Affiliation/Upgradation Letter and Recent Extension of Affiliation, If Any</td>
                    <td>-</td>
                  </tr>
                  <tr>
                    <td>2</td>
                    <td>Copies of Societies/Trust/Company Registration/Renewal Certificate, As Applicable</td>
                    <td>-</td>
                  </tr>
                  <tr>
                    <td>3</td>
                    <td>Copy of No Objection Certificate (NOC) Issued, If Applicable, By The State Govt.&apos;s/UT</td>
                    <td>-</td>
                  </tr>
                  <tr>
                    <td>4</td>
                    <td>Copies of Recognition Certificate Under RTE Act, 2009, And Its Renewal If Applicable</td>
                    <td>-</td>
                  </tr>
                  <tr>
                    <td>5</td>
                    <td>Copy of Valid Building Safety Certificate As Per The National Building Code</td>
                    <td>-</td>
                  </tr>
                  <tr>
                    <td>6</td>
                    <td>Copy of Valid Fire Safety Certificate Issued By The Competent Authority</td>
                    <td>-</td>
                  </tr>
                </tbody>
              </table>

              {/* Back Button */}
              <div className="text-center mt-4">
                <Link href="/mandatory-public-disclosure" className="btn btn-primary">Back to Mandatory Disclosure</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
