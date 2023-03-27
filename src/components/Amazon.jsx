import React from 'react'
import list from '../data'
import Cards from './Cards'
import '../styles/cards.css'

export default function Amazon({ handleClick }) {
    return (
        <>
            <div className="flex">
                {list?.map((item) => {
                    return (
                        <>
                            <Cards item={item} key={item.id} handleClick={handleClick} />
                        </>
                    )
                })}
            </div>
        </>
    )
}
