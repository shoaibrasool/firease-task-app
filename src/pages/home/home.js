import React from 'react';
import { useNavigate } from 'react-router-dom';

const Home = () => {
    const navigate = useNavigate

    const handleClick = () => {
        navigate('/addProduct')
    }

    return (
        <div>
            <div
                style={{
                    backgroundImage: `url('https://via.placeholder.com/150')`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    display: 'flex',
                    justifyContent: 'space-around',
                    alignItems: 'center',
                    color: 'white',
                    textAlign: 'center',
                    padding: '7% 0'
                }}
            >
                <div>
                    <h2>Your Hero Text</h2>
                    <button onClick={handleClick} style={{ padding: '10px 20px', fontSize: '1.2rem', backgroundColor: 'rgb(0, 21, 41)', color: 'white', border: 'none', borderRadius: '5px', cursor: 'pointer' }}>View All Products</button>
                </div>
                <div
                    style={{
                        padding: "10%",
                        backgroundColor: "rgb(0, 21, 41)"
                    }}
                >
                    Best Seller
                </div>
            </div>
        </div>
    );
}

export default Home;
