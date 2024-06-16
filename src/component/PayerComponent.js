const PlayerComponent = ({player}) => {
  return (
    <div className="card mb-5 bg-dark text-white" style={{width:"20rem", marginLeft:"10px"}}>
      <img src={player.imageUrl} className="card-img-top" alt={player.name} />
      <div className="card-body">
        <h5 className="card-title">{player.name}</h5>
        <p className="card-text">Age: {player.age}</p>
        <p className="card-text">Club: {player.club}</p>
        <p className="card-text">Nationality: {player.nationality}</p>
      </div>
    </div>
  );
};
export default PlayerComponent;
