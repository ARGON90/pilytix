import * as React from "react";
import { useState } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Box, useTheme } from '@mui/material';
import PopupCard from "./PopupCard";
import { returnStars, percentageColor } from "../functions";
import * as opportunities from "../opportunities.json";

export default function BasicTable() {
  const data = opportunities.default;
  const theme = useTheme();
  const [buttonPopup, setButtonPopup] = useState(null);
  const [oppIdx, setOppIdx] = useState(null);

  function handleRowClick(event, row, setButtonPopup) {
    setButtonPopup(true);
    setOppIdx(row.oppId - 1)
  }

  function BizClass(oppName) {
    if (oppName.split('-')[0] === 'B2C ') {
      return (
        <button className='b2c'>B2C</button>
      )
    } else if (oppName.split('-')[0] === 'B2B ') {
      return (
        <button className='b2b'>B2B</button>
      )
    }
  }

  function oppStageColor(str) {
    const oppMap = {
      1: '#f0f3fb',
      2: '#e1e6f7',
      3: '#d2daf3',
      4: '#c3cdef',
      5: '#b4c1ec',
      6: '#a5b4e8',
      7: '#96a8e4',
      8: '#879be0',
    }
    return oppMap[str]
  }

  return (

    <TableContainer component={Paper} sx={{ backgroundColor: theme.palette.table.background }}>
      <div>
        {buttonPopup &&
          <PopupCard rowData={data[oppIdx]} setButtonPopup={setButtonPopup} maxIdx={data.length - 1} oppIdx={oppIdx} setOppIdx={setOppIdx} />
        }
      </div>

      <Box color="seconday" >
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow >
              <TableCell sx={{ color: '#00caff', fontWeight: 'bold', fontSize: '16px' }} align="left">Opportunity Name</TableCell>
              <TableCell sx={{ color: '#00caff', fontWeight: 'bold', fontSize: '16px' }} align="left">Opportunity Stage</TableCell>
              <TableCell sx={{ color: '#00caff', fontWeight: 'bold', fontSize: '16px' }} align="right">Rep Probability</TableCell>
              <TableCell sx={{ color: '#00caff', fontWeight: 'bold', fontSize: '16px' }} align="right">PX Probability</TableCell>
              <TableCell sx={{ color: '#00caff', fontWeight: 'bold', fontSize: '16px' }} align="left">PX Tier</TableCell>
              <TableCell sx={{ color: '#00caff', fontWeight: 'bold', fontSize: '16px' }} align="right">Amount</TableCell>
              <TableCell sx={{ color: '#00caff', fontWeight: 'bold', fontSize: '16px' }} align="left">Product</TableCell>
              <TableCell sx={{ color: '#00caff', fontWeight: 'bold', fontSize: '16px' }} align="left">Sales Rep</TableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            {data.map((row) => (
              <TableRow
                onClick={(event) => handleRowClick(event, row, setButtonPopup)}
                key={row.oppId}
                sx={{ "&:last-child td, &:last-child th": { border: 0 }, cursor: 'pointer', "&:hover": {backgroundColor: theme.palette.tableRowHover} }}
              >
                <TableCell sx={{ fontSize: '14px' }} component="th" scope="row">
                  <div className="year-container">
                    {row.oppName.split('-')[2]}
                    <div className="year-btn-row">
                      {BizClass(row.oppName)}
                      <button className="year-num"> {row.oppName.split('-')[1]}</button>
                    </div>
                  </div>
                </TableCell>
                <TableCell sx={{ fontSize: '14px' }} align="left">
                  <div className="stage-table-container">
                    <div className="stage-table" style={{ backgroundColor: oppStageColor(row.stage.split('.')[0]), textAlign: 'center' }}  >{row.stage.split('.')[0]}</div>
                    {row.stage.split('.')[1]}
                  </div>
                </TableCell>
                <TableCell sx={{ fontSize: '14px', fontWeight: 'bolder', color: percentageColor((row.repProbability * 100).toFixed(2).split('.')[0]) }} align="right">{(row.repProbability * 100).toFixed(2).split('.')[0]}%</TableCell>
                <TableCell sx={{ fontSize: '14px', fontWeight: 'bolder', color: percentageColor((row.pilytixProbability * 100).toFixed(2).split('.')[0]) }} align="right">{(row.pilytixProbability * 100).toFixed(2).split('.')[0]}%</TableCell>
                <TableCell sx={{ fontSize: '14px' }} align="left">
                  <div className='stars-container'>
                    {returnStars(row.pilytixTier, 'table').map((star, idx) =>
                      <div className='stars-table' key={idx}>{star}</div>
                    )}
                  </div>
                </TableCell>
                <TableCell sx={{ fontSize: '14px' }} align="right">{row.amount.toLocaleString('US', { style: 'currency', currency: 'USD' }).split('.')[0]}</TableCell>
                <TableCell sx={{ fontSize: '14px' }} align="left">{row.product}</TableCell>
                <TableCell sx={{ fontSize: '14px' }} align="left">{row.salesRepName}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Box>
    </TableContainer>

  );
}
