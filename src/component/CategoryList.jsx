import { getCategories } from '@/lib/fetching';
import { Button } from '@heroui/react';
import React from 'react';

const CategoryList = async () => {

    const data = await getCategories()
    console.log(data)

    return (
        <div className='flex justify-center gap-2 mb-5'>
            {
                data.map(v => <Button key={v.id} variant='outline'>{v.name}</Button>)
            }
        </div>
    );
};

export default CategoryList;