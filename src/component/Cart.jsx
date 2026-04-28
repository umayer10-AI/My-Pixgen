import { getCarts } from '@/lib/fetching';
import React from 'react';
import CartItems from './CartItems';

const Cart = async () => {

    const photos = await getCarts()
    const data = photos.slice(0,8)
    console.log(data)

    return (
        <div>
            <h2 className='text-2xl font-bold mt-7 mb-5'>Top Generations</h2>
            <div className='grid grid-cols-1 lg:grid-cols-4 gap-4'>
                {
                    data.map(v => <CartItems key={v.id} p={v}></CartItems>)
                }
            </div>
        </div>
    );
};

export default Cart;