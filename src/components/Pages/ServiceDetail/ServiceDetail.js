
import React from 'react';
import { Button } from 'react-bootstrap';
import { Link, useParams } from 'react-router-dom';

const ServiceDetail = () => {
    const {serviceId} = useParams();
    return (
        <div className='container py-5' style={{height:'84vh'}}>
            <h2 className='mb-5'>Welcome To Details: {serviceId}</h2>
            <Link to="/checkout">
                <Button className='btn btn-primary' >Proceed Checkout</Button>
            </Link>
        </div>
    );
};

export default ServiceDetail;