import React from "react";
import PlantCard from "./PlantCard";

function PlantList({plants, updatePlant}) {

  const renderPlants = plants.map((plant) => <PlantCard key={plant.id} plant={plant} updatePlant={updatePlant} />)

  return (
    <ul className="cards">{renderPlants}</ul>
  );
}

export default PlantList;
