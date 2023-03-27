import React from 'react'
import '../styles/cards.css'


export default function Cards({item, handleClick}) {
    const {img, title, author, price} = item

    return (
        <>
            <div className="cards">
                <div className="image_box">
                    <img src={img} alt="sa" />
                </div>
                <div className="details">
                    <p>{title}</p>
                    <p>{author}</p>
                    <p>Price - {price}Rs</p>
                    <button onClick={() => handleClick(item)} >Add to Cart</button>
                </div>
            </div>
        </>
    )
}
