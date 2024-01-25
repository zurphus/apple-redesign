import React, { createContext, useState, useContext } from 'react';

const CartContext = createContext();

export const useCart = () => {
    return useContext(CartContext);
};

export const CartProvider = ({ children }) => {
    const [cartItems, setCartItems] = useState([]);

    const addToCart = (product) => {
        
        const duplicate = cartItems.find(item => item.id === product.id);

        if (duplicate) {
            // Handle duplicates by updating the count
            setCartItems(prevCartItems =>
                prevCartItems.map(item =>
                    item.id === product.id ? { ...item, count: item.count + 1 } : item
                )
            );
        } else {
            // If it's a new product, add it to the cart with a count of 1
            setCartItems((prevCartItems) => [...prevCartItems, { ...product, count: 1 }]);
        }
       
    };

    const removeFromCart = (productId) => {
        setCartItems((prevCartItems) => {
            const indexToRemove = prevCartItems.findIndex((item) => item.id === productId);
        
            if (indexToRemove !== -1) {
                const updatedCart = [...prevCartItems];
                updatedCart.splice(indexToRemove, 1);
                return updatedCart;
            }
        
            return prevCartItems;
        });
    };

    const clearCart = () => {
        setCartItems([]);
    };

    return (
        <CartContext.Provider
            value={{
                cartItems,
                addToCart,
                removeFromCart,
                clearCart,
            }}>
            {children}
        </CartContext.Provider>
    );
};
