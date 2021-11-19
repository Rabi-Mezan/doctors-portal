import React, { useEffect, useState } from 'react';
import useAuth from '../../../hooks/useAuth';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Typography } from '@mui/material';
import { Link } from 'react-router-dom';


const Appointments = (props) => {
    const { date } = props;
    const { user } = useAuth()
    const [appointments, setAppointments] = useState([])

    useEffect(() => {
        fetch(`http://localhost:5000/appointments?email=${user?.email}&date=${date}`)
            .then(res => res.json())
            .then(data => setAppointments(data))
    }, [date, user.email])
    return (
        <div>
            <Typography variant='h6' sx={{ my: 2 }} >Appointments of Mr. {user.displayName}</Typography>
            <TableContainer component={Paper}>
                <Table sx={{}} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell>Name</TableCell>
                            <TableCell align="left">Schedule</TableCell>
                            <TableCell align="left">Service</TableCell>
                            <TableCell align="left">Action</TableCell>

                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {appointments.map((row) => (
                            <TableRow
                                key={row._id}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell component="th" scope="row">
                                    {row.patientName}
                                </TableCell>
                                <TableCell align="left">{row.time}</TableCell>
                                <TableCell align="left">{row.serviceName}</TableCell>
                                <TableCell align="left">
                                    {row?.payment ?
                                        'paid'
                                        :
                                        <Link to={`/dashboard/payment/${row._id}`}>
                                            <button>Pay</button>
                                        </Link>}</TableCell>

                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    );
};

export default Appointments;