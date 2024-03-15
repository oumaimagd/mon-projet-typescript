import React from "react";
import { CardContent, Typography } from "@mui/material";
import { Card } from "react-bootstrap";

interface PlayerProps {
  player: {
    imageUrl: string;
    name: string;
    team: string;
    nationality: string;
    jerseyNumber: string;
    age: string;
  };
}

const PlayerCard: React.FC<PlayerProps> = ({ player }) => {
  return (
    <div className="FifaPlayerCard">
      <Card className="Card">
        <div className="PlayerImage">
          <img src={player.imageUrl} alt={player.name} />
        </div>
        <CardContent className="PlayerInfo">
          <Typography gutterBottom variant="h5" component="div">
            {player.name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Team: {player.team}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Nationality: {player.nationality}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Jersey Number: {player.jerseyNumber}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Age: {player.age}
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
};

export default PlayerCard;
