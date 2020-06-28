import React from 'react'
import './Service.css'

function Service() {
    return (
        <div className="service-box">
            <div className="service">
            <i className="fas fa-sync-alt"></i>
                <p>7 Days return</p>
            </div>
            <div className="service">
                <i className="fas fa-hands-helping"></i>
                <p>Free Support</p>
            </div>
            <div className="service">
                <i className="fas fa-lock"></i>
                <p>Secure Payment</p>
            </div>
            <div className="service">
                <i className="fas fa-gift"></i>
                <p>New products weekly</p>
            </div>
        </div>
    )
}

export default Service
