import { Grid, Typography } from '@mui/material';
import React from 'react';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import BookingModal from '../BookingModal/BookingModal';

const Bookings = ({ booking, date }) => {
    const { name, time, space } = booking
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    return (

        <>
            <Grid item xs={12} sm={6} md={4}>
                <Paper elevation={3} >
                    <Typography sx={{ pt: 3 }} style={{ color: '#00e5ff' }} variant="h6" gutterBottom component="div">
                        {name}
                    </Typography>
                    <Typography variant="h5" gutterBottom component="div">
                        {time}
                    </Typography>
                    <Typography variant="caption" display="block" gutterBottom>
                        {space} SPACES AVAILABLE
                    </Typography>
                    <Button onClick={handleOpen} style={{ backgroundColor: '#00e5ff' }} variant="contained" sx={{ mb: 3 }}>BOOK APPOINTMENT</Button>
                </Paper>
            </Grid>

            <BookingModal
                booking={booking}
                open={open}
                handleClose={handleClose}
                date={date}
            >

            </BookingModal>


        </>
    );
};

export default Bookings;