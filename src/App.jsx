import { useState, useRef } from "react";

import Modal from "./components/utils/Modal.jsx";
import Header from "./components/Header.jsx";
import Places from "./components/Places.jsx";
import { AVAILABLE_PLACES } from "../src/data.js";
import DeleteConfirmation from "./components/DeleteConfirmation.jsx";

function App() {
  const modal = useRef();
  const selectedPlace = useRef();
  const [pickedPlaces, setPickedPlaces] = useState([]);

  const startRemovePlaceHandler = (id) => {
    modal.current.open();
    selectedPlace.current = id;
  };

  const stopRemovePlaceHandler = () => {
    modal.current.close();
  };

  const selectPlaceHandler = (id) => {
    setPickedPlaces((prevPickedPlaces) => {
      if (prevPickedPlaces.some((place) => place.id === id)) {
        return prevPickedPlaces;
      }
      const place = AVAILABLE_PLACES.find((place) => place.id === id);
      return [place, ...prevPickedPlaces];
    });
  };

  const removePlaceHandler = () => {
    setPickedPlaces((prevPickedPlaces) =>
      prevPickedPlaces.filter((place) => place.id !== selectedPlace.current)
    );
    modal.current.close();
  };

  return (
    <>
      <Modal ref={modal}>
        <DeleteConfirmation
          onCancel={stopRemovePlaceHandler}
          onConfirm={removePlaceHandler}
        />
      </Modal>

      <Header />
      <main>
        <Places
          title="I'd llike to visit ..."
          fallbackText={"Select the places you would like to visit below."}
          places={pickedPlaces}
          onSelectPlace={startRemovePlaceHandler}
        />
        <Places
          title="Available Places"
          places={AVAILABLE_PLACES}
          onSelectPlace={selectPlaceHandler}
        />
      </main>
    </>
  );
}

export default App;
