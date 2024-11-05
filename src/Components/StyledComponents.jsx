import styled from "styled-components";


export const ProductContainer = styled.div`
display: flex;
flex-wrap: wrap;
justify-content: space-between;
padding: 2rem;
margin-bottom: 1rem`


export const ProductCard = styled.div`
background:#fff;
border-radius: 8px;
box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1),
margin: 1rem;
margin-top: 1rem;
padding: 1rem;
transition: transform 0.2s;


&:hover{
  transform: scale(1.05);
}`