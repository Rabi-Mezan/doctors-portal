import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import CheckoutForm from '../CheckoutForm/CheckoutForm';


const stripePromise = loadStripe('pk_test_51Jx9jTGY4oBtJ3qaghAXSbGwwlTqfNZHhveczxtQ4MVZgTlisL1p5OOGvvheIAe4tfOrDHatYmli6ZoS3nIaOwrp00NvGL3pDZ');

const Payment = () => {
    const { id } = useParams()
    const [appointment, setAppointment] = useState({})


    useEffect(() => {
        fetch(`https://serene-peak-62265.herokuapp.com/appointments/${id}`)
            .then(res => res.json())
            .then(data => setAppointment(data))
    }, [id])
    return (
        <div>
            <h1>Mr {appointment.patientName} Pay for your appoinment of {appointment.serviceName}  </h1>
            <h1>  price:${appointment?.price}</h1>

            {
                appointment?.price && <Elements stripe={stripePromise}>
                    <CheckoutForm
                        appointment={appointment}
                    />
                </Elements>
            }
        </div>
    );
};

export default Payment;