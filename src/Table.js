import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

//
import Card from './Popup'
import { useState } from "react";
import Popup from "./Popup";
//

import * as opportunities from "./opportunities.json";

export default function BasicTable() {
  /**
   * A basic table to display all non-nested information from opportunities.json
   */
  const data = opportunities.default;

  //
  const [buttonPopup, setButtonPopup] = useState(false);

  function handleRowClick(event, row, setButtonPopup) {
    // console.log(event)
    console.log('handle row click')
    console.log("amount", row.amount);
    setButtonPopup(true)
    console.log('buttonPopup', buttonPopup)
    return (
      <div className="popup">
        <div className="popup-inner">
          <h2 className="popup-text"> hello there </h2>
          <div>{row.amount}</div>
        </div>
      </div>
    )
  }

  function displayPopup(row) {
    console.log('displayPopup');
    return (
      <div className="popup">
        <div className="popup-inner">
          <h2 className="popup-text"> hello there </h2>
          <div>{row.amount}</div>
        </div>
      </div>
    )
  }

  function closefxn(setButtonPopup) {
    console.log('close!')
    setButtonPopup(false)
  }
  //

  return (
    <TableContainer component={Paper}>
      {/* <div>
        {buttonPopup &&
          <div>
            {displayPopup()}
          </div>
        }
      </div> */}
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
    </TableContainer>
  );
}

{/* {buttonPopup &&
                <div className="popup">
                  <div className="popup-inner">
                    <button className="popup-inner close-btn" onClick={() => closefxn(setButtonPopup)}>close</button>
                    hello there
                    <div className="popup-text">{row.amount}</div>
                  </div>
                </div>
              }
            </div> */}
