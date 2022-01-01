import React, { useEffect, useState } from 'react';
import './RiderPage.css'

const RiderPage = () => {
    const [riders, setRiders] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/riders')
            .then(res => res.json())
            .then(data => setRiders(data))
    }, [])
    let latestRider = riders[riders.length - 1];
    console.log(riders)
    return (
        <div>
            <h1>Welcome to Hero Riders</h1>
            <div>
                <h4> Rider name: {latestRider.name}</h4>
                <img className='profile-img' src={`data:image/png;base64,${latestRider.profileImage}`} alt="Profile picture" />
                <p>Contact Number: {latestRider.contact}</p>
                <p>Address: {latestRider.address}</p>
                <p>Vehicle Type: {latestRider.vehicleType}</p>
                <p>Vehicle Name: {latestRider.vehicleName}</p>
                <p>Vehicle Model: {latestRider.vehicleModel}</p>
                <p>Vehicle Name plate: {latestRider.vehicleNamePlate}</p>

            </div>
        </div>
    );
};

export default RiderPage;