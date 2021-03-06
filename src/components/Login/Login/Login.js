import React, { useState } from 'react';
import { Alert, Button, Spinner } from 'react-bootstrap';
import { useForm } from "react-hook-form";
import { useNavigate, useLocation } from 'react-router';
import { Link } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import './Login.css'

const Login = () => {
    const { register, formState: { errors } } = useForm();
    const [loginData, setLoginData] = useState({});
    const { user, loginUser, isLoading, authError } = useAuth();

    const location = useLocation();
    const history = useNavigate();

    const handleOnChange = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = { ...loginData };
        newLoginData[field] = value;
        setLoginData(newLoginData);
    }
    const handleLoginSubmit = e => {
        loginUser(loginData.email, loginData.password, location, history);
        e.preventDefault();
    }

    return (
        <>
            <div className="login-bg">
                <div className="w-75 mx-auto py-5">
                    <div className="container">
                        <h1 className="section-header fw-bold stylish-front header-bg w-50 py-2 text-center mx-auto"> Login </h1>
                        <form onSubmit={handleLoginSubmit}>
                            <input {...register("email", { required: true })}
                                className="m-2 w-50"
                                placeholder=" Email"
                                required
                                name="email"
                                onChange={handleOnChange} />
                            {errors.email?.type === 'required' && "Your email is required"}
                            <br />
                            <input {...register("password", { required: true })}
                                className="m-2 w-50"
                                placeholder="Password"
                                required
                                type="password"
                                name="password"
                                onChange={handleOnChange} />
                            {errors.password && "Password is required"}
                            <br />

                            <Button className="btn-all border-0 mt-3" type="submit" >Login</Button>

                            {isLoading && <Spinner animation="grow" variant="primary" />}
                            {/* {user?.email && <Alert variant='success'>Login successfully!</Alert>} */}
                            {authError && <Alert variant='danger'>{authError}</Alert>}
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Login;