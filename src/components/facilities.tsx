
// 'use client';

// import Link from 'next/link';
// import Image from 'next/image';
// import { useState, useEffect } from 'react';
// import { motion, AnimatePresence } from 'framer-motion';

// const teamMembers = [
  // {
  //   name: 'Mr. Santosh Kalje',
  //   role: 'President',
  //   image: '/santoshkalje.jpg',
  //   message:
  //     'The school exists only for the students and all the activities here are centered and at tuned to cater the educational needs of the students in acquiring knowledge, skill, attitude, values and behaviors through opportunities and platforms.This requires committed and dedicated staff in duty to create an environment of result-oriented teaching-learning process.True education, therefore is possible only when the school and the family correspond to each other in evaluating, monitoring and pursuing the growth, change and progress in them. This also means students must mind our efforts and hard work in shaping their future and thus, we need to correspond together in the serious task of teaching-learning.Thank you! Dear parents, for having confidence and faith in our school and staff and for giving us the opportunity to serve you and your wards. Yes, we do our best to come up to meet your expectations, despite our limitations, challenges and failures.Apex School envisages in imparting value-based education, covering intellectual, emotional, social and spiritual spheres. It means to teach them socially to love, forgive, peace, share, respect, care, democracy, freedom and social justice; to understand and appreciate the values of every culture and religion; to respect, enrich and preserve the environment.',
  // },
  // {
  //   name: 'Mr. Dattatray B. Walke',
  //   role: 'Vice President',
  //   image: '/dattawalaeke.jpg',
  //   message:
  //     'Greetings from Apex School! Since last few decades, our education system has seen a paradigm shift but ever since inception, our intent to invite the outstanding achievers from all backgrounds is still the same.As a part of our constant endeavor to identify the talent in each student, we are engaged in continuous evaluation, comprehensive curriculum, syllabus based on practical applications, assessment based on interactive sessions, skills and fun based learning, which has led to better learning levels and quality of our education.We are equally focusing on co-scholastic and extracurricular activities and introduced several new measures to upkeep the high standards of academic excellence.To foster inventiveness, at APEX, young minds can give shape to their ideas through do-it-yourself mode and learn innovation skills. They will get a chance to work with tools and equipment to understand the concepts of STEAM (Science, Technology, Engineering, Arts and Math) education as our labs are equipped with Science, Electronics, Robotics, and Computers.We are motivated enough to give the best exposure to our learners and inculcating hand on experience in the current education scenario which is the need of the hour and wish to transform the life of every single learner at Apex to make educated, responsible, ethical citizens and value based global leaders of tomorrow.',
  // },
  // {
  //   name: 'Mr. Rahul Tonage',
  //   role: 'Secretary',
  //   image: '/rahul tonage.jpg',
  //   message:
  //     'Our mission is to provide the children of India with the necessary skills to face the challenges of the 21st century.TheApex School legacy is long and enduring. Today, Apex International Schools cater to the educational needs of learners annually. We have been entrusted with their future, their careers and their lives ahead. We need to nurture them as learners, inculcate values and arm them with the necessary skills that will help them make the nation proud.The management of Apex International School brings together a great learning community. We strive to build independent, responsible, global citizens through a widely accepted curriculum and practices that are founded on learner-centric education. Therefore, Apex school will impart world class education through the best use of modern resources, developing young minds to think, question and create.Our schools aim to fuse the strong cultural fundamentals of Indian society with advanced learning tools acquired from the world over giving education an exciting and dynamic direction.As we open our doors to each new generation of students, expectations run high as we believe that each and every one of them will grow into the stars in our skies. Every day, every year we scale new heights, never standing still.Always remember “Don’t wait for the opportunity. Create it.”'
  // },
  // {
  //   name: 'Mrs. Meena Rokade',
  //   role: 'Treasurer',
  //   image: '/meenaroakde.jpg',
  //   message:
  //     'Each of us, sooner or later, goes through a moment or a situation when it seems that we are on the wrong road, and life is moving in the wrong direction.But… this is also true that some things are within our control and what disturbs us are not events or situations, but our attitude towards them.Dear all, I wish you the blessing of a positive attitude, and this is what we also try to build in our students. We, at the Apex Schools, strive to provide a platform where a child is holistically educated, encompassing physical (physiological), mental (cognitive), social, emotional (psychological) and spiritual growth. We aim that our students become a resource for tomorrow.We accentuate learning by synergy and collaboration and this surely comes with a positive attitude towards life. Every student at Apex is given a voice and avenue where they are able to express their knowledge and dream big and achieve big.As water reflects the face, so one’s life reflects the heart.I am confident that at the Apex School, everyone will understand the true meaning of life and live life to its fullest with the Almighty as the guide, and reach the heights of glory',
  // },
  // {
  //   name: 'Mrs. Manasi Gill',
  //   role: 'Principal',
  //   image: '/gill.jpg',
  //   message:
  //     'Education is not just a process of giving knowledge for a future job but a lifelong process which creates an understanding of moral and ethical values to guide ones life in a right path. As a parent, you want the best for your child and we are proud to be working with you to ensure that they are given the right knowledge to face the future challenges. Parents, students and the school authorities are a team and we have to complement each others efforts. At Apex International School, we focus on complete development of our students by involving them in both scholastic & co-scholastic activities as suggested by CBSE. am sure this will help our c to realize, understand & explore their talents. In order to do this, the parents and the school authorities must work together to inculcate certain values in the students. “Sound body has a Sound Mind.” Let us allow our children to develop physically & mentally. Children learn a lot of values when they are involved in Sports & Games. Some of these life skills & values cannot be taught in the classroom or at home.AIS provides enough opportunities for the children to participate in Sports & games. “If a plant is carefully nurtured by a gardener, it will become good, and produce better fruits.” Therefore, children must be given a good training from their earliest childhood. We are here for the same. I am sure that our students of today, tomorrow will carry forward the Motto of love and unity entrusted in their hands at Apex International School. “Do the work with intention not because of compulsion.” With all my love, best wishes and blessings.'
  // },
