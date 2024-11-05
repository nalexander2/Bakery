import React from "react";
import styled from 'styled-components';


const FooterContainer = styled.header`
 background-color: #333;
 color: #fff;
 text-align: center;
 padding: 2rem;
 position: fixed;
 width: 100%;
 bottom: 0;


` 

export default function Footer(){
    return(
        <FooterContainer>
            <p> &copy;2024 Bakery Shop. All rights reserved</p>
        </FooterContainer>
    )
}