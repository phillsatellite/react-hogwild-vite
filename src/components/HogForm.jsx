import React, {useState} from "react";

//Add hog form
function HogForm({onAddHog}) {
  const [formData, setFormData] = useState({
    name: "",
    specialty: "",
    weight: "",
    "highest medal achieved": "",
    image: "",
    greased: false,
  });

  //Handles formData during input changes
  function handleChange(e) {
    const {name, value, type, checked} = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  }
  
  //Handle form submission 
  function handleSubmit(e) {
    e.preventDefault();
    const newHog = {...formData, weight: Number(formData.weight)};
    onAddHog(newHog);

    //reset the form
    setFormData({
      name: "",
      specialty: "",
      weight: "",
      "highest medal achieved": "",
      image: "",
      greased: false,
    });
  }

  return (
    <form className="ui form" onSubmit={handleSubmit}>
    <h2>Add a new hog</h2>

    { /* Form inputs */}
    <label htmlFor="name">Name:</label>
    <input
        id="name"
        type="text"
        name="name"
        value={formData.name}
        onChange={handleChange}
    />

    <label htmlFor="specialty">Specialty:</label>
    <input
        id="specialty"
        type="text"
        name="specialty"
        value={formData.specialty}
        onChange={handleChange}
    />

    <label htmlFor="weight">Weight:</label>
    <input
        id="weight"
        type="number"
        name="weight"
        value={formData.weight}
        onChange={handleChange}
    />

    <label htmlFor="highestMedal">Highest Medal Achieved:</label>
    <input
        id="highestMedal"
        type="text"
        name="highest medal achieved"
        value={formData["highest medal achieved"]}
        onChange={handleChange}
      />

    <label htmlFor="image">Image:</label>
    <input
        id="image"
        type="text"
        name="image"
        value={formData.image}
        onChange={handleChange}
    />

    <label htmlFor="greased">Greased?</label>
    <input
        id="greased"
        type="checkbox"
        name="greased"
        checked={formData.greased}
        onChange={handleChange}
    />
    <button className="ui button" type="submit">Add Hog</button>
    </form>
  );
}

export default HogForm;