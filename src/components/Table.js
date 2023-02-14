import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

// Alex's Imports
import Card from './Popup'
import { useState, useEffect, useContext } from "react";
import Popup from "./Popup";
import { Box, useTheme } from '@mui/material';
import { ColorModeContext, tokens } from '../theme';
//

import * as opportunities from "../opportunities.json";

export default function BasicTable() {
  /**
   * A basic table to display all non-nested information from opportunities.json
   */
  const data = opportunities.default;


  // const theme = useTheme();
  const [buttonPopup, setButtonPopup] = useState(null);
  const [oppIdx, setOppIdx] = useState(null);
  const [key, setKey] = useState(null)

  function handleRowClick(event, row, setButtonPopup) {
    setButtonPopup(true);
    setOppIdx(row.oppId - 1)
  }

  //

  return (
    <TableContainer component={Paper}>
      <div>
        {buttonPopup &&
          <div>
            <Popup rowData={data[oppIdx]} setButtonPopup={setButtonPopup} maxIdx={data.length - 1} oppIdx={oppIdx} setOppIdx={setOppIdx} />
          </div>
        }
      </div>
      <Box color="seconday">
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell align="left">Opp Name</TableCell>
              <TableCell align="left">Opp Stage</TableCell>
              <TableCell align="right">Rep Probability</TableCell>
              <TableCell align="right">PX Probability</TableCell>
              <TableCell align="left">PX Tier</TableCell>
              <TableCell align="right">Amount</TableCell>
              <TableCell align="left">Product</TableCell>
              <TableCell align="left">Sales Rep</TableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            {data.map((row) => (
              <TableRow
                onClick={(event) => handleRowClick(event, row, setButtonPopup)}
                key={row.oppId}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row"> {row.oppName} </TableCell>
                <TableCell align="left">{row.stage}</TableCell>
                <TableCell align="right">{row.repProbability}</TableCell>
                <TableCell align="right">{row.pilytixProbability}</TableCell>
                <TableCell align="left">{row.pilytixTier}</TableCell>
                <TableCell align="right">{row.amount}</TableCell>
                <TableCell align="left">{row.product}</TableCell>
                <TableCell align="left">{row.salesRepName}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Box>
    </TableContainer>

  );
}
