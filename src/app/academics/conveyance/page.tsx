'use client';
import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

export default function Conveyance() {
  const [activeLink, setActiveLink] = useState("");

  useEffect(() => {
    setActiveLink("conveyance");
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
              <Link href="/academics">Academics</Link>
            </li>
            <li className="breadcrumb-item active text-primary" aria-current="page">
              Conveyance
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
              <Link
                href="https://theapexschool.in/Website/assets/pdf/1.%20APEX%20PRIMARY%20PLANNER%2023.pdf"
                className={`list-group-item list-group-item-action ${activeLink === "yearlyPlanner" ? "active" : ""}`}
                onClick={() => setActiveLink("yearlyPlanner")}
              >
                Yearly Planner
              </Link>
              <Link
                href="#curriculum"
                className={`list-group-item list-group-item-action ${activeLink === "curriculum" ? "active" : ""}`}
                onClick={() => setActiveLink("curriculum")}
              >
                Curriculum
              </Link>
              <Link
                href="#progress-and-promotion"
                className={`list-group-item list-group-item-action ${activeLink === "progressAndPromotion" ? "active" : ""}`}
                onClick={() => setActiveLink("progressAndPromotion")}
              >
                Progress and Promotion
              </Link>
              <Link
                href="/academics/conveyance"
                className={`list-group-item list-group-item-action ${activeLink === "conveyance" ? "active" : ""}`}
              >
                Conveyance
              </Link>
              <Link
                href="/academics/language"
                className={`list-group-item list-group-item-action ${activeLink === "language" ? "active" : ""}`}
                onClick={() => setActiveLink("language")}
              >
                Languages
              </Link>
              <Link
                href="/academics/school-and-exam-detail"
                className={`list-group-item list-group-item-action ${activeLink === "schoolAndExamDetail" ? "active" : ""}`}
                onClick={() => setActiveLink("schoolAndExamDetail")}
              >
                School Hours & Exam Detail
              </Link>
            </div>
          </div>

          {/* Main Content Section */}
          <div className="col-md-8 col-lg-9">
            <div className="card shadow-sm p-4">
              <h1 className="mb-3">Conveyance</h1>
              <p>
                Apex aims to provide quality and comprehensive educational opportunities for all students in a safe and caring environment. The school has a well-maintained conveyance system ensuring that students travel comfortably and securely.
              </p>
              <p>
                Students can avail of the school bus service based on the following criteria:
              </p>
              <ul>
                <li>Availability of seats.</li>
                <li>First come, first serve booking basis.</li>
                <li>Reporting time at the school.</li>
                <li>Distance of residence from school.</li>
                <li>Current bus route feasibility.</li>
              </ul>
              
              {/* Image Section */}
              <div className="text-center my-4">
                <Image
                  unoptimized
                  width={600}
                  height={400}
                  src="https://theapexschool.in/Website/assets/img/blog-1.jpg"
                  alt="School Bus Service"
                  className="img-fluid rounded shadow"
                />
              </div>

              {/* Back Button */}
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
