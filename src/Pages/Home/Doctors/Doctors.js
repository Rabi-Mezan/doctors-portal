import { Container, Grid } from '@mui/material';
import React, { useEffect, useState } from 'react';

const Doctors = () => {
    const [doctors, setDoctors] = useState([])
    useEffect(() => {
        fetch('https://serene-peak-62265.herokuapp.com/doctors')
            .then(res => res.json())
            .then(data => setDoctors(data))
    }, [])
    return (
        <div>
            <h1>Ours Doctors {doctors.length}</h1>

            <Container>
                <Grid container spacing={2}>
                    {
                        doctors.map(doctor =>
                            <Grid item xs={12} sm={6} md={4}>
                                <img style={{ width: '200px', height: '200px', borderRadius: '50%' }} src={`data:image/png;base64,${doctor.image}`} alt="" />
                                <h1>{doctor.name}</h1>
                            </Grid>)
                    }
                </Grid>
            </Container>
        </div>
    );
};

export default Doctors;