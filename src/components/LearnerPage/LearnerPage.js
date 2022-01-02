import React, { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './LearnerPage.css'


const LearnerPage = () => {
    const [packages, setPackages] = useState([])
    useEffect(() => {
        fetch('/ridePackage.json')
            .then(res => res.json())
            .then(data => setPackages(data))
    }, [])
    console.log(packages)
    return (
        <div>
            <h1 className='my-5'> Welcome to Hero Riders Driving Lessons </h1>
            <h5 className='mb-5'> Two packages are available for you </h5>
            <div className='container d-flex justify-content-evenly
            '>
                {
                    packages.map(pack => <>
                        <div className='package'>
                            <h5> Package Name : {pack.package}</h5>
                            <p> Cost : ${pack.cost}</p>
                            <Link to={`/payment/${pack.id}`}> <Button> Pay Now </Button> </Link>
                        </div>

                    </>)
                }

            </div>
        </div>
    );
};

export default LearnerPage;