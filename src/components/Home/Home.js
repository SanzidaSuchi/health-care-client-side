import React from 'react';
import { Carousel, Container, Row } from 'react-bootstrap';
import Service from './../Service/Service';
import useAuth from '../../hooks/useAuth';
import Medicines from '../Medicines/Medicines';
import About from '../About Us/About';


const Home = () => {
    const { services } = useAuth();
    return (
        <div>
            <Carousel fade>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://www.hplbd.com/images/homeslide01.jpg"
            alt="First slide"
          />
          <Carousel.Caption>
            <h3 className="text-primary">First slide label</h3>
            <p className="text-primary">
              Nulla vitae elit libero, a pharetra augue mollis interdum.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://www.hplbd.com/images/homeslide06n.jpg"
            alt="Second slide"
          />

          <Carousel.Caption>
            <h3 className="text-primary">Second slide label</h3>
            <p className="text-primary">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://www.hplbd.com/images/homeslide03.jpg"
            alt="Third slide"
          />

          <Carousel.Caption>
            <h3 className="text-primary">Third slide label</h3>
            <p className="text-primary">
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://www.hplbd.com/images/homeslide005n.jpg"
            alt="Fourth slide"
          />

          <Carousel.Caption>
            <h3 className="text-primary">Fourth </h3>
            <p className="text-primary">
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>

      <Container className="py-5">
      <div className="my-3 d-flex flex-wrap justify-content-between">
            <Row>
              {services.slice(0, 6)?.map((service) => (
                <Service key={service.key} service={service} />
              ))}
            </Row>
          </div>
        </Container>
        <Medicines></Medicines>
        <About></About>
        </div>
    );
};

export default Home;