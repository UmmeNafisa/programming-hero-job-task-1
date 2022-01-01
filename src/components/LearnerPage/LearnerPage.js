import React from 'react';
import './LearnerPage.css'

const LearnerPage = () => {
    return (
        <div>
            <h1 className='my-5'> Welcome to Hero Riders Driving Learner </h1>
            <h5 className='mb-5'> Two packages are available for you </h5>
            <div className='container d-flex justify-content-evenly
            '>
                <div className='package'>
                    <h6> Package Name : Car Driving Lessons</h6>
                    <p> Cost : $200</p>
                </div>
                <div className='package'>
                    <h6> Package Name : Bike Driving Lessons</h6>
                    <p> Cost : $100</p>
                </div>
            </div>
        </div>
    );
};

export default LearnerPage;