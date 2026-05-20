import ToyCard from "./ToyCard";

function ToyContainer({
  toys,
  onLikeToy,
  onDeleteToy,
}) {
  return (
    <div className="card-container">
      {toys.map((toy) => (
        <ToyCard
          key={toy.id}
          toy={toy}
          onLikeToy={onLikeToy}
          onDeleteToy={onDeleteToy}
        />
      ))}
    </div>
  );
}

export default ToyContainer;