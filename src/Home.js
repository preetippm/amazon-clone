import React from 'react'
import './Home.css'
import Product from './Product'

function Home() {
  return (
    <div className='home'>
        <div className="home__container">
            <img className="home__image" src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg" alt=""/>

            <div className="home__row">
                <Product 
                title="The Lean Startup: How Today's Entrepreneurs Use Continuous Innovation to Create Radically Successful Businesses Hardcover – Illustrated, 13 September 2011"
                price={29.99}
                image="https://images-na.ssl-images-amazon.com/images/I/81-QB7nDh4L.jpg"
                rating={2} />
                <Product 
                title="BM Wood Furniture™ Solid Sheesham Wood U Shaped Wall Shelves Floating Racks for Living Room | Wooden Wall Shelves for Bedroom | Solid Wood Wall Shelves | (Brown) |" 
                price={65.77} 
                image="https://cdn.shopify.com/s/files/1/1306/4195/products/wallmantra-shadow-lamp-lord-ganesa-creative-shadow-lamp-30130570264742_1024x1024.jpg?v=1628504590" 
                rating={5}/>
            </div>
            <div className="home__row">
                <Product 
                title="Wonderchef 3 Litres 1000 Watt Cooker (63153102, Silver)" 
                price={30.00} 
                image="https://www.junglescout.com/wp-content/uploads/2021/01/product-photo-limits.png" 
                rating={3}/>
               <Product 
                title="Apple iPhone 13 Pro Max (256GB) - Sierra Blue" 
                price={100.00} 
                image="https://asset.conrad.com/media10/isa/160267/c1/-/en/002471202PI00/image.jpg" 
                rating={5}/>
                <Product 
                title="2020 Apple MacBook Pro (13.3-inch/33.78 cm, Apple M1 chip with 8‑core CPU and 8‑core GPU, 8GB RAM, 256GB SSD) - Silver" 
                price={1000.00} 
                image="https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/mbp16-spacegray-select-202110?wid=904&hei=840&fmt=jpeg&qlt=90&.v=1632788574000" 
                rating={5}/>
            </div>
            <div className="home__row">
            
            <Product 
                title="Apple Watch Series 7 (GPS + Cellular, 45mm) - Blue Aluminium Case with Abyss Blue Sport Band - Regular" 
                price={500.00} 
                image="https://www.apple.com/euro/watch/home/q/screens_gps/images/meta/gps-lte/og__n5qzveqr596m.png" 
                rating={3}/>         
            </div>      

        </div>
    </div>
  )
}

export default Home