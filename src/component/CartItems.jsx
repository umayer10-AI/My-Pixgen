import { Button, Chip } from '@heroui/react';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { FaHeart } from 'react-icons/fa';
import { MdOutlineFileDownload } from 'react-icons/md';

const CartItems = async ({p}) => {

    return (
        <div className='space-y-3 border p-4 rounded-2xl shadow-xl'>
            <div className='relative aspect-square'>
                <Image fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className='object-cover rounded-2xl' src={p.imageUrl} alt='image'></Image>
                <Chip size='sm' className='absolute top-2 right-2'>{p.category}</Chip>
            </div>
            <h2 className='font-semibold'>{p.title}</h2>
            <div className='flex items-center'>
                <h2 className='flex items-center gap-2 pr-5 border-r'><FaHeart /> {p.likes}</h2>
                <h2 className='flex items-center gap-1 pl-5'><MdOutlineFileDownload className='text-2xl'/> {p.downloads}</h2>
            </div>
            <Link href={`/all-photos/${p.id}`}><Button className={'w-full bg-linear-to-r from-pink-500 via-purple-500 bg-red-500'}>View</Button></Link>
        </div>
    );
};

export default CartItems;