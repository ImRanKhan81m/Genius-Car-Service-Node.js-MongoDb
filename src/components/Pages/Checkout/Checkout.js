import React from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import useServiceDetail from '../../../hooks/useServiceDetail';

const Checkout = () => {
    const { serviceId } = useParams();
    const [service] = useServiceDetail(serviceId);
    return (
        <div style={{ height: '81vh' }}>
            <h1 className='mt-4'>Please Order: {service.name}</h1>
            <Container>
                <Form className='text-start p-4 mt-4 w-75 mx-auto'>
                    <Form.Group className="mb-3" controlId="formBasicName">
                        <Form.Label>Your Name</Form.Label>
                        <Form.Control className='py-2' type="text" name='name' placeholder="Enter your name" required />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control className='py-2' type="email" name='email' placeholder="Enter your email address" required />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Service</Form.Label>
                        <Form.Control className='py-2' type="text" name='service' value={service.name} placeholder="service" required />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Phone Number</Form.Label>
                        <Form.Control className='py-2' type="number" name='email' placeholder="Enter your phone number" required />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Address</Form.Label>
                        <Form.Control className='py-2' type="text" name='password' placeholder="Enter your Address" />
                    </Form.Group>
                    <Button
                        style={{ fontSize: '18px' }} className='w-100 py-2' variant="primary" type="submit">
                        Confirm Booking
                    </Button>
                </Form>
            </Container>
        </div>
    );
};

export default Checkout;