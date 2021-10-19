import React from "react";
import { Card, Col,} from "react-bootstrap";
import { NavLink } from "react-router-dom";



function Service(props) {
  const { id,name, img, research, description} = props.service;
  
  return (
    <Col className="my-3" md={4}>
        <Card style={{ minHeight: "480px" }}>
          <Card.Img variant="top" src={img} />
          <Card.Body>
            <Card.Title>{name}</Card.Title>
            <Card.Text className="text-muted">{description}</Card.Text>
            <p>
              <b>research: {research}</b> 
            </p>
            
            <div className="d-flex text-center">
              <NavLink to={`/details/${id}`} className="w-50 btn btn-primary">
                View Details
              </NavLink>
            </div>
          </Card.Body>
        </Card>
      
    </Col>
  );
}

export default Service;