
// 'use client';

// import Link from 'next/link';
// import Image from 'next/image';
// import '../app/styles/facilities.css';

// const AboutAndSpeakers = () => {
//   const officers = [
//     {
//       name: 'Mr. Santosh Kalje',
//       role: 'President',
//       image: '/santoshkalje.jpg',
//       message:
//         'The school exists only for the students and all the activities here are centered and at tuned to cater the educational needs of the students in acquiring knowledge, skill, attitude, values and behaviors through opportunities and platforms.This requires Committed and Dedicated Staff in duty to create an environment of result-oriented teaching learning Process.'
//     },
//     {
//       name: 'Mr. Dattatray B. Walke',
//       role: 'Vice President',
//       image: '/dattawalaeke.jpg',
//       message:
//         'As a part of our constant endeavor to identify the talent in each student, we are engaged in continuous evaluation, comprehensive curriculum, syllabus based on practical applications, assessment based on interactive sessions, skills and fun based learning, which has led to better learning levels and quality of our education.We are equally focusing on co-scholastic and extracurricular activities and introduced several new measures to upkeep the high standards of academic excellence.'
//     },
//     {
//       name: 'Mr. Rahul Tonage',
//       role: 'Secretary',
//       image: '/rahul tonage.jpg',
//       message:
//         'Our mission is to provide the children of India with the necessary skills to face the challenges of the 21st century. The Apex School legacy is long and enduring. Today, Apex International Schools cater to the educational needs of learners annually. We have been entrusted with their future, their careers and their lives ahead.We need to nurture students as learners and encourage their growth through academic and extracurricular excellence.',
//     },
//     {
//       name: 'Mrs. Meena Rokade',
//       role: 'Treasurer',
//       image: '/meenaroakde.jpg',
//       message:
//         'I wish you the blessing of a positive attitude, and this is what we also try to build in our students. We, at the Apex Schools, strive to provide a platform where a child is holistically educated, encompassing physical (physiological), mental (cognitive), social, emotional (psychological) and spiritual growth. We aim that our students become a resource for tomorrow.'
//     },
//     {
//       name: 'Mrs. Manasi Gill',
//       role: 'Principal',
//       image: '/gill.jpg',
//       message:
//         'Our goal is to inspire every child to grow with confidence and reach their highest potential.',
//     },
//   ];

//   return (
//     <>
//       {/* About Section */}
//       <section className="about section-padding" id="section_2" style={{ fontFamily: 'Georgia, serif' }}>
//         <div className="container">
//           <div className="row justify-content-center mb-4">
//             <div className="col-lg-8 text-center">
//               <h2 className="fw-bold border-bottom pb-2 mb-4 d-inline-block" style={{ color: '#1e3c72' }}>
//                 Our Story
//               </h2>
//             </div>
//           </div>

//           <div className="row">
//             <div className="col-lg-6 col-12">
//               <h3 className="mb-3">The Journey of Apex International School</h3>
//               <p>
//                 Apex International School was founded with a vision to provide high-quality education
//                 that empowers students to become innovative leaders and responsible global citizens.
//                 Over the years, we have nurtured the minds of students, fostering creativity, critical
//                 thinking, and a passion for learning.
//               </p>

//               <Link href="#section_3" className="custom-btn custom-border-btn btn custom-link mt-3 me-3">
//                 Meet Our Faculty
//               </Link>

//               <Link href="#section_4" className="custom-btn btn custom-link mt-3">
//                 Explore Our Programs
//               </Link>
//             </div>

//             <div className="col-lg-6 col-12 mt-5 mt-lg-0">
//               <h4>
//                 At Apex International School, we believe in the holistic development of each student
//                 through academics, sports, arts, and extracurricular activities.
//               </h4>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Faculty Section */}
//       <section className="speakers section-padding" id="section_3" style={{ fontFamily: 'Georgia, serif' }}>
//         <div className="container">
//           <div className="row">
//             {officers.map((officer, index) => (
//               <div className="col-lg-3 col-md-6 col-12 mb-4" key={index}>
//                 <div className="flip-card">
//                   <div className="flip-card-inner">
//                     <div className="flip-card-front">
//                       <div className="image-container">
//                         <Image
//                           src={officer.image}
//                           alt={officer.name}
//                           fill
//                           style={{ objectFit: 'cover' }}
//                           className="rounded-image"
//                         />
//                       </div>
//                       <div className="speakers-info mt-3">
//                         <h5 className="speakers-title mb-0">{officer.name}</h5>
//                         <p className="speakers-text mb-0">{officer.role}</p>
//                       </div>
//                     </div>

//                     <div className="flip-card-back">
//                       <div className="message-content">
//                         <h6 className="mb-2 fw-semibold">
//                           📜 Message from the {officer.role}
//                         </h6>
//                         <p className="mb-1"><em>Dear Parents,</em></p>
//                         <p className="m-0">{officer.message}</p>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>
//     </>
//   );
// };

