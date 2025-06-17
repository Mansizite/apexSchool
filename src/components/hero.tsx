// import React from 'react'
// import Image from 'next/image'
// const hero = () => {
//   return (
//     <div>
//        <section className="hero" id="section_1">
//         <div className="container">
//           <div className="row">
//             <div className="col-lg-5 col-12 m-auto">
//               <div className="hero-text">
//                 <h1 className="text-white mb-4"><u className="text-info">Welcome to <br /></u>Apex International School</h1>
//                 <a href="#section_2" className="custom-link bi-arrow-down arrow-icon"></a>
//               </div>
//             </div>
//           </div>
//         </div>

//         <div className="relative w-full h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px]">
//     <Image
//         unoptimized
//         src="https://apexpreschool.in/assets/img/ApexBuilding.jpg"
//         alt="Apex Building"
//         fill
//         className="object-cover"
//     />
// </div>

//       </section>
//     </div>
//   )
// }

// export default hero




import Link from 'next/link';


const HeroSection = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="hero" id="section_1">
  <div className="container">
    <div className="row">
      <div className="col-lg-5 col-12 m-auto">
        <div className="hero-text">
          <h1 className=" mb-4"  style={{fontFamily:'Georgia, serif',color:'#ef8a21'}}>
            Apex  International  School
          </h1>

          <p className="hero-description text-white" style={{fontFamily:'Georgia, serif'}}>
            Welcome to Apex International School, where we inspire future leaders through academic excellence, innovation, and personal growth. Our dedicated educators foster a nurturing environment that encourages every student potential to shine.
          </p>

          {/* <div className="d-flex justify-content-center align-items-center">
            
            <span className="location-text">Orchid Phase II Charholi BK 412105</span>
          </div> */}

          <Link href="#section_2" passHref>
            <div className="custom-link bi-arrow-down arrow-icon"></div>
          </Link>
        </div>
      </div>
    </div>
  </div>

  <div className="video-wrap">
    <video autoPlay loop muted className="custom-video" poster="">
      <source src="/videos/bgvideo.mp4" type="video/mp4" />
      Your browser does not support the video tag.
    </video>
  </div>
</section>

      
    </>
  );
};

export default HeroSection;
