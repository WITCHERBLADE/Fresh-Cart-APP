function Homepage(){
  return(
<div id="carouselExampleRide" className="carousel slide carousel-fade" data-bs-ride="true">
  <div className="carousel-inner">
    <div className="carousel-item active" data-bs-interval="2000">
      <img src="https://freshcart.codescandy.com/assets/images/slider/slide-1.jpg" className="d-block w-100" alt="..."/>
    </div>
    <div className="carousel-item" data-bs-interval="2000">
      <img src="https://freshcart.codescandy.com/assets/images/slider/slider-2.jpg" className="d-block w-100" alt="..."/>
    </div>
   
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleRide" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleRide" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
  )
};


export default Homepage;