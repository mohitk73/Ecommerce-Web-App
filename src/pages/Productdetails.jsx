import React from 'react';
import { useParams } from 'react-router-dom';
import { FaStar, FaHeart } from 'react-icons/fa';
import Newsletter from '../components/Newsletter';
import Footer from '../components/footer';
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
import { useCart } from '../contexts/CartContext';
import '../pages/Productdetails.css';

const products = [
  { id: 1, name: 'Loveseat Sofa', image: loveseatsofa, price: 199, description: 'A comfortable loveseat sofa.', measurements: '40x60 cm', sku: '1111', category: 'Furniture' },
  { id: 2, name: 'Table Lamp', image: tablelamp, price: 200, description: 'A stylish table lamp.', measurements: '30x50 cm', sku: '1112', category: 'Lighting' },
  { id: 3, name: 'Beige Table Lamp', image: beigelamp, price: 220, description: 'A beige table lamp.', measurements: '30x50 cm', sku: '1113', category: 'Lighting' },
  { id: 4, name: 'Basket', image: basket, price: 130, description: 'A versatile basket.', measurements: '40x40 cm', sku: '1114', category: 'Storage' },
  { id: 5, name: 'Toaster', image: kitchenimg, price: 400, description: 'A fast toaster.', measurements: '20x30 cm', sku: '1115', category: 'Kitchen' },
  { id: 6, name: 'White Pillow', image: Whitepillow, price: 100, description: 'A comfortable white pillow.', measurements: '50x70 cm', sku: '1116', category: 'Bedding' },
  { id: 7, name: 'White Drawer', image: whitedrawer, price: 130, description: 'A spacious white drawer.', measurements: '80x100 cm', sku: '1117', category: 'Furniture' },
  { id: 8, name: 'Cozy Sofa', image: cozysofa, price: 460, description: 'A cozy sofa.', measurements: '100x200 cm', sku: '1118', category: 'Furniture' },
  { id: 9, name: 'Black Side Table', image: blacktable, price: 150, description: 'A sleek black side table.', measurements: '50x50 cm', sku: '1119', category: 'Furniture' }
];

function ProductDetails() {
  const { id } = useParams();
  const product = products.find(p => p.id.toString() === id);
  const { addToCart } = useCart();

  if (!product) {
    return <div>Product is not found</div>;
  }
  const handleAddToCart = () => {
    addToCart(product);
  };

  return (
    <React.Fragment>
    <div>
      <div className="shop-header" style={{ backgroundImage: `url(${shopimage})` }}>
        <div className="shop-header-content">
          <h1>Home &gt; <span>Shop</span>&gt;<span>Product</span></h1>
          <h2>Product Detail Page</h2>
          <p>Let's design the place you always imagined</p>
        </div>
      </div>
      <div className="product-details">
        <div className="product-image" style={{ backgroundImage: `url(${product.image})` }}></div>
        <div className="product-info">
          <h2>{product.name}</h2>
          <p>{product.description}</p>
          <p>
            <FaStar style={{ color: 'black' }} />
            <FaStar style={{ color: 'black' }} />
            <FaStar style={{ color: 'black' }} />
            <FaStar style={{ color: 'black' }} />
            <FaStar style={{ color: 'black' }} />
          </p>
          <p className="price">Price: ${product.price}</p>
          <p className="measure">Measurements: {product.measurements}</p>
          <p className="sku">SKU: {product.sku}</p>
          <p className="category">Category: {product.category}</p>
          <button className='wishlist'><FaHeart /> Wishlist</button>
          <button className='addcart' onClick={handleAddToCart}>Add to Cart</button>
        </div>
      </div>
    </div>
    <Newsletter />
      <Footer />
    </React.Fragment>
  );
}

export default ProductDetails;

