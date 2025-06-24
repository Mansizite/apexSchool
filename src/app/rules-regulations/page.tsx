
// 'use client';

// import React from 'react';
// import Image from 'next/image';
// import { motion } from 'framer-motion';
// import 'bootstrap-icons/font/bootstrap-icons.css';

// const rulesData = [
//   {
//     title: 'Rules for Fees',
  
//     icon: 'bi-cash-stack',
//     points: [
//       'School fees is charged for complete academic year.',
//       'If fees are not paid regularly, the child is liable to have his/her name struck off the roll.',
//       'The Principal reserves the rights to refuse any application for admission without having to assign reasons.',
//       'Notice of withdrawal should be given by March 30th.',
//       'Fees is due as long as notice of withdrawal is not given.',
//       'No leaving certificate will be issued till all fees are cleared.',
//       'Fee should be paid till 10th of every month.',
//       'Late Charges of Rs 50/- for the first day, and thereafter Rs.5 per day.'
//     ]
//   },
//   {
//     title: 'Rules for Bus',
   
//     icon: 'bi-bus-front',
//     points: [
//       'The school provides bus service to the students.',
//       'Board and alight only at fixed bus stops.',
//       'Parents must not request drivers to stop at unauthorized stops.',
//       'No change in bus stop without prior permission.',
//       'Be courteous to bus-in-charge. Misbehavior will disqualify usage.',
//       'If child is not at the stop, bus will move. Parents must bring child to school.',
//       'Bus is an add-on facility. Efforts will be made to provide timely service.'
//     ]
//   },
//   {
//     title: ' Rules for Absenteeism ',
  
//     icon: 'bi-calendar-x',
//     points: [
//       'Leave should be noted in the calendar record page.',
//       'Post-absence, reason must be certified by parent.',
//       'No entry without Principal’s signature if absent/late.',
//       'Illness over a week should be informed to the Principal.',
//       'Contagious disease requires medical certificate for return.',
//       'Extended leaves like vacations/marriages not encouraged.',
//       'Early leave only with Principal’s permission.'
//     ]
//   },
//   {
//     title: ' Rules for Attendance ',
 
//     icon: 'bi-clipboard-check',
//     points: [
//       '95% attendance is mandatory for promotion.',
//       'Late arrivals post class start will be sent home.',
//       'No parcels or boxes will be accepted post gate closure.'
//     ]
//   },
//   {
//     title: 'Rules for Recess',
   
//     icon: 'bi-person-video3',
//     points: [
//       'Food and drinks should only be consumed during recess.',
//       'While eating the food, students should display good table manners and not throw left over food on the table or floor.',
//       'Empty bottles and other litter must be cleared from the table and put into the rubbish bins. 5 minutes prior to the end of recess. Students should start moving to their classroom.',
//       'Kindly ensure that you have sent a tiffin with your child only in the morning and after that no tiffin will be allowed to be delivered to the child later for health security reasons.'
//     ]
//   },
//   {
//     title: 'Leaving School Premises During School Hours',
 
//     icon: 'bi-journal-bookmark',
//     points: [
//       'A student wishing to leave during school hours due to illness or for any other valid reason must complete the Early Departure for pupils form in the office. The form will be signed by the Principal and dear teacher',
//       ' The student will be allowed to leave school on parent pick-up only under dire circumstances',
    
//     ]
//   },
//   {
//     title: 'Refund Policy',
 
//     icon: 'bi-arrow-left-right',
//     points: [
//       '1-month withdrawal notice required.',
//       'Child must attend and pay full fees during notice period.',
//       'Parents are responsible for timely fee payment.',
//       'Courtesy reminders are not excuses for late payments.'
//     ]
//   }
// ];

// const RulesSection = () => (
//   <div className="container py-5"   style={{
//                 fontFamily: 'Georgia, serif',
               
