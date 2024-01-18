import { Box, Container, Stack, Typography } from "@mui/material";
import PlayerCard from "../components/team/PlayerCard";
import { Slide } from "react-awesome-reveal";
import { attackers, defenders, goalkeepers, midfielders } from "../players";
import "../pages/team.css";

const Team = () => {
  return (
    <Box
      component="section"
      sx={{
        py: 8,
        backgroundImage:
          "linear-gradient(129deg,#000000 7.14%,#ffffff 7.14%,#ffffff 50%,#000000 50%,#000000 57.14%,#ffffff 57.14%,#ffffff 100%);",
        backgroundSize: "9.01px 11.12px",
        backgroundRepeat: "repeat",
      }}
    >
      <Container maxWidth="xl">
        <Box className="goalkeepers">
          <Box>
            <Typography
              variant="h1"
              textTransform={"capitalize"}
              color={"text.contrast"}
              pb={3}
            >
              goalkeepers
            </Typography>
          
          </Box>
          <Stack direction={"row"} spacing={2}>
            <Slide direction={"left"} triggerOnce>
            {goalkeepers.map((goalkeeper) => (
              <PlayerCard
                key={goalkeeper.id}
                name={goalkeeper.name}
                number={goalkeeper.number}
                image={goalkeeper.image}
              />
            ))}
            </Slide>
          </Stack>
        </Box>
        <Box className="defenders">
          <Box>
            <Typography
              variant="h1"
              textTransform={"capitalize"}
              color={"text.contrast"}
              py={3}
            >
              defenders
            </Typography>
          </Box>
          <Stack direction={'row'} spacing={2} flexWrap={'wrap'}>
          <Slide direction={"left"} triggerOnce>
             {defenders.map((defender) => ( 
             <PlayerCard 
             key={defender.id} 
             name={defender.name} 
             number={defender.number} 
             image={defender.image} />
             ))}
            </Slide>
          </Stack>
        </Box>
        <Box className="midfielders">
          <Box>
            <Typography
              variant="h1"
              textTransform={"capitalize"}
              color={"text.contrast"}
              py={3}
            >
              midfielders
            </Typography>
          </Box>
          <Stack direction={'row'} spacing={2} flexWrap={'wrap'}>
          <Slide direction={"left"} triggerOnce>
             {midfielders.map((midfielder) => ( 
             <PlayerCard 
             key={midfielder.id} 
             name={midfielder.name} 
             number={midfielder.number} 
             image={midfielder.image} />
             ))}
            </Slide>
          </Stack>
        </Box>
        <Box className="attackers">
          <Box>
            <Typography
              variant="h1"
              textTransform={"capitalize"}
              color={"text.contrast"}
              py={3}
            >
              attackers
            </Typography>
          </Box>
          <Stack direction={'row'} spacing={2} flexWrap={'wrap'}>
          <Slide direction={"left"} triggerOnce>
             {attackers.map((attacker) => ( 
             <PlayerCard 
             key={attacker.id} 
             name={attacker.name} 
             number={attacker.number} 
             image={attacker.image} />
             ))}
            </Slide>
          </Stack>
        </Box>
      </Container>
    </Box>
  );
};


export default Team;
