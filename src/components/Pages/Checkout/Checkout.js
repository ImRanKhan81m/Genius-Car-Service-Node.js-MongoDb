import React, { useState } from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import useServiceDetail from '../../../hooks/useServiceDetail';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';

const Checkout = () => {
    const { serviceId } = useParams();
    const [service] = useServiceDetail(serviceId);
    const [user] = useAuthState(auth);


    /* const [user, setUser]= useState({
        name: 'Akbar The Great',
        email:'akbar@gmail.com',
        address: 'Tajmohol Road MD Sultanpur',
        phone: '014620153651'
    })

 
    const handleAddressChange = event =>{
        console.log(event.target.value);
        const {address, ...rest} = user;
        const newAddress = event.target.value;
        const newUser = {address: newAddress, ...rest};
        setUser(newUser)
    } */


    return (
        <div /* style={{ height: '81vh' }} */>
            <h1 className='mt-4'>Please Order: {service.name}</h1>
            <Container>
                <Form className='text-start p-4 mt-4 w-75 mx-auto'>
                    <Form.Group className="mb-3" controlId="formBasicName">
                        <Form.Label>Your Name</Form.Label>
                        <Form.Control className='py-2' type="text" name='name' value={user.displayName} placeholder="Enter your name" required readOnly disabled/>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email Address</Form.Label>
                        <Form.Control className='py-2' type="email" name='email' value={user.email} placeholder="Enter your email address" required readOnly disabled/>
                     </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Service</Form.Label>
                        <Form.Control className='py-2' type="text" name='service' value={service.name} placeholder="service" required readOnly disabled/>
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