// ];

// const AboutAndSpeakers = () => {
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const [direction, setDirection] = useState('right');

//   useEffect(() => {
//     const interval = setInterval(() => {
//       handleNext();
//     }, 10000);
//     return () => clearInterval(interval);
//   }, [currentIndex]);

//   const handleNext = () => {
//     setDirection('right');
//     setCurrentIndex((prev) => (prev === teamMembers.length - 1 ? 0 : prev + 1));
//   };

//   const handlePrev = () => {
//     setDirection('left');
//     setCurrentIndex((prev) => (prev === 0 ? teamMembers.length - 1 : prev - 1));
//   };

//   const handleDotClick = (index: number) => {
//     setDirection(index > currentIndex ? 'right' : 'left');
//     setCurrentIndex(index);
//   };

//   const member = teamMembers[currentIndex];

//   return (
//     <div>
//       {/* About Section */}
//       <section className="about section-padding" id="section_2">
//         <div className="container">
//           <div className="row justify-content-center mb-4">
//             <div className="col-lg-8 text-center">
//               <h2 className="fw-bold border-bottom pb-2 mb-4 d-inline-block" style={{ fontFamily: 'Georgia, serif', color: '#1e3c72' }}>
//                 Our Story
//               </h2>
//             </div>
//           </div>

//           <div className="row">
//             <div className="col-lg-6 col-12" style={{ fontFamily: 'Georgia, serif' }}>
//               <h3 className="mb-3">The Journey of Apex International School</h3>
//               <p>
//                 Apex International School was founded with a vision to provide high-quality education that empowers students to become innovative leaders and responsible global citizens.
//               </p>

//               <Link href="#our-team" className="custom-btn custom-border-btn btn custom-link mt-3 me-3">
//                 Meet Our Team
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

//       {/* Leadership Carousel */}
//       <section className="leadership-section" style={{ fontFamily: 'Georgia, serif' }}>
//         <div className="container py-5">
//           <h2 className="text-center fw-bold  mb-5 border-bottom pb-2 " style={{color:'#1e3c72'}}>Message from the management</h2>

//           <div className="carousel-container">
//             <div className="carousel-content position-relative">
//               <button className="carousel-arrow left-arrow" onClick={handlePrev}>&#8592;</button>
//               <button className="carousel-arrow right-arrow" onClick={handleNext}>&#8594;</button>

//               <AnimatePresence mode="wait">
//                 <motion.div
//                   key={member.name}
//                   initial={{ x: direction === 'right' ? 100 : -100, opacity: 0 }}
//                   animate={{ x: 0, opacity: 1, transition: { duration: 0.5, ease: 'easeInOut' } }}
//                   exit={{ x: direction === 'right' ? -100 : 100, opacity: 0, transition: { duration: 0.3, ease: 'easeInOut' } }}
//                 >
//                   <div className="team-card-horizontal d-flex flex-column flex-md-row align-items-center p-4 shadow-lg bg-white rounded-4 border">
//                     <div className="position-relative" style={{ width: '300px', height: '300px' }}>
//                       <Image
//                         src={member.image}
//                         alt={member.name}
//                         width={300}
//                         height={300}
//                         style={{ objectFit: 'cover', borderRadius: '20px' }}
//                         priority={currentIndex === 0}
//                       />
//                       <span className="position-absolute top-0 start-0 badge bg-primary px-3 py-2 rounded-bottom-end">{member.role}</span>
//                     </div>

