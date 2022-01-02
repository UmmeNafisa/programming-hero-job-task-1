import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const Payment = () => {
    let params = useParams();
    const [data, setData] = useState([])

    useEffect(() => {
        fetch('/ridePackage.json')
            .then(res => res.json())
            .then(data => {
                for (let pg of data) {
                    if (pg.id === params.id) {
                        console.log(pg); setData(pg)
                    };
                }

            })
    }, [])
    // console.log(data)
    return (
        <div>
            <h1>{params.id}</h1>
            <h2> Please pay</h2>
        </div>
    );
};

export default Payment;