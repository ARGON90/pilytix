import React, { useState } from 'react'

function BarText({ data }) {

    const [messages, setMessages] = useState(data[5].messages);

    function displayMessages(num) {
        // messages = {
        //     'Strong +': data[5].messages,
        //     'Medium +': data[4].messages,
        //     'Weak +': data[3].messages,
        //     'Weak -': data[2].messages,
        //     'Medium -': data[1].messages,
        //     'Strong -': data[0].messages,
        // }
        setMessages(data[num].messages)
    }



    return (
        <>
        <div className='flex-row'>
            <div id='Strong +' onClick={() => {displayMessages(5)}}>Strong -</div>
            <div id='Strong +' onClick={() => {displayMessages(4)}}>Medium -</div>
            <div id='Strong +' onClick={() => {displayMessages(3)}}>Weak -</div>
            <div id='Strong +' onClick={() => {displayMessages(2)}}>Weak -</div>
            <div id='Strong +' onClick={() => {displayMessages(1)}}>Medium -</div>
            <div id='Strong +' onClick={() => {displayMessages(0)}}>Strong -</div>
        </div>
            <div>{messages}</div>
        </>
    )
}
export default BarText