//                     <div className="ms-md-4 mt-3 mt-md-0">
//                       <h3 className="fw-bold " style={{color:'#1e3c72'}}>{member.name}</h3>
//                       <p className="text-muted fw-semibold">Dear Parents,</p>
//                       <p className="text-secondary" style={{ textAlign: 'justify',fontSize:'1rem' ,fontFamily: 'Georgia, serif'}}>{member.message}</p>
                     
//                     </div>
//                   </div>
//                 </motion.div>
//               </AnimatePresence>

//               <div className="carousel-dots mt-4 d-flex justify-content-center">
//                 {teamMembers.map((_, index) => (
//                   <button
//                     key={index}
//                     className={`dot mx-1 ${index === currentIndex ? 'active' : ''}`}
//                     onClick={() => handleDotClick(index)}
//                   />
//                 ))}
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Custom Styles */}
//         <style jsx>{`
//           .carousel-container {
//             max-width: 1300px;
//             margin: auto;

//           }
//           .carousel-content {
           
//             padding: 40px;
//             border-radius: 20px;
//             position: relative;
            
//           }
//           .carousel-arrow {
//             position: absolute;
//             top: 50%;
//             transform: translateY(-50%);
//             width: 40px;
//             height: 40px;
//             border: none;
//             border-radius: 50%;
//             background: #dbeafe;
//             color: #1e3a8a;
//             font-size: 20px;
//             cursor: pointer;
//             z-index: 2;
//           }
//           .left-arrow {
//             left: -20px;
//           }
//           .right-arrow {
//             right: -20px;
//           }
//           .dot {
//             width: 12px;
//             height: 12px;
//             border-radius: 50%;
//             border: none;
//             background: #cbd5e1;
//             cursor: pointer;
//           }
//           .dot.active {
//             background: #1e3a8a;
//           }
//         `}</style>
//       </section>
//     </div>
//   );
// };

