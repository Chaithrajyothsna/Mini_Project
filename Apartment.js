import React, { useState, useEffect } from "react";
import { Container, Row, Col, Card, Button, Image, Carousel } from "react-bootstrap";
import { FaBed, FaBath, FaCouch } from "react-icons/fa";
import { useLocation, useNavigate } from "react-router-dom";

const Apartment = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const property = location.state; 
  const images = [
    "/images/drop4.png",
    "/images/a1.png",
    "/images/a2.jpg",
    "/images/a4.png",
    "/images/a5.png",
    "/images/a3.png"
  ];

  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  useEffect(() => {
    if (!paused) {
      const interval = setInterval(() => {
        setIndex((prevIndex) => (prevIndex + 1) % images.length);
      }, 6000); // 6 seconds per slide
      return () => clearInterval(interval);
    }
  }, [paused]);

  const handleKeyDown = (event) => {
    if (event.key === "ArrowRight") {
      setIndex((prevIndex) => (prevIndex + 1) % images.length);
    } else if (event.key === "ArrowLeft") {
      setIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
    }
  };

  // 🔹 Add the navigation functions here
  const handleEMIClick = () => {
    navigate("/emicalculator");
  };

  const handleBookVisitClick = () => {
    navigate("/visitform");
  };

  const handleGetCallClick = () => {
    navigate("/calldetails");
  };

  return (
    <Container className="my-4" onKeyDown={handleKeyDown} tabIndex={0}>
      <Row>
        <Col md={8}>
          <h4 className="fw-bold">₹45L</h4>
          <p>EMI - ₹25,000 | Home Loan Available</p>
          <p>1586 Sq-ft 2 BHK Apartment For Rent in Kukatpally, Hyderabad</p>
          
          {/* Slideshow for Images */}
          <Carousel activeIndex={index} onSelect={handleSelect} onMouseEnter={() => setPaused(true)} onMouseLeave={() => setPaused(false)}>
            {images.map((img, idx) => (
              <Carousel.Item key={idx}>
                <Image src={img} fluid style={{ width: "80%", height: "350px", objectFit: "cover" }} />
              </Carousel.Item>
            ))}
          </Carousel>
        </Col>
        
        <Col md={4} className="d-flex align-items-center">
          <Card className="text-center p-3" style={{ backgroundColor: "#d3d3d3", width: "100%" }}>
            <p><FaBed /> <strong>2 Beds</strong></p>
            <p><FaBath /> <strong>2 Baths</strong></p>
            <p><FaCouch /> <strong>Furnished</strong></p>
          </Card>
        </Col>
      </Row>
      
      <Row className="mt-4 p-3 rounded" style={{ backgroundColor: "#d1ecf1" }}>
        <Col md={4}><p><strong>Super Built-up Area</strong></p><p>1586 sqft</p><p>₹7,994/sqft</p></Col>
        <Col md={4}><p><strong>Floor</strong></p><p>6 (Out of 8 Floors)</p></Col>
        <Col md={4}><p><strong>Transaction type</strong></p><p>Resale</p></Col>
        <Col md={4}><p><strong>Status</strong></p><p>Ready to Move</p></Col>
        <Col md={4}><p><strong>Furnished Status</strong></p><p>Furnished</p></Col>
      </Row>
      
      {/* Buttons Section */}
      <Row className="mt-4 text-center">
        <Col><Button variant="danger" className="px-4" onClick={handleBookVisitClick}>Book A Visit</Button></Col>
        <Col><Button variant="danger" className="px-4" onClick={handleEMIClick}>EMI</Button></Col>
        <Col><Button variant="danger" className="px-4" onClick={handleGetCallClick}>Get A Call</Button></Col>
      </Row>
    </Container>
  );
};

export default Apartment;

