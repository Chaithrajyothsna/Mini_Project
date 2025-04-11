import React, { useEffect, useRef, useState } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { useNavigate, useLocation } from "react-router-dom";

const properties = [
  { title: "2 BHK FLAT", price: "₹55L", size: "1568 sqft", location: "Banjara Hills, Hyderabad", img: "/images/1stImageHouse.png", category: "house" },
  { title: "LAND", price: "₹25L", size: "1280 yards", location: "Hasanparthy, Warangal", img: "/images/2ndImage1stPage.png", category: "land" },
  { title: "6 BHK VILLA", price: "₹90L", size: "1898 sqft", location: "Jubilee Hills, Hyderabad", img: "/images/3rdImage1stPage.png", category: "villa" },
  { title: "3 BHK APARTMENT", price: "₹45L", size: "1400 sqft", location: "Gachibowli, Hyderabad", img: "/images/drop4.png", category: "apartment" },
  { title: "3 BHK HOUSE", price: "₹55L", size: "2500 sqft", location: "Shamshabad, Hyderabad", img: "/images/drop3.png", category: "house" },
  { title: "3 BHK VILLA", price: "₹65L", size: "2740 sqft", location: "JublieeHills, Hyderabad", img: "/images/drop12.png", category: "villa" },
  { title: "2 BHK FLAT", price: "₹50L", size: "1540 sqft", location: "Kukatpally, Hyderabad", category: "house", img: "/images/n1.png" },
  { title: "Lands", price: "₹35L", size: "1240 sqft", location: "Mulugu, Warangal", category: "land", img: "/images/l2.png" },
  { title: "2 BHK APPARTMENT", price: "₹80L", size: "1740 sqft", location: "Hyderabad", category: "apartment", img: "/images/na1.png" },
  { title: "Lands", price: "₹55L", size: "1350 sqft", location: "JublieHills, Hyderabad", category: "land", img: "/images/lh1.png" },
  { title: "Lands", price: "₹35L", size: "1350 sqft", location: "Warangal", category: "land", img: "/images/lh2.png" },
  { title: "Lands", price: "₹30L", size: "1350 sqft", location: "JublieHills, Hyderabad", category: "land", img: "/images/lh4.png" }
];