// export default AboutAndSpeakers;
'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const teamMembers = [
  {
    name: 'Mr. Santosh Kalje',
    role: 'President',
    image: '/santoshkalje.jpg',
    message:
      'The school exists only for the students and all the activities here are centered and at tuned to cater the educational needs of the students in acquiring knowledge, skill, attitude, values and behaviors through opportunities and platforms.This requires committed and dedicated staff in duty to create an environment of result-oriented teaching-learning process.True education, therefore is possible only when the school and the family correspond to each other in evaluating, monitoring and pursuing the growth, change and progress in them. This also means students must mind our efforts and hard work in shaping their future and thus, we need to correspond together in the serious task of teaching-learning.Thank you! Dear parents, for having confidence and faith in our school and staff and for giving us the opportunity to serve you and your wards. Yes, we do our best to come up to meet your expectations, despite our limitations, challenges and failures.Apex School envisages in imparting value-based education, covering intellectual, emotional, social and spiritual spheres. It means to teach them socially to love, forgive, peace, share, respect, care, democracy, freedom and social justice; to understand and appreciate the values of every culture and religion; to respect, enrich and preserve the environment.',
  },
  {
    name: 'Mr. Dattatray B. Walke',
    role: 'Vice President',
    image: '/dattawalaeke.jpg',
    message:
      'Greetings from Apex School! Since last few decades, our education system has seen a paradigm shift but ever since inception, our intent to invite the outstanding achievers from all backgrounds is still the same.As a part of our constant endeavor to identify the talent in each student, we are engaged in continuous evaluation, comprehensive curriculum, syllabus based on practical applications, assessment based on interactive sessions, skills and fun based learning, which has led to better learning levels and quality of our education.We are equally focusing on co-scholastic and extracurricular activities and introduced several new measures to upkeep the high standards of academic excellence.To foster inventiveness, at APEX, young minds can give shape to their ideas through do-it-yourself mode and learn innovation skills. They will get a chance to work with tools and equipment to understand the concepts of STEAM (Science, Technology, Engineering, Arts and Math) education as our labs are equipped with Science, Electronics, Robotics, and Computers.We are motivated enough to give the best exposure to our learners and inculcating hand on experience in the current education scenario which is the need of the hour and wish to transform the life of every single learner at Apex to make educated, responsible, ethical citizens and value based global leaders of tomorrow.',
  },
  {
    name: 'Mr. Rahul Tonage',
    role: 'Secretary',
    image: '/rahul tonage.jpg',
    message:
      'Our mission is to provide the children of India with the necessary skills to face the challenges of the 21st century.TheApex School legacy is long and enduring. Today, Apex International Schools cater to the educational needs of learners annually. We have been entrusted with their future, their careers and their lives ahead. We need to nurture them as learners, inculcate values and arm them with the necessary skills that will help them make the nation proud.The management of Apex International School brings together a great learning community. We strive to build independent, responsible, global citizens through a widely accepted curriculum and practices that are founded on learner-centric education. Therefore, Apex school will impart world class education through the best use of modern resources, developing young minds to think, question and create.Our schools aim to fuse the strong cultural fundamentals of Indian society with advanced learning tools acquired from the world over giving education an exciting and dynamic direction.As we open our doors to each new generation of students, expectations run high as we believe that each and every one of them will grow into the stars in our skies. Every day, every year we scale new heights, never standing still.Always remember “Don’t wait for the opportunity. Create it.”'
  },
  {
    name: 'Mrs. Meena Rokade',
    role: 'Treasurer',
    image: '/meenaroakde.jpg',
    message:
      'Each of us, sooner or later, goes through a moment or a situation when it seems that we are on the wrong road, and life is moving in the wrong direction.But… this is also true that some things are within our control and what disturbs us are not events or situations, but our attitude towards them.Dear all, I wish you the blessing of a positive attitude, and this is what we also try to build in our students. We, at the Apex Schools, strive to provide a platform where a child is holistically educated, encompassing physical (physiological), mental (cognitive), social, emotional (psychological) and spiritual growth. We aim that our students become a resource for tomorrow.We accentuate learning by synergy and collaboration and this surely comes with a positive attitude towards life. Every student at Apex is given a voice and avenue where they are able to express their knowledge and dream big and achieve big.As water reflects the face, so one’s life reflects the heart.I am confident that at the Apex School, everyone will understand the true meaning of life and live life to its fullest with the Almighty as the guide, and reach the heights of glory',
  },
  {
    name: 'Mrs. Manasi Gill',
    role: 'Principal',
    image: '/gill.jpg',
    message:
      'Education is not just a process of giving knowledge for a future job but a lifelong process which creates an understanding of moral and ethical values to guide ones life in a right path. As a parent, you want the best for your child and we are proud to be working with you to ensure that they are given the right knowledge to face the future challenges. Parents, students and the school authorities are a team and we have to complement each others efforts. At Apex International School, we focus on complete development of our students by involving them in both scholastic & co-scholastic activities as suggested by CBSE. am sure this will help our c to realize, understand & explore their talents. In order to do this, the parents and the school authorities must work together to inculcate certain values in the students. “Sound body has a Sound Mind.” Let us allow our children to develop physically & mentally. Children learn a lot of values when they are involved in Sports & Games. Some of these life skills & values cannot be taught in the classroom or at home.AIS provides enough opportunities for the children to participate in Sports & games. “If a plant is carefully nurtured by a gardener, it will become good, and produce better fruits.” Therefore, children must be given a good training from their earliest childhood. We are here for the same. I am sure that our students of today, tomorrow will carry forward the Motto of love and unity entrusted in their hands at Apex International School. “Do the work with intention not because of compulsion.” With all my love, best wishes and blessings.'
  },
];

