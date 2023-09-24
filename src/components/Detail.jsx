import React, { useContext, useEffect } from 'react'
import products from './products.json'
import { Link, useLocation } from 'react-router-dom';
import { GlobalInfo } from '../App';

const Detail = () => {
    const { getProduct, setProduct } = useContext(GlobalInfo);
    const location = useLocation();
    const params = location.pathname.split('/').slice(2)
    const productId = params[1];
    const category = params[0];

    const filterCategory = (productId, category) => {
        const type = (category === "frame") ? 0 : (category === "lens") ? 1 : 2;
        const filteredProduct = products[type].filter(product => product.id === productId);
        return filteredProduct;
    };

    const filteredProduct = filterCategory(productId, category);
    useEffect(() => {
        setProduct([...getProduct, filteredProduct[0]])
    }, [])


    return (
        <div className="bg-gray-100">
            <div className="container mx-auto p-4">
                {
                    filteredProduct.map((product) => {
                        return (
                            <div className="bg-white rounded-lg shadow-lg p-6" key={product.id}>
                                <div className="mb-4">
                                    <p className="text-gray-700">{product.detail}</p>
                                </div>
                                <div className="text-right mb-4">
                                    <Link to={`/${product.next}`}>
                                        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Proceed to {product.next} Selection</button>
                                    </Link>
                                </div>
                                <div className='relative'>
                                    <img src={`../../assets/${product.goto}.jpg`} alt="" className="w-min rounded" />
                                    <p className=' text-green-800 absolute top-0 left-0 p-1.5 font-bold'>₹{product.price}</p>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Detail