import React, { useState } from 'react';
import { Alert, Button, Spinner } from 'react-bootstrap';
import { useForm } from "react-hook-form";
import { Link, useNavigate } from 'react-router-dom';

import useAuth from '../../../hooks/useAuth';

const RegisterDrivingLearner = () => {
    const { register, formState: { errors }, } = useForm();
    const [loginData, setLoginData] = useState({});
    const history = useNavigate()
    const { user, registerUser, isLoading, authError } = useAuth();
    const [success, setSuccess] = useState(false)
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [age, setAge] = useState('');
    const [contact, setContact] = useState('');
    const [address, setAddress] = useState('');
    const [vehicleType, setVehicleType] = useState('');
    const [profileImage, setProfileImage] = useState(null);
    const [nidImage, setNidImage] = useState(null);


    const handleOnBlur = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = { ...loginData };
        newLoginData[field] = value;
        setLoginData(newLoginData);
    }
    const handleLoginSubmit = e => {
        if (loginData.password !== loginData.password2) {
            alert('Your password did not match');
            return
        }
        RegisterDrivingLearner(loginData.email, loginData.password, loginData.name, history);
        if (!profileImage) {
            return;
        }
        const formData = new FormData();
        formData.append('name', name);
        formData.append('email', email);
        formData.append('contact', contact);
        formData.append('address', address);
        formData.append('age', age);
        formData.append('vehicleType', vehicleType);
        formData.append('profileImage', profileImage);
        formData.append('nidImage', nidImage);


        fetch('https://protected-reef-11218.herokuapp.com/drivingLearner', {
            method: "POST",
            body: formData
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    alert('Registration done successfully')
                    setSuccess(true)
                }
            })
            .catch(error => {
                console.error('Error:', error);
            });
        e.preventDefault();
    }
    return (
        <>
            <div className="login-bg">
                <div className="w-75 mx-auto py-5">
                    <h1 className="section-header fw-bold stylish-front my-5 header-bg w-75 py-2 text-center mx-auto"> Register as a Driving Lesson Learner </h1>
                    <div>
                        <form onSubmit={handleLoginSubmit}>
                            <input {...register("name", { required: true })}
                                className="m-2 w-50"
                                placeholder="Your Full Name"
                                required
                                name="name"
                                onBlur={handleOnBlur}
                                onChange={e => setName(e.target.value)} />
                            {errors.name?.type === 'required' && "Your name is required"}
                            <br />

                            <input {...register("email", { required: true })}
                                className="m-2 w-50"
                                placeholder=" Email"
                                required
                                name="email"
                                type="email"
                                onBlur={handleOnBlur}
                                onChange={e => setEmail(e.target.value)} />
                            {errors.email?.type === 'required' && "Your email is required"}
                            <br />
                            <input {...register("contact", { required: true })}
                                className="m-2 w-50"
                                placeholder="Contact number"
                                required
                                name="contact"
                                type="number"
                                onChange={e => setContact(e.target.value)} />
                            {errors.number?.type === 'required' && "Your contact number is required"}
                            <br />
                            <input {...register("age", { required: true, min: 18, max: 99 })}
                                className="m-2 w-50"
                                placeholder="Age"
                                required
                                name="age"
                                type="number"
                                onChange={e => setAge(e.target.value)} />
                            {errors.age?.type === 'required' && "Your age is required"}
                            <br />
                            <input {...register("address", { required: true })}
                                className="m-2 w-50"
                                placeholder="Address"
                                required
                                name="address"
                                type="text"
                                onChange={e => setAddress(e.target.value)} />
                            {errors.address?.type === 'required' && "Your address is required"}
                            <br />
                            <input {...register("password", { required: true })}
                                className="m-2 w-50"
                                placeholder="Password"
                                required
                                type="password"
                                name="password"
                                onBlur={handleOnBlur} />
                            {errors.password && "Password is required"}
                            <br />
                            <input {...register("rePassword", { required: true })}
                                className="m-2 w-50"
                                placeholder="Re-enter Password"
                                required
                                type="password"
                                name="password2"
                                onBlur={handleOnBlur} />
                            {errors.rePassword && "Re-enter Password is required"}
                            <br />
                            <select {...register("vehicleType")} className="m-2 w-50" onChange={e => setVehicleType(e.target.value)}>
                                <option value="">Vehicle Type</option>
                                <option value="Car">Car</option>
                                <option value="Bike">Bike</option>
                            </select>
                            <br />

                            <label htmlFor="">NID Card Image</label>
                            <input type="file" accept="image/*" {...register("nidImg", { required: true })} className="m-2 w-50"
                                name="NIDimage"
                                onChange={e => setNidImage(e.target.files[0])} />
                            <br />

                            <label htmlFor="">Your Image</label>
                            <input type="file" accept="image/*" {...register("profileImage", { required: true })} className="m-2 w-50"
                                name="profileImage"
                                onChange={e => setProfileImage(e.target.files[0])} />
                            <br />

                            <Button type="submit" className="btn-all border-0 " >Register Now</Button>

                            {isLoading && <Spinner animation="grow" variant="primary" />}
                            {success && <Alert variant='success'>Welcome, Your registration is successfully done!</Alert>}
                            {authError && <Alert variant='danger'>{authError}</Alert>}

                            <br /> <br />
                            <Link to="/"> <Button className="btn-all border-0 ">Back to Home</Button> </Link>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
};

export default RegisterDrivingLearner;