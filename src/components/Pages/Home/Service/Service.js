import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Service.css'

const Service = ({ service }) => {
    const { name, img, description, price, _id } = service;
    const navigate = useNavigate();
    const navigateToServiceDetail = id =>{
        navigate(`/service/${id}`)
    }
    return (
        <div className='service'>
            <img src={img} alt="" />
            <div className='decrypt'>
                <h3>{name}</h3>
                <p><b>Price:</b> {price}</p>
                <p><small>{description}</small></p>
                <button onClick={ ()=> navigateToServiceDetail(_id)} className='btn btn-primary'>Book Now</button>
            </div>
        </div>
    );
};

export default Service;