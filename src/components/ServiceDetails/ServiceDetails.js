import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

const ServiceDetails = () => {
    const {serviceId} = useParams();
    const [services, setServices] = useState([]);

    useEffect(()=>{
        fetch('https://api.jsonbin.io/b/616e6fb44a82881d6c623557')
        .then(res => res.json())
        .then(data => setServices(data))
    },[])
    
    return (
        <div>
            {
                services.map(service => service.id == serviceId ? 
                <div>
                    <h2>{service.name}</h2>
                    <h3>{service.research}</h3>
                    <img style={{width:"880px", height:"570px"}} src={service.img} alt="" />
                    <p>{service.description}</p>
                </div>
                
                :<div></div>)
            }
        </div>
    );
};

export default ServiceDetails;










