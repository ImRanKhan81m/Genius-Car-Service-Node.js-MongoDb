
import React from 'react';
import { Button, Col, Row } from 'react-bootstrap';
import googleLogo from '../../images/social/Google.png';
import facebookLogo from '../../images/social/Facebook.png'
import githubLogo from '../../images/social/GitHub.png'
import { useSignInWithGithub, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../../../firebase.init';
import { useLocation, useNavigate } from 'react-router-dom';
import Loading from '../../Shared/Loading/Loading';

const SocialLogin = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    const [signInWithGithub, user1, loading1, error1] = useSignInWithGithub(auth);
    const navigate = useNavigate();
    const location = useLocation()
    const from = location.state?.from?.pathname || "/";

    let errorElement;
    if (error || error1) {
        errorElement = <p className='text-danger'>Error: {error?.message} {error1?.message}</p>
    }
    if(loading || loading1){
        return <Loading/>
    }
    if (user || user1) {
        navigate(from, { replace: true })
    }

    return (
        <div className='pb-4'>
            <div className='d-flex align-items-center mb-3'>
                <div style={{ height: '1px' }} className='bg-dark w-50 ms-5 me-3'></div>
                <p className='mt-2'>or</p>
                <div style={{ height: '1px' }} className='bg-dark w-50 me-5 ms-3'></div>
            </div>
            {errorElement}
            <div>
                <div className='mb-3 '>
                    <Button
                        onClick={() => signInWithGoogle()}
                        style={{ fontSize: '20px', backgroundColor: '#F2F3F5' }} className='btn btn-light px-4 py-2 w-75'>
                        <Row>
                            <Col lg='4' md='3' className='text-end'>
                                <img src={googleLogo} alt="" />
                            </Col>
                            <Col lg='8' md='9' className='text-start'>
                                <span className='px-2'>Google Sign In</span>
                            </Col>
                        </Row>
                    </Button>
                </div>

                <div className='mb-3 '>
                    <Button
                        style={{ fontSize: '20px', backgroundColor: '#F2F3F5' }} className='btn btn-light px-4 py-2 w-75'>
                        <Row>
                            <Col lg='4' md='3' className='text-end'>
                                <img style={{ width: '35px' }} src={facebookLogo} alt="" />
                            </Col>
                            <Col lg='8' md='9' className='text-start'>
                                <span className='px-2'>Facebook Sign In</span>
                            </Col>
                        </Row>
                    </Button>
                </div>

                <div className='mb-3 '>
                    <Button
                        onClick={() => signInWithGithub()}
                        style={{ fontSize: '20px', backgroundColor: '#F2F3F5' }} className='btn btn-light px-4 py-2 w-75'>
                        <Row>
                            <Col lg='4' md='3' className='text-end'>
                                <img src={githubLogo} alt="" />
                            </Col>
                            <Col lg='8' md='9' className='text-start'>
                                <span className='px-2'>Github Sign In</span>
                            </Col>
                        </Row>
                    </Button>
                </div>
            </div>
        </div>
    );
};

export default SocialLogin;