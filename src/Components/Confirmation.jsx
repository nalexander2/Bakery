import React from 'react';
import styled from 'styled-components';


const FooterContainer = styled.header`
padding: 2rem;
text-align:center;



` 

export default function Confirmation(){
    return(
        <FooterContainer>
            <h1>Order Confirmed</h1>
            <p>Thanks for your order! your items will be delivered soon</p>
        </FooterContainer>
    )
}