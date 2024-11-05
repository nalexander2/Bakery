import React, {useContext} from 'react'


import styled from 'styled-components';

import products from'../Ndata/Products';
import { CartContext } from "../context/CartContext";
import { useNavigate} from "react-router-dom";


const CartContainer = styled.header`
 padding 2rem;

` 
const CartItem = styled.header`
 display:flex;
 justify-content:space-between;
 margin-bottom: 1rem


` 
const Button = styled.button`
padding:0.5rem;
background-color:#f8b400;
border:none;
border-radius:4px;
cursor:pointer;
color:white;
font-weight:bold;

@hover:{
    background-color:#e0a800;
}

` 

export default function Cart() {

    const {cartItems, removeFromCart}= useContext(CartContext)
    const navigate = useNavigate()
    return(
        <CartContainer>
           <h1>Your Cart</h1>
           {
            cartItems.length === 0? (
             <p>Your cart is empty</p>
            ): (
                <>
                {cartItems.map((item)=>(
                <CartItem key={item.id}>
                    <h3>{item.name}</h3>
                    <p>{item.price}</p>
                    <Button onClick={() => removeFromCart(item.id)}>
                        Remove from cart
                    </Button>
                </CartItem>))}
                <Button onClick={()=>navigate('/place-order')}>Place Order</Button>
                </> 
            )}
            
           
        </CartContainer>
    )

}