import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col, Card, Button, Navbar, Nav, Image } from "react-bootstrap";
import { Bar } from "react-chartjs-2";
import "chart.js/auto";
import { useNavigate, useLocation } from "react-router-dom";

const Dashboard = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  const data = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
    datasets: [
      {
        label: "Revenues",
        data: [150, 120, 180, 90, 60, 40, 70, 100, 130, 160, 180, 200],
        backgroundColor: "#7D7DFE",
      },
    ],
  };

  const recentProperties = [
    {
      title: "Home",
      location: "BanjaraHills, Hyderabad",
      price: "Rs. 55L",
      image: "/images/Drop1.png",
      link: "/SecondPage",
    },
    {
      title: "Villa",
      location: "JublieeHills, Hyderabad",
      price: "Rs. 90L",
      image: "/images/3rdImage1stPage.png",
      link: "/Villa",
    },
    {
      title: "Apartment",
      location: "Kukatpally, Hyderabad",
      price: "Rs. 45L",
      image: "/images/drop5.png",
      link: "/Apartment",
    },
  ];

  const appointments = [
    {
      title: "Land",
      location: "Mulugu, Warangal",
      date: "April 6, 2025, 11:00 a.m.",
      status: "Upcoming",
      image: "/images/drop8.png",
      link: "/Land",
    },
  ];

  const handleCardClick = (link) => {
    navigate(link);
  };

  return (
    <div style={{ display: "flex", overflowX: "hidden", minHeight: "calc(100vh - 120px)" }}>
      {/* Sidebar */}
      <div className="bg-info text-white p-3" style={{ width: "250px", flexShrink: 0 }}>
        <h4>HAVEN HOMES</h4>
        <Nav className="flex-column mt-3">
          <Nav.Link className={`text-white ${isActive("/") ? "fw-bold underline" : ""}`} onClick={() => navigate("/")}>
            Home
          </Nav.Link>
          <Nav.Link className={`text-white ${isActive("/dashboard") ? "fw-bold underline" : ""}`} onClick={() => navigate("/dashboard")}>
            Dashboard
          </Nav.Link>
          <Nav.Link className="text-white" onClick={() => scrollToSection("recently-visited")}>
            Properties
          </Nav.Link>
          <Nav.Link className="text-white" onClick={() => scrollToSection("my-appointments")}>
            Appointment
          </Nav.Link>
        </Nav>
        <Button variant="light" className="mt-5 w-100" onClick={() => navigate("/")}>
          Logout →
        </Button>
      </div>

      {/* Main Content */}
      <Container fluid className="p-4" style={{ overflowX: "hidden", flex: 1 }}>
        <Navbar className="mb-4 px-0">
          <Navbar.Brand>DASHBOARD</Navbar.Brand>
          <Nav className="ms-auto align-items-center">
            <Button variant="primary" onClick={() => navigate("/PropertyListing")}>
              + Add Property
            </Button>
          </Nav>
        </Navbar>

        {/* Stats Cards */}
        <Row className="mb-4">
          <Col><Card className="p-3 text-center"><h5>Total properties</h5><h3>550</h3></Card></Col>
          <Col><Card className="p-3 text-center"><h5>Tenants</h5><h3>137</h3></Card></Col>
          <Col><Card className="p-3 text-center"><h5>Sellers</h5><h3>196</h3></Card></Col>
          <Col><Card className="p-3 text-center"><h5>Buyers</h5><h3>254</h3></Card></Col>
        </Row>

        {/* Market Trends */}
        <h5 className="mt-4">Market Trends</h5>
        <Bar data={data} />

        {/* Recently Visited Properties */}
        <h5 className="mt-5" id="recently-visited">Recently Visited Properties</h5>
        {recentProperties.map((property, index) => (
          <Row className="g-3 mb-3" key={index}>
            <Col md={8}>
              <Card
                className="border-0 shadow-sm"
                style={{ backgroundColor: "#f8f9fa", borderRadius: "10px", border: "1px solid #e9ecef", cursor: "pointer" }}
                onClick={() => handleCardClick(property.link)}
              >
                <div className="d-flex p-3">
                  <div className="flex-grow-1">
                    <h6 className="mb-1">{property.title}</h6>
                    <small className="text-muted d-block">{property.location}</small>
                    <div className="mt-2 fw-bold" style={{ color: "#5CD5D5" }}>{property.price}</div>
                  </div>
                  <Image src={property.image} style={{ width: "120px", height: "80px", objectFit: "cover", borderRadius: "8px" }} />
                </div>
              </Card>
            </Col>
          </Row>
        ))}

        {/* My Appointments */}
        <h5 className="mt-5" id="my-appointments">My Appointments</h5>
        {appointments.map((appt, index) => (
          <Row className="g-3 mb-3" key={index}>
            <Col md={8}>
              <Card
                className="border-0 shadow-sm"
                style={{ backgroundColor: "#f8f9fa", borderRadius: "10px", border: "1px solid #e9ecef", cursor: "pointer" }}
                onClick={() => handleCardClick(appt.link)}
              >
                <Card.Body>
                  <div className="d-flex align-items-center">
                    <Image
                      src={appt.image}
                      style={{ width: "120px", height: "80px", objectFit: "cover", borderRadius: "8px" }}
                      className="me-3"
                    />
                    <div className="flex-grow-1">
                      <h6 className="mb-1">{appt.title}</h6>
                      <small className="text-muted d-block">{appt.location}</small>
                      <div className="mt-1">
                        <small className="text-muted">{appt.date}</small>
                      </div>
                    </div>
                    <div className="d-flex flex-column align-items-end">
                      <span className="badge bg-light text-dark mb-2" style={{ padding: "8px 12px", borderRadius: "6px" }}>
                        {appt.status}
                      </span>
                      <Button variant="outline-danger" size="sm" style={{ borderRadius: "6px", padding: "4px 12px" }}>
                        Cancel
                      </Button>
                    </div>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        ))}
      </Container>
    </div>
  );
};

export default Dashboard;
