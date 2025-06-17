// 'use client';

// import Image from "next/image";
// import '../app/styles/early-glimpse-module.css'; // Ensure this file exists

// export default function EarlyGlimpsesPage() {
//   return (
//     <section className="bg-light py-5" id="section_4" style={{ fontFamily: 'Georgia, serif' }}>
//       <div className="container">
//         {/* Header */}
//         <div className="row justify-content-center mb-4">
//           <div className="col-lg-8 text-center">
//             <h2 className="mb-4 text-orange fw-bold border-bottom pb-2 d-inline-block">
//               Early Glimpse
//             </h2>
//           </div>
//         </div>

//         {/* Unified Card Box */}
//         <div className="row justify-content-center">
//           <div className="col-lg-10">
//             <div className="d-flex flex-column flex-lg-row bg-light border border-1 border-muted rounded-4 shadow-lg overflow-hidden">
              
//               {/* Image Side */}
//               <div className="w-100 w-lg-50 position-relative hover-zoom">
//                 <Image
//                   src="https://theapexschool.in/Website/assets/img/blog-1.jpg"
//                   alt="Apex School Inauguration"
//                   width={600}
//                   height={400}
//                   className="img-fluid w-100 h-100 object-fit-cover"
//                 />
//                 <div className="position-absolute top-0 start-0 w-100 h-100 bg-dark opacity-25"></div>
//                 <small className="position-absolute bottom-0 start-0 text-light p-3 fw-semibold">
//                   Inauguration Day – June 14, 2022
//                 </small>
//               </div>

//               {/* Text Side */}
//               <div className="p-4 p-md-5" style={{ fontFamily: 'Georgia, serif' }}>
//                 <p className="mb-3">
//                   To provide quality and comprehensive educational opportunities for all students 
//                   in a safe and caring environment to enable students to achieve individual excellence, 
//                   become productive citizens, and be successful in their future endeavors.
//                 </p>
//                 <p>
//                   With this purpose, management organized the school opening ceremony . Before this, the school was operating via an online 
//                   platform. Within a year, Apex welcomed numerous students who excelled in both 
//                   academics and extracurricular pursuits.
//                 </p>
//               </div>

//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }
'use client';

import Image from "next/image";
import '../app/styles/early-glimpse-module.css'; // Ensure this file exists

export default function EarlyGlimpsesPage() {
  return (
    <section className="bg-light py-5" id="section_4" style={{ fontFamily: 'Georgia, serif' ,color:'#1e3c72'}}>
      <div className="container">
        {/* Header */}
        <div className="row justify-content-center mb-4">
          <div className="col-lg-8 text-center">
            <h2 className="mb-4  fw-bold border-bottom pb-2 d-inline-block">
              Early Glimpse
            </h2>
          </div>
        </div>

        {/* Unified Card Box */}
        <div className="row justify-content-center">
          <div className="col-lg-10">
            <div className="d-flex flex-column flex-lg-row bg-light border border-1 border-muted rounded-4 shadow-lg overflow-hidden">
              
              {/* Image Side */}
              <div className="w-100 w-lg-50 position-relative hover-zoom">
                <Image
                  src="https://theapexschool.in/Website/assets/img/blog-1.jpg"
                  alt="Apex School Inauguration"
                  width={600}
                  height={400}
                  className="img-fluid w-100 h-100 object-fit-cover"
                />
                <div className="position-absolute top-0 start-0 w-100 h-100 bg-dark opacity-25"></div>
                <small className="position-absolute bottom-0 start-0 text-light p-3 fw-semibold">
                  Inauguration Day – June 14, 2022
                </small>
              </div>

              {/* Text Side */}
              <div className="p-4 p-md-5" style={{ fontFamily: 'Georgia, serif' }}>
                <p className="mb-3">
                  To provide quality and comprehensive educational opportunities for all students 
                  in a safe and caring environment to enable students to achieve individual excellence, 
                  become productive citizens, and be successful in their future endeavors.
                </p>
                <p>
                  With this purpose, management organized the school opening ceremony. Before this, the school was operating via an online 
                  platform. Within a year, Apex welcomed numerous students who excelled in both 
                  academics and extracurricular pursuits.
                </p>
              </div>

            </div>

            

          </div>
        </div>
      </div>
    </section>
  );
}
