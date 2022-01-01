import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div>
            <h1>Hero Riders </h1>
            <h3> Sign up as a  <Link to="register-rider"> Rider  </Link> </h3>
            <h3> Sign up as a  <Link to="register-learner"> Driving Lesson Learner  </Link> </h3>
        </div>
    );
};

export default Home;