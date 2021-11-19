import React from 'react';
import Navbar from '../../Shared/Navbar/Navbar';
import AppointmentBanner from '../AppointmentBanner/AppointmentBanner';
import Banner from '../Banner/Banner';
import Doctors from '../Doctors/Doctors';
import ExceptionalDental from '../ExceptionalDental/ExceptionalDental';
import Services from '../Services/Services';

const Home = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Banner></Banner>
            <Services></Services>
            <AppointmentBanner></AppointmentBanner>
            <Doctors></Doctors>
            {/* <ExceptionalDental></ExceptionalDental> */}
        </div>
    );
};

export default Home;