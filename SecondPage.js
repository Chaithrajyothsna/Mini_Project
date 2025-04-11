import React, { useState, useEffect } from "react";
import { Container, Row, Col, Card, Button, Image, Carousel } from "react-bootstrap";
import { FaBed, FaBath, FaCouch } from "react-icons/fa";
import { useLocation, useNavigate } from "react-router-dom";

const SecondPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const property = location.state; 
  const images = [
    "/images/1stImageHouse.png",
    "/images/Kitchen2ndPage.jpg",
    "/images/2ndImage2ndPage.jpg",
    "/images/3rdImage2ndPage.jpg",
    "/images/4thImage2ndPage.jpg"
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
          <h4 className="fw-bold">₹55L</h4>
          <p>EMI - ₹25,000 | Home Loan Available</p>
          <p>1586 Sq-ft 2 BHK Flat For Sale in Banjara Hills, Hyderabad</p>
          
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
        <Col md={4}><p><strong>Floor</strong></p><p>2 (Out of 3 Floors)</p></Col>
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

export default SecondPage;


// import React, { useState, useEffect } from "react";
// import { Container, Row, Col, Card, Button, Image, Carousel } from "react-bootstrap";
// import { FaBed, FaBath, FaCouch } from "react-icons/fa";
// import { useLocation, useNavigate } from "react-router-dom";

// const SecondPage = () => {
//   const location = useLocation();
//   const navigate = useNavigate();
//   const property = location.state;

//   const [index, setIndex] = useState(0);
//   const [paused, setPaused] = useState(false);

//   const handleSelect = (selectedIndex) => {
//     setIndex(selectedIndex);
//   };

//   const propertyImages = {
//     "2 BHK FLAT": [
//       "/images/1stImageHouse.png",
//       "/images/Kitchen2ndPage.jpg",
//       "/images/2ndImage2ndPage.jpg",
//       "/images/3rdImage2ndPage.jpg",
//       "/images/4thImage2ndPage.jpg"
//     ],
//     "LAND": [
//       "/images/2ndImage1stPage.png",
//       "/images/land1.jpg",
//       "/images/land2.jpg",
//     ],
//     "6 BHK VILLA": [
//       "/images/3rdImage1stPage.png",
//     "/images/vliving.jpg",
//     "/images/villaKitchen.jpg",
//     "/images/villaDining.jpg",
//     "/images/vbed1.jpg",
//     "/images/vbed2.jpg",
//     "/images/vwash.jpg"
//     ],
//     "3 BHK APARTMENT": [
//       "/images/drop4.png",
//       "/images/a1.png",
//       "/images/a2.jpg",
//       "/images/a3.png",
//       "/images/a4.png"
//     ],
//     "3 BHK HOUSE": [
//       "/images/drop3.png",
//       "/images/house1.jpg",
//       "/images/house2.jpg",
//       "/images/house3.jpg"
//     ],
//     "3 BHK VILLA": [
//       "/images/drop12.png",
//       "/images/3rdImage1stPage.png",
//     "/images/vliving.jpg",
//     "/images/villaKitchen.jpg",
//     "/images/villaDining.jpg",
//     "/images/vbed1.jpg",
//     ]
//   };

//   const images = propertyImages[property?.title] || [];

//   useEffect(() => {
//     if (!property) {
//       navigate('/');
//       return;
//     }

//     if (!paused) {
//       const interval = setInterval(() => {
//         setIndex((prevIndex) => (prevIndex + 1) % images.length);
//       }, 6000);
//       return () => clearInterval(interval);
//     }
//   }, [paused, images.length, property, navigate]);

//   if (!property) return null;

//   return (
//     <Container fluid style={{ backgroundColor: '#fff', padding: '20px 0' }}>
//       <Container>
//         {/* Header Section */}
//         <Row>
//           <Col md={12}>
//             <h2 className="fw-bold" style={{ fontSize: '2rem', marginBottom: '10px' }}>
//               {property.price}
//             </h2>
//             <p style={{ color: '#666', marginBottom: '5px' }}>
//               EMI - ₹50,000 | Home Loan Available
//             </p>
//             <p style={{ fontSize: '1.1rem', marginBottom: '20px' }}>
//               {property.size} {property.title} For Sale in {property.location}
//             </p>
//           </Col>
//         </Row>

//         <Row>
//           {/* Main Image Section */}
//           <Col md={8}>
//             {/* Main Image */}
//             <div style={{ marginBottom: '20px' }}>
//               <Image 
//                 src={images[index]}
//                 style={{ 
//                   width: '100%', 
//                   height: '450px', 
//                   objectFit: 'cover',
//                   borderRadius: '8px'
//                 }}
//               />
//             </div>

//             {/* Thumbnail Images */}
//             <div style={{ 
//               display: 'flex', 
//               gap: '10px',
//               marginBottom: '30px',
//               overflowX: 'auto',
//               padding: '10px 0'
//             }}>
//               {images.map((img, idx) => (
//                 <Image 
//                   key={idx}
//                   src={img}
//                   style={{
//                     width: '100px',
//                     height: '70px',
//                     objectFit: 'cover',
//                     cursor: 'pointer',
//                     border: idx === index ? '2px solid #dc3545' : '1px solid #dee2e6',
//                     borderRadius: '4px',
//                     opacity: idx === index ? 1 : 0.7,
//                     transition: 'all 0.2s ease'
//                   }}
//                   onClick={() => setIndex(idx)}
//                 />
//               ))}
//             </div>
//           </Col>

//           {/* Property Features Card */}
//           <Col md={4}>
//             <Card style={{ 
//               backgroundColor: '#f8f9fa', 
//               border: 'none', 
//               borderRadius: '8px',
//               boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
//             }}>
//               <Card.Body>
//                 <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
//                   <div className="d-flex align-items-center">
//                     <FaBed size={24} style={{ marginRight: '15px', color: '#666' }} />
//                     <span style={{ fontSize: '1.1rem' }}>{property.title.split(" ")[0]} Beds</span>
//                   </div>
//                   <div className="d-flex align-items-center">
//                     <FaBath size={24} style={{ marginRight: '15px', color: '#666' }} />
//                     <span style={{ fontSize: '1.1rem' }}>{property.title.split(" ")[0]} Baths</span>
//                   </div>
//                   <div className="d-flex align-items-center">
//                     <FaCouch size={24} style={{ marginRight: '15px', color: '#666' }} />
//                     <span style={{ fontSize: '1.1rem' }}>Furnished</span>
//                   </div>
//                 </div>
//               </Card.Body>
//             </Card>
//           </Col>
//         </Row>

//         {/* Property Details */}
//         <Row className="mt-4">
//           <Col md={12}>
//             <div style={{ 
//               backgroundColor: '#e3f2fd', 
//               borderRadius: '8px', 
//               padding: '20px',
//               marginBottom: '30px'
//             }}>
//               <Row>
//                 <Col md={4}>
//                   <p className="mb-1"><strong>Super Built-up Area</strong></p>
//                   <p className="mb-1">{property.size}</p>
//                   <p className="mb-0">
//                     ₹{(parseFloat(property.price.replace('₹', '').replace(' Cr', '')) * 10000000 / parseFloat(property.size)).toFixed(2)}/sqft
//                   </p>
//                 </Col>
//                 <Col md={4}>
//                   <p className="mb-1"><strong>Floor</strong></p>
//                   <p className="mb-0">2 (Out of 3 Floors)</p>
//                 </Col>
//                 <Col md={4}>
//                   <p className="mb-1"><strong>Transaction type</strong></p>
//                   <p className="mb-0">Resale</p>
//                 </Col>
//               </Row>
//               <Row className="mt-4">
//                 <Col md={4}>
//                   <p className="mb-1"><strong>Status</strong></p>
//                   <p className="mb-0">Ready to Move</p>
//                 </Col>
//                 <Col md={4}>
//                   <p className="mb-1"><strong>Furnished Status</strong></p>
//                   <p className="mb-0">Furnished</p>
//                 </Col>
//               </Row>
//             </div>
//           </Col>
//         </Row>

//         {/* Action Buttons */}
//         <Row>
//           <Col className="d-flex justify-content-center" style={{ gap: '80px' }}>
//             <Button 
//               variant="danger" 
//               style={{
//                 padding: '12px 30px',
//                 fontSize: '1.1rem',
//                 minWidth: '160px',
//                 boxShadow: '0 2px 4px rgba(220,53,69,0.2)'
//               }}
//               onClick={() => navigate("/visitform")}
//             >
//               Book A Visit
//             </Button>
//             <Button 
//               variant="danger"
//               style={{
//                 padding: '12px 30px',
//                 fontSize: '1.1rem',
//                 minWidth: '160px',
//                 boxShadow: '0 2px 4px rgba(220,53,69,0.2)'
//               }}
//               onClick={() => navigate("/emicalculator")}
//             >
//               EMI
//             </Button>
//             <Button 
//               variant="danger"
//               style={{
//                 padding: '12px 30px',
//                 fontSize: '1.1rem',
//                 minWidth: '160px',
//                 boxShadow: '0 2px 4px rgba(220,53,69,0.2)'
//               }}
//               onClick={() => navigate("/calldetails")}
//             >
//               Get A Call
//             </Button>
//           </Col>
//         </Row>
//       </Container>
//     </Container>
//   );
// };

// export default SecondPage;