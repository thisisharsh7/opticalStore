import React from 'react'
import products from './products.json'
import { Link } from 'react-router-dom'

const Product = ({ featured, type }) => {
    return (
        <div className='container mx-auto p-4'>
            <h2 className="text-2xl mb-4 text-center underline ">Featured {featured}</h2>
            <div className=" grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 p-5">
                {
                    products[type] && products[type].map((product) => {
                        return (
                            <div className="bg-gray-100 p-6 rounded shadow" key={product.id}>
                                <div className='relative'>
                                    <img src={`./assets/${product.goto}.jpg`} alt="" className="mb-2 w-full" />
                                    <p className=' text-green-800 absolute top-0 right-0 p-1.5 font-bold'>₹{product.price}</p>
                                </div>
                                <Link to={`/detail/${product.category}/${product.id}`}>
                                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Select {product.title}</button>
                                </Link>
                            </div>
                        )
                    })
                }

            </div>
        </div>
    )
}

export default Product