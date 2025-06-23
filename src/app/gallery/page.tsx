
'use client';

import React, { useState } from 'react';
import { Container, Row, Col, Card, Button, Modal } from 'react-bootstrap';
import Image from 'next/image';
import { Carousel } from 'react-bootstrap';

// Define the type for a gallery item
interface GalleryItem {
  id: number;
  title: string;
  description: string;
  category: string;
  folder: string;
  images: string[];
}

const heroImages = [
  { src: '/images/annualday/PKS_2233.JPG', caption: 'Annual Day Celebrations' },
  { src: '/images/annualday/PKS_2219.JPG', caption: 'Honoring Talent and Dedication' },
  { src: '/images/annualday/PKS_2369.JPG', caption: 'Capturing Memories on Stage' },
  { src: '/images/roleplay/IMG-20250619-WA0024.jpg', caption: 'Students in Action' },
  { src: '/images/dindiCelebration/IMG-20250619-WA0051.jpg', caption: 'Welcome to Our Gallery' },
];

const galleryItems: GalleryItem[] = [
  {
    id: 1,
    title: 'Dindi Celebration',
    description: 'Celebrating traditions with joy and unity',
    category: 'Cultural',
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
    id: 3,
    title: 'Color Day Celebration',
    description: 'A day filled with vibrant colors and cheerful activities',
    category: 'Events',
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
    id: 4,
    title: 'Role Play Competition',
    description: 'Students showcasing talent through creative enactments',
    category: 'Co-curricular',
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
    id: 6,
    title: 'Annual Day',
    description: 'A grand celebration of achievements and performances',
    category: 'Annual Event',
    folder: 'annualday',
    images: [
      'PKS_2233.JPG',
      'PKS_2214.JPG',
      'PKS_2219.JPG',
      
      'PKS_2369.JPG',
      'PKS_2592.JPG'
    ],
  },
    {
    id: 5,
    title: 'Sports Day',
    description: 'Students showing energy, strength and sportsmanship',
    category: 'Sports',
    folder: 'sportsday',
    images: [
      'sports1.jpg',
      'sports2.jpg',
      'sports3.jpg',
      'sports4.jpg',
    ],
  },
];

const SchoolGallery = () => {
  const [showModal, setShowModal] = useState(false);
  const [selectedItem, setSelectedItem] = useState<GalleryItem | null>(null);

  const handleOpenModal = (item: GalleryItem) => {
    setSelectedItem(item);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setSelectedItem(null);
    setShowModal(false);
  };

  return (
    <div>
      {/* Hero Carousel Section */}
    

      {/* Gallery Section */}
      <section className="py-5 bg-light">
        <Container>
          <div className="text-center mb-5">
            <h2 className="display-5 fw-bold" style={{ color: '#1e3c72' }}>
              Explore Our Campus
            </h2>
            <p className="lead text-muted">
              Discover our vibrant learning community through these highlights
            </p>
            <div
              className="border-bottom"
              style={{ borderColor: '#1e3c72', width: '25%', margin: '1rem auto' }}
            />
          </div>

          <Row xs={1} md={2} lg={4} className="g-4">
            {galleryItems.map((item) => (
              <Col key={item.id}>
                <Card className="h-100 shadow-sm border-0">
                  <div className="bg-secondary position-relative" style={{ height: '200px' }}>
                    <Image
                      src={`/images/${item.folder}/${item.images[0]}`}
                      alt={item.title}
                      fill
                      style={{ objectFit: 'cover' }}
                    />
                  </div>

                  <Card.Body className="d-flex flex-column" style={{ color: '#1e3c72' }}>
                    <Card.Title className="fs-5">{item.title}</Card.Title>
                    <Card.Subtitle className="mb-2">
                      <span className="badge bg-primary">{item.category}</span>
                    </Card.Subtitle>
                    <Card.Text className="flex-grow-1 text-muted small">{item.description}</Card.Text>
                    <Button
                      variant="outline-primary"
                      className="mt-auto"
                      style={{ color: '#1e3c72', borderColor: '#1e3c72' }}
                      onClick={() => handleOpenModal(item)}
                    >
                      View Images <i className="bi bi-images ms-2"></i>
                    </Button>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* Modal with All Images in Grid */}
      <Modal show={showModal} onHide={handleCloseModal} size="xl" centered>
        <Modal.Header closeButton>
          <Modal.Title>{selectedItem?.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p className="text-muted">{selectedItem?.description}</p>
          <Row xs={2} md={3} lg={4} className="g-3">
            {selectedItem?.images.map((img, index) => (
              <Col key={index}>
                <div className="position-relative" style={{ height: '200px' }}>
                  <Image
                    src={`/images/${selectedItem.folder}/${img}`}
                    alt={`${selectedItem.title} ${index + 1}`}
                    fill
                    style={{ objectFit: 'cover', borderRadius: '8px' }}
                  />
                </div>
              </Col>
            ))}
          </Row>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default SchoolGallery;
