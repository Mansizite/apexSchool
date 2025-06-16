// 'use client';

// import Link from 'next/link';
// import {
//   AcademicCapIcon,
//   LockClosedIcon,
//   HeartIcon,
//   MusicNoteIcon,
//   PhoneIcon,
//   DesktopComputerIcon,
//   LightBulbIcon
// } from '@heroicons/react/solid';

// const Schedule = () => {
//   return (
//     <>
//       {/* Why Choose Us Section */}
//       <section
//         className="why-choose-us section-padding"
//         id="section_4"
//         style={{ fontFamily: 'Georgia, serif' }}
//       >
//         <div className="container">
//           <div className="row">
//             <div className="col-lg-12 col-12">
//             <div className="row justify-content-center mb-4">
//           <div className="col-lg-8 text-center">
//             <h2 className="mb-4 text-orange fw-bold">
//              Why Choose Apex International School
//             </h2>
//           </div>
//         </div>
//               <div className="row">
//                 {[
//                   {
//                     title: 'Exceptional Education',
//                     description:
//                       'At Apex International School, we provide a high standard of education with a focus on both academic excellence and personal development. Our curriculum is designed to engage students and foster a love for learning in a diverse environment.',
//                   },
//                   {
//                     title: 'Experienced and Caring Faculty',
//                     description:
//                       'Our team of dedicated teachers and administrators are passionate about creating a supportive and engaging environment. They not only provide top-tier academic instruction but also serve as mentors to guide our students through their educational journey.',
//                   },
//                   {
//                     title: 'State-of-the-Art Facilities',
//                     description:
//                       'We offer modern classrooms, a well-stocked library, sports facilities, and art studios to enhance student learning. Our campus is designed to provide a safe and stimulating environment for every student.',
//                   },
//                   {
//                     title: 'Holistic Development',
//                     description:
//                       'We believe in the holistic development of our students. Beyond academics, we offer a wide range of extracurricular activities in sports, arts, music, and leadership, ensuring every student has the opportunity to excel in their area of interest.',
//                   },
//                   {
//                     title: 'Global Perspective',
//                     description:
//                       'Apex International School fosters a global mindset. Our diverse student body and international exchange programs provide students with the opportunity to engage with different cultures and prepare them for the globalized world.',
//                   },
//                   {
//                     title: 'Strong Community Support',
//                     description:
//                       'Our school is built on a strong sense of community, with an active involvement of parents, alumni, and local organizations. This collaborative environment creates a foundation of trust and shared responsibility for our students&rsquo; success.',
//                   },
//                 ].map((item, index) => (
//                   <div key={index} className="col-lg-6 col-12 mb-4">
//                     <div className="why-choose-item bg-white p-4 rounded shadow-sm h-100">
//                       <h3 className="text-black mb-2">{item.title}</h3>
//                       <p dangerouslySetInnerHTML={{ __html: item.description }} />
//                     </div>
//                   </div>
//                 ))}
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Call to Action */}
//       <section className="call-to-action section-padding bg-dark">
//         <div className="container">
//           <div className="row align-items-center">
//             <div className="col-lg-7 col-12">
//               <h2 className="text-white mb-4" style={{ fontFamily: 'Georgia, serif' }}>
//                 Have Any <u className="text-info">Questions?</u>
//               </h2>
//               <p className="text-white" style={{ fontFamily: 'Georgia, serif' }}>
//                 Feel free to reach out to us for any inquiries or additional information regarding admissions or events.
//               </p>
//             </div>

//             <div className="col-lg-3 col-12 ms-lg-auto mt-4 mt-lg-0">
//               <Link href="#section_5" className="btn btn-warning text-white px-4 py-2 rounded-pill">
//                 Inquire Now
//               </Link>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Icon-Based Facilities */}
//       <section className="section-padding" id="section_5-icons" style={{ fontFamily: 'Georgia, serif' }}>
//         <div className="container">
//           <div className="row">
//            <div className="row justify-content-center mb-4">
//           <div className="col-lg-8 text-center">
//             <h2 className="mb-4 text-orange fw-bold">
//              Our Facilities
//             </h2>
//           </div>
//         </div>

//             {[
//               { icon: AcademicCapIcon, color: 'text-blue-600', label: 'Abacus Vedic Maths' },
//               { icon: PhoneIcon, color: 'text-green-500', label: 'School App Awareness' },
//               { icon: DesktopComputerIcon, color: 'text-red-500', label: 'CCTV Cameras' },
//               { icon: HeartIcon, color: 'text-purple-500', label: 'Child Counselor' },
//               { icon: LightBulbIcon, color: 'text-yellow-500', label: 'Competitive Exams' },
//               { icon: LockClosedIcon, color: 'text-gray-500', label: 'Locker System' },
//               { icon: HeartIcon, color: 'text-teal-500', label: 'Medical Insurance' },
//               { icon: MusicNoteIcon, color: 'text-orange-500', label: 'Music Academy' },
//               { icon: AcademicCapIcon, color: 'text-indigo-500', label: 'Robotics' },
//             ].map((item, index) => (
//               <div key={index} className="col-lg-4 col-md-6 col-12 mb-5">
//                 <div className="text-center bg-white shadow-lg p-4 rounded-lg h-100">
//                   <item.icon className={`h-12 w-12 ${item.color} mb-3`} style={{ height: '50px' }} />
//                   <h3 className="text-black" style={{ fontSize: '20px' }}>{item.label}</h3>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>
//     </>
//   );
// };

