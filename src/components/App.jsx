import { useEffect, useState } from "react";
import Header from "./Header";
import ToyContainer from "./ToyContainer";
import ToyForm from "./ToyForm";

function App() {
  const [toys, setToys] = useState([]);

  // GET request
  useEffect(() => {
    fetch("http://localhost:3000/toys")
      .then((res) => res.json())
      .then((data) => setToys(data));
  }, []);

  // POST request
  function handleAddToy(newToy) {
    setToys([...toys, newToy]);
  }

  // PATCH request
  function handleLikeToy(updatedToy) {
    const updatedToys = toys.map((toy) =>
      toy.id === updatedToy.id ? updatedToy : toy
    );

    setToys(updatedToys);
  }

  // DELETE request
 function handleDeleteToy(id) {
  fetch(`http://localhost:3000/toys/${id}`, {
    method: "DELETE",
  });

  const updatedToys = toys.filter((toy) => toy.id !== id);

  setToys(updatedToys);
}

  return (
    <div>
      <Header />

      <ToyForm onAddToy={handleAddToy} />

      <ToyContainer
        toys={toys}
        onLikeToy={handleLikeToy}
        onDeleteToy={handleDeleteToy}
      />
    </div>
  );
}

export default App;