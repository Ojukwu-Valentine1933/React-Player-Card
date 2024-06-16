import players from "../player-folder/players";
import PlayerComponent from "./PayerComponent";

const PlayerListComponent = () => {
  return (
    <section className="container">
      <div className="mt-5">
        <div className="row">
          {players.map((player) => (
            <PlayerComponent key={player.id} player={player} />
          ))}
        </div>
      </div>
    </section>
  );
};
export default PlayerListComponent;
