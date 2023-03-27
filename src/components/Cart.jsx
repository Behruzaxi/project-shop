import React, { useEffect, useState } from 'react'
import '../styles/cart.css'

export default function Cart({ cart }) {
    const [price, setPrice] = useState(0);

    console.log(cart)


    const handlePrice = () => {
        let a = 0;
        cart.map((item) => (
            a += item.amount * item.price
        ))
        setPrice(a);
    }


    useEffect(() => {
        handlePrice()
    }, [])

    return (
        <div>
            <article>
                {
                    cart?.map((item) => (
                        <div className="cart_box" key={item.id}>
                            <div className="cart_img">
                                <img src={item.img} alt="ppp" />
                                <p>{item.title}</p>
                            </div>

                            <div>
                                Price: <span>{item.price}</span>
                            </div>
                        </div>
                    ))}
                <div className='total'>
                    <span>Total Price of your Cart</span>
                    <span>Rs - {price}</span>
                </div>
            </article>
        </div>
    )
}
