import React, { useEffect, useState } from 'react';
import { Card, CardContent, Typography, Button, IconButton } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import {
    collection,
    getDocs,
    query,
    deleteDoc,
    orderBy,
    doc,
    updateDoc,
} from "firebase/firestore";

import { db } from '../firebaseConfiguration';

const Products = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetchProducts();
    }, []);

    const fetchProducts = async () => {
        try {
            const q = query(collection(db, "products"));
            const querySnapshot = await getDocs(q);
            const productsData = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
            setProducts(productsData);
        } catch (error) {
            console.error("Error fetching products:", error);
        }
    };

    const handleDeleteProduct = async (productId) => {
        try {
            await deleteDoc(doc(db, "products", productId));
            setProducts(prevProducts => prevProducts.filter(product => product.id !== productId));
        } catch (error) {
            console.error("Error deleting product:", error);
        }
    };

    return (
        <div>
            <div style={{ display: 'flex', flexWrap: 'wrap' }}>
                {products.map(product => (
                    <Card key={product.id} style={{ margin: '10px', minWidth: '300px' }}>
                        <CardContent>
                            <Typography variant="h5" component="h2">
                                {product.productName}
                            </Typography>
                            <Typography color="textSecondary">
                                {product.category}
                            </Typography>
                            <Typography color="textSecondary">
                                {product.company}
                            </Typography>
                            <Typography variant="body2" component="p">
                                Price: ${product.price}
                            </Typography>
                            <IconButton color="error" onClick={() => handleDeleteProduct(product.id)}>
                                <DeleteIcon />
                            </IconButton>
                            <Link to={{ pathname: "/addProduct", state: { product } }}>
                                <IconButton color="primary">
                                    <EditIcon />
                                </IconButton>
                            </Link>
                        </CardContent>
                    </Card>
                ))}
            </div>
        </div>
    );
};

export default Products;
