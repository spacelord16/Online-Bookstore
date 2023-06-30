import React, {useEffect, useState} from "react";
import { getCartItem, updateCartItem, deleteCartItem } from "../services/api";

function ShoppingCart() {
    const [cartItems, setCartItems] = useState([]);

    useEffect(() => {
        fetchCartItems();
    }, []);

    const fetchCartItems = async ()=> {
        try {
            const response = await getCartItem();
            setCartItems(response.data);
        } catch (error) {
            console.error(error);
        }
    };
    
    const handleQuantityChange = async (itemId, quantity) => {
        try {
            await updateCartItem(itemId, { quantity });
            fetchCartItems();
        } catch (error) {
            console.error(error);
        }
    };

    const handleDeleteItem = async (itemId) => {
        try {
            await deleteCartItem(itemId);
            fetchCartItems();
        } catch (error) {
            console.error(error);
        }
    }

    return (
        <div>
            {cartItems.map((item) => (
                <div key={item.id}>
                    <h3>{item.book.title}</h3>
                    <p>Quantity: {item.quantity}</p>
                    <input
                        type="number"
                        min="1"
                        value={item.quantity}
                        onChange={(e) => handleQuantityChange(item.id, e.target.value)}
                    />
                    <button onClick={() => handleDeleteItem(item.id)}>Remove</button>
                </div>
            ))}
        </div>
    ); 
}

export default ShoppingCart;