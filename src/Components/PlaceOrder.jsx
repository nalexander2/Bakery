import React,{useState, useContext} from "react";
import styled from 'styled-components';
import { CartContext} from "../context/CartContext.jsx";
import { useNavigate } from "react-router-dom";

const OrderContainer = styled.div`
bpadding:2rem;
` 
const Form = styled.form`
display: flex;
flex-direction: column;
gap: 1 rem
` 
const Input = styled.input`
padding: 0.5rem;
border: 1 px solid #ccc;
border-radius: 4px
` 
const Button = styled.button`
padding: 0.5rem;
background-color: #f8b400;
border: none;
border-radius: 4px;
cursor: pointer;
color: white;
font-weight: bold

&:hover{
    background-color:#e0a800
    color: white;
    border: 1px solid #f8b400;
    cursor:pointer;
    font-weight: bold;
    transition: all 0.2s ease-in-out;
}`

export default function PlaceOrder(){
    const {clearCart}= useContext(CartContext)
    const [name,setName]= useState('')
    const [address,setAddress]= useState('')
    const navigate = useNavigate()

    const handleSubmit=(e) =>{
        e.preventDefault()
       clearCart()
       navigate('/confirmation')
     
    }
    return(
        <OrderContainer>
          <h1>Place Order</h1>
          <Form onSubmit={handleSubmit}>
            <Input type="text" placeholder="Name" value={name} onChange={(e)=> setName(e.target.value)}/>
            <Input type="text" placeholder="Address" value={address} onChange={(e)=> setAddress(e.target.value)}/>
            {/* <input type="text" placeholder="City" />
            <input type="text" placeholder="State" />
            <input type="text" placeholder="Pincode" /> */}
            <Button type="submit">Place Order</Button>
          </Form>
        </OrderContainer>
    )
}