'use client';

import Link from "next/link";

import "bootstrap/dist/css/bootstrap.min.css";

export default function SchoolDetailsPage() {
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
              <Link href="/school-details">School Details</Link>
            </li>
            <li className="breadcrumb-item active text-primary" aria-current="page">
              School Information
            </li>
          </ol>
        </div>
      </nav>

      {/* Main Content */}
      <div className="container mt-4">
        <div className="row">
          {/* Sidebar */}

          {/* Main Content Section */}
          <div className="col-md-8 col-lg-9">
            <div className="card shadow-sm p-4">
              <h1 className="mb-3">Comprehensive Information</h1>
              <p>Here you can find detailed information about the school&apos;s accreditation, curriculum, committees, policies, and more.</p>

              <ul>
                <li>
                  <Link href="/school-details/accreditation" className="text-decoration-none" style={{ cursor: "pointer" }}>
                    School Accreditation/Affiliation Status
                  </Link>
                </li>
                <li>
                  <Link href="/school-details/curriculum" className="text-decoration-none" style={{ cursor: "pointer" }}>
                    Details of the Curriculum
                  </Link>
                </li>
                <li>
                  <Link href="/school-details/committee" className="text-decoration-none" style={{ cursor: "pointer" }}>
                    List of School Managing Committee Members
                  </Link>
                </li>
                <li>
                  <Link href="/school-details/transfer-certificates" className="text-decoration-none" style={{ cursor: "pointer" }}>
                    Copies of Issued Transfer Certificates
                  </Link>
                </li>
                <li>
                  <Link href="/school-details/fee-structure" className="text-decoration-none" style={{ cursor: "pointer" }}>
                    Fee Structure and Fixation Norms
                  </Link>
                </li>
                <li>
                  <Link href="/school-details/self-affidavit" className="text-decoration-none" style={{ cursor: "pointer" }}>
                    Self-Affidavit
                  </Link>
                </li>
                <li>
                  <Link href="/school-details/annual-planner" className="text-decoration-none" style={{ cursor: "pointer" }}>
                    Annual Planner/Calendar
                  </Link>
                </li>
                <li>
                  <Link href="/school-details/annual-report" className="text-decoration-none" style={{ cursor: "pointer" }}>
                    Annual Report
                  </Link>
                </li>
                <li>
                  <Link href="/school-details/no-homework-policy" className="text-decoration-none" style={{ cursor: "pointer" }}>
                    No Homework Policy for Std I and II
                  </Link>
                </li>
                <li>
                  <Link href="/school-details/vishakha-committee" className="text-decoration-none" style={{ cursor: "pointer" }}>
                    Vishakha Committee Details
                  </Link>
                </li>
                <li>
                  <Link href="/school-details/list-of-books" className="text-decoration-none" style={{ cursor: "pointer" }}>
                    List of Books
                  </Link>
                </li>
                <li>
                  <Link href="/school-details/academic-achievements" className="text-decoration-none" style={{ cursor: "pointer" }}>
                    Academic Achievements
                  </Link>
                </li>
                <li>
                  <Link href="/school-details/teacher-trainings" className="text-decoration-none" style={{ cursor: "pointer" }}>
                    Details of Teacher Trainings
                  </Link>
                </li>
                <li>
                  <Link href="/school-details/pocso-committee" className="text-decoration-none" style={{ cursor: "pointer" }}>
                    POCSO Committee Information
                  </Link>
                </li>
                <li>
                  <Link href="/school-details/pta-committee" className="text-decoration-none" style={{ cursor: "pointer" }}>
                    PTA Committee Details
                  </Link>
                </li>
                <li>
                  <Link href="/school-details/staff-statement" className="text-decoration-none" style={{ cursor: "pointer" }}>
                    Staff Statement
                  </Link>
                </li>
                <li>
                  <Link href="/school-details/school-circulars" className="text-decoration-none" style={{ cursor: "pointer" }}>
                    School Circulars, Norms, and Rules Related to Students, Parents, Admissions, and Withdrawals Framed by the School SMC
                  </Link>
                </li>
                <li>
                  <Link href="/school-details/anti-bullying" className="text-decoration-none" style={{ cursor: "pointer" }}>
                    Anti-Bullying Committee Details
                  </Link>
                </li>
                <li>
                  <Link href="/school-details/grievance-redressal" className="text-decoration-none" style={{ cursor: "pointer" }}>
                    Grievance Redressal Committee Information
                  </Link>
                </li>
                <li>
                  <Link href="/school-details/infrastructure" className="text-decoration-none" style={{ cursor: "pointer" }}>
                    Infrastructure Facilities
                  </Link>
                </li>
                <li>
                  <Link href="/school-details/student-strength" className="text-decoration-none" style={{ cursor: "pointer" }}>
                    Student Strength
                  </Link>
                </li>
              </ul>

              {/* Back Button */}
              <div className="text-center mt-4">
                <Link href="#section_1" className="btn btn-primary"> Back to Home</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
