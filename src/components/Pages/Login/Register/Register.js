import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useLocation, useNavigate } from 'react-router-dom';
import { useCreateUserWithEmailAndPassword, useUpdateProfile } from 'react-firebase-hooks/auth';
import auth from '../../../../firebase.init'
import './Register.css'
import SocialLogin from '../SocialLogin/SocialLogin';
import Loading from '../../Shared/Loading/Loading';
import useToken from '../../../../hooks/useToken';

const Register = () => {
    const [agree, setAgree] = useState(false);
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
    ] = useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });
    const [updateProfile, updating] = useUpdateProfile(auth);
    const navigate = useNavigate();
    const location = useLocation()
    const from = location.state?.from?.pathname || "/";
    const [token] = useToken(user);


    const handleSubmit = async (event) => {
        event.preventDefault();
        const name = (event.target.name.value);
        const email = (event.target.email.value);
        const password = (event.target.password.value);
        // const agree = event.target.terms.checked;

        await createUserWithEmailAndPassword(email, password);
        await updateProfile({ displayName: name});
        console.log('Updated profile');
        // navigate('/')
    }
    const navigateLogin = event => {
        navigate('/login')
    }
    if(loading || updating){
        return <Loading/>
    }
    if (token) {
        navigate(from, { replace: true })
    }

    return (
        <div className='register-form container py-5'>
            <h2>Please Register</h2>
            <div className='w-50 m-auto border mt-4'>
                <Form onSubmit={handleSubmit} className='text-start p-4 mt-4'>
                    <Form.Group className="mb-3" controlId="formBasicName">
                        <Form.Label>Your Name</Form.Label>
                        <Form.Control type="text" name='name' placeholder="Enter your name" required />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" name='email' placeholder="Enter email" required />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                         <Form.Control type="password" name='password' placeholder="Password" autoComplete='on' required />
                    </Form.Group>
                    <Form.Group className="mb-3 d-flex" controlId="formBasicCheckbox">
                        <Form.Check className='me-2' onClick={() => setAgree(!agree)} name='terms' id='terms' type="checkbox" />
                        <label className={agree ? 'text-primary' : 'text-danger'} htmlFor="terms">Accept Genius Car Terms and Conditions </label>
                        {/* <label className={`ps-2 ${agree ? '' : 'text-danger'}`} htmlFor="terms">Accept Genius Car Terms and Conditions </label> */}
                    </Form.Group>
                    <Button
                        disabled={!agree}
                        style={{ fontSize: '18px' }} className='w-100 py-2' variant="primary" type="submit">
                        Register
                    </Button>
                </Form>
                <p>Already have an account? <span className='text-primary' onClick={navigateLogin} style={{ cursor: 'pointer' }}>Login Now</span></p>
                <SocialLogin />
            </div>
        </div>
    );
};

export default Register; 