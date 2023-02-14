import React, { useContext, useState } from 'react'
import '../styles.css'
import MyResponsiveLine from "./LineChart";
import MyResponsiveBar from "./BarChart"
import { formatProbabilities, factorsAffectingProbability } from '../functions';
import { Box, useTheme } from '@mui/material';
import { ColorModeContext, tokens } from '../theme';


export default function Popup({ rowData, setButtonPopup, maxIdx, oppIdx, setOppIdx }) {
    const theme = useTheme();
    const [tab, setTab] = useState('overview')
    // console.log(rowData)
    const probabilities = rowData.probabilityHistory ? formatProbabilities(rowData.probabilityHistory) : null
    const factors = factorsAffectingProbability(rowData.pilytixFactorsIncreasingWin, rowData.pilytixFactorsDecreasingWin)
    document.addEventListener('keydown', keyDirection, true)
    function clickDirection(direction) {
        if (direction === 'left' && oppIdx > 0) {
            setOppIdx(oppIdx - 1)
        } else if (direction === 'right' && oppIdx < maxIdx) {
            setOppIdx(oppIdx + 1)
        }
    }

    function keyDirection(e) {
        if (e.key === 'ArrowLeft' && oppIdx > 0) {
            setOppIdx(oppIdx - 1)
        } else if (e.key === 'ArrowRight' && oppIdx < maxIdx) {
            setOppIdx(oppIdx + 1)
        }
    }

    console.log('inpopup')
    return (
        <div className="popup">
            <Box backgroundColor={theme.palette.neutral.light}>
                <div className="popup-inner">
                    <button className='close-btn' onClick={() => (setButtonPopup(false))}> close </button>
                    <button onClick={() => (clickDirection('left'))}> left </button>
                    <button onClick={() => (clickDirection('right'))}> right </button>
                    <h2 className="popup-text">{rowData.oppName}</h2>

                    <div style={{ color: "red", border: "1px solid cyan", display: "flex", justifyContent: "center" }}>
                        <div style={{ width: '33%' }} onClick={() => setTab('overview')}>Opportunity Overview</div>
                        <div style={{ width: '33%' }} onClick={() => setTab('history')}>Probability History</div>
                        <div style={{ width: '33%' }} onClick={() => setTab('factors')}>Factors Affecting Win</div>
                    </div>

                    <div>
                        {tab === 'overview' &&
                            <div className="popup-text">
                                <div>{rowData.stage}</div>
                                <div>{rowData.repProbability}</div>
                                <div>{rowData.pilytixProbability}</div>
                                <div>{rowData.pilytixTier}</div>
                                <div>{rowData.amount}</div>
                                <div>{rowData.product}</div>
                                <div>{rowData.salesRepName}</div>
                            </div>
                        }

                        {rowData.probabilityHistory && tab === 'history' &&
                            <div className="chart-container">
                                <MyResponsiveLine data={probabilities} />
                            </div>
                        }

                        {tab === 'factors' &&
                            <div className="chart-container">
                                {/* <TestChartTwo data={barData}/> */}
                                <MyResponsiveBar data={factors} />
                            </div>
                        }
                    </div>
                </div>
            </Box>
        </div>
    )
}
