// 'use client';
// import Link from "next/link";
// import Image from "next/image";
// import { useEffect, useState } from "react";
// import "bootstrap/dist/css/bootstrap.min.css";

// export default function EarlyGlimpsesPage() {
//   const [activeLink, setActiveLink] = useState("");

//   useEffect(() => {
//     setActiveLink("earlyGlimpses");
//   }, []);

//   return (
//     <div className="container-fluid min-vh-90 bg-light">
//       {/* Breadcrumb */}
//       <nav aria-label="breadcrumb" className="py-3 bg-white shadow-sm">
//         <div className="container">
//           <ol className="breadcrumb mb-0">
//             <li className="breadcrumb-item">
//               <Link href="/">Home</Link>
//             </li>
//             <li className="breadcrumb-item">
//               <Link href="/about">About Us</Link>
//             </li>
//             <li className="breadcrumb-item active text-primary" aria-current="page">
//               Early Glimpses
//             </li>
//           </ol>
//         </div>
//       </nav>

//       {/* Main Content */}
//       <div className="container mt-4">
//         <div className="row">
//           {/* Sidebar */}
//           <div className="col-md-4 col-lg-3 mb-1">
//             <div className="list-group">
//               <h4 className="list-group-item list-group-item-action">About Us</h4>
//               <Link href="/about/early-glimpse" className={`list-group-item list-group-item-action ${activeLink === "earlyGlimpses" ? "active" : ""}`} onClick={() => setActiveLink("earlyGlimpses")}>Early Glimpses</Link>
//               <Link href="/about/visionmission" className="list-group-item list-group-item-action">Mission and Vision</Link>
//               <Link href="#committee" className="list-group-item list-group-item-action">Committee</Link>
              
//               <Link href="#facilities" className="list-group-item list-group-item-action">Facilities</Link>
//               <Link href="#apex-team" className="list-group-item list-group-item-action">Apex Team</Link>
//               <Link href="#location" className="list-group-item list-group-item-action">Location</Link>
//             </div>
//           </div>

//           {/* Main Content Section */}
//           <div className="col-md-8 col-lg-9">
//             <div className="card shadow-sm p-4">
//               <h1 className="mb-3">Early Glimpses</h1>
//               <p>
//                 To provide quality and comprehensive educational opportunities for all students in a safe and caring environment to enable students to achieve individual excellence, become productive citizens, and be successful in their future endeavors.
//               </p>
//               <p>
//                 With this purpose, management organized the school opening ceremony on 14 June 2022. Before this, the school was running via an online platform for a month. Within a year, Apex got a huge number of students who made Apex proud in different aspects of education and life.
//               </p>
//               <p>
//                 The school has grown to effective staff members (Teachers, Ancillary, and Admin) who work hard with constant thought of students&apos; betterment.
//               </p>
              
//               {/* Image Section */}
//               <div className="text-center my-4">
//                 <Image
//                   unoptimized
//                   width={600}
//                   height={400}
//                   src="https://theapexschool.in/Website/assets/img/blog-1.jpg"
//                   alt="Apex School Event"
//                   className="img-fluid rounded"
//                 />
//               </div>

//               {/* Back Button */}
//               <div className="text-center mt-4">
//                 <Link href="/about" className="btn btn-primary">Back to About Us</Link>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }
'use client';
import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

export default function EarlyGlimpsesPage() {
  const [activeLink, setActiveLink] = useState("");

  useEffect(() => {
    setActiveLink("earlyGlimpses");
  }, []);

  return (
    <div className="container-fluid min-vh-90 bg-light" style={{ fontFamily: 'Georgia, serif' }}>
      {/* Breadcrumb */}
      <nav aria-label="breadcrumb" className="py-3 bg-white shadow-sm">
        <div className="container">
          <ol className="breadcrumb mb-0">
            <li className="breadcrumb-item">
              <Link href="/">Home</Link>
            </li>
            <li className="breadcrumb-item">
              <Link href="/about">About Us</Link>
            </li>
            <li className="breadcrumb-item active text-primary" aria-current="page">
              Early Glimpses
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
              <h4 className="list-group-item list-group-item-action">About Us</h4>
              <Link
                href="/about/early-glimpse"
                className={`list-group-item list-group-item-action ${activeLink === "earlyGlimpses" ? "active" : ""}`}
                onClick={() => setActiveLink("earlyGlimpses")}
              >
                Early Glimpses
              </Link>
              <Link href="/about/visionmission" className="list-group-item list-group-item-action">Mission and Vision</Link>
              <Link href="#committee" className="list-group-item list-group-item-action">Committee</Link>
              <Link href="#facilities" className="list-group-item list-group-item-action">Facilities</Link>
              <Link href="#apex-team" className="list-group-item list-group-item-action">Apex Team</Link>
              <Link href="#location" className="list-group-item list-group-item-action">Location</Link>
            </div>
          </div>

          {/* Main Content Section */}
          <div className="col-md-8 col-lg-9">
            <div className="card shadow-sm p-4">
              {/* Styled Header */}
              <h1 className="mb-3 text-orange fw-bold" style={{ fontFamily: 'Georgia, serif' }}>
                Early Glimpses
              </h1>

              <p>
                To provide quality and comprehensive educational opportunities for all students in a safe and caring environment to enable students to achieve individual excellence, become productive citizens, and be successful in their future endeavors.
              </p>
              <p>
                With this purpose, management organized the school opening ceremony on 14 June 2022. Before this, the school was running via an online platform for a month. Within a year, Apex got a huge number of students who made Apex proud in different aspects of education and life.
              </p>
              <p>
                The school has grown to effective staff members (Teachers, Ancillary, and Admin) who work hard with constant thought of students&apos; betterment.
              </p>
              
              {/* Image Section */}
              <div className="text-center my-4">
                <Image
                  unoptimized
                  width={600}
                  height={400}
                  src="https://theapexschool.in/Website/assets/img/blog-1.jpg"
                  alt="Apex School Event"
                  className="img-fluid rounded"
                />
              </div>

              {/* Back Button */}
              <div className="text-center mt-4">
                <Link href="/about" className="btn btn-primary">Back to About Us</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
