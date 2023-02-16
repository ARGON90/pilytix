import React, { useEffect, useState } from 'react'
import Card from '@mui/material/Card'
import { CardHeader, CardContent, Typography, IconButton, Box, useTheme, Button, ButtonGroup } from '@mui/material'
import { KeyboardArrowLeftOutlined, KeyboardArrowRightOutlined, CloseOutlined, Star, StarBorder } from '@mui/icons-material'

import '../styles.css'
import { lineChartPointFormat, formatProbabilities, factorsAffectingProbability, returnStars, nivoBarYAxis } from '../functions';
import LineChart from "./LineChart";
import BarChart from "./BarChart"
import BarText from './BarText';
import { barAxisTheme} from '../theme'

function PopupCard({ rowData, setButtonPopup, maxIdx, oppIdx, setOppIdx }) {
    const theme = useTheme();
    const [tab, setTab] = useState('overview')
    const [messages, setMessages] = useState(null);

    const probabilityHistory = rowData.probabilityHistory ? formatProbabilities(rowData.probabilityHistory) : null
    const factors = factorsAffectingProbability(rowData.pilytixFactorsIncreasingWin, rowData.pilytixFactorsDecreasingWin)
    const nivoFactors = [...Object.values(factors)]
    const tier = returnStars(rowData.pilytixTier)
    // const getBarColor = barColors => barColors[bar.id]
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
        setMessages(factors.strongP.messages)
        return () => document.removeEventListener("keydown", keyPress);
    }, [oppIdx]);

    return (
        <div className='popup'>
            <Card sx={{ width: 700, height: 500 }} variant="outlined">
                <CardHeader
                    title={
                        <div className='card-head'>
                            <div style={{ width: '35px' }}>
                            </div>
                            <div style={{ justifyContent: 'center' }}>
                                <IconButton onClick={() => (clickDirection('left'))}>
                                    <KeyboardArrowLeftOutlined />
                                </IconButton>
                                {rowData.oppName}
                                <IconButton onClick={() => (clickDirection('right'))}>
                                    <KeyboardArrowRightOutlined />
                                </IconButton>
                            </div>
                            <div className='align-right'>
                                <IconButton onClick={() => (setButtonPopup(false))} >
                                    <CloseOutlined />
                                </IconButton>
                            </div>
                        </div>

                    }
                    subheader={rowData.salesRepName}

                />
                <CardContent>

                    <div className="popup-inner">


                        <ButtonGroup sx={{ display: "flex", justifyContent: "center" }}>
                            <Button style={{ width: '33%' }} onClick={() => setTab('overview')}>Opportunity Overview</Button>
                            <Button style={{ width: '33%' }} onClick={() => setTab('history')}>Probability History</Button>
                            <Button style={{ width: '33%' }} onClick={() => setTab('factors')}>Factors Affecting Win</Button>
                        </ButtonGroup>

                        <div>
                            {tab === 'overview' &&
                                <div style={{ display: "flex", flexDirection: "column", justifyContent: "center" }}>

                                    <div className='popup-row' >
                                        <div className='popup-item'>
                                            <div>Stage: {rowData.stage}</div>
                                        </div>
                                        <div className='popup-item'>
                                            <div style={{ display: 'flex', alignItems: "center" }}>Tier:</div>
                                            {tier.map((star, idx) =>
                                                <div key={idx}>{star}</div>
                                            )}
                                        </div>
                                    </div>

                                    <div className='popup-row'>
                                        <div className='popup-item'>
                                            <div>Product: {rowData.product}</div>
                                        </div>
                                        <div className='popup-item'>
                                            <div>Value: {rowData.amount.toLocaleString('US', { style: 'currency', currency: 'USD' }).split('.')[0]}</div>
                                        </div>
                                    </div>

                                    <div className='popup-row'>
                                        <div className='popup-item' style={{ flexDirection: "column" }}>
                                            <div>{(rowData.pilytixProbability * 100).toFixed(2).split('.')[0]}%</div>
                                            <div style={{ display: "flex", flexDirection: "column", justifyContent: 'flex-start' }}>
                                                <div style={{ justifyContent: "flex-start" }}>Pilytix Probability </div>
                                            </div>
                                        </div>

                                        <div className='popup-item' style={{ flexDirection: "column" }}>
                                            <div>{(rowData.repProbability * 100).toFixed(2).split('.')[0]}%</div>
                                            <div>Sales Rep Probabability</div>
                                        </div>
                                    </div>

                                </div>
                            }

                            {tab === 'history' &&
                                <div>
                                    {
                                        rowData.probabilityHistory ?
                                            <div className="chart-container">
                                                <LineChart data={probabilityHistory} />
                                            </div>
                                            : <div>No probability history yet</div>
                                    }
                                </div>
                            }

                            {tab === 'factors' &&
                                <div className="chart-container">
                                    <BarChart data={nivoFactors} yAxis={nivoBarYAxis(factors)} barAxisTheme={barAxisTheme} />
                                    <BarText messages={messages} setMessages={setMessages} factors={factors} />
                                </div>
                            }
                        </div>
                    </div>


                </CardContent>

            </Card>



        </div>
    )
}

export default PopupCard
