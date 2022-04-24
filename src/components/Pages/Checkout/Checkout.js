import React from 'react';
import { useParams } from 'react-router-dom';
import useServiceDetail from '../../../hooks/useServiceDetail';

const Checkout = () => {
    const {serviceId} = useParams();
    const [service] = useServiceDetail(serviceId);
    return (
        <div style={{height:'81vh'}}>
            <h1 className='mt-4'>Please Order: {service.name}</h1>
        </div>
    );
};

export default Checkout;