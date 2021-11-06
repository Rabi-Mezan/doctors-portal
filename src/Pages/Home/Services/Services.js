import React from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Container } from '@mui/material';
import Service from '../Service/Service';


const services = [
    {
        name: "Foluride Treatment",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae accusantium enim voluptatibus, a alias similique.",
        img: 'https://i.ibb.co/dLDKs3C/fluoride.png'
    },
    {
        name: "Cavity Filling",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae accusantium enim voluptatibus, a alias similique.",
        img: 'https://i.ibb.co/dKmZH0W/cavity.png'
    },
    {
        name: "Teeth Whitening",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae accusantium enim voluptatibus, a alias similique.",
        img: 'https://i.ibb.co/wBxw00X/whitening.png'
    }
]



const Services = () => {
    return (


        <Box sx={{ flexGrow: 1 }}>
            <Container>
                <Typography sx={{ fontWeight: 500, m: 1, color: 'primary.main' }} variant="h5" component="div">
                    Our Services
                </Typography>
                <Typography sx={{ fontWeight: 600, m: 2 }} variant="h4" component="div">
                    Services We Provide
                </Typography>
                <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                    {
                        services.map(service => <Service
                            key={service.name}
                            service={service}
                        ></Service>)
                    }
                </Grid>
            </Container>
        </Box >

    );
};

export default Services;