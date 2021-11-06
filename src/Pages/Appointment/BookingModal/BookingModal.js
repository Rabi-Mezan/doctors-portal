import React from 'react';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import { Button } from '@mui/material';


const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

const BookingModal = (props) => {
    const { handleClose, open, booking, date } = props

    const handleFormSubmit = e => {
        alert('submiting form')
        handleClose()
        e.preventDefault()
    }

    return (
        <div>
            <Modal
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                open={open}
                onClose={handleClose}
                closeAfterTransition
                BackdropComponent={Backdrop}
                BackdropProps={{
                    timeout: 500,
                }}
            >
                <Fade in={open}>
                    <Box sx={style}>
                        <Typography id="transition-modal-title" variant="h6" component="h2">
                            {booking.name}
                        </Typography>
                        <form onSubmit={handleFormSubmit}>
                            <TextField
                                disabled
                                sx={{ width: '100%', m: 1 }}
                                id="outlined-size-small"
                                defaultValue={booking.time}
                                size="small"
                            />
                            <TextField
                                sx={{ width: '100%', m: 1 }}
                                id="outlined-size-small"
                                defaultValue='Your Name'
                                size="small"
                            />
                            <TextField
                                sx={{ width: '100%', m: 1 }}
                                id="outlined-size-small"
                                defaultValue='Your Email'
                                size="small"
                            />
                            <TextField
                                sx={{ width: '100%', m: 1 }}
                                id="outlined-size-small"
                                defaultValue='Phone Number'
                                size="small"
                            />
                            <TextField
                                disabled
                                sx={{ width: '100%', m: 1 }}
                                id="outlined-size-small"
                                defaultValue={date.toDateString()}
                                size="small"
                            />
                            <Button type='submit' sx={{ m: 1 }} variant="contained">Submit</Button>

                        </form>
                    </Box>
                </Fade>
            </Modal>
        </div>
    );
};

export default BookingModal;