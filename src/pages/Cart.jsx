import React, { useState } from 'react';
import { useCart } from '../contexts/CartContext';
import Footer from '../components/footer';
import '../pages/Cart.css';

function Cart() {
  const { cart, getTotalAmount, removeFromCart } = useCart();
  const totalAmount = getTotalAmount();
  const [paymentOption, setPaymentOption] = useState('');
  const [orderPlaced, setOrderPlaced] = useState(false);

  const handleOrder = () => {
    if (paymentOption) {
      setOrderPlaced(true);
    } else {
      alert('Please select a payment option');
    }
  };

  return (
    <React.Fragment>
    <div className="cart-page">
      <h1>Shopping Cart</h1>
      {cart.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <>
          <ul>
            {cart.map((item, index) => (
              <li key={index} className="cart-item">
                <img src={item.image} alt={item.name} />
                <div className="cart-item-info">
                  <h2>{item.name}</h2>
                  <p>Price: ${item.price}</p>
                  <button className="remove" onClick={() => removeFromCart(item.id)}>Remove</button>
                </div>
              </li>
            ))}
          </ul>
          <div className="cart-total">
            <h2>Total Amount: ${totalAmount}</h2>
          </div>
          <div className="payment-options">
            <h3>Payment Options</h3>
            <label>
              <input
                type="radio"
                value="UPI"
                checked={paymentOption === 'UPI'}
                onChange={() => setPaymentOption('UPI')}
              />
              Pay with UPI
            </label>
            <label>
              <input
                type="radio"
                value="COD"
                checked={paymentOption === 'COD'}
                onChange={() => setPaymentOption('COD')}
              />
              Cash on Delivery
            </label>
          </div>
          <button className="order" onClick={handleOrder}>Order</button>
          {orderPlaced && <p>Thank you, your order has been received!</p>}
        </>
      )}
    </div>
    <Footer />
    </React.Fragment>
  );
}

export default Cart;

