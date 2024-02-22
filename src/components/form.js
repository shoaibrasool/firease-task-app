import React, { useState } from 'react';
import { TextField, Button, Container, Grid, FormControl, InputLabel, Select, MenuItem, Typography } from '@mui/material';
import { getFirestore, collection, addDoc } from 'firebase/firestore';
import firebase from 'firebase/app';
import 'firebase/auth';

const MyForm = () => {
    const [formData, setFormData] = useState({
        productName: '',
        price: '',
        category: '',
        company: ''
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await addProduct(formData);
            console.log('Product added successfully!');
        } catch (error) {
            console.error('Error adding product: ', error);
            // Handle errors here, e.g., show an error message to the user
        }
    };

    // Function to add data to Firebase collection
    const addProduct = async (data) => {
        const db = getFirestore();
        await addDoc(collection(db, 'products'), data).then(
            setFormData({
                productName: '',
                price: '',
                category: '',
                company: ''
            })
        );
    };

    return (
        <Container maxWidth="sm">
            <Typography variant="h5" gutterBottom>
                Add Product
            </Typography>
            <form onSubmit={handleSubmit}>
                <Grid container spacing={2}>
                    <Grid item xs={12}>
                        <TextField
                            fullWidth
                            label="Product Name"
                            variant="outlined"
                            name="productName"
                            value={formData.productName}
                            onChange={handleChange}
                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField
                            fullWidth
                            label="Price"
                            variant="outlined"
                            name="price"
                            type="number"
                            value={formData.price}
                            onChange={handleChange}
                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <FormControl fullWidth variant="outlined">
                            <InputLabel>Category</InputLabel>
                            <Select
                                label="Category"
                                name="category"
                                value={formData.category}
                                onChange={handleChange}
                            >
                                <MenuItem value="">Select</MenuItem>
                                <MenuItem value="Electronics">Electronics</MenuItem>
                                <MenuItem value="Clothing">Clothing</MenuItem>
                                <MenuItem value="Books">Books</MenuItem>
                                {/* Add more categories as needed */}
                            </Select>
                        </FormControl>
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            fullWidth
                            label="Company"
                            variant="outlined"
                            name="company"
                            value={formData.company}
                            onChange={handleChange}
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <Button type="submit" variant="contained" color="primary">
                            Submit
                        </Button>
                    </Grid>
                </Grid>
            </form>
        </Container>
    );
};

export default MyForm;
