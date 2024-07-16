import React, { useState } from 'react';
import { Modal, Button } from 'react-bootstrap';
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
  },
  {
    id: 2,
    name: 'Proton S70',
    image: 's70.jpg',
    type: 'Sedan',
    fuel: 'Gasoline',
    seats: '5 Seats',
    shift: 'Automatic',
  },
  {
    id: 3,
    name: 'Proton x70',
    image: 'x70.webp',
    type: 'SUV',
    fuel: 'Gasoline',
    seats: '7 Seats',
    shift: 'Automatic',
  },
  {
    id: 4,
    name: 'Produa Bezza',
    image: 'bezza.webp',
    type: 'Sedan',
    fuel: 'Gasoline',
    seats: '5 Seats',
    shift: 'Automatic',
  },
  {
    id: 5,
    name: 'Produa Ativa',
    image: 'ativa.webp',
    type: 'Sedan',
    fuel: 'Gasoline',
    seats: '5 Seats',
    shift: 'Automatic',
  },
  {
    id: 6,
    name: 'Produa Aruz',
    image: 'aruz.png',
    type: 'SUV',
    fuel: 'Gasoline',
    seats: '7 Seats',
    shift: 'Automatic',
  },
];

function Ourcars() {
  const [showModal, setShowModal] = useState(false);
  const [selectedCar, setSelectedCar] = useState(null);

  const handleCloseModal = () => setShowModal(false);
  const handleShowModal = (car) => {
    setSelectedCar(car);
    setShowModal(true);
  };

  return (
    <div className="our-cars-containerS">
      <h2 className="text-center">Our Cars</h2>
      <div className="row">
        {cars.map((car) => (
          <div key={car.id} className="col-md-4">
            <div className="car-box" onClick={() => handleShowModal(car)}>
              <img src={car.image} alt={car.name} className="car-image" />
              <h3 className="car-name">{car.name}</h3>
              {/* Add more specs or information here */}
            </div>
          </div>
        ))}
      </div>

      {/* Modal for displaying car details */}
      <Modal show={showModal} onHide={handleCloseModal}>
        <Modal.Header closeButton>
          <Modal.Title>{selectedCar && selectedCar.name}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {selectedCar && (
            <div>
              <img src={selectedCar.image} alt={selectedCar.name} className="modal-car-image" />
              <p>Car type: {selectedCar.type}</p>
              <p>Fuel type: {selectedCar.fuel}</p>
              <p>No. of Seats: {selectedCar.seats}</p>
              <p>Transition Type: {selectedCar.shift}</p>
              {/* Add more details or specs here */}
            </div>
          )}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseModal}>Close</Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default Ourcars;
