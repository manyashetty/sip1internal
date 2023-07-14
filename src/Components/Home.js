import React from 'react'
import { Link } from 'react-router-dom'
import { Carousel } from 'react-bootstrap';
import pic from "./first1.jpg";
import pic1 from "./second2.jpg";
import pic2 from "./four.jpg";
import "./Home.css"
export const Home = () => {
  return (
    <>
        
         <div>
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block "
          src={pic}
          alt="First slide" 
        />
        <Carousel.Caption>
          <h3 id='text'>"The beautiful thing about learning is that no one can take it away from you." - B.B. King</h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block "
          src={pic1}
          alt="Second slide" 
        />
        <Carousel.Caption>
          <h3 id='text'>"Education is the key to unlocking the world, a passport to freedom." - Oprah Winfrey</h3>
          
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block "
          src={pic2}
          alt="Third slide" 
        />
        <Carousel.Caption>
          <h3 id='text'>"The aim of education should be to teach us how to think, rather than what to think." - Bill Beattie</h3>
          
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    </div>
    </>
  )
}
export default Home