import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import bg from '../../../images/appointment-bg.png'
import { Button } from '@mui/material';
import { fontSize, textAlign } from '@mui/system';


const AppointmentBanner = () => {
    const appointmentBg = {
        background: `url(${bg})`,
        backgroundColor: 'rgba(52,69,107,0.9)',
        backgroundBlendMode: 'darken, luminosity',
        marginTop: 180

    }

    return (
        <Box style={appointmentBg} sx={{ flexGrow: 1 }}>
            <Grid container spacing={2}>
                <Grid item xs={12} md={6}>
                    <img style={{ marginTop: "-175px" }} src="https://i.ibb.co/VqGCxZG/doctor.png" alt="" />
                </Grid>
                <Grid item xs={12} md={6}
                    sx={{
                        display: 'flex',
                        textAlign: "left",
                        alignItems: 'center'
                    }}
                >
                    <Box>
                        <Typography variant="h5" sx={{ mb: 3 }} style={{ color: '#00e5ff' }}>
                            Appointment
                        </Typography>
                        <Typography variant="h3" style={{ color: "white" }}>
                            Make An Appointment Today
                        </Typography>
                        <Typography variant="h6" sx={{ my: 2 }} style={{ color: "white", fontSize: "14px", fontWeight: 300 }}>
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit dolor sit amet consectetur adipisicing elit Quis nulla!
                        </Typography>
                        <Button variant='contained' style={{ backgroundColor: '#00e5ff' }}>
                            Learn More
                        </Button>
                    </Box>
                </Grid>

            </Grid>
        </Box >
    );
}
export default AppointmentBanner;
