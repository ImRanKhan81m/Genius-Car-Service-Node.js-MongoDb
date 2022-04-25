import { async } from '@firebase/util';
import React, { useRef } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { useLocation, useNavigate } from 'react-router-dom';
import auth from '../../../../firebase.init';
import Loading from '../../Shared/Loading/Loading';
import SocialLogin from '../SocialLogin/SocialLogin';
import {toast } from 'react-toastify';
import PageTitle from '../../Shared/PageTitle/PageTitle';
import axios from 'axios';

const Login = () => {
    const emailRef = useRef('');
    const passwordRef = useRef('');
    const navigate = useNavigate();
    const location = useLocation()
    const from = location.state?.from?.pathname || "/";

    let errorElement;
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);
    const [sendPasswordResetEmail, sending] = useSendPasswordResetEmail(auth);

    const handleSubmit = async event => {
        event.preventDefault();
        const email = emailRef.current.value;
        const password = passwordRef.current.value;

        await signInWithEmailAndPassword(email, password);
        const {data} = await axios.post('http://localhost:5000/login',{email});
        localStorage.setItem('accessToken', data.accessToken);
        navigate(from, { replace: true })
    }

    const navigateRegister = event => {
        navigate('/register')
    }
    const resetPassword = async () => {
        const email = emailRef.current.value;
        if (email) {
            await sendPasswordResetEmail(email);
            toast('Sent email');
        }else{
            toast('Please enter your email address.')
        }
    }
    if (loading || sending) {
        return <Loading />
    }
    if (user) {
        // navigate(from, { replace: true })
    }
    if (error) {
        errorElement = <p className='text-danger'>Error: {error.message}</p>
        // These credentials do not match our records.
    }

    return (
        <div className='container py-4 mb-5'>
            <PageTitle title="Login"/>
            <h2>Please Login</h2>
            <div className='w-50 m-auto border mt-4'>
                <Form onSubmit={handleSubmit} className='text-start p-4 mt-4'>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control className='py-2' ref={emailRef} type="email" placeholder="Enter email" required />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control className='py-2' ref={passwordRef} type="password" placeholder="Password" autoComplete='on' required />
                    </Form.Group>
                    {/* <Form.Group className="mb-3" controlId="formBasicCheckbox">
                        <Form.Check type="checkbox" label="Remember Me" />
                    </Form.Group> */}
                    <Button style={{ fontSize: '18px' }} className='w-100 py-2' variant="primary" type="submit">
                        Login
                    </Button>
                </Form>
                {errorElement}
                <p>New to Genius Car? <span className='text-primary' onClick={navigateRegister} style={{ cursor: 'pointer' }}>Please Register Now</span></p>
                <p>Forgot Password? <span className='text-primary' onClick={resetPassword} style={{ cursor: 'pointer' }}>Reset</span></p>
                <SocialLogin />
            </div>
        </div>
    );
};

export default Login;