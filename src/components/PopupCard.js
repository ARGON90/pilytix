import React, { useEffect, useState } from 'react'
import Card from '@mui/material/Card'
import { CardHeader, CardContent, Typography, IconButton, Box, useTheme, Button, ButtonGroup } from '@mui/material'
import { KeyboardArrowLeftOutlined, KeyboardArrowRightOutlined, CloseOutlined, Star, StarBorder } from '@mui/icons-material'
import SellIcon from '@mui/icons-material/Sell';

import '../styles.css'
import { lineChartPointFormat, formatProbabilities, factorsAffectingProbability, returnStars, nivoBarYAxis, nivoProbabilities, percentageColor, planIcons } from '../functions';
import LineChart from "./LineChart";
import BarChart from "./BarChart"
import BarText from './BarText';
import RadialChart from './RadialChart'
import { testData } from './testradialdata'
import { barAxisTheme } from '../theme'


function PopupCard({ rowData, setButtonPopup, maxIdx, oppIdx, setOppIdx }) {
    const theme = useTheme();
    const [tab, setTab] = useState('overview')
    const [messages, setMessages] = useState(null);
    const [selectedFactor, setselectedFactor] = useState(null)
    const stage = rowData.stage.split('.')[0]

    const probabilityHistory = rowData.probabilityHistory ? formatProbabilities(rowData.probabilityHistory) : null
    const factors = factorsAffectingProbability(rowData.pilytixFactorsIncreasingWin, rowData.pilytixFactorsDecreasingWin)
    const nivoFactors = [...Object.values(factors)]
    const tier = returnStars(rowData.pilytixTier)
    const pilytixProbability = (rowData.pilytixProbability * 100).toFixed(2).split('.')[0]
    const repProbability = (rowData.repProbability * 100).toFixed(2).split('.')[0]

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

    const singleFactorData = {
        strongN: {
            messages: factors.strongN.messages,
            color: '#ca191d',
            title: "Strong Negative Factors"
        },
        mediumN: {
            messages: factors.mediumN.messages,
            color: '#fa6b4a',
            title: "Medium Negative Factors"
        },
        weakN: {
            messages: factors.weakN.messages,
            color: '#fdbba0',
            title: "Weak Negative Factors"
        },
        weakP: {
            messages: factors.weakP.messages,
            color: '#98d8c8',
            title: "Weak Positive Factors"
        },
        mediumP: {
            messages: factors.mediumP.messages,
            color: '#40ae77',
            title: "Medium Positive Factors"
        },
        strongP: {
            messages: factors.strongP.messages,
            color: '#0062dc',
            title: "Strong Positive Factors"
        }
    }


    useEffect(() => {
        document.addEventListener("keydown", keyPress);
        if (selectedFactor) {
            setMessages(singleFactorData[selectedFactor].messages)
        }
        return () => document.removeEventListener("keydown", keyPress);
    }, [oppIdx]);

    return (
        <div className='popup'>
            <Card sx={{ width: 800, height: 600 }} variant="outlined">
                <CardHeader
                    title={
                        <div className='card-head'>
                            <div style={{ width: '35px' }}>
                            </div>
                            <div style={{ width: '100%', display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-around', fontSize: '20px', fontWeight: 'bold' }}>

                                <div classname='test' style={{ display: "flex", width: '20%', justifyContent: 'flex-end' }}>
                                    <IconButton onClick={() => (clickDirection('left'))}>
                                        <KeyboardArrowLeftOutlined size='large' />
                                    </IconButton>
                                </div>

                                <div style={{ width: '50%' }}>
                                    {rowData.oppName}
                                </div>

                                <div style={{ display: "flex", width: '20%', justifyContent: 'flex-start' }}>
                                    <IconButton onClick={() => (clickDirection('right'))}>
                                        <KeyboardArrowRightOutlined />
                                    </IconButton>
                                </div>

                            </div>
                            <div className='align-right'>
                                <IconButton onClick={() => (setButtonPopup(false))} >
                                    <CloseOutlined />
                                </IconButton>
                            </div>
                        </div>

                    }
                    subheader={`Sales Rep: ${rowData.salesRepName}`}

                />
                <CardContent>

                    <div className="popup-inner">


                        <ButtonGroup sx={{ display: "flex", justifyContent: "center" }}>
                            <Button sx={{ fontSize: '15px' }} style={tab === 'overview' ? { backgroundColor: "#90caf9", color: 'black', fontWeight: 'bold', width: '33%' } : { width: '33%' }} onClick={() => setTab('overview')}>Opportunity Overview</Button>
                            <Button sx={{ fontSize: '15px' }} style={tab === 'history' ? { backgroundColor: "#90caf9", color: 'black', fontWeight: 'bold', width: '33%' } : { width: '33%' }} onClick={() => setTab('history')}>Probability History</Button>
                            <Button sx={{ fontSize: '15px' }} style={tab === 'factors' ? { backgroundColor: "#90caf9", color: 'black', fontWeight: 'bold', width: '33%' } : { width: '33%' }} onClick={() => setTab('factors')}>Factors Affecting Win</Button>
                        </ButtonGroup>

                        <div>
                            {tab === 'overview' &&
                                <div style={{ display: "flex", flexDirection: "column", justifyContent: "center" }}>

                                    <div className='popup-row1' >
                                        <div className='popup-item'>
                                            <div className='popup-item-title'>Stage</div>
                                            <div className='stage-container'>
                                                <button className={stage === '1' ? 'stage-highlighted' : 'stage-default'} style={{ backgroundColor: '#f0f3fb', borderRadius: '4px 0 0 4px' }}>{stage === '1' && 1}</button>
                                                <button className={stage === '2' ? 'stage-highlighted' : 'stage-default'} style={{ backgroundColor: '#e1e6f7' }}>{stage === '2' && 2}</button>
                                                <button className={stage === '3' ? 'stage-highlighted' : 'stage-default'} style={{ backgroundColor: '#d2daf3' }}>{stage === '3' && 3}</button>
                                                <button className={stage === '4' ? 'stage-highlighted' : 'stage-default'} style={{ backgroundColor: '#c3cdef' }}>{stage === '4' && 4}</button>
                                                <button className={stage === '5' ? 'stage-highlighted' : 'stage-default'} style={{ backgroundColor: '#b4c1ec' }}>{stage === '5' && 5}</button>
                                                <button className={stage === '6' ? 'stage-highlighted' : 'stage-default'} style={{ backgroundColor: '#a5b4e8' }}>{stage === '6' && 6}</button>
                                                <button className={stage === '7' ? 'stage-highlighted' : 'stage-default'} style={{ backgroundColor: '#96a8e4' }}>{stage === '7' && 7}</button>
                                                <button className={stage === '8' ? 'stage-highlighted' : 'stage-default'} style={{ backgroundColor: '#879be0', borderRadius: '0px 4px 4px 0' }}>{stage === '8' && 8}</button>
                                            </div>
                                            <div className='popup-item-text'> {rowData.stage.split('.')[1]}</div>
                                        </div>

                                        <div className='popup-item'>
                                            <div className='popup-item-title'>Tier</div>
                                            <div className='stars-container'>
                                                {tier.map((star, idx) =>
                                                    <div className='star' key={idx}>{star}</div>
                                                )}
                                            </div>
                                        </div>
                                    </div>

                                    <div className='popup-row2'>

                                        <div className='popup-item'>
                                            <div className='popup-item-title'>Product</div>
                                            <div className='popup-item-row2'>
                                                <div>{rowData.product}</div>
                                                <div className='plan-icon'>{planIcons(rowData.product)}</div>
                                            </div>
                                        </div>

                                        <div className='popup-item'>
                                            <div className='popup-item-title'>Value</div>
                                            <div className='popup-item-row2'>
                                                <div>{rowData.amount.toLocaleString('US', { style: 'currency', currency: 'USD' }).split('.')[0]}</div>
                                                <div className='plan-icon'><SellIcon /></div>
                                            </div>
                                        </div>
                                    </div>


                                    <div className='popup-row-radial'>
                                        <div className='radial-left-spacer'></div>
                                        <div style={{ height: '200px', width: '200px' }}>
                                            <div id="radial-container">
                                                <div id="radial" className='ind-radial-container radial-column-left'>
                                                    <RadialChart data={nivoProbabilities(repProbability)} color={percentageColor(repProbability)} />
                                                </div>

                                                <div id='percentage' className='percentage-styling' style={{ color: percentageColor(repProbability) }}>{repProbability}%</div>
                                                <div id="radial" className='ind-radial-container'>
                                                    <div id='percentage-text' className='radial-title'>Rep Probability</div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className='radial-mid-spacer'></div>
                                        <div className='radial-mid-spacer'></div>
                                        <div style={{ height: '200px', width: '200px' }}>
                                            <div id="radial-container">
                                                <div id="radial" className='ind-radial-container'>
                                                    <RadialChart data={nivoProbabilities(pilytixProbability)} color={percentageColor(pilytixProbability)} />
                                                </div>
                                                <div id='percentage' className='percentage-styling' style={{ color: percentageColor(pilytixProbability) }}>{pilytixProbability}%</div>
                                                <div id="radial" className='ind-radial-container'>
                                                    <div id='percentage-text' className='radial-title'>Pilytix Probability</div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className='radial-right-spacer'></div>
                                    </div>

                                </div>
                            }

                            {tab === 'history' &&
                                <div>
                                    {
                                        rowData.probabilityHistory ?
                                            <div className="linechart-container">
                                                <LineChart data={probabilityHistory} axisTheme={barAxisTheme} />
                                            </div>
                                            : <div className='probability-message'>There's no probability history for this opportunitiy!</div>
                                    }
                                </div>
                            }

                            {tab === 'factors' &&
                                <div className="chart-container">
                                    <BarChart data={nivoFactors} yAxis={nivoBarYAxis(factors)} barAxisTheme={barAxisTheme} />
                                    <BarText messages={messages} setMessages={setMessages} oppIdx={oppIdx} selectedFactor={selectedFactor} setselectedFactor={setselectedFactor} singleFactorData={singleFactorData} />
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
