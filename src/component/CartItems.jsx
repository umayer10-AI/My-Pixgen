import Image from 'next/image';
import React from 'react';

const CartItems = () => {
    return (
        <div>
            <div>
                <Image height={100} width={100} className='w-full h-60 object-cover rounded-2xl' src={"https://i.pinimg.com/1200x/04/6a/ef/046aef3824fc35cd1ad0bff0f253619a.jpg"} alt='image'></Image>
            </div>
            <h2 className='font-semibold'>Realistic Portrait AI</h2>
            <div>
                
            </div>
        </div>
    );
};

export default CartItems;