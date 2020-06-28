import React, {Component} from 'react'
import './Home.css'
import gallery from '../../assets/Images/gallery.jpg'

import Service from '../../components/Service/Service'
import LatestProducts from '../../components/LatestProducts/LatestProducts'
import Contact from '../../components/Contact/Contact'

class Home extends Component {
    state = {
        latestProducts: [
            {
                title: 'Painting1',
                description: 'Description1',
                price: 10
            },
            {
                title: 'Painting2',
                description: 'Description2',
                price: 12
            },
            {
                title: 'Painting3',
                description: 'Description3',
                price: 13
            }
        ]
    }
    render() {
        return (
            <div className="main">
                <img className="gallery-img" src={gallery} alt="gallery-img" />
                <div className="slogan-card">
                    <h2>Art Gallery</h2>
                    <p>We bring the art to your cart</p>
                </div>
                <Service />
                <LatestProducts products={this.state.latestProducts} />
                <Contact />
            </div>
        )
    }
}

export default Home
