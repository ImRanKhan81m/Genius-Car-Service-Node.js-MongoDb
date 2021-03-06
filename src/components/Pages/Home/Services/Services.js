import React, { useEffect, useState } from 'react';
import Service from '../Service/Service';
import './Services.css'

const Services = () => {
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch('https://intense-mountain-66427.herokuapp.com/service')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])
    return (
        <div className='container py-4' id='services'>
            <h1 className='mt-5 mb-4'>Our Service</h1>
            <div className='services-container'>
                {
                    services.map(service =>
                        <Service
                            key={service._id}
                            service={service}
                        ></Service>)
                }
            </div>
        </div>
    );
};

export default Services;