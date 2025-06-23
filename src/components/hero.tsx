// import Link from 'next/link';
// import Image from 'next/image';

// const HeroSection = () => {
//   return (
//     <>
//       {/* Hero Section */}
//       <section
//         className="hero"
//         id="section_1"
//         style={{ position: 'relative', overflow: 'hidden', minHeight: '100vh' }}
//       >
//         {/* Background Image */}
//         <div
//           className="image-wrap"
//           style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: 1 }}
//         >
//           <Image
//             src="/banner.JPG" // Make sure this file is in your public folder
//             alt="Hero Background"
//             layout="fill"
//             objectFit="cover"
//             quality={100}
//             priority
//           />
//         </div>

//         {/* Dark Overlay */}
//         <div
//           className="overlay"
//           style={{
//             position: 'absolute',
//             top: 0,
//             left: 0,
//             width: '100%',
//             height: '100%',
//             backgroundColor: 'rgba(0, 0, 0, 0.5)', // Adjust opacity here
//             zIndex: 2,
//           }}
//         />

//         {/* Text Content */}
//         <div className="container position-relative" style={{ zIndex: 3 }}>
//           <div className="row">
//             <div className="col-lg-5 col-12 m-auto" style={{marginTop:'100px'}}>
//               <div className="hero-text text-center text-lg-start">
//                 <h1 className="mb-4" style={{ fontFamily: 'Georgia, serif', color: 'white' }}>
//                   Apex International School
//                 </h1>

//                 <p className="hero-description text-white" style={{ fontFamily: 'Georgia, serif' }}>
//                   Welcome to Apex International School, where we inspire future leaders through academic excellence,
//                   innovation, and personal growth. Our dedicated educators foster a nurturing environment that encourages
//                   every student potential to shine.
//                 </p>

//                 <Link href="#section_2" passHref>
//                   <div className="custom-link bi-arrow-down arrow-icon mt-3"></div>
//                 </Link>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>
//     </>
//   );
// };

// export default HeroSection;
import Link from 'next/link';
import Image from 'next/image';

const HeroSection = () => {
  return (
    <section
      className="hero"
      id="section_1"
      style={{
        position: 'relative',
        overflow: 'hidden',
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
      }}
    >
      {/* Background Image */}
      <div
        className="image-wrap"
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          zIndex: 1,
        }}
      >
        <Image
          src="/banner.JPG"
          alt="Hero Background"
          layout="fill"
          objectFit="cover"
          quality={100}
          priority
        />
      </div>

      {/* Dark Overlay */}
      <div
        className="overlay"
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          backgroundColor: 'rgba(0, 0, 0, 0.55)',
          zIndex: 2,
          
        }}
      />

      {/* Text Content */}
      <div className="container position-relative" style={{ zIndex: 3 }}>
        <div className="row justify-content-center">
          <div className="col-lg-8 text-center">
            <h1 className="mb-4" style={{ fontFamily: 'Georgia, serif', color: 'white', fontSize: '2.5rem' }}>
              Apex International School
            </h1>
            <p
              className="text-white"
              style={{
                fontFamily: 'Georgia, serif',
                fontSize: '1.125rem',
                maxWidth: '700px',
                margin: '0 auto',
              }}
            >
              Welcome to Apex International School, where we inspire future leaders through academic excellence,
              innovation, and personal growth. Our dedicated educators foster a nurturing environment that encourages
              every student's potential to shine.
            </p>
            <Link href="#section_2" passHref>
              <div className="custom-link bi-arrow-down arrow-icon mt-5" style={{ fontSize: '2rem', color: 'blue' }} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
