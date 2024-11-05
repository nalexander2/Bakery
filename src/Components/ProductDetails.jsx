import React, { useContext } from "react";

import { useParams} from "react-router-dom";
import products from "../Ndata/Products";
import { CartContext } from "../context/CartContext";

export default function ProductDetails(){
    const {id} = useParams();

    const {addToCart} = useContext(CartContext)

    const product = products.find(p => p.id === parseInt(id));
    return(
        <div>
           <h1>{product.name}</h1>
           <img src={product.image} style= {{width:600, height:500}}/>
           <p>{product.description}</p>
           <button onClick={()=>addToCart(product)}>Add to the cart</button>
        </div>
    )
}