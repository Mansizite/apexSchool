'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { Modal } from 'react-bootstrap';

const galleryData = [
  {
    folder: 'dindiCelebration',
    images: [
      'IMG-20250619-WA0040.jpg',
      'IMG-20250619-WA0047.jpg',
      'IMG-20250619-WA0048.jpg',
      'IMG-20250619-WA0049.jpg',
      'IMG-20250619-WA0050.jpg',
      'IMG-20250619-WA0051.jpg',
    ],
  },
  {
    folder: 'colorday',
    images: [
      'IMG-20250619-WA0022.jpg',
      'IMG-20250619-WA0021.jpg',
      'IMG-20250619-WA0036.jpg',
      'IMG-20250619-WA0041.jpg',
      'IMG-20250619-WA0042.jpg',
      'IMG-20250619-WA0045.jpg',
      'IMG-20250619-WA0054.jpg',
      'IMG-20250619-WA0055.jpg',
    ],
  },
  {
    folder: 'roleplay',
    images: [
      'IMG-20250619-WA0008.jpg',
      'IMG-20250619-WA0009.jpg',
      'IMG-20250619-WA0010.jpg',
      'IMG-20250619-WA0011.jpg',
      'IMG-20250619-WA0012.jpg',
      'IMG-20250619-WA0020.jpg',
      'IMG-20250619-WA0024.jpg',
    ],
  },
  {
    folder: 'annualday',
    images: [
      'PKS_2233.JPG',
      'PKS_2214.JPG',
      'PKS_2219.JPG',
      'PKS_2369.JPG',
      'PKS_2592.JPG',
      'PKS_2214 .JPG',
     
    ],
  },
];

const GalleryPage = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <div className="gallery-wrapper py-5" style={{ background: '#f2f4f8' }}>
      {/* Heading */}
      <motion.div
        className="text-center mb-5"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="mb-4 fw-bold border-bottom pb-2 d-inline-block" style={{color:'#1e3c72',   fontFamily: 'Georgia, serif',}} >
              School Gallery
            </h2>

      </motion.div>

      {/* Image Grid */}
      <motion.div
        className="container"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        <div className="row g-4">
          {galleryData.flatMap((group) =>
            group.images.map((image, idx) => (
              <div className="col-6 col-md-4 col-lg-3" key={`${group.folder}-${idx}`}>
                <motion.div
                  whileHover={{ scale: 1.05, boxShadow: '0 12px 24px rgba(0,0,0,0.12)' }}
                  className="gallery-card position-relative overflow-hidden rounded-4 shadow-sm"
                  onClick={() => setSelectedImage(`/images/${group.folder}/${image}`)}
                  style={{
                    paddingTop: '100%',
                    cursor: 'zoom-in',
                    backgroundColor: '#ffffff',
                    transition: 'all 0.4s ease',
                  }}
                >
                  <Image
                    src={`/images/${group.folder}/${image}`}
                    alt="Gallery"
                    fill
                    className="object-cover"
                  />
                </motion.div>
              </div>
            ))
          )}
        </div>
      </motion.div>

      {/* Modal */}
      <AnimatePresence>
        {selectedImage && (
          <Modal
            show={!!selectedImage}
            onHide={() => setSelectedImage(null)}
            centered
            size="xl"
            className="gallery-modal"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3 }}
            >
              <Modal.Body className="p-0 border-0">
                <div
                  className="position-relative rounded-3 overflow-hidden"
                  style={{ paddingTop: '65%', backgroundColor: '#f2f2f2' }}
                >
                  <Image
                    src={selectedImage}
                    alt="Enlarged"
                    fill
                    className="object-contain"
                    style={{ borderRadius: '8px' }}
                  />
                </div>
              </Modal.Body>
            </motion.div>
          </Modal>
        )}
      </AnimatePresence>

      <style jsx global>{`
        .gallery-wrapper {
          font-family: 'Segoe UI', sans-serif;
        }

        .text-gradient {
          background: linear-gradient(to right, #6a11cb, #2575fc);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .gallery-card {
          border-radius: 16px;
          overflow: hidden;
          transition: box-shadow 0.3s ease, transform 0.3s ease;
        }

        .gallery-modal .modal-content {
          background-color: rgba(255, 255, 255, 0.9);
          backdrop-filter: blur(10px);
          border-radius: 20px;
          border: none;
        }

        .gallery-modal .modal-body {
          padding: 0;
        }

        @media (max-width: 768px) {
          .text-gradient {
            font-size: 2rem;
          }
        }
      `}</style>
    </div>
  );
};

export default GalleryPage;
