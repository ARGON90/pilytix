import React, { useContext, useEffect, useState } from 'react'
import '../styles.css'
import LineChart from "./LineChart";
import BarChart from "./BarChart"
import { formatProbabilities, factorsAffectingProbability } from '../functions';
import { Box, useTheme } from '@mui/material';
import { ColorModeContext, tokens } from '../theme';
import BarText from './BarText';
import { NoLuggageOutlined } from '@mui/icons-material';

export default function Popup({ rowData, setButtonPopup, maxIdx, oppIdx, setOppIdx }) {
    const theme = useTheme();
    const [tab, setTab] = useState('overview')

    const probabilities = rowData.probabilityHistory ? formatProbabilities(rowData.probabilityHistory) : null
    const factors = factorsAffectingProbability(rowData.pilytixFactorsIncreasingWin, rowData.pilytixFactorsDecreasingWin)
    const [messages, setMessages] = useState(NoLuggageOutlined);
    function clickDirection(direction) {
        if (direction === 'left' && oppIdx > 0) {
            setOppIdx(oppIdx - 1)

        } else if (direction === 'right' && oppIdx < maxIdx) {
            setOppIdx(oppIdx + 1)
        }
    }

    function keyPress(e) {
        if (e.key === 'ArrowRight') {
            clickDirection('right')
        } else if (e.key === 'ArrowLeft') {
            clickDirection('left')
        }
    }

    useEffect(() => {
        document.addEventListener("keydown", keyPress);
        setMessages(factors[5].messages)
        return () => document.removeEventListener("keydown", keyPress);
    }, [oppIdx]);
    return (
        <div className="popup">
            <Box height={900} width={850} color={theme.palette.popup.text} backgroundColor={theme.palette.popup.background}>
                <div className="popup-inner">
                    <button className='close-btn' onClick={() => (setButtonPopup(false))}> close </button>
                    <button onClick={() => (clickDirection('left'))}> left </button>
                    <button onClick={() => (clickDirection('right'))}> right </button>
                    <h2 className="popup-text">{rowData.oppName}</h2>

                    <div style={{ display: "flex", justifyContent: "center" }}>
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
                                <LineChart data={probabilities} />
                            </div>
                        }

                        {tab === 'factors' &&
                            <div className="chart-container">
                                {/* <TestChartTwo data={barData}/> */}
                                <BarChart data={factors} />
                                <BarText messages={messages} setMessages={setMessages} factors={factors} />
                            </div>
                        }
                    </div>
                </div>
            </Box>
        </div>
    )
}
