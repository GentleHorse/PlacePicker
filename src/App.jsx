import { useState, useRef, useEffect, useCallback } from "react";

import Modal from "./components/utils/Modal.jsx";
import Header from "./components/Header.jsx";
import Places from "./components/Places.jsx";
import { AVAILABLE_PLACES } from "../src/data.js";
import DeleteConfirmation from "./components/DeleteConfirmation.jsx";
import { sortPlacesByDistance } from "./loc.js";

  // Load stored places based on stored ids
  const storedIds = JSON.parse(localStorage.getItem("selectedPlaces")) || [];
  const storedPlaces = storedIds.map((id) =>
    AVAILABLE_PLACES.find((place) => place.id === id)
  );

function App() {
  const selectedPlace = useRef();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [availablePlaces, setAvailablePlaces] = useState([]);
  const [pickedPlaces, setPickedPlaces] = useState(storedPlaces);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => {
      const sortedPlaces = sortPlacesByDistance(
        AVAILABLE_PLACES,
        position.coords.latitude,
        position.coords.longitude
      );

      setAvailablePlaces(sortedPlaces);
    });
  }, []);

  const startRemovePlaceHandler = (id) => {
    setIsModalOpen(true);
    selectedPlace.current = id;
  };

  const stopRemovePlaceHandler = () => {
    setIsModalOpen(false);
  };

  const selectPlaceHandler = (id) => {
    setPickedPlaces((prevPickedPlaces) => {
      if (prevPickedPlaces.some((place) => place.id === id)) {
        return prevPickedPlaces;
      }
      const place = AVAILABLE_PLACES.find((place) => place.id === id);
      return [place, ...prevPickedPlaces];
    });

    // Store id to localStorage
    const storedIds = JSON.parse(localStorage.getItem("selectedPlaces")) || [];
    if (storedIds.indexOf(id) === -1) {
      localStorage.setItem(
        "selectedPlaces",
        JSON.stringify([id, ...storedIds])
      );
    }
  };

  const removePlaceHandler = useCallback(function removePlaceHandler() {
      setPickedPlaces((prevPickedPlaces) =>
        prevPickedPlaces.filter((place) => place.id !== selectedPlace.current)
      );
      setIsModalOpen(false);
  
      // Remove id from localStorage
      const storedIds = JSON.parse(localStorage.getItem("selectedPlaces")) || [];
      localStorage.setItem(
        "selectedPlaces",
        JSON.stringify(storedIds.filter((id) => id !== selectedPlace.current))
      );
    }, [])

  return (
    <>
      <Modal open={isModalOpen} onClose={stopRemovePlaceHandler}>
        <DeleteConfirmation
          onCancel={stopRemovePlaceHandler}
          onConfirm={removePlaceHandler}
        />
      </Modal>

      <Header />
      
      <main>
        <Places
          title="I'd llike to visit ..."
          fallbackText="Select the places you would like to visit below."
          places={pickedPlaces}
          onSelectPlace={startRemovePlaceHandler}
        />
        <Places
          title="Available Places"
          fallbackText="Sorting places by distance ..."
          places={availablePlaces}
          onSelectPlace={selectPlaceHandler}
        />
      </main>
    </>
  );
}

export default App;
