import React from "react";

import styled from 'styled-components';


const HeaderContainer = styled.header`
 background-color: #ffe4b5;
 padding 1rem;
 display: flex;
 justify-content: space-between;
 align-items: center;
 box-shadow: 0 4px 8px rbga(0,0,0,0.1);
` 
const NavLinks = styled.header`
 display: flex;
 gap:1rem
` 
export default function Header(){
    return(
        <HeaderContainer>
            <h1>Nicks Bakery</h1>
           <NavLinks>
            <a href="/">Home</a>
            <a href="/products">Products</a>
            <a href="/cart">Cart</a>
            <a href="/place-order">Place Order</a>
            <a href="/confirmation">Confirmation</a>
           </NavLinks>
        </HeaderContainer>
    )
}