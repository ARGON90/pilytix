import React from 'react'
import './styles.css'
import { Card } from '@mui/material';
import { CardMedia } from '@mui/material';
import ProbabilityHistoryMapper from './ProbabilityHistory';

// function probabilityHistoryMapper(probability) {
//     console.log('hi there')

//     return (
//         <div>
//             {probability.map((item) => {
//                 <p>{item.daysAgo}{item.pilytixProbability}{item.repProb}</p>

//             })}
//         </div>
//     )
// }

export default function Popup({rowData, setButtonPopup}) {
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
                <ProbabilityHistoryMapper probability={rowData.probabilityHistory} />
            </div>
        </div>
    )
}
// export default function Popup(props) {
//     return (props.trigger) ? (
//         <div className="popup">
//             <div className="popup-inner">
//                 <button className="close-btn" onClick={() => props.setTrigger(false)}>close</button>
//                 { props.children }
//                 <div className='popup-text'>{props.amount}</div>
//             </div>
//         </div>
//     ) : "";
// }
