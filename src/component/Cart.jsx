import { getCarts } from '@/lib/fetching';
import React from 'react';
import CartItems from './CartItems';

const Cart = async () => {

    const photos = await getCarts()
    const data = photos.slice(0,8)
    console.log(data)

    return (
        <div>
            <h2 className='text-2xl font-bold mt-7'>Top Generations</h2>
            <CartItems></CartItems>
        </div>
    );
};

export default Cart;