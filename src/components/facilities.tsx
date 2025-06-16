// 'use client';

// import Link from 'next/link';
// import Image from 'next/image';

// const AboutAndSpeakers = () => {
//   const imageStyle = {
//     objectFit: 'cover' as const,
//     borderRadius: '10px',
//   };

//   const imageSize = {
//     width: 300,
//     height: 300,
//   };

//   return (
//     <>
//       {/* About Section */}
//       <section className="about section-padding" id="section_2" style={{ fontFamily: 'Georgia, serif' }}>
//         <div className="container">
//           <div className="row">
//    <div className="row justify-content-center mb-4">
//           <div className="col-lg-8 text-center">
//             <h2 className="mb-4 text-orange fw-bold">
//             Our Story
//             </h2>
//           </div>
//         </div>

//             <div className="col-lg-6 col-12">
//               <h3 className="mb-3">The Journey of Apex International School</h3>
//               <p>
//                 Apex International School was founded with a vision to provide high-quality education that empowers students to become innovative leaders and responsible global citizens. Over the years, we have nurtured the minds of students, fostering creativity, critical thinking, and a passion for learning.
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
//                 At Apex International School, we believe in the holistic development of each student through academics, sports, arts, and extracurricular activities.
//               </h4>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Speakers / Faculty Section */}
//       <section className="speakers section-padding" id="section_3" style={{ fontFamily: 'Georgia, serif' }}>
//         <div className="container">
//           <div className="row">
//             <div className="col-lg-12 col-12">
//               <div className="row">

//                 {/* President */}
//                 <div className="col-lg-3 col-md-6 col-12">
//                   <div className="speakers-thumb speakers-thumb-small text-center">
//                     <Image
//                       src="/santoshkalje.jpg"
//                       alt="Mr. Santosh Kalje"
//                       style={imageStyle}
//                       {...imageSize}
//                     />
//                     <div className="speakers-info">
//                       <h5 className="speakers-title mb-0">Mr. Santosh Kalje</h5>
//                       <p className="speakers-text mb-0">President</p>
//                     </div>
//                   </div>
//                 </div>

//                 {/* Vice President */}
//                 <div className="col-lg-3 col-md-6 col-12">
//                   <div className="speakers-thumb speakers-thumb-small text-center">
//                     <Image
//                       src="/dattawalaeke.jpg"
//                       alt="Mr. Dattatray B. Walke"
//                       style={imageStyle}
//                       {...imageSize}
//                     />
//                     <div className="speakers-info">
//                       <h5 className="speakers-title mb-0">Mr. Dattatray B. Walke</h5>
//                       <p className="speakers-text mb-0">Vice President</p>
//                     </div>
//                   </div>
//                 </div>

//                 {/* Secretary */}
//                 <div className="col-lg-3 col-md-6 col-12">
//                   <div className="speakers-thumb speakers-thumb-small text-center">
//                     <Image
//                       src="/rahul tonage.jpg"
//                       alt="Mr. Rahul Tonage"
//                       style={imageStyle}
//                       {...imageSize}
//                     />
//                     <div className="speakers-info">
//                       <h5 className="speakers-title mb-0">Mr. Rahul Tonage</h5>
//                       <p className="speakers-text mb-0">Secretary</p>
//                     </div>
//                   </div>
//                 </div>

//                 {/* Treasurer */}
//                 <div className="col-lg-3 col-md-6 col-12">
//                   <div className="speakers-thumb speakers-thumb-small text-center">
//                     <Image
//                       src="/meenaroakde.jpg"
//                       alt="Mrs. Meena Rokad"
//                       style={imageStyle}
//                       {...imageSize}
//                     />
//                     <div className="speakers-info">
//                       <h5 className="speakers-title mb-0">Mrs. Meena Rokad</h5>
//                       <p className="speakers-text mb-0">Treasurer</p>
//                     </div>
//                   </div>
//                 </div>

//                 {/* Team Title & Description */}
//                 <div className="col-lg-6 col-12 d-flex flex-column justify-content-center align-items-center mt-5">
//                   <div className="speakers-text-info text-center">
//                       <h2 className=" text-orange fw-bold">
//           Our Team
//             </h2>
//                     <p>
//                       Meet the dedicated team of educators and leaders who guide our students to success at Apex International School.
//                     </p>
//                   </div>
//                 </div>

//                 {/* Director */}
//                 <div className="col-lg-6 col-12 mt-5 text-center">
//                   <div className="speakers-thumb">
//                     <Image
//                       src="gill.jpg"
//                       alt="Dr. "
//                       style={imageStyle}
//                       {...imageSize}
//                     />
//                     <small className="speakers-featured-text">Principal</small>
//                     <div className="speakers-info">
//                       <h5 className="speakers-title mb-0">Mrs. Manasi Gill</h5>
//                       <p className="speakers-text mb-0">Principal of Apex International School</p>
//                     </div>
//                   </div>
//                 </div>

