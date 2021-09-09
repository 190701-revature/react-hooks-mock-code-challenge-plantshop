import React, {useState} from "react";

function NewPlantForm({addPlant}) {

  const [formData, setFormData] = useState({
    name: "",
    image: "",
    price: ""
  })

  const handleChange = (e) => {
    setFormData({...formData, [e.target.name]: e.target.value})
    //Other option:
    // if(e.target.name === "name"){
    //   setFormData({...formData, name: e.target.value})
    // }
    // else if(e.target.name === "image"){
    //   setFormData({...formData, image: e.target.value})
    // }
    // else if(e.target.name === "price"){
    //   setFormData({...formData, price: parseInt(e.target.value)}) //parseInt here if you don't want to do it before the fetch
    // }
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const updatedFormData = {...formData, price: parseInt(formData.price)}
    fetch("http://localhost:6001/plants", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(updatedFormData)
    })
    .then(resp => resp.json())
    .then(data => addPlant(data))
    
    setFormData({
      name: "",
      image: "",
      price: ""
    })
  }

  return (
    <div className="new-plant-form">
      <h2>New Plant</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" name="name" placeholder="Plant name" value={formData.name} onChange={handleChange} />
        <input type="text" name="image" placeholder="Image URL" value={formData.image} onChange={handleChange} />
        <input type="number" name="price" step="0.01" placeholder="Price" value={formData.price} onChange={handleChange} />
        <button type="submit">Add Plant</button>
      </form>
    </div>
  );
}

export default NewPlantForm;
