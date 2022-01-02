import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div>
            <h1>Hero Riders </h1>
            <h4> Sign up as a  <Link to="register-rider"> Rider  </Link> </h4>
            <h4> Sign up as a  <Link to="register-learner"> Driving Lesson Learner  </Link> </h4>
            <h4> Login as a <Link to="login"> Admin  </Link> </h4>
        </div>
    );
};

export default Home;