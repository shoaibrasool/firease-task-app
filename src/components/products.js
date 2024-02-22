import React, { useEffect, useState } from 'react';
import { Card, CardContent, Typography } from '@mui/material';
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
            const productsData = querySnapshot.docs.map(doc => doc.data());
            setProducts(productsData);
        } catch (error) {
            console.error("Error fetching products:", error);
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
                        </CardContent>
                    </Card>
                ))}
            </div>
        </div>
    );
};

export default Products;
