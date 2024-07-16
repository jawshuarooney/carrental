import React from 'react';
import { Button, Carousel } from 'react-bootstrap';
import './App.css';

function Home() {
  return (
    <div className="home-container">
      <Carousel fade>
        <Carousel.Item>
          <img
            className="d-block w-100 carousel-image"
            src="homepic1.jpg"
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>Proton S70</h3>
            <p>Our newest model in the Proton Lineup. Ride with Style!</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 carousel-image"
            src="homepic2.jpg"
            alt="Second slide"
          />
          <Carousel.Caption>
            <h3>Proton Saga Anniversary Edition</h3>
            <p>Rent out the Limited Edition Proton Saga!</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 carousel-image"
            src="homepic3.jpg"
            alt="Third slide"
          />
          <Carousel.Caption>
            <h3>Proton x70</h3>
            <p>Need more space? Rent this beauty now!</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 carousel-image"
            src="homepic4.jpg"
            alt="Fourth slide"
          />
          <Carousel.Caption>
            <h3>Produa Ativa</h3>
            <p>Small but powerful 5-seater</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 carousel-image"
            src="homepic5.jpg"
            alt="Fifth slide"
          />
          <Carousel.Caption>
            <h3>Produa Bezza</h3>
            <p>The King of Realiability himself</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 carousel-image"
            src="homepic6.jpg"
            alt="Sixth slide"
          />
          <Carousel.Caption>
            <h3>Produa Aruz</h3>
            <p>Great for Friends and Family Roadtrips.</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      <div className="home-content text-center">
        <Button id='homebook' variant="orange" size="lg" as="a" href="/book">Book Now</Button>
        <p className='mt-1'>Instantly book your next ride!</p>
        <p>Worry-free rental.</p>
      </div>
    </div>
  );
}

export default Home;
