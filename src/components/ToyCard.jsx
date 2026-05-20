function ToyCard({
  toy,
  onLikeToy,
  onDeleteToy,
}) {

  // PATCH request
  function handleLikeClick() {
    fetch(`http://localhost:3000/toys/${toy.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        likes: toy.likes + 1,
      }),
    })
      .then((res) => res.json())
      .then((updatedToy) => {
        onLikeToy(updatedToy);
      });
  }

  // DELETE request
  function handleDeleteClick() {
    fetch(`http://localhost:3000/toys/${toy.id}`, {
      method: "DELETE",
    }).then(() => {
      onDeleteToy(toy.id);
    });
  }

  return (
    <div
      className="card"
      data-testid="toy-card"
    >
      <h2>{toy.name}</h2>

      <img
        src={toy.image}
        alt={toy.name}
        className="toy-avatar"
      />

      <p>{toy.likes} Likes </p>

      <button
        className="like-btn"
        onClick={handleLikeClick}
      >
        Like {"<3"}
      </button>

      <button
        className="del-btn"
        onClick={handleDeleteClick}
      >
        Donate to GoodWill
      </button>
    </div>
  );
}

export default ToyCard;
