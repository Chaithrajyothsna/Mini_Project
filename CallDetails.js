// import React from "react";
// import { Container, Card, Button } from "react-bootstrap";
// import { useLocation, useNavigate } from "react-router-dom";

// const CallDetails = () => {
//   const location = useLocation();
//   const navigate = useNavigate();
//   const { callerName, callDate, callTime, confirmed } = location.state || {};

//   return (
//     <Container className="my-5">
//       <Card className="p-4 shadow-lg text-center">
//         <h2>Call Details</h2>
//         <p><strong>Caller:</strong> {callerName || "Not Available"}</p>
//         <p><strong>Date:</strong> {callDate || "Not Available"}</p>
//         <p><strong>Time:</strong> {callTime || "Not Available"}</p>
//         <p><strong>Call Confirmed:</strong> {confirmed ? "Yes" : "No"}</p>
//         <Button variant="primary" onClick={() => navigate("/")}>Go Back</Button>
//       </Card>
//     </Container>
//   );
// };

// export default CallDetails;


import React, { useEffect, useState } from "react";
import { Container, Card, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const CallDetails = () => {
  const navigate = useNavigate();

  const [callerName, setCallerName] = useState("");
  const [callDate, setCallDate] = useState("");
  const [callTime, setCallTime] = useState("");

  useEffect(() => {
    // List of random caller names
    const callerNames = [
      "Arjun Mehta",
      "Neha Sharma",
      "Ravi Verma",
      "Priya Patel",
      "Ankit Singh",
      "Divya Kapoor",
      "Rahul Joshi",
      "Simran Kaur"
    ];

    // Pick a random caller name
    const randomCaller = callerNames[Math.floor(Math.random() * callerNames.length)];
    setCallerName(randomCaller);

    // Set next day's date
    const nextDay = new Date();
    nextDay.setDate(nextDay.getDate() + 1);
    const formattedDate = `${String(nextDay.getDate()).padStart(2, "0")}/${String(
      nextDay.getMonth() + 1
    ).padStart(2, "0")}/${nextDay.getFullYear()}`;
    setCallDate(formattedDate);

    // Generate random time between 12:00 AM and 6:00 PM
    const randomHour = Math.floor(Math.random() * 18); // 0–17
    const randomMinute = Math.floor(Math.random() * 60);
    const formattedTime = `${String(randomHour).padStart(2, "0")}:${String(randomMinute).padStart(
      2,
      "0"
    )}`;
    setCallTime(formattedTime);
  }, []);

  return (
    <Container className="my-5">
      <Card className="p-4 shadow-lg text-center">
        <h2>Call Details</h2>
        <p><strong>Caller:</strong> {callerName || "Not Available"}</p>
        <p><strong>Date:</strong> {callDate}</p>
        <p><strong>Time:</strong> {callTime}</p>
        <p><strong>Call Confirmed:</strong> ✅ Yes</p>
        <Button variant="primary" onClick={() => navigate("/")}>Go Back</Button>
      </Card>
    </Container>
  );
};

export default CallDetails;

