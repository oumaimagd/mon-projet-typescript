import React from "react";
import PlayerCard from "./PlayerCard";
interface PlayerListProps {
  players: Player[];
}

interface Player {
  imageUrl: string;
  name: string;
  team: string;
  nationality: string;
  jerseyNumber: string;
  age: string;
}

const PlayerList: React.FC<PlayerListProps> = ({ players }) => {
  return (
    <div>
      {players.map((player, index) => (
        <PlayerCard key={index} player={player} />
      ))}
    </div>
  );
};

export default PlayerList;
