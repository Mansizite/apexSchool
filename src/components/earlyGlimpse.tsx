
'use client';

import Image from "next/image";


export default function EarlyGlimpsesPage() {




  return (
    <section className="about section-padding mt-5" id="section_2">
      <div className="container">
        <div className="row">
          <div className="col-lg-10 col-12">
            <h2 className="mb-4">
              Early <u className="text-info">Glimpses</u>
            </h2>
          </div>

          <div className="col-lg-6 col-12">
           
            <p>
              To provide quality and comprehensive educational opportunities for all students 
              in a safe and caring environment to enable students to achieve individual excellence, 
              become productive citizens, and be successful in their future endeavors.
            </p>
            <p>
              With this purpose, management organized the school opening ceremony on 14 June 2022. 
              Before this, the school was running via an online platform for a month. Within a year, 
              Apex gained a significant number of students who made us proud in different aspects 
              of education and life.
            </p>

            
          </div>

          <div className="col-lg-6 col-12 mt-5 mt-lg-0">
            <div className="position-relative">
              <Image
                width={600}
                height={400}
                src="https://theapexschool.in/Website/assets/img/blog-1.jpg"
                alt="Apex School Inauguration"
                className="img-fluid rounded shadow-lg"
              />
              <div className="image-overlay bg-dark opacity-25 rounded"></div>
              <small className="image-caption position-absolute bottom-0 start-0 text-light p-3">
                Inauguration Day - June 14, 2022
              </small>
            </div>

           
          </div>
        </div>

       

        
         
        </div>
      
    </section>
  );
}