//               }}>
//     <motion.div
//       className="text-center mb-5"
//       initial={{ opacity: 0, y: 20 }}
//       whileInView={{ opacity: 1, y: 0 }}
//       viewport={{ once: true }}
//       transition={{ duration: 0.6 }}
//     >
//       {/* <h2 className="display-8 fw-bold" style={{ color:'#1e3c72' }}>
//         School Rules & Policies
//       </h2> */}
//         <h2 className="mb-4 fw-bold border-bottom pb-2 d-inline-block" style={{color:'#1e3c72'}} >
//               School Rules & Policies
//             </h2>

//       <p className="text-muted fs-5" style={{ maxWidth: '720px', margin: '0 auto' }}>
//         Our school policies ensure a safe, organized, and respectful environment for every student's growth and development.
//       </p>
//     </motion.div>

//     <div className="row g-4">
//       {rulesData.map((section, idx) => (
//         <motion.div
//           className="col-lg-4 col-md-6"
//           key={idx}
//           initial={{ opacity: 0, y: 30 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ delay: idx * 0.1, duration: 0.5 }}
//         >
//           <div className="card h-100 shadow-lg border-0 rounded-4 overflow-hidden bg-white">
//             {/* Image Banner with Icon Overlay */}
//             <div className="position-relative" style={{ height: '180px' }}>
        
//               <div className="position-absolute top-0 start-0 w-100 h-100 d-flex align-items-center justify-content-center">
//                 <div className="bg-white bg-opacity-75 rounded-circle p-3 shadow-lg">
//                   <i className={`bi ${section.icon} fs-2`} style={{ color: '#8e24aa' }}></i>
//                 </div>
//               </div>
//             </div>

//             {/* Content */}
//             <div className="card-body p-4">
//               <h3 className="h5 fw-bold mb-3" style={{ color: '#4a148c' }}>
//                 {section.title}
//               </h3>
//               <ul className="list-unstyled mb-0">
//                 {section.points.slice(0, 4).map((point, pIdx) => (
//                   <li key={pIdx} className="d-flex align-items-start mb-2">
//                     <i className="bi bi-check-circle-fill me-2 mt-1" style={{ color: '#8e24aa', fontSize: '0.9rem' }}></i>
//                     <span className="text-muted">{point}</span>
//                   </li>
//                 ))}
              
//               </ul>
//             </div>

//             {/* Button */}
//             <div className="card-footer bg-transparent border-0 py-3 px-4">
//               <button className="btn w-100" style={{
//                 background: '#1e3c72',
//                 color: '#fff',
//                 fontWeight: '500',
//                 borderRadius: '30px'
//               }}>
//                 <i className="bi bi-info-circle me-2"></i>View Full Policy
//               </button>
//             </div>
//           </div>
//         </motion.div>
//       ))}
//     </div>
//   </div>
// );

// export default RulesSection;
'use client';

import React from 'react';
import { motion } from 'framer-motion';
import 'bootstrap-icons/font/bootstrap-icons.css';

