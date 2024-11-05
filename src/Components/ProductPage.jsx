import React from "react";


import products from'../Ndata/Products';

import { ProductContainer,ProductCard } from "./StyledComponents";


import {Link} from "react-router-dom";

export default function ProductPage(){
    console.log(products)
    return(
        <ProductContainer>
            {
                products.map((products) => (
                    <ProductCard key={products.id}>
                        <img src={products.image} alt={products.name} style={{width:200,height:150}}/>
                        <h3>{products.name}</h3>
                        <p>{products.description}</p>
                        <p>${products.price}</p>
                        <Link to ={`/Products/${products.id}`} >view Details</Link>

                    </ProductCard>
                ))
            }
          
        </ProductContainer>
    )
}