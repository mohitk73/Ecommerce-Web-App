import React from 'react';
import { Link } from 'react-router-dom';
import './shop.css';
import { FaStar } from 'react-icons/fa';
import shopimage from '../assets/shopimage.jpg';
import loveseatsofa from '../assets/loveseatsofa.jpg';
import tablelamp from '../assets/tablelamp.jpg';
import beigelamp from '../assets/beigelamp.jpg';
import basket from '../assets/basket.jpg';
import kitchenimg from '../assets/kitchenimg.jpg';
import whitedrawer from '../assets/whitedrawer.jpg';
import Whitepillow from '../assets/Whitepillow.jpg';
import blacktable from '../assets/blacktable.jpg';
import cozysofa from '../assets/cozysofa.jpg';
import Newsletter from '../components/Newsletter';
import Footer from '../components/footer';

const products = [
  { id: 1, name: 'Loveseat Sofa', image: loveseatsofa, price: 199 },
  { id: 2, name: 'Table Lamp', image: tablelamp, price: 200 },
  { id: 3, name: 'Beige Table Lamp', image: beigelamp, price: 220 },
  { id: 4, name: 'Basket', image: basket, price: 130 },
  { id: 5, name: 'Toaster', image: kitchenimg, price: 400 },
  { id: 6, name: 'White Pillow', image: Whitepillow, price: 100 },
  { id: 7, name: 'White Drawer', image: whitedrawer, price: 130 },
  { id: 8, name: 'Cozy Sofa', image: cozysofa, price: 460 },
  { id: 9, name: 'Black Side Table', image: blacktable, price: 150 }
];

function Shop() {
  return (
    <React.Fragment>
      <div className="shop-header" style={{ backgroundImage: `url(${shopimage})` }}>
        <div className="shop-header-content">
          <h1>Home &gt; <span>Shop</span></h1>
          <h2>Shop Page</h2>
          <p>Let's design the place you always imagined</p>
        </div>
      </div>
      <div className="shop-content">
        <div className="filter-options">
          <select>
            <option value="all">All Categories</option>
            <option value="Storage">Storage</option>
            <option value="Furniture">Furniture</option>
            <option value="Bedding">Bedding</option>
            <option value="Basket">Kitchen</option>
            <option value="Lightning">Lightning</option>
          </select>
          <select>
            <option value="all">All Prices</option>
            <option value="price1">$199</option>
            <option value="price2">$200</option>
            <option value="price3">$220</option>
            <option value="price4">$130</option>
            <option value="price5">$400</option>
          </select>
        </div>
        <div className='product-container'>
          {products.map(product => (
            <Link key={product.id} to={`/product/${product.id}`}>
              <div className='products'>
                <div className='product-image' style={{ backgroundImage: `url(${product.image})` }}>
                  <h3>New</h3>
                  <p>-50%</p>
                  <button>Add To Cart</button>
                </div>
                <div className='product-price'>
                  <p><FaStar /><FaStar /><FaStar /><FaStar /><FaStar /></p>
                  <h6>{product.name}</h6>
                  <p>${product.price}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
        <button className='show'>Show More</button>
      </div>
      <Newsletter />
      <Footer />
    </React.Fragment>
  );
}

export default Shop;

