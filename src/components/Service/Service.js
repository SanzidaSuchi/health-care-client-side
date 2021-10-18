import React from "react";
import { Card, Col,} from "react-bootstrap";
import { NavLink } from "react-router-dom";



function Service(props) {
  const { key,name, img, research, description} = props.service;
  
  return (
    <Col className="my-3" md={4}>
        <Card style={{ minHeight: "480px" }}>
          <Card.Img variant="top" src={img} />
          <Card.Body>
            <Card.Title>{key}</Card.Title>
            <Card.Title>{name}</Card.Title>
            <Card.Text className="text-muted">{description}</Card.Text>
            <p>
              {" "}
              <b>research: {research} </b>
            </p>
            
            <div className="d-flex">
              <NavLink to={`/services/${key}`} className="w-50 btn btn-primary text-center">
                View Details
              </NavLink>
            </div>
          </Card.Body>
        </Card>
      
    </Col>
  );
}

export default Service;