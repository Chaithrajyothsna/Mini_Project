import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { useLocation, useNavigate } from 'react-router-dom';
import { FaArrowLeft, FaVideo, FaWalking, FaPhoneAlt } from 'react-icons/fa';

const VisitDetails = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const details = location.state;

  const agentPhoneNumber = '+91 98765 43210'; // Placeholder agent number

  const getVisitTypeBadge = () => {
    if (details?.visitType === 'virtual') {
      return <span className="badge bg-primary"><FaVideo className="me-1" /> Virtual Tour</span>;
    } else if (details?.visitType === 'in-person') {
      return <span className="badge bg-success"><FaWalking className="me-1" /> In-Person Visit</span>;
    }
    return null;
  };

  return (
    <Container className="my-5">
      <Row className="mb-4">
        <Col>
          <h2>Visit Details</h2>
          <p className="text-muted">Here are the details of your visit request.</p>
          {getVisitTypeBadge()}
        </Col>
      </Row>

      <Card className="p-4">
        <Card.Body>
          <h4 className="mb-3">Booking Information</h4>
          <p><strong>Full Name:</strong> {details?.fullName}</p>
          <p><strong>Email:</strong> {details?.email}</p>
          <p><strong>Phone Number:</strong> {details?.phoneNumber}</p>
          <p><strong>Number of Persons:</strong> {details?.numPersons}</p>
          <p><strong>Visit Date:</strong> {details?.date}</p>
          <p><strong>Time Slot:</strong> {details?.timeSlot}</p>
          <p><strong>Additional Notes:</strong> {details?.additionalNotes || 'N/A'}</p>

          <hr />

          {details?.visitType === 'virtual' ? (
            <>
              <p className="text-primary fw-bold">
                An agent will contact you shortly to share the virtual tour meeting link.
              </p>
              <p><FaPhoneAlt className="me-2" /> Agent Contact: <strong>{agentPhoneNumber}</strong></p>
            </>
          ) : details?.visitType === 'in-person' ? (
            <>
              <p className="text-success fw-bold">
                Your in-person visit has been scheduled successfully.
              </p>
              <p><FaPhoneAlt className="me-2" /> Agent will meet you at the property. Contact: <strong>{agentPhoneNumber}</strong></p>
            </>
          ) : null}

          <div className="mt-4">
            <button className="btn btn-secondary" onClick={() => navigate(-1)}>
              <FaArrowLeft className="me-2" /> Go Back
            </button>
          </div>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default VisitDetails;
