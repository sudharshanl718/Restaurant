import React, { Fragment, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { FaTrash } from 'react-icons/fa';
import { toast } from 'react-toastify';

const Cart = ({ cartitems, setCartitems }) => {
  const [complete, setComplete] = useState(false)
  const [totalPrice, setTotalPrice] = useState(0)

  const increaseQty = (items) => {
    if (items.product.stock === items.qty) {
      return;
    }
    const updatedItems = cartitems.map((i) => {
      if (i.product._id === items.product._id) {
        return { ...i, qty: i.qty + 1 };
      }
      return i;
    });
    setCartitems(updatedItems);
  };

  const decreaseQty = (items) => {
    if (items.qty > 1) {
      const updatedItems = cartitems.map((i) => {
        if (i.product._id === items.product._id) {
          return { ...i, qty: i.qty - 1 };
        }
        return i;
      });
      setCartitems(updatedItems);
    }
  };

  const removeItems = (items) => {
    const updatedItems = cartitems.filter((i) => i.product._id !== items.product._id);
    setCartitems(updatedItems);
  };

  const calculateTotalPrice = () => {
    console.log('Type of cartitems:', typeof cartitems);
    const total = cartitems.reduce((sum, item) => sum + item.product.price * item.qty, 0).toFixed(2);
    setTotalPrice(total);
  };

  useEffect(() => {
    calculateTotalPrice();
  }, [cartitems]);

  const placeOrder = async () => {
    try {
      await fetch(`${process.env.REACT_APP_API_URL_ORDER}/order`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(cartitems),
      })

      .then(()=>{
        setCartitems([]);
        setComplete(true);
        toast.success('Order placed successfully!');
      })
    } catch (error) {
      toast.error('Failed to place the order');
    }
  };

  return (
    <div className='cart'>
      {cartitems.length > 0 ? (
        <div>
          <h1>Your Cart: {cartitems.length} item(s)</h1>
          <div>
            {cartitems.map((items) => (
              <Fragment key={items.product._id}>
                <div className="cart-item">
                  <img
                    src={items.product.images[0].image}
                    alt={items.product.name}
                    width="300px"
                    height="200px"
                  />
                  <Link to={`/products/${items.product._id}`} className="card-title" id='link'>
                    <h3 className='h3 ms-3'>{items.product.name}</h3>
                  </Link>
                  <h5 className="price ms-5 mb-4">${items.product.price}</h5>
                  <button className="minus px-3 ms-5" onClick={() => decreaseQty(items)}>-</button>
                  <button className="count px-3">{items.qty}</button>
                  <button className="plus px-3 ms-3" onClick={() => increaseQty(items)}>+</button>
                  <button className="bt7 px-3 ms-5" onClick={() => removeItems(items)}>
                    <FaTrash />
                  </button>
                </div>
              </Fragment>
            ))}
          </div>
          <div className="order-summary">
            <h3>Order Summary</h3>
            <hr />
            <p>
              Subtotal: <span>{cartitems.reduce((acc, item) => acc + item.qty, 0)} (Units)</span>
            </p>
            <p>
              Est. total: <span>${totalPrice}</span>
            </p>
            <hr />
            <button className="place-order" onClick={placeOrder}>
              Place Order
            </button>
          </div>
        </div>
      ) : (
        <h2 className="h2">Your cart is empty</h2>
      )}
    </div>
  );
};

export default Cart;