// import React, { useState } from "react";
// import { Container, Form, Button, Card, Alert } from "react-bootstrap";
// import axios from "axios";

// const HomeLoan = () => {
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     phone: "",
//     loanAmount: "",
//     propertyValue: "",
//     employmentStatus: "Employed"
//   });

//   const [responseMessage, setResponseMessage] = useState(null);
//   const [error, setError] = useState(null);

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setResponseMessage(null);
//     setError(null);
  
//     console.log("Submitting form with:", formData);
  
//     try {
//       const res = await axios.post("http://localhost:5000/api/loanRoute/apply", formData);
//       console.log("Server response:", res.data);
//       setResponseMessage(res.data.eligibility);
//     } catch (err) {
//       console.error("Error submitting form:", err);
//       setError(err.response?.data?.error || "Something went wrong");
//     }
//   };
  
//   // const handleSubmit = async (e) => {
//   //   e.preventDefault();
//   //   setResponseMessage(null);
//   //   setError(null);
  
//   //   try {
//   //     const res = await axios.post("http://localhost:5000/api/loanRoute/apply", formData);
  
//   //     if (res.data.success) {
//   //       alert("Application stored successfully in database!");
//   //       setResponseMessage(res.data.message || "Application submitted successfully.");
//   //       // Redirect to homepage
//   //       window.location.href = "/";
//   //     } else {
//   //       alert("Failed to store the application. Please try again.");
//   //     }
//   //   } catch (err) {
//   //     console.error("Error submitting form:", err);
//   //     const errorMessage = err.response?.data?.error || "Something went wrong";
//   //     alert(errorMessage);
//   //     setError(errorMessage);
//   //   }
//   // };

//   return (
//     <Container className="d-flex justify-content-center align-items-center vh-100">
//       <Card className="p-4 shadow" style={{ width: "500px", background: "#f8f9fa" }}>
//         <h3 className="text-center fw-bold">Apply for a Home Loan</h3>
//         <p className="text-center text-muted">Secure your dream home with Haven Homes</p>

//         {responseMessage && <Alert variant="success">{responseMessage}</Alert>}
//         {error && <Alert variant="danger">{error}</Alert>}

//         <Form onSubmit={handleSubmit}>
//           <Form.Group className="mb-3">
//             <Form.Label>Full Name</Form.Label>
//             <Form.Control type="text" name="name" value={formData.name} onChange={handleChange} required />
//           </Form.Group>

//           <Form.Group className="mb-3">
//             <Form.Label>Email</Form.Label>
//             <Form.Control type="email" name="email" value={formData.email} onChange={handleChange} required />
//           </Form.Group>

//           <Form.Group className="mb-3">
//             <Form.Label>Phone Number</Form.Label>
//             <Form.Control type="tel" name="phone" value={formData.phone} onChange={handleChange} required />
//           </Form.Group>

//           <Form.Group className="mb-3">
//             <Form.Label>Loan Amount (USD)</Form.Label>
//             <Form.Control type="number" name="loanAmount" value={formData.loanAmount} onChange={handleChange} required />
//           </Form.Group>

//           <Form.Group className="mb-3">
//             <Form.Label>Property Value (USD)</Form.Label>
//             <Form.Control type="number" name="propertyValue" value={formData.propertyValue} onChange={handleChange} required />
//           </Form.Group>

//           <Form.Group className="mb-3">
//             <Form.Label>Employment Status</Form.Label>
//             <Form.Select name="employmentStatus" value={formData.employmentStatus} onChange={handleChange}>
//               <option>Employed</option>
//               <option>Self-Employed</option>
//               <option>Unemployed</option>
//               <option>Retired</option>
//             </Form.Select>
//           </Form.Group>

//           <div className="d-grid">
//             <Button variant="primary" type="submit">Submit Application</Button>
//           </div>
//         </Form>
//       </Card>
//     </Container>
//   );
// };

// export default HomeLoan;

import React, { useState } from "react";
import { Container, Form, Button, Card, Alert } from "react-bootstrap";
import axios from "axios";
import { useNavigate } from "react-router-dom"; // for redirection

const HomeLoan = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    loanAmount: "",
    propertyValue: "",
    employmentStatus: "Employed"
  });

  const [responseMessage, setResponseMessage] = useState(null);
  const [error, setError] = useState(null);

  const navigate = useNavigate(); // initialize navigator

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setResponseMessage(null);
    setError(null);

    try {
      const res = await axios.post("http://localhost:5000/api/loanRoute/apply", formData);
      
      // Show success alert
      setResponseMessage(res.data.message || "Application submitted successfully ✅");

      // Optional alert popup
      alert("Application stored successfully in database!");

      // Redirect to homepage after 2.5 seconds
      setTimeout(() => {
        navigate("/");
      }, 3000);

    } catch (err) {
      console.error("Error submitting form:", err);
      const errorMessage = err.response?.data?.message || "Something went wrong. Please try again.";
      setError(errorMessage);
      alert(errorMessage); // Optional popup
    }
  };

  return (
    <Container className="d-flex justify-content-center align-items-center py-5" style={{ minHeight: "80vh" }}>
      <Card className="p-4 shadow" style={{ width: "500px", background: "#f8f9fa" }}>
        <h3 className="text-center fw-bold">Apply for a Home Loan</h3>
        <p className="text-center text-muted">Secure your dream home with Haven Homes</p>

        {responseMessage && <Alert variant="success">{responseMessage}</Alert>}
        {error && <Alert variant="danger">{error}</Alert>}

        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3">
            <Form.Label>Full Name</Form.Label>
            <Form.Control type="text" name="name" value={formData.name} onChange={handleChange} required />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Email</Form.Label>
            <Form.Control type="email" name="email" value={formData.email} onChange={handleChange} required />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Phone Number</Form.Label>
            <Form.Control type="tel" name="phone" value={formData.phone} onChange={handleChange} required />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Loan Amount (USD)</Form.Label>
            <Form.Control type="number" name="loanAmount" value={formData.loanAmount} onChange={handleChange} required />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Property Value (USD)</Form.Label>
            <Form.Control type="number" name="propertyValue" value={formData.propertyValue} onChange={handleChange} required />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Employment Status</Form.Label>
            <Form.Select name="employmentStatus" value={formData.employmentStatus} onChange={handleChange}>
              <option>Employed</option>
              <option>Self-Employed</option>
              <option>Unemployed</option>
              <option>Retired</option>
            </Form.Select>
          </Form.Group>

          <div className="d-grid">
            <Button variant="primary" type="submit">Submit Application</Button>
          </div>
        </Form>
      </Card>
    </Container>
  );
};

export default HomeLoan;