// export default AboutAndSpeakers;
'use client';

import Link from 'next/link';
import Image from 'next/image';
import '../app/styles/facilities.css';

const AboutAndSpeakers = () => {
  const officers = [
    {
      name: 'Mr. Santosh Kalje',
      role: 'President',
      image: '/santoshkalje.jpg',
      message:
        'The school exists only for the students and all the activities here are centered and at tuned to cater the educational needs of the students in acquiring knowledge, skill, attitude, values and behaviors through opportunities and platforms. This requires Committed and Dedicated Staff in duty to create an environment of result-oriented teaching learning Process.',
    },
    {
      name: 'Mr. Dattatray B. Walke',
      role: 'Vice President',
      image: '/dattawalaeke.jpg',
      message:
        'As a part of our constant endeavor to identify the talent in each student, we are engaged in continuous evaluation, comprehensive curriculum, syllabus based on practical applications, assessment based on interactive sessions, skills and fun based learning, which has led to better learning levels and quality of our education. We are equally focusing on co-scholastic and extracurricular activities and introduced several new measures to upkeep the high standards of academic excellence.',
    },
    {
      name: 'Mr. Rahul Tonage',
      role: 'Secretary',
      image: '/rahul tonage.jpg',
      message:
        'Our mission is to provide the children of India with the necessary skills to face the challenges of the 21st century. The Apex School legacy is long and enduring. Today, Apex International Schools cater to the educational needs of learners annually. We have been entrusted with their future, their careers and their lives ahead. We need to nurture students as learners and encourage their growth through academic and extracurricular excellence.',
    },
    {
      name: 'Mrs. Meena Rokade',
      role: 'Treasurer',
      image: '/meenaroakde.jpg',
      message:
        'I wish you the blessing of a positive attitude, and this is what we also try to build in our students. We, at the Apex Schools, strive to provide a platform where a child is holistically educated, encompassing physical (physiological), mental (cognitive), social, emotional (psychological) and spiritual growth. We aim that our students become a resource for tomorrow.',
    },
    {
      name: 'Mrs. Manasi Gill',
      role: 'Principal',
      image: '/gill.jpg',
      message:
        'Our goal is to inspire every child to grow with confidence and reach their highest potential.',
    },
  ];

  return (
    <>
      {/* About Section */}
      <section className="about section-padding" id="section_2" style={{ fontFamily: 'Georgia, serif' }}>
        <div className="container">
          <div className="row justify-content-center mb-4">
            <div className="col-lg-8 text-center">
              <h2 className="fw-bold border-bottom pb-2 mb-4 d-inline-block" style={{ color: '#1e3c72' }}>
                Our Story
              </h2>
            </div>
          </div>

          <div className="row">
            <div className="col-lg-6 col-12">
              <h3 className="mb-3">The Journey of Apex International School</h3>
              <p>
                Apex International School was founded with a vision to provide high-quality education
                that empowers students to become innovative leaders and responsible global citizens.
                Over the years, we have nurtured the minds of students, fostering creativity, critical
                thinking, and a passion for learning.
              </p>

              <Link href="#section_3" className="custom-btn custom-border-btn btn custom-link mt-3 me-3">
                Meet Our Faculty
              </Link>

              <Link href="#section_4" className="custom-btn btn custom-link mt-3">
                Explore Our Programs
              </Link>
            </div>

            <div className="col-lg-6 col-12 mt-5 mt-lg-0">
              <h4>
                At Apex International School, we believe in the holistic development of each student
                through academics, sports, arts, and extracurricular activities.
              </h4>
            </div>
          </div>
        </div>
      </section>

      {/* Faculty Section */}
      <section className="speakers section-padding" id="section_3" style={{ fontFamily: 'Georgia, serif' }}>
        <div className="container">
          <div className="row">
            {officers.map((officer, index) => (
              <div
                key={index}
                className={
                  officer.role === 'Principal'
                    ? 'col-12 d-flex justify-content-center mb-4'
                    : 'col-lg-3 col-md-6 col-12 mb-4'
                }
              >
                <div
                  className="flip-card"
                  style={officer.role === 'Principal' ? { width: '300px' } : {}}
                >
                  <div className="flip-card-inner">
                    <div className="flip-card-front">
                      <div className="image-container">
                        <Image
                          src={officer.image}
                          alt={officer.name}
                          fill
                          style={{ objectFit: 'cover' }}
                          className="rounded-image"
                        />
                      </div>
                      <div className="speakers-info mt-3 text-center">
                        <h5 className="speakers-title mb-0">{officer.name}</h5>
                        <p className="speakers-text mb-0">{officer.role}</p>
                      </div>
                    </div>

                    <div className="flip-card-back">
                      <div className="message-content">
                        <h6 className="mb-2 fw-semibold">📜 Message from the {officer.role}</h6>
                        <p className="mb-1"><em>Dear Parents,</em></p>
                        <p className="m-0">{officer.message}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutAndSpeakers;
