'use client';

import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import Image from 'next/image';

const SchoolGallery = () => {
  const galleryItems = [
    {
      id: 1,
      title: 'Science Lab',
      description: 'Students conducting experiments in our state-of-the-art laboratory',
      category: 'Academics',
    },
    {
      id: 2,
      title: 'Art Exhibition',
      description: 'Annual student art showcase featuring creative works',
      category: 'Arts',
    },
    {
      id: 3,
      title: 'Sports Day',
      description: 'Annual inter-house sports competition',
      category: 'Sports',
    },
    {
      id: 4,
      title: 'Robotics Club',
      description: 'Students participating in robotics club activities',
      category: 'STEM',
    },
    {
      id: 5,
      title: 'Library',
      description: 'Students researching in our newly renovated library',
      category: 'Resources',
    },
    {
      id: 6,
      title: 'Music Class',
      description: 'Student orchestra practicing for the spring concert',
      category: 'Arts',
    },
    {
      id: 7,
      title: 'Graduation',
      description: 'Class of 2023 commencement ceremony',
      category: 'Events',
    },
    {
      id: 8,
      title: 'Computer Lab',
      description: 'Students learning coding and digital skills',
      category: 'Technology',
    },
  ];

  return (
    <div>
      {/* Hero Section with Featured Photo */}
      <section className="position-relative" style={{ height: '70vh' }}>
        {/* Background Image */}
        <Image
          src="public/early-glimpse-image.jpg"
          alt="School Campus"
          fill
          style={{ objectFit: 'cover' }}
          className="opacity-90"
        />

        {/* Dark Overlay */}
        <div className="position-absolute top-0 start-0 w-100 h-100 bg-dark opacity-50"></div>

        {/* Hero Content */}
        <Container className="position-relative h-100 d-flex align-items-center">
          <Row className="justify-content-center">
            <Col md={8} className="text-center text-white">
              <h1 className="display-3 fw-bold mb-4">Welcome to Our Gallery</h1>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Gallery Section */}
      <section className="py-5 bg-light">
        <Container>
          {/* Gallery Header */}
          <div className="text-center mb-5">
            <h2 className="display-5 fw-bold" style={{ color: '#1e3c72' }}>
              Explore Our Campus
            </h2>
            <p className="lead text-muted">
              Discover our vibrant learning community through these highlights
            </p>
            <div className="border-bottom" style={{ borderColor: '#1e3c72', width: '25%', margin: '1rem auto' }}></div>
          </div>

          {/* Gallery Grid */}
          <Row xs={1} md={2} lg={4} className="g-4">
            {galleryItems.map((item) => (
              <Col key={item.id}>
                <Card className="h-100 shadow-sm border-0">
                  <div className="bg-secondary position-relative" style={{ height: '200px' }}>
                    <Image
                      src={`/school-${item.id}.jpg`}
                      alt={item.title}
                      fill
                      style={{ objectFit: 'cover' }}
                    />
                  </div>

                  <Card.Body className="d-flex flex-column" style={{ color: '#1e3c72' }}>
                    <Card.Title className="fs-5" style={{ color: '#1e3c72' }}>
                      {item.title}
                    </Card.Title>
                    <Card.Subtitle className="mb-2">
                      <span className="badge bg-primary">{item.category}</span>
                    </Card.Subtitle>
                    <Card.Text className="flex-grow-1 text-muted small">
                      {item.description}
                    </Card.Text>
                    <Button
                      variant="outline-primary"
                      className="mt-auto"
                      style={{
                        color: '#1e3c72',
                        borderColor: '#1e3c72',
                      }}
                    >
                      Learn More <i className="bi bi-arrow-right ms-2"></i>
                    </Button>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>

          {/* CTA */}
          <div className="text-center mt-5">
            <Button
              variant="primary"
              size="lg"
              style={{ backgroundColor: '#1e3c72', borderColor: '#1e3c72' }}
            >
              View Full Gallery <i className="bi bi-images ms-2"></i>
            </Button>
          </div>
        </Container>
      </section>
    </div>
  );
};

export default SchoolGallery;
