import { getCategories } from '@/lib/fetching';
import { Button } from '@heroui/react';
import Link from 'next/link';
import React from 'react';

const CategoryList = async () => {

    const data = await getCategories()

    return (
        <div className='flex justify-center gap-2 mb-5'>
            {
                data.map(v => <Link key={v.id} href={`?category=${v.name.toLowerCase()}`}><Button variant='outline'>{v.name}</Button></Link>)
            }
        </div>
    );
};

export default CategoryList;