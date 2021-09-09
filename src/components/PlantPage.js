import React, {useState, useEffect} from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

function PlantPage() {
  const [plants, setPlants] = useState([])
  const [search, setSearch] = useState("")

  useEffect(() => {
    fetch("http://localhost:6001/plants")
    .then(resp => resp.json())
    .then(data => setPlants(data))
  }, [])

  const addPlant = (plant) => {
    setPlants([...plants, plant])
  }

  const updatePlant = (plant) => {
    const newPlant = {...plant, inStock: false}
    const index = plants.findIndex(storedPlant => storedPlant.id === plant.id )

    setPlants([...plants.slice(0, index), newPlant, ...plants.slice(index + 1)])
  }

  const filteredPlants = plants.filter(plant => plant.name.toLowerCase().includes(search.toLowerCase()))

  return (
    <main>
      <NewPlantForm addPlant={addPlant} />
      <Search search={search} setSearch={setSearch} />
      <PlantList plants={filteredPlants} updatePlant={updatePlant}/>
    </main>
  );
}

export default PlantPage;
