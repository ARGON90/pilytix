import React from 'react'
import './styles.css'


function popupClose(trigger) {
    console.log('hello')
    trigger(false)

}

export default function Popup(props) {
    return (
        <div className="popup">
            <div className="popup-inner">
                <button className="close-btn" onClick={() => popupClose(props.setTrigger) }>close</button>
                { props.children }
                <div className='popup-text'>{props.amount}</div>
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
