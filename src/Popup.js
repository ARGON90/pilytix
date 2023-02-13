import React from 'react'
import './styles.css'
import MyResponsiveLine from "./LineChart";
import MyResponsiveBar from "./TestBarChart"
import { formatProbabilities, factorsAffectingProbability } from './functions';
import { useState } from 'react';
import {barData} from "./barChartData"
import TestChartTwo from './TestChartTwo';

export default function Popup({ rowData, setButtonPopup }) {

    const [tab, setTab] = useState('overview')

    let probabilities;
    if (rowData.probabilityHistory) {
        probabilities = formatProbabilities(rowData.probabilityHistory)
    }

    let factors = factorsAffectingProbability(rowData.pilytixFactorsIncreasingWin, rowData.pilytixFactorsDecreasingWin)
    console.log(factors)
    return (
        <div className="popup">
            <div className="popup-inner">
                <button className='close-btn' onClick={() => (setButtonPopup(false))}> close </button>
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
                            <MyResponsiveBar data={factors}/>
                        </div>
                    }
                </div>
            </div>
        </div>
    )
}
