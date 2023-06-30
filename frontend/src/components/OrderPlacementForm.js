import React, { useState } from "react";
import { placeOrder } from '../services/api';

function OrderPlacementForm() {
    const [address, setAddress] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await placeOrder({ address });
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="Shipping Address"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
            />
            <button type="submit">Place Order</button>
        </form>
    );
}

export default OrderPlacementForm;