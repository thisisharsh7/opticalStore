import React, { useContext } from 'react'
import { GlobalInfo } from '../App'

const Cart = () => {
    const { getProduct, setProduct } = useContext(GlobalInfo);
    const total = getProduct.reduce((prev, next) => prev + next.price, 0);

    const alertMsg = () => {
        alert('You are checked out.')
    }
    const clearProducts = () => {
        if (getProduct.length !== 0) {
            setProduct([]);
            setTimeout(alertMsg, 800);
        } else {
            alert('Cart is empty!')
        }

    }

    return (
        <div className='container mx-auto my-4'>
            <div className="mx-5  p-4 bg-white shadow-lg">
                <h2 className="text-2xl mb-4">Shopping Cart</h2>
                <div className="flex flex-col">
                    {
                        getProduct && getProduct.map((product, index) => {
                            return (
                                <div className="flex items-center mb-4" key={index}>
                                    <img src={`../../assets/${product.goto}.jpg`} alt="" className="w-16 h-16 rounded mr-4" />
                                    <div>
                                        <h3 className="text-lg">{product?.title}</h3>
                                        <p className="text-green-600">₹{product?.price}</p>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
                <div className="mt-8">
                    <h3 className="text-xl mb-2">Cart Summary</h3>
                    <div className="flex gap-4">
                        <span>Total:</span>
                        <span className="text-green-600">₹{total}</span>
                    </div>
                    <button className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={clearProducts}>Checkout</button>
                </div>
            </div>
        </div>
    )
}

export default Cart