import React from 'react';
import axios, { Axios } from 'axios';
import { useForm } from "react-hook-form";
import './AddService.css';

const AddService = () => {
    const { register, handleSubmit, reset } = useForm();


    const onSubmit = data => {
        console.log(data);

        axios.post('https://pure-escarpment-37215.herokuapp.com/services',data)
        .then(res=> {
            if (res.data.insertedId){
                alert('Added Successfully')
                reset();
            }
        })
    }
    return (
        <div className="add-service">
            <h1 className =" text-primary"> Add a Service</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
      <input {...register("name", { required: true, maxLength: 20 })} placeholder="Name" />
      <textarea {...register("description")} placeholder="Description" />
      <input type="number" {...register("price", )} placehold="Price" />
      <input {...register("img")} placeholder="Image URL" />
      <input className="btn btn-primary" type="submit" />
    </form>
    <br /> <br /> <br />
        </div>
    );
};

export default AddService;