import { Box, Container, Stack, Typography } from "@mui/material";
import PlayerCard from "../components/team/PlayerCard";
import Grid from "@mui/material/Unstable_Grid2/Grid2";
import Wojciech from "../assets/images/players/GK/Sczeschy.png";
import Perin from "../assets/images/players/GK/Perin.png";
import Pinsoglio from "../assets/images/players/GK/Pinsoglio.png";
import Sciglio from "../assets/images/players/Def/DeSciglio.png";
import Bremer from "../assets/images/players/Def/Bremer.png";
import Danilo from "../assets/images/players/Def/Danilo.png";
import AlexSandro from "../assets/images/players/Def/AlexSandro.png";
import Gatti from "../assets/images/players/Def/Gatti.png";
import Locatelli from "../assets/images/players/Mid/Locatelli.png";
import Pogba from "../assets/images/players/Mid/Pogba.png";
import Kostic from "../assets/images/players/Mid/Kostic.png";
import Miretti from "../assets/images/players/Mid/Miretti.png";
import Rabiot from "../assets/images/players/Mid/Rabiot.png";
import Fagioli from "../assets/images/players/Mid/Fagioli.png";
import Chiesa from "../assets/images/players/Att/Chiesa.png";
import Vlahovic from "../assets/images/players/Att/Vlahovic.png";
import Milik from "../assets/images/players/Att/Milik.png";
import Kean from "../assets/images/players/Att/Kean.png";
import { Slide } from "react-awesome-reveal";


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
            <PlayerCard name="Wojciech Szczesny" number={1} image={Wojciech} />
            <PlayerCard name="Mattia Perin" number={36} image={Perin} /> 
            <PlayerCard name="Carlo Pinsoglio" number={23} image={Pinsoglio} />
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
          <Grid container spacing={2}>
            <Grid item xs={12} md={2.5}>
            <Slide direction={"left"} triggerOnce>
              <PlayerCard name="Mattia De Sciglio" number={2} image={Sciglio} />
              </Slide>
            </Grid>
            <Grid item xs={12} md={2.5}>
              <Slide direction={"left"} triggerOnce>
              <PlayerCard name="Gelson Bremer" number={3} image={Bremer} />
              </Slide>
            </Grid>
            <Grid item xs={12} md={2.5}>
              <Slide direction={"left"} triggerOnce>
              <PlayerCard name="Luiz Da Silva Danilo" number={6} image={Danilo}/>
              </Slide>
            </Grid>
            <Grid item xs={12} md={2.5}>
              <Slide direction={"left"} triggerOnce>
              <PlayerCard name="Alex Sandro" number={12} image={AlexSandro} />
              </Slide>
            </Grid>
            <Grid item xs={12} md={2.5}>
              <Slide direction={"left"} triggerOnce>
              <PlayerCard name="Federico Gatti" number={15} image={Gatti} />
              </Slide>
            </Grid>
          </Grid>
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
          <Grid container spacing={2}>
            <Grid item xs={12} md={2.5}>
            <Slide direction={"left"} triggerOnce>
              <PlayerCard name="Manuel Locatelli" number={5} image={Locatelli} />
              </Slide>
            </Grid>
            <Grid item xs={12} md={2.5}>
              <Slide direction={"left"} triggerOnce>
              <PlayerCard name="Paul Pogba" number={10} image={Pogba} />
              </Slide>
            </Grid>
            <Grid item xs={12} md={2.5}>
              <Slide direction={"left"} triggerOnce>
              <PlayerCard name="Filip Kostic" number={17} image={Kostic}/>
              </Slide>
            </Grid>
            <Grid item xs={12} md={2.5}>
            <Slide direction={"left"} triggerOnce>
              <PlayerCard name="Fabio Miretti" number={20} image={Miretti} />
              </Slide>
            </Grid>
            <Grid item xs={12} md={2.5}>
            <Slide direction={"left"} triggerOnce>
              <PlayerCard name="Adrien Rabiot" number={25} image={Rabiot}/>
              </Slide>
            </Grid>
            <Grid item xs={4} md={2.5}>
            <Slide direction={"left"} triggerOnce>
              <PlayerCard name="Nicolo Fagioli" number={44} image={Fagioli}/>
              </Slide>
            </Grid>
          </Grid>
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
          <Grid container spacing={2}>
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
          </Grid>
        </Box>
      </Container>
    </Box>
  );
};




export default Team;
