import { MessageSharp } from '@mui/icons-material'
import React, { useState, useEffect } from 'react'
import { Button, ButtonGroup } from '@mui/material'

function BarText({ factors, messages, setMessages }) {

    const [highlight, setHighlight] = useState('strongP')

    function textHighlight() {


    }

    return (
        <>
            <div className='bar-header-container'>
                <div className={true ? 'bar-header' : ''} onClick={() => { setMessages(factors.strongN.messages) }}>Strong-</div>
                <div onClick={() => { setMessages(factors.mediumN.messages) }}>Medium-</div>
                <div onClick={() => { setMessages(factors.weakN.messages) }}>Weak-</div>
                <div onClick={() => { setMessages(factors.weakP.messages) }}>Weak+</div>
                <div onClick={() => { setMessages(factors.mediumP.messages) }}>Medium+</div>
                <div onClick={() => { setMessages(factors.strongP.messages) }}>Strong+</div>
            </div>
            <div className='messages-container'>

                {messages.length ?
                    <ul>
                        {messages.map((message, idx) =>
                            <li key={idx} className='message'>{message}</li>
                        )}
                    </ul>

                    : <div>no messages to display</div>}

            </div>
        </>
    )
}
export default BarText