const rulesData = [
  {
    title: 'Rules for Fees',
    icon: 'bi-cash-stack',
    points: [
      'School fees is charged for complete academic year.',
      'If fees are not paid regularly, the child is liable to have his/her name struck off the roll.',
      'The Principal reserves the rights to refuse any application for admission without having to assign reasons.',
      'Notice of withdrawal should be given by March 30th.',
      'Fees is due as long as notice of withdrawal is not given.',
      'No leaving certificate will be issued till all fees are cleared.',
      'Fee should be paid till 10th of every month.',
      'Late Charges of Rs 50/- for the first day, and thereafter Rs.5 per day.'
    ]
  },
  {
    title: 'Rules for Bus',
    icon: 'bi-bus-front',
    points: [
      'The school provides bus service to the students.',
      'Board and alight only at fixed bus stops.',
      'Parents must not request drivers to stop at unauthorized stops.',
      'No change in bus stop without prior permission.',
      'Be courteous to bus-in-charge. Misbehavior will disqualify usage.',
      'If child is not at the stop, bus will move. Parents must bring child to school.',
      'Bus is an add-on facility. Efforts will be made to provide timely service.'
    ]
  },
  {
    title: 'Rules for Absenteeism',
    icon: 'bi-calendar-x',
    points: [
      'Leave should be noted in the calendar record page.',
      'Post-absence, reason must be certified by parent.',
      'No entry without Principal\'s signature if absent/late.',
      'Illness over a week should be informed to the Principal.',
      'Contagious disease requires medical certificate for return.',
      'Extended leaves like vacations/marriages not encouraged.',
      'Early leave only with Principal\'s permission.'
    ]
  },
  {
    title: 'Rules for Attendance',
    icon: 'bi-clipboard-check',
    points: [
      '95% attendance is mandatory for promotion.',
      'Late arrivals post class start will be sent home.',
      'No parcels or boxes will be accepted post gate closure.'
    ]
  },
  {
    title: 'Rules for Recess',
    icon: 'bi-person-video3',
    points: [
      'Food and drinks should only be consumed during recess.',
      'While eating the food, students should display good table manners and not throw left over food on the table or floor.',
      'Empty bottles and other litter must be cleared from the table and put into the rubbish bins. 5 minutes prior to the end of recess. Students should start moving to their classroom.',
      'Kindly ensure that you have sent a tiffin with your child only in the morning and after that no tiffin will be allowed to be delivered to the child later for health security reasons.'
    ]
  },
  {
    title: 'Leaving School Premises During School Hours',
    icon: 'bi-journal-bookmark',
    points: [
      'A student wishing to leave during school hours due to illness or for any other valid reason must complete the Early Departure for pupils form in the office. The form will be signed by the Principal and dear teacher',
      'The student will be allowed to leave school on parent pick-up only under dire circumstances'
    ]
  },
  {
    title: 'Refund Policy',
    icon: 'bi-arrow-left-right',
    points: [
      '1-month withdrawal notice required.',
      'Child must attend and pay full fees during notice period.',
      'Parents are responsible for timely fee payment.',
      'Courtesy reminders are not excuses for late payments.'
    ]
  }
];

const RulesSection = () => (
  <div className="container py-5" style={{ fontFamily: 'Georgia, serif' }}>
    <motion.div
      className="text-center mb-5"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <h2 className="mb-4 fw-bold border-bottom pb-2 d-inline-block" style={{ color: '#1e3c72' }}>
        School Rules & Policies
      </h2>
      <p className="text-muted fs-5" style={{ maxWidth: '720px', margin: '0 auto' }}>
        Our school policies ensure a safe, organized, and respectful environment for every student&apos;s growth and development.
      </p>
    </motion.div>

    <div className="row g-4">
      {rulesData.map((section, idx) => (
        <motion.div
          className="col-lg-4 col-md-6"
          key={idx}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: idx * 0.1, duration: 0.5 }}
        >
          <div className="card h-100 shadow-lg border-0 rounded-4 overflow-hidden bg-white">
            <div className="position-relative" style={{ height: '180px' }}>
              <div className="position-absolute top-0 start-0 w-100 h-100 d-flex align-items-center justify-content-center">
                <div className="bg-white bg-opacity-75 rounded-circle p-3 shadow-lg">
                  <i className={`bi ${section.icon} fs-2`} style={{ color: '#8e24aa' }}></i>
                </div>
              </div>
            </div>

            <div className="card-body p-4">
              <h3 className="h5 fw-bold mb-3" style={{ color: '#4a148c' }}>
                {section.title}
              </h3>
              <ul className="list-unstyled mb-0">
                {section.points.slice(0, 4).map((point, pIdx) => (
                  <li key={pIdx} className="d-flex align-items-start mb-2">
                    <i className="bi bi-check-circle-fill me-2 mt-1" style={{ color: '#8e24aa', fontSize: '0.9rem' }}></i>
                    <span className="text-muted">{point}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="card-footer bg-transparent border-0 py-3 px-4">
              <button className="btn w-100" style={{
                background: '#1e3c72',
                color: '#fff',
                fontWeight: '500',
                borderRadius: '30px'
              }}>
                <i className="bi bi-info-circle me-2"></i>View Full Policy
              </button>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  </div>
);

export default RulesSection;
