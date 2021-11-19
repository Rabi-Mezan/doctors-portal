import React from 'react';
import Grid from '@mui/material/Grid';
import chair from '../../../images/chair.png'
import bg from '../../../images/bg.png'


import { Button, Container, Typography } from '@mui/material';
import { Box } from '@mui/system';
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init();

const bannerBg = {
    background: `url(${bg})`
}

const verticalAlign = {
    display: 'flex',
    alignItems: 'center',
    height: 400
}

const Banner = () => {
    return (
        <Container style={bannerBg
        } sx={{ flexGrow: 1, my: 5 }}>
            <Grid container spacing={2}>
                <Grid style={{ ...verticalAlign, textAlign: "left" }} item xs={12} md={5}>
                    <Box>
                        <Typography style={{ fontWeight: '500' }} variant='h3'>
                            Your New Smile <br />
                            Starts Here
                        </Typography>
                        <Typography variant='h6' sx={{ my: 3 }} style={{ color: "gray", fontSize: "14px", fontWeight: 300 }}>
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Delectus at natus alias in culpa ipsam nihil esse recusandae laborum iste sunt nostrum
                        </Typography>
                        <Button variant='contained' style={{ backgroundColor: '#00e5ff' }}>
                            Get Appointment
                        </Button>
                    </Box>
                </Grid>
                <Grid data-aos="fade-left" data-aos-easing="ease-out-cubic"
                    data-aos-duration="2000" style={verticalAlign} item xs={12} md={7}>
                    <img style={{ width: "400px" }} src={chair} alt="" />
                </Grid>

            </Grid>
        </Container >
    );
};

export default Banner;