const AboutAndSpeakers = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState('right');

  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 10000);
    return () => clearInterval(interval);
  }, [currentIndex]);

  const handleNext = () => {
    setDirection('right');
    setCurrentIndex((prev) => (prev === teamMembers.length - 1 ? 0 : prev + 1));
  };

  const handlePrev = () => {
    setDirection('left');
    setCurrentIndex((prev) => (prev === 0 ? teamMembers.length - 1 : prev - 1));
  };

  const handleDotClick = (index: number) => {
    setDirection(index > currentIndex ? 'right' : 'left');
    setCurrentIndex(index);
  };

  const baseTextStyle = { fontFamily: 'Georgia, serif', color: '#1e3c72' };
  const member = teamMembers[currentIndex];

  return (
    <div>
      {/* About Section */}
      <section className="about section-padding" id="section_2" style={baseTextStyle}>
        <div className="container">
          <div className="row justify-content-center mb-4">
            <div className="col-lg-8 text-center">
              <h2 className="fw-bold border-bottom pb-2 mb-4 d-inline-block" style={baseTextStyle}>
                Our Story
              </h2>
            </div>
          </div>

          <div className="row">
            <div className="col-lg-6 col-12" style={baseTextStyle}>
              <h3 className="mb-3" style={baseTextStyle}>
                The Journey of Apex International School
              </h3>
              <p style={{color:'black'}}>
                Apex International School was founded with a vision to provide high-quality education that empowers students to become innovative leaders and responsible global citizens.
              </p>

              <Link
                href="#our-team"
                className="custom-btn custom-border-btn btn custom-link mt-3 me-3"
                style={baseTextStyle}
              >
                Meet Our Team
              </Link>

              <Link
                href="#section_4"
                className="custom-btn btn custom-link mt-3"
                style={baseTextStyle}
              >
                Explore Our Programs
              </Link>
            </div>

            <div className="col-lg-6 col-12 mt-5 mt-lg-0">
              <h4 style={{color:'black'}}>
                At Apex International School, we believe in the holistic development of each student through academics, sports, arts, and extracurricular activities.
              </h4>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Carousel */}
      <section className="leadership-section" style={baseTextStyle}>
        <div className="container py-5">
          <h2 className="text-center fw-bold mb-5 border-bottom pb-2" style={baseTextStyle}>
            Message from the management
          </h2>

          <div className="carousel-container">
            <div className="carousel-content position-relative">
              <button className="carousel-arrow left-arrow" onClick={handlePrev}>
                &#8592;
              </button>
              <button className="carousel-arrow right-arrow" onClick={handleNext}>
                &#8594;
              </button>

              <AnimatePresence mode="wait">
                <motion.div
                  key={member.name}
                  initial={{ x: direction === 'right' ? 100 : -100, opacity: 0 }}
                  animate={{ x: 0, opacity: 1, transition: { duration: 0.5, ease: 'easeInOut' } }}
                  exit={{ x: direction === 'right' ? -100 : 100, opacity: 0, transition: { duration: 0.3, ease: 'easeInOut' } }}
                >
                  <div className="team-card-horizontal d-flex flex-column flex-md-row align-items-center p-4 shadow-lg bg-white rounded-4 border">
                    <div className="position-relative" style={{ width: '300px', height: '300px' }}>
                      <Image
                        src={member.image}
                        alt={member.name}
                        width={300}
                        height={300}
                        style={{ objectFit: 'cover', borderRadius: '20px' }}
                        priority={currentIndex === 0}
                      />
                      <span className="position-absolute top-0 start-0 badge bg-primary px-3 py-2 rounded-bottom-end">
                        {member.role}
                      </span>
                    </div>

                    <div className="ms-md-4 mt-3 mt-md-0">
                      <h3 className="fw-bold" style={baseTextStyle}>
                        {member.name}
                      </h3>
                      <p className="text-muted fw-semibold" style={{ fontFamily: 'Georgia, serif' }}>
                        Dear Parents,
                      </p>
                      <p
                        className="text-secondary"
                        style={{
                          textAlign: 'justify',
                          fontSize: '1rem',
                          ...baseTextStyle,
                        }}
                      >
                        {member.message}
                      </p>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>

              <div className="carousel-dots mt-4 d-flex justify-content-center">
                {teamMembers.map((_, index) => (
                  <button
                    key={index}
                    className={`dot mx-1 ${index === currentIndex ? 'active' : ''}`}
                    onClick={() => handleDotClick(index)}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Custom Styles */}
        <style jsx>{`
          .carousel-container {
            max-width: 1300px;
            margin: auto;
          }
          .carousel-content {
            padding: 40px;
            border-radius: 20px;
            position: relative;
          }
          .carousel-arrow {
            position: absolute;
            top: 50%;
            transform: translateY(-50%);
            width: 40px;
            height: 40px;
            border: none;
            border-radius: 50%;
            background: #dbeafe;
            color: #1e3a8a;
            font-size: 20px;
            cursor: pointer;
            z-index: 2;
          }
          .left-arrow {
            left: -20px;
          }
          .right-arrow {
            right: -20px;
          }
          .dot {
            width: 12px;
            height: 12px;
            border-radius: 50%;
            border: none;
            background: #cbd5e1;
            cursor: pointer;
          }
          .dot.active {
            background: #1e3a8a;
          }
        `}</style>
      </section>
    </div>
  );
};

export default AboutAndSpeakers;