// export default Schedule;
'use client';

import Link from 'next/link';
import {
  AcademicCapIcon,
  LockClosedIcon,
  HeartIcon,
  MusicNoteIcon,
  PhoneIcon,
  DesktopComputerIcon,
  LightBulbIcon
} from '@heroicons/react/solid';

const Schedule = () => {
  return (
    <>
      {/* Why Choose Us Section */}
      <section
        className="why-choose-us section-padding"
        id="section_4"
        style={{ fontFamily: 'Georgia, serif' }}
      >
        <div className="container">
          <div className="row">
            <div className="col-lg-12 col-12">
              {/* Header */}
              <div className="row justify-content-center mb-4">
                <div className="col-lg-8 text-center">
                  <h2 className="mb-4 text-orange fw-bold border-bottom pb-2 d-inline-block">
                    Why Choose Apex International School ?
                  </h2>
                </div>
              </div>

              <div className="row">
                {[
                  {
                    title: 'Exceptional Education',
                    description:
                      'At Apex International School, we provide a high standard of education with a focus on both academic excellence and personal development. Our curriculum is designed to engage students and foster a love for learning in a diverse environment.',
                  },
                  {
                    title: 'Experienced and Caring Faculty',
                    description:
                      'Our team of dedicated teachers and administrators are passionate about creating a supportive and engaging environment. They not only provide top-tier academic instruction but also serve as mentors to guide our students through their educational journey.',
                  },
                  {
                    title: 'State-of-the-Art Facilities',
                    description:
                      'We offer modern classrooms, a well-stocked library, sports facilities, and art studios to enhance student learning. Our campus is designed to provide a safe and stimulating environment for every student.',
                  },
                  {
                    title: 'Holistic Development',
                    description:
                      'We believe in the holistic development of our students. Beyond academics, we offer a wide range of extracurricular activities in sports, arts, music, and leadership, ensuring every student has the opportunity to excel in their area of interest.',
                  },
                  {
                    title: 'Global Perspective',
                    description:
                      'Apex International School fosters a global mindset. Our diverse student body and international exchange programs provide students with the opportunity to engage with different cultures and prepare them for the globalized world.',
                  },
                  {
                    title: 'Strong Community Support',
                    description:
                      'Our school is built on a strong sense of community, with an active involvement of parents, alumni, and local organizations. This collaborative environment creates a foundation of trust and shared responsibility for our students&rsquo; success.',
                  },
                ].map((item, index) => (
                  <div key={index} className="col-lg-6 col-12 mb-4">
                    <div className="why-choose-item bg-white p-4 rounded shadow-sm h-100">
                      <h3 className="text-black mb-2">{item.title}</h3>
                      <p dangerouslySetInnerHTML={{ __html: item.description }} />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="call-to-action section-padding bg-dark">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-7 col-12">
              <h2 className="text-orange mb-4" style={{ fontFamily: 'Georgia, serif' }}>
                Have Any Questions?
              </h2>
              <p className="text-white" style={{ fontFamily: 'Georgia, serif' }}>
                Feel free to reach out to us for any inquiries or additional information regarding admissions or events.
              </p>
            </div>

            <div className="col-lg-3 col-12 ms-lg-auto mt-4 mt-lg-0">
              <Link href="#section_5" className="btn btn-warning text-white px-4 py-2 rounded-pill">
                Inquire Now
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Icon-Based Facilities */}
      <section className="section-padding" id="section_5-icons" style={{ fontFamily: 'Georgia, serif' }}>
        <div className="container">
          <div className="row">
            {/* Header */}
            <div className="row justify-content-center mb-4">
              <div className="col-lg-8 text-center">
                <h2 className="mb-4 text-orange fw-bold border-bottom pb-2 d-inline-block">
                  Our Facilities
                </h2>
              </div>
            </div>

            {[
              { icon: AcademicCapIcon, color: 'text-blue-600', label: 'Abacus Vedic Maths' },
              { icon: PhoneIcon, color: 'text-green-500', label: 'School App Awareness' },
              { icon: DesktopComputerIcon, color: 'text-red-500', label: 'CCTV Cameras' },
              { icon: HeartIcon, color: 'text-purple-500', label: 'Child Counselor' },
              { icon: LightBulbIcon, color: 'text-yellow-500', label: 'Competitive Exams' },
              { icon: LockClosedIcon, color: 'text-gray-500', label: 'Locker System' },
              { icon: HeartIcon, color: 'text-teal-500', label: 'Medical Insurance' },
              { icon: MusicNoteIcon, color: 'text-orange-500', label: 'Music Academy' },
              { icon: AcademicCapIcon, color: 'text-indigo-500', label: 'Robotics' },
            ].map((item, index) => (
              <div key={index} className="col-lg-4 col-md-6 col-12 mb-5">
                <div className="text-center bg-white shadow-lg p-4 rounded-lg h-100">
                  <item.icon className={`h-12 w-12 ${item.color} mb-3`} style={{ height: '50px' }} />
                  <h3 className="text-black" style={{ fontSize: '20px' }}>{item.label}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Schedule;
