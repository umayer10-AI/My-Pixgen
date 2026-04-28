import CartItems from '@/component/CartItems';
import CategoryList from '@/component/CategoryList';
import { getCarts } from '@/lib/fetching';
import React from 'react';

const page = async ({searchParams}) => {

    const data = await getCarts()
    const {category} = await searchParams
    const a = category? data.filter(v => v.category.toLowerCase() === category.toLowerCase()) : data
    console.log(a)

    return (
        <div>
            <h2 className='text-2xl font-bold my-5'>All Photos</h2>

            <CategoryList></CategoryList>

            <div className='grid grid-cols-1 lg:grid-cols-4 gap-4'>
                {
                    a.map(v => <CartItems key={v.id} p={v}></CartItems>)
                }
            </div>
        </div>
    );
};

export default page;