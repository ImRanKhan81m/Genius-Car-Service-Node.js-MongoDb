
import React, { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import { Link, useParams } from 'react-router-dom';

const ServiceDetail = () => {
    const { serviceId } = useParams();
    const [service, setService] = useState({});
    useEffect(() => {
        const url = `http://localhost:5000/service/${serviceId}`;
        console.log(url);
        fetch(url)
            .then(res => res.json())
            .then(data => setService(data))
    }, [])
    return (
        <div className='container py-5' style={{ height: '84vh' }}>
            <h2 className='mb-5'>You are about to book: {service.name}</h2>
            <Link to="/checkout">
                <Button className='btn btn-primary' >Proceed Checkout</Button>
            </Link>
        </div>
    );
};

export default ServiceDetail;