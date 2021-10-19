import React from 'react';
import { Container, Row } from 'react-bootstrap';
import Service from '../Service/Service'
import useServices from '../../hooks/useServices';
const Services = () => {
    const [services] = useServices();
    return (
        <div>
           <Container className="py-5">
          <h2 className="text-center text-white mb-0">Our All Services</h2>
          <p className="my-4 mt-2 text-center text-muted fs-5">
          Healthcare Pharmaceuticals limited (HPL) is one of the best kinds of company in the pharmaceutical industry in Bangladesh manufacturing branded generic products for local and overseas market in Asia, Africa and CIS region.
          </p>
        <Row>
          {services?.map((service) => (
            <Service service={service} key={service.key}></Service>
          ))}
        </Row>
      </Container>
        </div>
    );
};

export default Services;