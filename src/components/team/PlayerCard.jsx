import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";

function PlayerCard() {
  return (
    <Card sx={{ maxWidth: 260, border: "9px solid white" }}>
      <CardMedia
        sx={{ height: 140 }}
        image="/static/images/cards/contemplative-reptile.jpg"
        title="green iguana"
      />
      <CardContent>
        <Typography
          gutterBottom
          variant="h5"
          component="div"
          sx={{ color: "text.contrast" }}
        >
          Lizard
        </Typography>
      </CardContent>
    </Card>
  );
}

export default PlayerCard;
