// import React from "react";
// import { Container, Row, Col, Card, Button } from "react-bootstrap";
// import { useLocation, useNavigate } from "react-router-dom";

// const Services = () => {
//   const location = useLocation();
//   const navigate = useNavigate();
//   const serviceType = location.hash.substring(1); // Extract service type from URL hash

//   const handleContactClick = (agentName) => {
//     navigate(`/contact?agent=${encodeURIComponent(agentName)}`);
//   };

//   // Navigate to appropriate property page
//   const handleViewMoreClick = (propertyType) => {
//     if (propertyType === "Land") {
//       navigate("/Lands");
//     } else if (propertyType === "Villa") {
//       navigate("/Villa");
//     } else if (propertyType === "Apartment") {
//       navigate("/Apartment");
//     } else if (propertyType === "House" || propertyType === "Flat") {
//       navigate("/SecondPage");
//     }
//   };

//   const handlePropertyListingRedirect = () => {
//     navigate("/propertylisting");
//   };

//   return (
//     <Container className="my-4">
//       <h2 className="text-center fw-bold mb-4">Our Services</h2>

//       {/* Buy Property Section */}
//       {(serviceType === "buy" || !serviceType) && (
//         <>
//           <h3 className="text-center fw-bold mb-4">
//             🏡 <span className="text-dark">Buy Property</span>
//           </h3>
//           <Row className="justify-content-center">
//             {[
//               {
//                 title: "2 BHK Flat",
//                 price: "₹75L",
//                 size: "1568 sqft",
//                 location: "Banjara Hills, Hyderabad",
//                 type: "House", // Will navigate to /SecondPage
//               },
//               {
//                 title: "Land",
//                 price: "₹55L",
//                 size: "1280 yards",
//                 location: "Hasanparthy, Warangal",
//                 type: "Land", // Will navigate to /Lands
//               },
//               {
//                 title: "6 BHK Villa",
//                 price: "₹90L",
//                 size: "1898 sqft",
//                 location: "Jubilee Hills, Hyderabad",
//                 type: "Villa", // Will navigate to /Villa
//               },
//             ].map((property, index) => (
//               <Col md={4} key={index} className="mb-3">
//                 <Card className="p-3 border rounded">
//                   <Card.Body>
//                     <Card.Title className="fw-bold">{property.title}</Card.Title>
//                     <Card.Text>
//                       <strong>{property.price}</strong> | {property.size}
//                       <br />
//                       {property.location}
//                     </Card.Text>
//                     <Button
//                       variant="primary"
//                       onClick={() => handleViewMoreClick(property.type)}
//                     >
//                       View More
//                     </Button>
//                   </Card.Body>
//                 </Card>
//               </Col>
//             ))}
//           </Row>
//         </>
//       )}

//       {/* Property Selling Section */}
//       {(serviceType === "sell" || !serviceType) && (
//         <>
//           <h3 className="text-center fw-bold mt-5 mb-4">
//             🏠 <span className="text-dark">Property Selling</span>
//           </h3>
//           <Row className="justify-content-center">
//             {[
//               {
//                 title: "List Your Property",
//                 description: "Submit your property details, upload images, and set a price.",
//                 btnText: "Get Started",
//                 btnColor: "warning",
//               },
//               {
//                 title: "Performance Tracking",
//                 description: "Track views, inquiries, and offers for your listed properties.",
//                 btnText: "Track Now",
//                 btnColor: "warning",
//               },
//             ].map((service, index) => (
//               <Col md={5} key={index} className="mb-3">
//                 <Card className="p-3 border rounded">
//                   <Card.Body>
//                     <Card.Title className="fw-bold">{service.title}</Card.Title>
//                     <Card.Text>{service.description}</Card.Text>
//                     <Button
//                       variant={service.btnColor}
//                       onClick={
//                         index === 0
//                           ? handlePropertyListingRedirect
//                           : () => navigate("/dashboard")
//                       }
//                     >
//                       {service.btnText}
//                     </Button>
//                   </Card.Body>
//                 </Card>
//               </Col>
//             ))}
//           </Row>
//         </>
//       )}

//       {/* Find Agents Section */}
//       {(serviceType === "agents" || !serviceType) && (
//         <>
//           <h3 className="text-center fw-bold mt-5 mb-4">
//             💼 <span className="text-dark">Find Agents</span>
//           </h3>
//           <Row className="justify-content-center">
//             {[
//               {
//                 name: "John Doe",
//                 description: "Expert in residential properties with 10+ years of experience.",
//               },
//               {
//                 name: "Jane Smith",
//                 description: "Specialist in luxury villas and commercial properties.",
//               },
//               {
//                 name: "Alex Johnson",
//                 description: "Commercial property expert with a high success rate.",
//               },
//             ].map((agent, index) => (
//               <Col md={4} key={index} className="mb-3">
//                 <Card className="p-3 border rounded">
//                   <Card.Body>
//                     <Card.Title className="fw-bold">{agent.name}</Card.Title>
//                     <Card.Text>{agent.description}</Card.Text>
//                     <Button
//                       variant="success"
//                       onClick={() => handleContactClick(agent.name)}
//                     >
//                       Contact
//                     </Button>
//                   </Card.Body>
//                 </Card>
//               </Col>
//             ))}
//           </Row>
//         </>
//       )}
//     </Container>
//   );
// };

