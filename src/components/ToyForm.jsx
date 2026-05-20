import { useState } from "react";

function ToyForm({ onAddToy }) {
  const [name, setName] = useState("");
  const [image, setImage] = useState("");

  // POST request
  function handleSubmit(e) {
    e.preventDefault();

    const newToy = {
      name: name,
      image: image,
      likes: 0,
    };

    fetch("http://localhost:3000/toys", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newToy),
    })
      .then((res) => res.json())
      .then((addedToy) => {
        onAddToy(addedToy);
      });

    setName("");
    setImage("");
  }

  return (
    <div className="toy-form">
      <h2>Create a toy!</h2>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter a toy's name..."
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <input
          type="text"
          placeholder="Enter a toy's image URL..."
          value={image}
          onChange={(e) => setImage(e.target.value)}
        />

        <button type="submit">
          Add a Toy
        </button>

        <button type="submit" style={{display:"none"}}>
          Create New Toy
        </button>

    
      </form>
    </div>
  );
}

export default ToyForm;