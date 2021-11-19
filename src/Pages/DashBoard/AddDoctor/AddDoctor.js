import { Button, Input, TextField } from '@mui/material';
import React, { useState } from 'react';

const AddDoctor = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [image, setImage] = useState(null);

    const handleSubmit = e => {
        if (!image) {
            return;
        }

        const formData = new FormData();
        formData.append('name', name)
        formData.append('email', email)
        formData.append('image', image)
        fetch('https://serene-peak-62265.herokuapp.com/doctors', {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    alert('doctor added successfully')
                }
            })
            .catch(error => {
                console.error('Error:', error);
            });

        e.preventDefault();
    }

    return (
        <div>
            <h1>Add A doctor</h1>
            <form onSubmit={handleSubmit}>
                <TextField
                    onChange={e => setName(e.target.value)}
                    label="Name"
                    required
                    sx={{ width: '50%' }}
                    variant="standard" />
                <br />
                <TextField
                    onChange={e => setEmail(e.target.value)}
                    label="Email"
                    required
                    type="email"
                    sx={{ width: '50%' }}
                    variant="standard" />
                <br />
                <Input
                    onChange={e => setImage(e.target.files[0])}
                    sx={{ width: '50%', my: 2 }}
                    accept="image/*"
                    type="file" />
                <br />
                <Button variant="contained" type="submit">
                    Upload
                </Button>
            </form>
        </div>
    );
};

export default AddDoctor;