const HomePage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const aboutUsRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (location.state?.scrollToAboutUs && aboutUsRef.current) {
      aboutUsRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [location]);

  const handleViewMore = (property) => {
    switch (property.category.toLowerCase()) {
      case "house":
        navigate("/SecondPage");
        break;
      case "land":
        navigate("/Lands");
        break;
      case "villa":
        navigate("/Villa");
        break;
      case "apartment":
        navigate("/Apartment");
        break;
      default:
        break;
    }
  };

  const [filters, setFilters] = useState({
    location: "",
    propertyType: "",
    saleRentBuy: "",
    minPrice: "",
    maxPrice: "",
  });

  const filteredProperties = properties.filter((property) => {
    const { location: propertyLocation, price, category } = property;
    const { location, propertyType, minPrice, maxPrice } = filters;

    let matchesLocation = true;
    let matchesType = true;
    let matchesPrice = true;

    if (location && !propertyLocation.toLowerCase().includes(location.toLowerCase())) {
      matchesLocation = false;
    }
    if (propertyType && propertyType.toLowerCase() !== category.toLowerCase()) {
      matchesType = false;
    }
    if (minPrice && parseFloat(price.replace(/[₹L,Cr]/g, '').trim()) < parseFloat(minPrice)) {
      matchesPrice = false;
    }
    if (maxPrice && parseFloat(price.replace(/[₹L,Cr]/g, '').trim()) > parseFloat(maxPrice)) {
      matchesPrice = false;
    }

    return matchesLocation && matchesType && matchesPrice;
  });

  const handleFilterChange = (e) => {
    setFilters({
      ...filters,
      [e.target.name]: e.target.value,
    });
  };

  const handleSearch = (e) => {
    e.preventDefault();
  };

  return (
    <div>
      <Container className="my-4">
        <Row className="justify-content-center">
          <Col md={8} className="text-center">
            <h2 className="fw-bold text-danger" style={{ fontSize: "2rem", fontFamily: "serif", letterSpacing: "1px" }}>
              Find Your Perfect Heaven, With Us
            </h2>

            <Form onSubmit={handleSearch} className="d-flex flex-wrap mt-3 justify-content-center align-items-center">
              <Form.Control
                type="text"
                placeholder="Location"
                name="location"
                value={filters.location}
                onChange={handleFilterChange}
                className="me-2 mb-2 py-2"
                style={{ fontSize: "0.9rem", width: "220px", borderRadius: "5px", boxShadow: "0 2px 5px rgba(0,0,0,0.1)" }}
              />
              <Form.Control
                as="select"
                name="propertyType"
                value={filters.propertyType}
                onChange={handleFilterChange}
                className="me-2 mb-2 py-2"
                style={{ fontSize: "0.9rem", width: "220px", borderRadius: "5px", boxShadow: "0 2px 5px rgba(0,0,0,0.1)" }}
              >
                <option value="">Property Type</option>
                <option value="House">House</option>
                <option value="Villa">Villa</option>
                <option value="Land">Land</option>
                <option value="Apartment">Apartment</option>
              </Form.Control>
              <Form.Control
                as="select"
                name="saleRentBuy"
                value={filters.saleRentBuy}
                onChange={handleFilterChange}
                className="me-2 mb-2 py-2"
                style={{ fontSize: "0.9rem", width: "220px", borderRadius: "5px", boxShadow: "0 2px 5px rgba(0,0,0,0.1)" }}
              >
                <option value="">Sale/Rent/Buy</option>
                <option value="Sale">Sale</option>
                <option value="Rent">Rent</option>
                <option value="Buy">Buy</option>
              </Form.Control>
              <div className="d-flex mb-2">
                <Form.Control
                  type="number"
                  name="minPrice"
                  value={filters.minPrice}
                  onChange={handleFilterChange}
                  placeholder="Min Price"
                  className="me-2"
                  style={{ fontSize: "0.9rem", width: "100px", borderRadius: "5px", boxShadow: "0 2px 5px rgba(0,0,0,0.1)" }}
                />
                <Form.Control
                  type="number"
                  name="maxPrice"
                  value={filters.maxPrice}
                  onChange={handleFilterChange}
                  placeholder="Max Price"
                  className="me-2"
                  style={{ fontSize: "0.9rem", width: "100px", borderRadius: "5px", boxShadow: "0 2px 5px rgba(0,0,0,0.1)" }}
                />
              </div>
              <Button variant="primary" type="submit" className="py-2 px-4 mb-2" style={{ borderRadius: "5px", fontSize: "1rem", boxShadow: "0 2px 5px rgba(0,0,0,0.1)" }}>
                🔍 Search
              </Button>
            </Form>
          </Col>
        </Row>

        {/* TOP VISITS */}
        <h3 className="text-center mt-5">Top Visits</h3>
        <div className="d-flex align-items-center justify-content-center mt-3">
          <Button
            variant="light"
            onClick={() => setCurrentIndex((prev) => Math.max(0, prev - 3))}
            disabled={currentIndex === 0}
            className="me-3"
            style={{ fontSize: "2rem", border: "none", background: "none" }}
          >
            &#60;
          </Button>
          <Row style={{ flex: "1" }} className="justify-content-center">
            {filteredProperties.slice(currentIndex, currentIndex + 3).map((property, index) => (
              <Col md={4} key={index} className="text-center mb-3">
                <div className="card position-relative">
                  <span className="position-absolute top-0 start-0 bg-danger text-white px-2 py-1" style={{ fontSize: "0.8rem" }}>
                    Best Seller
                  </span>
                  <img src={property.img} className="card-img-top" alt={property.title} style={{ height: "200px", objectFit: "cover" }} />
                  <div className="card-body">
                    <h5 className="card-title">{property.title}</h5>
                    <p>{property.price} | {property.size}</p>
                    <p>{property.location}</p>
                    <Button variant="danger" onClick={() => handleViewMore(property)}>View More</Button>
                  </div>
                </div>
              </Col>
            ))}
          </Row>
          <Button
            variant="light"
            onClick={() => setCurrentIndex((prev) => Math.min(filteredProperties.length - 3, prev + 3))}
            disabled={currentIndex + 3 >= filteredProperties.length}
            className="ms-3"
            style={{ fontSize: "2rem", border: "none", background: "none" }}
          >
            &#62;
          </Button>
        </div>

        {/* SERVICES SECTION */}
        <h3 className="text-center mt-5">Our Services</h3>
        <Row className="text-center mt-3">
          {[
            { title: "Buy Property", icon: "🏠", path: "/services#buy" },
            { title: "Property Selling", icon: "📈", path: "/services#sell" },
            { title: "Find Agents", icon: "🧑‍💼", path: "/services#agents" },
          ].map((service, idx) => (
            <Col md={4} key={idx}>
              <div className="p-3 border rounded shadow-sm">
                <h4>{service.icon}</h4>
                <h5>{service.title}</h5>
                <Button variant="info" onClick={() => navigate(service.path)}>Get started</Button>
              </div>
            </Col>
          ))}
        </Row>

        {/* ABOUT US SECTION */}
        <div ref={aboutUsRef} className="mt-5 p-4 bg-light rounded">
          <h4>About Us</h4>
          <p>
            We are a team of real estate and tech experts dedicated to building cutting-edge, user-friendly websites that connect buyers, sellers, and investors seamlessly.
            Our mission is to revolutionize the industry with high-performing, visually stunning, and feature-rich digital solutions.
          </p>
        </div>
      </Container>
    </div>
  );
};

export default HomePage;  