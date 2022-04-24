
import React, { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import { Link, useParams } from 'react-router-dom';
import useServiceDetail from '../../../hooks/useServiceDetail';

const ServiceDetail = () => {
    const { serviceId } = useParams();
    const [service] = useServiceDetail(serviceId);

    
    return (
        <div className='container py-5' style={{ height: '84vh' }}>
            <h2 className='mb-5'>You are about to book: {service.name}</h2>
            <Link to={`/checkout/${serviceId}`}>
                <Button className='btn btn-primary' >Proceed Checkout</Button>
            </Link>
        </div>
    );
};

export default ServiceDetail;