import React, { useEffect } from 'react'
import ProductCard from '../components/ProductCard'
import { useSearchParams } from 'react-router-dom'

const Home = ({product,setProduct}) => {
  const [searchParams,setSearchParams]=useSearchParams()

  useEffect(()=>{
    const fetchData=async()=>{
      const data=await fetch(process.env.REACT_APP_API_URL+'/products?'+searchParams)
      const response=await data.json()
      setProduct(response.products)
      // console.log(product)
    }
    fetchData()
  },[searchParams])
  return (
    <div className='home'> 
        <div id="carouselExampleAutoplaying" className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-inner">
              <div className="carousel-item active">
                <a className="nav-link" href="#tiffen"><img src="/images/products/tiffen.jpg" className="d-block w-100" alt="Tiffen" height="500px" /></a>
                <div className="carousel-caption d-none d-md-block">
                    <h5 className="text-dark bg-white">Choose your favorite tiffen item.</h5>
                </div>
              </div>
              <div className="carousel-item">
                <a className="nav-link" href="#lunch"><img src="/images/products/lunch.jpeg" className="d-block w-100" alt="Lunch" height="500px"  /></a>
                <div className="carousel-caption d-none d-md-block">
                    <h5 className="text-dark bg-white">Choose your favorite lunch item.</h5>
                </div>
              </div>
              <div className="carousel-item">
                <a className="nav-link" href="#dinner"><img src="/images/products/dinner.webp" className="d-block w-100" alt="Dinner" height="500px"  /></a>
                <div className="carousel-caption d-none d-md-block">
                    <h5 className="text-dark bg-white">Choose your favorite dinner item.</h5>
                </div>
              </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
              <span className="carousel-control-prev-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
              <span className="carousel-control-next-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Next</span>
            </button>
        </div>
        <br /><br />

        <div className="row row-cols-1 row-cols-md-3 g-4">
            <div className="col" id='tiffen'>
              <div className="card">
                <img src="/images/products/tiffen.jpg" className="card-img-top" alt="Tiffen" width="100px" height="200px"  />
                <div className="card-body">
                  <h5 className="card-title">Tiffen</h5>
                  <p className="card-text">Tiffins offer a variety of delicious options, perfect for quick breakfasts. Common types include Idli, Dosa, Upma, Pongal, Poha, Paratha, Vada, Uttapam, Pesarattu, Aloo Puri, Sabudana Khichdi, and Samosa. Each dish brings unique flavors and textures. Enjoy a delightful meal!
                  </p>
                  <a className="nav-link" href="#products"><button className="card-button">View more</button></a>
                </div>
              </div>
            </div>
            <div className="col" id='lunch'>
              <div className="card">
                <img src="/images/products/lunch.jpeg" className="card-img-top" alt="Lunch" width="100px" height="200px"  />
                <div className="card-body">
                  <h5 className="card-title">Lunch</h5>
                  <p className="card-text">Here’s the lunch types, including vegetarian and non-vegetarian options:
                    Meals include rice, sambar, rasam, curd, and curries. Non-veg options feature chicken biryani, fish curry, mutton fry, egg curry, while dosa, idli, vada, and uttapam remain popular.
                  </p>
                  <a className="nav-link" href="#products"><button className="card-button">View more</button></a>
                </div>
              </div>
            </div>
            <div className="col" id='dinner'>
              <div className="card">
                <img src="/images/products/dinner.webp" className="card-img-top" alt="dinner" width="100px" height="200px"  />
                <div className="card-body">
                  <h5 className="card-title">Dinner</h5>
                  <p className="card-text">Here’s the dinner items:
                    Dinners feature a variety of vegetarian dishes like sambar rice, vegetable kurma, and pongal, alongside non-vegetarian options such as chicken curry and fish curry. Accompaniments include chapati, pickles, and chutneys, while desserts like payasam and gulab jamun add a sweet finish to the meal.
                  </p>
                  <a className="nav-link" href="#products"><button className="card-button">View more</button></a>
                </div>
              </div>
            </div>
          </div>
          <br /> <br />
          <div>
            <h3>List of food items:</h3>
            <br/>
            <div className="row row-cols-1 row-cols-md-3 g-4" id='products'>
              {product.map((product) => (
                <ProductCard product={product} />
              ))}
            </div>
          </div>
        </div>
  )
}

export default Home