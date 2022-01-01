import React, { useEffect, useState } from 'react';

const RiderPage = () => {
    const [riders, setRiders] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/riders')
            .then(res => res.json())
            .then(data => setRiders(data))
    }, [])

    return (
        <div>

        </div>
    );
};

export default RiderPage;