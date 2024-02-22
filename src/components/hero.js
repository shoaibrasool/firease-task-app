import React from 'react'
import { useNavigate } from 'react-router-dom';

const Hero = () => {
    const navigate = useNavigate()

    const handleClick = () => {
        navigate('/addProduct')
    }
    return (
        <div
            style={{
                backgroundImage: `url('https://img.freepik.com/premium-photo/stack-black-yellow-label-with-black-friday-tag-with-black-background-black-friday-concept_9083-8412.jpg')`,
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
                <h2>Your Own Ecommerce App</h2>
                <button onClick={handleClick} style={{ padding: '10px 20px', fontSize: '1.2rem', backgroundColor: '#00b96b', color: 'white', border: 'none', borderRadius: '5px', cursor: 'pointer' }}>Add  Products</button>
            </div>
            <div
                style={{
                    padding: "10%",
                    backgroundImage: `url('https://img.freepik.com/free-photo/shopping-cart-with-wooden-elements_23-2148879396.jpg?t=st=1708617935~exp=1708618535~hmac=475b7106fed187dc7e5a1c99acdee5af559f09d6f280270c102fbf04937cfb23')`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    borderRadius: '5px'
                }}
            >
                Best Seller
            </div>
        </div>
    )
}

export default Hero