// export default Services;

import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { useLocation, useNavigate } from "react-router-dom";

const Services = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const serviceType = location.hash.substring(1); // Extract service type from URL hash

  const handleContactClick = (agentName) => {
    navigate(`/contact?agent=${encodeURIComponent(agentName)}`);
  };

  const handleViewMoreClick = (propertyType) => {
    if (propertyType === "Land") {
      navigate("/Lands");
    } else if (propertyType === "Villa") {
      navigate("/Villa");
    } else if (propertyType === "Apartment") {
      navigate("/Apartment");
    } else if (propertyType === "House" || propertyType === "Flat") {
      navigate("/SecondPage");
    }
  };

  const handlePropertyListingRedirect = () => {
    navigate("/propertylisting");
  };

  const handleCallNow = (agentName) => {
    const callTime = new Date().toLocaleTimeString();
    alert(`Call Time: ${callTime}\nSuccessfully registered for a call with ${agentName}.`);
    navigate("/");
  };

  return (
    <Container className="my-4">
      <h2 className="text-center fw-bold mb-4">Our Services</h2>

      {/* Buy Property Section */}
      {(serviceType === "buy" || !serviceType) && (
        <>
          <h3 className="text-center fw-bold mb-4">
            🏡 <span className="text-dark">Buy Property</span>
          </h3>
          <Row className="justify-content-center">
            {[
              {
                title: "2 BHK Flat",
                price: "₹75L",
                size: "1568 sqft",
                location: "Banjara Hills, Hyderabad",
                type: "House",
              },
              {
                title: "Land",
                price: "₹55L",
                size: "1280 yards",
                location: "Hasanparthy, Warangal",
                type: "Land",
              },
              {
                title: "6 BHK Villa",
                price: "₹90L",
                size: "1898 sqft",
                location: "Jubilee Hills, Hyderabad",
                type: "Villa",
              },
            ].map((property, index) => (
              <Col md={4} key={index} className="mb-3">
                <Card className="p-3 border rounded">
                  <Card.Body>
                    <Card.Title className="fw-bold">{property.title}</Card.Title>
                    <Card.Text>
                      <strong>{property.price}</strong> | {property.size}
                      <br />
                      {property.location}
                    </Card.Text>
                    <Button
                      variant="primary"
                      onClick={() => handleViewMoreClick(property.type)}
                    >
                      View More
                    </Button>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </>
      )}

      {/* Property Selling Section */}
      {(serviceType === "sell" || !serviceType) && (
        <>
          <h3 className="text-center fw-bold mt-5 mb-4">
            🏠 <span className="text-dark">Property Selling</span>
          </h3>
          <Row className="justify-content-center">
            {[
              {
                title: "List Your Property",
                description: "Submit your property details, upload images, and set a price.",
                btnText: "Get Started",
                btnColor: "warning",
              },
              {
                title: "Performance Tracking",
                description: "Track views, inquiries, and offers for your listed properties.",
                btnText: "Track Now",
                btnColor: "warning",
              },
            ].map((service, index) => (
              <Col md={5} key={index} className="mb-3">
                <Card className="p-3 border rounded">
                  <Card.Body>
                    <Card.Title className="fw-bold">{service.title}</Card.Title>
                    <Card.Text>{service.description}</Card.Text>
                    <Button
                      variant={service.btnColor}
                      onClick={
                        index === 0
                          ? handlePropertyListingRedirect
                          : () => navigate("/dashboard")
                      }
                    >
                      {service.btnText}
                    </Button>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </>
      )}

      {/* Find Agents Section */}
      {(serviceType === "agents" || !serviceType) && (
        <>
          <h3 className="text-center fw-bold mt-5 mb-4">
            💼 <span className="text-dark">Find Agents</span>
          </h3>
          <Row className="justify-content-center">
            {[
              {
                name: "John Doe",
                description: "Expert in residential properties with 10+ years of experience.",
              },
              {
                name: "Jane Smith",
                description: "Specialist in luxury villas and commercial properties.",
              },
              {
                name: "Alex Johnson",
                description: "Commercial property expert with a high success rate.",
              },
            ].map((agent, index) => (
              <Col md={4} key={index} className="mb-3">
                <Card className="p-3 border rounded">
                  <Card.Body>
                    <Card.Title className="fw-bold">{agent.name}</Card.Title>
                    <Card.Text>{agent.description}</Card.Text>
                    <div className="d-flex justify-content-between">
                      <Button
                        variant="success"
                        onClick={() => handleContactClick(agent.name)}
                      >
                        Contact
                      </Button>
                       {/* <Button
                        variant="danger"
                        onClick={() => handleCallNow(agent.name)}
                      >
                        Call Now
                      </Button>  */}
                    </div>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </>
      )}
    </Container>
  );
};

export default Services;
