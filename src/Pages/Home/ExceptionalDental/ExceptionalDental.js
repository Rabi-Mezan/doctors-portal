import { Button, Container, Grid, Typography } from '@mui/material';
import React from 'react';
import img from '../../../images/treatment.png'

const ExceptionalDental = () => {
    return (
        <div>
            <Container sx={{ mt: 5 }}>
                <Grid container spacing={2}>
                    <Grid item xs={12} md={6}>
                        <img style={{ width: '70%' }} src={img} alt="" />
                    </Grid>
                    <Grid sx={{ textAlign: 'left' }} item xs={12} md={6}>
                        <Typography variant="h4" sx={{ fontWeight: '500' }}>
                            Exceptional Dental Care , On your Terms
                        </Typography>
                        <Typography variant="h6" sx={{ fontWeight: '200', my: 3 }}>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia dolore adipisci consequuntur ratione voluptatibus animi laborum sapiente maxime, maiores magnam sed, quidem corrupti. Maiores iusto illum architecto corporis ut optio itaque, porro exercitationem animi sit atque perferendis nihil sed laborum vero voluptate voluptatum eaque quaerat odit non totam explicabo! Sequi.
                        </Typography>
                        <Button style={{ backgroundColor: '#00e5ff' }} variant="contained">Learn More</Button>
                    </Grid>
                </Grid>
            </Container>
        </div>
    );
};

export default ExceptionalDental;