import React, { useState } from "react";
import ReactDOM from "react-dom";
import { Card, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

function Public() {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(null);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
    setDirection(e.direction);
  };

  return (
    <div class="public">
      <h2 class="page-section-heading text-center text-uppercase mb-0">
        Public Projects
      </h2>
      <p>
        Projects I've created and a breif description. Links to the hosted
        versions.
      </p>
      <div class="row">
        <Card text="black" style={{ width: "18rem" }}>
          <Card.Img
            variant="top"
            src="https://images.pexels.com/photos/226597/pexels-photo-226597.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
          />
          <Card.Body>
            <Card.Title>Project Gateway</Card.Title>
            <Card.Text>
              React - A welcome dashboard for use in lobbys and common areas.
              Features Local RSS feeds, Current Weather, and images managed VIA
              google photos
            </Card.Text>
          </Card.Body>
        </Card>
        <Card text="black" style={{ width: "18rem" }}>
          <Card.Img
            variant="top"
            src="https://images.pexels.com/photos/36451/cat-meadow-cute-funny.jpg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
          />
          <Card.Body>
            <Card.Title>NaviSent</Card.Title>
            <Card.Text>
              MERN Stack - A team sms communication solution. Allows teams to
              communicate with people via SMS, Pass and share the conversations
              with other teammates, and Team Administration can view and manage
              all conversations. Secured by Azure AD
            </Card.Text>
          </Card.Body>
        </Card>
        <Card text="black" style={{ width: "18rem" }}>
          <Card.Img
            variant="top"
            src="https://images.pexels.com/photos/595804/pexels-photo-595804.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
          />
          <Card.Body>
            <Card.Title>Peer Reveiw</Card.Title>
            <Card.Text>
              PHP, MySQL - A employee/ management review system. Monitors and
              tracks current camppaign results. Sortable and searchable tables.
              Easy to print out results. Secured by Microsoft AD
            </Card.Text>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
}

export default Public;
