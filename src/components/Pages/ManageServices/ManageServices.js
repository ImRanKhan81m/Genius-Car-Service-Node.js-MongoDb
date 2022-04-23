import React from 'react';
import userServices from '../../../hooks/useServices';

const ManageServices = () => {
    const [services, setServices] = userServices();

    const handleDelete = id=>{
        const proceed = window.confirm('Are you sure?');
        if(proceed){
            const url = `http://localhost:5000/service/${id}`;
            fetch(url,{
                method: 'DELETE'
            })
            .then(res => res.json())
            .then(data =>{
                console.log(data)
                const remaining = services.filter(service=> service._id !==id);
                setServices(remaining);
            })
        }
    }
    return (
        <div style={{ height: '81vh' }}>
            <h2 className='my-4'>Manage your services</h2>
            {
                services.map(service =>
                    <div key={service._id}>
                        <h5>{service.name} <button onClick={()=>handleDelete(service._id)}>X</button></h5>
                    </div>)
            }
        </div>
    );
};

export default ManageServices;