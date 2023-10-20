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
            {/* <PlayerCard name="Wojciech Szczesny" number={1} image={Wojciech} />
            <PlayerCard name="Mattia Perin" number={36} image={Perin} /> 
            <PlayerCard name="Carlo Pinsoglio" number={23} image={Pinsoglio} /> */}
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
          {/* <Grid container spacing={2}>
            <Grid item xs={12} md={2.5}>
             <Slide direction={"left"} triggerOnce>
              <PlayerCard name="Federico Chiesa" number={7} image={Chiesa}/>
              </Slide>
            </Grid>
            <Grid item xs={12} md={2.5}>
             <Slide direction={"left"} triggerOnce>
              <PlayerCard name="Dusan Vlahovic" number={9} image={Vlahovic} />
              </Slide>
            </Grid>
            <Grid item xs={12} md={2.5}>
            <Slide direction={"left"} triggerOnce>
              <PlayerCard name="Arkadiusz Milik" number={14} image={Milik} />
              </Slide>
            </Grid>
            <Grid item xs={12} md={2.5}>
              <Slide direction={"left"} triggerOnce>
              <PlayerCard name="Moise Kean" number={18} image={Kean}/>
              </Slide>  
            </Grid>
          </Grid> */}
        </Box>
      </Container>
    </Box>
  );
};


export default Team;
