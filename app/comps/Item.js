import React from 'react'

const Item=(props)=>{
    return(
        <article className='item' key={props.id}>
            <div className='item-rate'>{props.rate}</div>
            <div className='item-image'/>
            <div className='item-data'>
                <h3 className='item-title'>{props.name}</h3>
                <p className='item-date'>Release Date: {props.date}</p>
                <p className='item-summary'>{props.summary}</p>
            </div>
        </article>
    )
}

export default Item