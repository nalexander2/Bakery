import React, {createContext,useEffect,useState} from "react";


export const CartContext = createContext();

export const CartProvider = ({children}) => {
    const [cartItems, setCartItems] = useState(()=>{
      const cartItems = JSON.parse(localStorage.getItem('cartItems'));
      return cartItems? cartItems : [];  
    });

    useEffect(()=>{
        console.log("updated cartItems:", cartItems);
        localStorage.setItem('cartItems', JSON.stringify(cartItems));
    }, [cartItems]);

    const addToCart = (product)=>{
        console.log("addToCart -1->", product);
        setCartItems(prevItems => [...prevItems, product]);
    };
 
    const removeFromCart =(product) =>{
        console.log("removeFromCart-1->",product)
        setCartItems(prevItems => prevItems.filter(item=>item.id!==product));
    };

    const clearCart =() =>{
        setCartItems([]);
    };

    return (
        <CartContext.Provider value={{cartItems,addToCart,removeFromCart,clearCart}}>
            {children}
        </CartContext.Provider>
    )
}