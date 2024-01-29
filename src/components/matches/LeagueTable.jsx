import { Box, Typography } from "@mui/material";
import flag from "../../assets/images/italy-flag.png";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { leagueTable } from "../../leaguetable";

// function createData(name, calories, fat, carbs, protein, points) {
//   return { name, calories, fat, carbs, protein, points };
// }

// const rows = [
//   createData(1, "Napoli", 23, 2, 2, 71),
//   createData(2, "Lazio", 15, 7, 5, 52),
//   createData(3, "Inter", 16, 2, 9, 50),
//   createData(4, "Milan", 14, 6, 7, 48),
//   createData(5, "Roma", 14, 5, 8, 47),
// ];

const LeagueTable = () => {
  return (
    <Box>
      <Box p={2}>
        <Box display={"flex"} alignItems={"center"}>
          <img src={flag} alt="italy-flag" width={35} height={35} />
          <Typography variant="h2" paddingLeft={2}>
            Seria A Table
          </Typography>
        </Box>
      </Box>
      <TableContainer>
        <Table sx={{ minWidth: 450 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Pos</TableCell>
              <TableCell align="right">Team</TableCell>
              <TableCell align="right">W</TableCell>
              <TableCell align="right">D</TableCell>
              <TableCell align="right">L</TableCell>
              <TableCell align="right">Pts</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {leagueTable.map((team) => (
              <TableRow
                key={team.pos}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {team.pos}
                </TableCell>
                <TableCell align="right">{team.team}</TableCell>
                <TableCell align="right">{team.w}</TableCell>
                <TableCell align="right">{team.d}</TableCell>
                <TableCell align="right">{team.l}</TableCell>
                <TableCell align="right">{team.pts}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default LeagueTable;
