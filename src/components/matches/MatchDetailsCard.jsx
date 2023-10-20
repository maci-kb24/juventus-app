import { Stack, Typography, Box } from "@mui/material";
import { matches } from "../../matches";

const MatchesDetailsCard = () => {
  return (
    <Box className="matches-info">
    {matches.map((match) => (
      <Stack key={match.id}
        direction={"row"}
        className="match-result"
        sx={{ borderBottom: "1px solid rgba(0,0,58,.5)" }}
      >
      <Box sx={{ borderRight: "1px solid rgba(0, 0, 58, 0.2)", pr: 2, m: 2 }} key={match.id}>

          <Box sx={{ display: "flex", alignItems: "center", mb: 1 }}>
            <img src={match.home_img} />
            <Typography variant="body1" color={"primary"} marginX={1}>
              {match.home_team}
            </Typography>
            <Typography variant="body1" color={"secondary"} marginLeft={8}>
              2
            </Typography>
          </Box>
          <Box sx={{ display: "flex", alignItems: "center", mb: 1 }}>
            <img src={match.away_img} />
            <Typography variant="body1" color={"primary"} marginX={1} flex={1}>
              {match.away_team}
            </Typography>
            <Typography variant="body1" color={"secondary"} marginLeft={8}>
              1
            </Typography>
          </Box> 
         </Box>
         <Box
          marginLeft={1}
          display={"flex"}
          flexDirection={"column"}
          justifyContent={"center"}
        >
          <Typography color={"primary"}>Date: {match.date}</Typography>
          <Typography color={"primary"}>Stadium: {match.stadium}</Typography>
        </Box> 
      </Stack>
      /* <Stack
        direction={"row"}
        className="match-result"
        sx={{ borderBottom: "1px solid rgba(0,0,58,.5)" }}
      >
        <Box sx={{ borderRight: "1px solid rgba(0, 0, 58, 0.2)", pr: 2, m: 2 }}>
          <Box sx={{ display: "flex", alignItems: "center", mb: 1 }}>
            <img src={juve} />
            <Typography variant="body1" color={"primary"} marginX={1}>
              Juvenutus
            </Typography>
            <Typography variant="body1" color={"secondary"} marginLeft={8}>
              2
            </Typography>
          </Box>
          <Box sx={{ display: "flex", alignItems: "center", mb: 1 }}>
            <img src={empoli} />
            <Typography variant="body1" color={"primary"} marginX={1} flex={1}>
              Empoli
            </Typography>
            <Typography variant="body1" color={"secondary"} marginLeft={8}>
              1
            </Typography>
          </Box>
        </Box>
        <Box
          marginLeft={1}
          display={"flex"}
          flexDirection={"column"}
          justifyContent={"center"}
        >
          <Typography color={"primary"}>Date: 11.09.2022</Typography>
          <Typography color={"primary"}>Stadium: ALianz</Typography>
          <Typography color={"primary"}>Referee: Marcus</Typography>
        </Box>
      </Stack>
      <Stack
        direction={"row"}
        className="match-result"
        sx={{ borderBottom: "1px solid rgba(0,0,58,.5)" }}
      >
        <Box sx={{ borderRight: "1px solid rgba(0, 0, 58, 0.2)", pr: 2, m: 2 }}>
          <Box sx={{ display: "flex", alignItems: "center", mb: 1 }}>
            <img src={juve} />
            <Typography variant="body1" color={"primary"} marginX={1}>
              Juvenutus
            </Typography>
            <Typography variant="body1" color={"secondary"} marginLeft={8}>
              2
            </Typography>
          </Box>
          <Box sx={{ display: "flex", alignItems: "center", mb: 1 }}>
            <img src={empoli} />
            <Typography variant="body1" color={"primary"} marginX={1} flex={1}>
              Empoli
            </Typography>
            <Typography variant="body1" color={"secondary"} marginLeft={8}>
              1
            </Typography>
          </Box>
        </Box>
        <Box
          marginLeft={1}
          display={"flex"}
          flexDirection={"column"}
          justifyContent={"center"}
        >
          <Typography color={"primary"}>Date: 11.09.2022</Typography>
          <Typography color={"primary"}>Stadium: ALianz</Typography>
          <Typography color={"primary"}>Referee: Marcus</Typography>
        </Box>
      </Stack>
      <Stack
        direction={"row"}
        className="match-result"
        sx={{ borderBottom: "1px solid rgba(0,0,58,.5)" }}
      >
        <Box sx={{ borderRight: "1px solid rgba(0, 0, 58, 0.2)", pr: 2, m: 2 }}>
          <Box sx={{ display: "flex", alignItems: "center", mb: 1 }}>
            <img src={juve} />
            <Typography variant="body1" color={"primary"} marginX={1}>
              Juvenutus
            </Typography>
            <Typography variant="body1" color={"secondary"} marginLeft={8}>
              2
            </Typography>
          </Box>
          <Box sx={{ display: "flex", alignItems: "center", mb: 1 }}>
            <img src={empoli} />
            <Typography variant="body1" color={"primary"} marginX={1} flex={1}>
              Empoli
            </Typography>
            <Typography variant="body1" color={"secondary"} marginLeft={8}>
              1
            </Typography>
          </Box>
        </Box>
        <Box
          marginLeft={1}
          display={"flex"}
          flexDirection={"column"}
          justifyContent={"center"}
        >
          <Typography color={"primary"}>Date: 11.09.2022</Typography>
          <Typography color={"primary"}>Stadium: ALianz</Typography>
          <Typography color={"primary"}>Referee: Marcus</Typography>
        </Box>
      </Stack> */
      ))}
    </Box>
    
  );
};

export default MatchesDetailsCard;
