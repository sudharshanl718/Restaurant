import './App.css';
import React, { useEffect, useState } from 'react'
import Header from './components/Header'
import Home from './pages/Home'
import Footer from './components/Footer'
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ProductDetails from './pages/ProductDetails';
import Cart from './components/Cart';
import About from './components/About';
import Contact from './components/Contact';

const App = () => {
  const [cartitems,setCartitems]=useState([])
  const [product,setProduct]=useState([])
  const [fetchError,setFetchError]=useState(null)

  useEffect(()=>{
    const fetchItems=async()=>{
        const response=await fetch(`${process.env.REACT_APP_API_URL_CART}/cart`);
        const listitems=await response.json();
        setCartitems(listitems);
        setFetchError(null)
    }
    (async()=>await fetchItems())()
  },[])
  
  return (
    <div className='app'>
      <Router>
        <ToastContainer theme='dark' position='top-right' />
        <Header cartitems={cartitems} />
        <Routes>
          <Route path='/' element={<Home product={product} setProduct={setProduct} />} />
          <Route path='/about' element={<About product={product} setProduct={setProduct}/>} />
          <Route path='/contact' element={<Contact product={product} setProduct={setProduct}/>} />
          <Route path='/search' element={<Home product={product} setProduct={setProduct} />} />
          <Route path='/products/:id' element={<ProductDetails cartitems={cartitems} setCartitems={setCartitems} />} />
          <Route path='/cart' element={<Cart cartitems={cartitems} setCartitems={setCartitems} product={product} setProduct={setProduct} />} />
        </Routes>
      </Router>
      <Footer />
    </div>
  )
}

export default App