'use client';
import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

export default function Languages() {
  const [activeLink, setActiveLink] = useState("");

  useEffect(() => {
    setActiveLink("language");
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
              Languages
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
                href="/academics/yearly-planner"
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
              <Link href="/academics/school-and-exam-detail#Schoool-uniform" className="list-group-item list-group-item-action ">
                School Uniform
              </Link>
            </div>
          </div>

          {/* Main Content Section */}
          <div className="col-md-8 col-lg-9">
            <div className="card shadow-sm p-4">
              <h1 className="mb-3">Languages</h1>
              <p>
                The Apex International School is an English Medium School. We follow a three-language pattern imposed by the Government of India.
              </p>
              <p>
                The medium of instruction is English. Marathi, being the state language, is a compulsory third language up to class IX.
              </p>
              <p>
                Additionally, we provide education in the German language to offer students a broader linguistic foundation.
              </p>
              
              {/* Image Section */}
              <div className="text-center my-4">
                <Image
                  unoptimized
                  width={600}
                  height={400}
                  src="https://theapexschool.in/Website/assets/img/blog-1.jpg"
                  alt="Language Learning at Apex School"
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
