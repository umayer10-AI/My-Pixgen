import CartItems from '@/component/CartItems';
import { getCarts } from '@/lib/fetching';
import React from 'react';

const page = async () => {

    const data = await getCarts()

    return (
        <div>
            <h2>{data.length}</h2>
            <div className='grid grid-cols-1 lg:grid-cols-4 gap-4'>
                {
                    data.map(v => <CartItems key={v.id} p={v}></CartItems>)
                }
            </div>
        </div>
    );
};

export default page;