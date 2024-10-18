import React from 'react';
import { Link } from 'react-router-dom';

const ProductCard = ({ product }) => {
  return (
    <div className="col">
      <div className="card">
        <Link to={`/products/${product._id}`}><img src={product.images[0].image} className="card-img-top" alt={product.name} width="100px" height="300px" /></Link>
        <div className="card-body">
          <Link to={`/products/${product._id}`} className="card-title" id='title'><h3 className='h3'>{product.name}</h3></Link>
          <p>{product.description}</p>
          <h5>${product.price}</h5>
          <Link to={`/products/${product._id}`}>
            <button className="bt3">View Details</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;