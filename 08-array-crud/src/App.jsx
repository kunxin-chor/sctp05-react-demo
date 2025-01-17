import React, { useEffect, useState } from 'react'
import axios from 'axios'


export default function App() {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const response = await axios.get('products.json');
            setProducts(response.data);
        }
        fetchData();


    }, [])

    const deleteItem = (idToDelete) => {
        const indexToDelete = cart.findIndex(c=>c.id === idToDelete);
        const left = cart.slice(0, indexToDelete);
        const right = cart.slice(indexToDelete + 1);
        const cloned = [...left, ...right];
        setCart(cloned);
    }

    return (
        <>
            <h1>Simple Shopping Cart</h1>
            <ul>
                {products.map(p => (
                    <li key={p.id}>
                        {p.name}
                        <button onClick={() => {
                            const existingProductIndex = cart.findIndex(c => c.id === p.id);
                            if (existingProductIndex === -1) {
                                const cloned = [...cart, {
                                    id: p.id,
                                    name: p.name,
                                    price: p.price,
                                    quantity: 1
                                }];
                                setCart(cloned);
                            } else {
                                // adding an existing product to the shopping cart again
                                const clonedCartItem = { ...cart[existingProductIndex] };
                                clonedCartItem.quantity += 1;

                                const left = cart.slice(0, existingProductIndex);
                                const right = cart.slice(existingProductIndex + 1);

                                const cloned = [...left, clonedCartItem, ...right];
                                setCart(cloned);
                            }


                        }}>Add</button>


                    </li>
                ))}
            </ul>
            <h2>Shopping Cart</h2>
            <ul>
                {
                    cart.map(c => (
                        <li key={c.id}>
                            {c.name} x {c.quantity} ({c.quantity * c.price})
                            <button onClick={() => {
                                console.log(c.id)
                                deleteItem(c.id)
                            }}>Delete</button>

                        </li>
                    ))
                }
            </ul>
        </>
    )
}