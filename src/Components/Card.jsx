import React from 'react'


export default function Card(props){

    return(
        <section className='card-container'>
            <img src={`images/${props.Image}`} className='card-image'/>
            <div className='card-info'>
                <p className='card-head'>
                    <img src="images/pin.png" className='card-pin' />
                    <span className="card-contry"> {props.country} </span>
                    <span className='grey-underline'>View on google maps</span>
                    </p>
                <h3 className='card-title'>{props.location}</h3>
                <p className='strong'>{props.date}</p>
                <p className='card-description'>{props.description}</p>
            </div>
        </section>
    )

}