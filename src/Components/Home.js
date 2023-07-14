import React from 'react'
import { Link } from 'react-router-dom'
import { Carousel } from 'bootstrap'
export const Home = () => {
  return (
    <>
    <h1 id='topic'>Home page</h1>
    <button type="button" className="btn btn-primary mb-4">Submit</button>
        <div id="myCarousel" class="carousel slide" data-ride="carousel">
 
  <ol class="carousel-indicators">
    <li data-target="#myCarousel" data-slide-to="0" class="active"></li>
    <li data-target="#myCarousel" data-slide-to="1"></li>
    <li data-target="#myCarousel" data-slide-to="2"></li>
  </ol>
  <div class="carousel-inner">
    <div class="item active">
      
      <img src="images/2.jpg" alt="Los Angeles"/>
    </div>

    <div class="item">
      <img src="images/2.jpg" alt="Chicago"/>
    </div>

    <div class="item">
      <img src="images/2.jpg" alt="New York"/>
    </div>
  </div>
  <a class="left carousel-control" href="#myCarousel" data-slide="prev">
    <span class="glyphicon glyphicon-chevron-left"></span>
    <span class="sr-only">Previous</span>
  </a>
  <a class="right carousel-control" href="#myCarousel" data-slide="next">
    <span class="glyphicon glyphicon-chevron-right"></span>
    <span class="sr-only">Next</span>
  </a>
</div>
    </>
  )
}
export default Home