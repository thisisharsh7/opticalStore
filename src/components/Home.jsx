import React from 'react'
import Product from './Product'

const Home = () => {
    return (
        <div className='flex flex-col gap-10'>
            <Product featured='Frames' type={0} />
            <Product featured='Lenses' type={1} />
            <Product featured='Cases' type={2} />
        </div>
    )
}

export default Home