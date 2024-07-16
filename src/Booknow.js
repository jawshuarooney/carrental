import React, { useState } from 'react';
import './App.css'; // Import CSS for custom styling

// Sample data for cars
const cars = [
    {
        id: 1,
        name: 'Proton Saga Anniversary Edition',
        image: 'saga.jpg',
        type: 'Sedan',
        fuel: 'Gasoline',
        seats: '5 Seats',
        shift: 'Automatic',
        pricePerDay: 250,
      },
      {
        id: 2,
        name: 'Proton S70',
        image: 's70.jpg',
        type: 'Sedan',
        fuel: 'Gasoline',
        seats: '5 Seats',
        shift: 'Automatic',
        pricePerDay: 400,
      },
      {
        id: 3,
        name: 'Proton x70',
        image: 'x70.webp',
        type: 'SUV',
        fuel: 'Gasoline',
        seats: '7 Seats',
        shift: 'Automatic',
        pricePerDay: 800,
      },
      {
        id: 4,
        name: 'Produa Bezza',
        image: 'bezza.webp',
        type: 'Sedan',
        fuel: 'Gasoline',
        seats: '5 Seats',
        shift: 'Automatic',
        pricePerDay: 250,
      },
      {
        id: 5,
        name: 'Produa Ativa',
        image: 'ativa.webp',
        type: 'Sedan',
        fuel: 'Gasoline',
        seats: '5 Seats',
        shift: 'Automatic',
        pricePerDay: 300,
      },
      {
        id: 6,
        name: 'Produa Aruz',
        image: 'aruz.png',
        type: 'SUV',
        fuel: 'Gasoline',
        seats: '7 Seats',
        shift: 'Automatic',
        pricePerDay: 800,
      },
  // Add more cars as needed
];

function Booknow() {
    const [selectedCar, setSelectedCar] = useState(null);
    const [rentalDuration, setRentalDuration] = useState(1); // Default duration is 1 day
    const [searchTerm, setSearchTerm] = useState('');
  
    const handleCarSelect = (car) => {
      setSelectedCar(car);
    };
  
    const handleDurationChange = (e) => {
      setRentalDuration(parseInt(e.target.value));
    };
  
    const calculatePrice = () => {
      if (selectedCar) {
        return selectedCar.pricePerDay * rentalDuration;
      }
      return 0;
    };
  
    const handleSearchChange = (e) => {
      const value = e.target.value;
      setSearchTerm(value);
      const selectedCar = cars.find((car) => car.name.toLowerCase() === value.toLowerCase());
      setSelectedCar(selectedCar);
    };
  
    return (

      <div className="booking-container">
        <img src="wheeldealname.png" alt="Wheel Deal Rentals Logo" className="logo-image2"></img>
        <h2 className="text-center">Book a Car, Search car name below.</h2>
        <div className="search-container">
          <input
            type="text"
            placeholder="Search for a car..."
            className="form-control"
            value={searchTerm}
            onChange={handleSearchChange}
            list="carOptions"
          />
          <datalist id="carOptions">
            {cars.map((car) => (
              <option key={car.id} value={car.name} />
            ))}
          </datalist>
        </div>
        {selectedCar && (
          <div className="selected-car">
            <img src={selectedCar.image} alt={selectedCar.name} className="car-image1" />
            <p>Car type: {selectedCar.type}</p>
              <p>Fuel type: {selectedCar.fuel}</p>
              <p>No. of Seats: {selectedCar.seats}</p>
              <p>Transition Type: {selectedCar.shift}</p>
            <p>Price per day: RM {selectedCar.pricePerDay}</p>
            <br></br>
            <div className="duration-selector">
              <label htmlFor="duration">Select Duration (in days):</label>
              <input
                type="number"
                id="duration"
                min="1"
                value={rentalDuration}
                onChange={handleDurationChange}
              />
            </div>
            <p>Total Price: RM {calculatePrice()}</p>
            <button className="btn btn-primary" onClick={() => alert('Car booked successfully!')}>Book Now</button>
          </div>
        )}
      </div>
    );
  }
  
  export default Booknow;