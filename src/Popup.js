import React from 'react'
import './styles.css'
import MyResponsiveLine from "./LineChart";
import formatProbabilities from './functions';

export default function Popup({ rowData, setButtonPopup }) {

    let probabilities;
    if (rowData.probabilityHistory) {
        probabilities = formatProbabilities(rowData.probabilityHistory)
    }

    return (
        <div className="popup">
            <div className="popup-inner">
                <button className='close-btn' onClick={() => (setButtonPopup(false))}> close </button>
                <h2 className="popup-text"> Popup Card </h2>
                <div className="popup-text">{rowData.stage}</div>
                <div className="popup-text">{rowData.repProbability}</div>
                <div className="popup-text">{rowData.pilytixProbability}</div>
                <div className="popup-text">{rowData.pilytixTier}</div>
                <div className="popup-text">{rowData.amount}</div>
                <div className="popup-text">{rowData.product}</div>
                <div className="popup-text">{rowData.salesRepName}</div>
                {rowData.probabilityHistory &&
                <div className="chart-container">
                    <MyResponsiveLine data={probabilities} />
                </div>
                }
            </div>
        </div>
    )
}
