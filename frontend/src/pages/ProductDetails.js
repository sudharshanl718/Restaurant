import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';

const ProductDetails = ({ cartitems, setCartitems }) => {
  const [product, setProduct] = useState(null);
  const [qty, setQty] = useState(1);
  const { id } = useParams();

  useEffect(() => {
    const fetchData = async () => {
        const data = await fetch(process.env.REACT_APP_API_URL+'/products/'+id);
        const response = await data.json();
        setProduct(response.product);
    }
    fetchData()
  }, []);

  const addToCart = () => {
    const itemExists = cartitems.find((item) => item.product._id === product._id);
    if (!itemExists) {
      const newitem = { product, qty };
      setCartitems((state) => [...state, newitem]);
      toast.success("Cart item added successfully");
    }
  };

  const increaseQty = () => {
    if (qty === product.stock) {
      return;
    }
    setQty((state)=>state+1)
  };

  const decreaseQty = () => {
    if (qty > 1) {
      setQty((state)=>state-1)
    }
  };

  return (
    <div className='mx-5'>
      {product && <div className="col">
          <div className="card" id='details'>
            <img src={product.images[0].image} className="card-img-top" alt={product.name} height="400px" fill/>
            <div className="card-body">
              <h5 className="card-title text-primary">{product.name}</h5>
              <p className="card-text">{product._id}</p>
              <h5>${product.price}</h5>
              <button className="minus px-3" onClick={decreaseQty}>-</button>
              <span className="count px-3">{qty}</span>
              <button className="plus px-3" onClick={increaseQty}>+</button>
              <button className="addcart btn-warning ms-5" onClick={addToCart} disabled={product.stock === 0}>Add to cart</button> <br/> <br/>
              <p>Status: {product.stock > 0 ? "In stock" : "Out of stock"}</p>
              <p className="card-title"><b>Description:</b></p>
              <p className="card-text">{product.description}</p>
            </div>
          </div>
        </div>}
        {
          !product && <>
            <p>No products</p>
          </>
        }
    </div>
  );
};

export default ProductDetails;