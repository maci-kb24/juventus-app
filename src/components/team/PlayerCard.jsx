import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";

function PlayerCard({name, number, image}) {
  return (
    <Card sx={{  border: "9px solid white", flex: "0.25" }}>
      <CardMedia image={image}  sx={{ height: 340,backgroundPosition: 'unset'  }} />
      <CardContent sx={{display:'flex',alignItems:'center',justifyContent:'space-between', p: '0'}}>
        <Typography
          gutterBottom
          variant="h5"
          component="div"
          sx={{ color: "primary.main" }}
        >
          {name}
        </Typography>
        <Typography variant="h1" sx={{ color: "text.contrast" }}>{number}</Typography>
      </CardContent>
    </Card>
  );
}

export default PlayerCard;
