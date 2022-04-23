import React from 'react';
import { useForm } from "react-hook-form";

const AddService = () => {
    const { register, handleSubmit } = useForm();
    const onSubmit = data => {
        console.log(data);
        const url = `http://localhost:5000/service`;
        fetch(url, {
            method: "POST",
            headers:{
                'content-type':'application/json'
            },
            body: JSON.stringify(data)
        })
        .then(res => res.json())
        .then(result =>{
            console.log(result);
        })
    };
    return (
        <div className='container w-50' style={{ height: '81vh' }}>
            <h1 className='mt-4'>Please add a service</h1>
            <form className='mt-4 d-flex justify-content-center flex-column' onSubmit={handleSubmit(onSubmit)}>
                <input className='mb-2 p-2' placeholder='Name' {...register("name", { required: true, maxLength: 20 })} />
                <textarea className='mb-2 p-2' placeholder='Description' {...register("description")} />
                <input className='mb-2 p-2' placeholder='Price' type="number" {...register("price")} />
                <input className='mb-2 p-2' placeholder='Photo URL' type="text" {...register("img")} />
                <input className=' py-2' type="submit" value="Add Service" />
            </form>
        </div>
    );
};

export default AddService;