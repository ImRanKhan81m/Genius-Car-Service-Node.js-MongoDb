import React from 'react';
import { useAuthState, useSendEmailVerification } from 'react-firebase-hooks/auth';
import { Navigate, useLocation } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import auth from '../../../../firebase.init';
import Loading from '../../Shared/Loading/Loading';



const RequireAuth = ({ children }) => {
    const [user, loading] = useAuthState(auth);
    const location = useLocation();
    const [sendEmailVerification, sending, error] = useSendEmailVerification(auth);



    if (loading) {
        return <Loading />
    }
    if (!user) {
        return <Navigate to="/login" state={{ from: location }} replace />;
    }
    if (user.providerData[0]?.providerId === 'password' && !user.emailVerified) {
        return <div style={{height:'81.5vh'}}>
            <h3 className='text-danger mt-5 pt-5'>Your Email is not verified</h3>
            <h5 className='text-success'>Please Verify your email address</h5>
            <button
                className='btn btn-primary mt-3 px-4 py-2'
                onClick={async () => {
                    await sendEmailVerification();
                    toast('Sent email');
                }}
            >
                Verify email
            </button>
            <ToastContainer/>
        </div>
    }
    return children
};

export default RequireAuth;