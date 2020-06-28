import React from 'react'
import art from '../../../assets/Images/art.jpg'
import './Product.css'

const product = (props) => (
    <div id="prod1" className="product">
        <img className='art-img' src={art} alt="product" />
        <p className="art-name">{props.item.title}</p>
        <p className="price">${props.item.price}</p>
        <button className="img-btn">Add to cart</button>
        <button className="img-btn">Description</button>
    </div>
)

export default product