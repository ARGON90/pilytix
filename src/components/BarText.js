import { MessageSharp } from '@mui/icons-material'
import React, { useState, useEffect } from 'react'
import { Button, ButtonGroup, useTheme } from '@mui/material'

function BarText({ factors, singleFactorData, messages, setMessages, selectedFactor, setselectedFactor }) {


    const theme = useTheme();

    function messagesAndColor(factor) {
        setMessages(singleFactorData[factor].messages)
        setselectedFactor(factor)
    }

    function messageTitle(factor) {
        if (!factor) return 'Click on a factor to see its messages!'
        return singleFactorData[factor].title
    }

    return (
        <>
            <div className='bar-header-container'>
                <div className={selectedFactor === 'strongN' ? 'strongN-highlight' : 'strongN-default'} onClick={() => { messagesAndColor('strongN') }}>Strong-</div>
                <div className={selectedFactor === 'mediumN' ? 'mediumN-highlight' : 'mediumN-default'} onClick={() => { messagesAndColor('mediumN') }}>Medium-</div>
                <div className={selectedFactor === 'weakN' ? 'weakN-highlight' : 'weakN-default'} onClick={() => { messagesAndColor('weakN') }}>Weak-</div>
                <div className={selectedFactor === 'weakP' ? 'weakP-highlight' : 'weakP-default'} onClick={() => { messagesAndColor('weakP') }}>Weak+</div>
                <div className={selectedFactor === 'mediumP' ? 'mediumP-highlight' : 'mediumP-default'} onClick={() => { messagesAndColor('mediumP') }}>Medium+</div>
                <div className={selectedFactor === 'strongP' ? 'strongP-highlight' : 'strongP-default'} onClick={() => { messagesAndColor('strongP') }}>Strong+</div>
            </div>

            <div className='messages-container'>
                <div id="messages-title" className={selectedFactor ? `${selectedFactor}-highlight` : ''}>
                    {messageTitle(selectedFactor)}
                </div>

                {messages && !messages.length &&
                    <div>There are no messages for this Factor!</div>}

                {messages && messages.length ?
                    <ul>
                        {messages.map((message, idx) =>
                            <li key={idx} className='message'> {message}</li>
                        )}
                    </ul>
                    : ''}

            </div>
        </>
    )
}
export default BarText