//               </div>
//             </div>
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

const AboutAndSpeakers = () => {
  const imageStyle = {
    objectFit: 'cover' as const,
    borderRadius: '10px',
  };

  const imageSize = {
    width: 300,
    height: 300,
  };

  return (
    <>
      {/* About Section */}
      <section
        className="about section-padding"
        id="section_2"
        style={{ fontFamily: 'Georgia, serif' }}
      >
        <div className="container">
          <div className="row">
            <div className="row justify-content-center mb-4">
              <div className="col-lg-8 text-center">
                <h2 className="text-orange fw-bold border-bottom pb-2 mb-4 d-inline-block">
                  Our Story
                </h2>
              </div>
            </div>

            <div className="col-lg-6 col-12">
              <h3 className="mb-3">The Journey of Apex International School</h3>
              <p>
                Apex International School was founded with a vision to provide high-quality education
                that empowers students to become innovative leaders and responsible global citizens.
                Over the years, we have nurtured the minds of students, fostering creativity, critical
                thinking, and a passion for learning.
              </p>

              <Link
                href="#section_3"
                className="custom-btn custom-border-btn btn custom-link mt-3 me-3"
              >
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

      {/* Speakers / Faculty Section */}
      <section
        className="speakers section-padding"
        id="section_3"
        style={{ fontFamily: 'Georgia, serif' }}
      >
        <div className="container">
          <div className="row">
            <div className="col-lg-12 col-12">
              <div className="row">

                {/* President */}
                <div className="col-lg-3 col-md-6 col-12">
                  <div className="speakers-thumb speakers-thumb-small text-center">
                    <Image
                      src="/santoshkalje.jpg"
                      alt="Mr. Santosh Kalje"
                      style={imageStyle}
                      {...imageSize}
                    />
                    <div className="speakers-info">
                      <h5 className="speakers-title mb-0">Mr. Santosh Kalje</h5>
                      <p className="speakers-text mb-0">President</p>
                    </div>
                  </div>
                </div>

                {/* Vice President */}
                <div className="col-lg-3 col-md-6 col-12">
                  <div className="speakers-thumb speakers-thumb-small text-center">
                    <Image
                      src="/dattawalaeke.jpg"
                      alt="Mr. Dattatray B. Walke"
                      style={imageStyle}
                      {...imageSize}
                    />
                    <div className="speakers-info">
                      <h5 className="speakers-title mb-0">Mr. Dattatray B. Walke</h5>
                      <p className="speakers-text mb-0">Vice President</p>
                    </div>
                  </div>
                </div>

                {/* Secretary */}
                <div className="col-lg-3 col-md-6 col-12">
                  <div className="speakers-thumb speakers-thumb-small text-center">
                    <Image
                      src="/rahul tonage.jpg"
                      alt="Mr. Rahul Tonage"
                      style={imageStyle}
                      {...imageSize}
                    />
                    <div className="speakers-info">
                      <h5 className="speakers-title mb-0">Mr. Rahul Tonage</h5>
                      <p className="speakers-text mb-0">Secretary</p>
                    </div>
                  </div>
                </div>

                {/* Treasurer */}
                <div className="col-lg-3 col-md-6 col-12">
                  <div className="speakers-thumb speakers-thumb-small text-center">
                    <Image
                      src="/meenaroakde.jpg"
                      alt="Mrs. Meena Rokad"
                      style={imageStyle}
                      {...imageSize}
                    />
                    <div className="speakers-info">
                      <h5 className="speakers-title mb-0">Mrs. Meena Rokad</h5>
                      <p className="speakers-text mb-0">Treasurer</p>
                    </div>
                  </div>
                </div>

                {/* Team Title & Description */}
                <div className="col-lg-6 col-12 d-flex flex-column justify-content-center align-items-center mt-5">
                  <div className="speakers-text-info text-center">
                    <h2 className="text-orange fw-bold border-bottom pb-2 mb-3 d-inline-block">
                      Our Team
                    </h2>
                    <p>
                      Meet the dedicated team of educators and leaders who guide our students to
                      success at Apex International School.
                    </p>
                  </div>
                </div>

                {/* Principal */}
                <div className="col-lg-6 col-12 mt-5 text-center">
                  <div className="speakers-thumb">
                    <Image
                      src="/gill.jpg"
                      alt="Mrs. Manasi Gill"
                      style={imageStyle}
                      {...imageSize}
                    />
                    <small className="speakers-featured-text">Principal</small>
                    <div className="speakers-info">
                      <h5 className="speakers-title mb-0">Mrs. Manasi Gill</h5>
                      <p className="speakers-text mb-0">Principal of Apex International School</p>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutAndSpeakers;

