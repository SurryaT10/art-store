import React from "react";
import "./LatestProducts.css";
import Product from './Product/Product'


const latestProducts = (props) => {
    const products = props.products.map(prodId => (
        <Product key={prodId.title} item={prodId} />
    ))
    return (
        <div className="latest-products-div">
            <h3 className="latest-products-title">Latest Products</h3>
            <div className="products">
                {products}
            </div>
            <div className="slide">
            </div>           
        </div>
    );
}

export default latestProducts;
