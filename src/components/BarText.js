import React, { useState, useEffect } from 'react'

function BarText({ factors, messages, setMessages }) {

    return (
        <>
        <div className='flex-row'>
            <div onClick={() => {setMessages(factors.strongN.messages)}}>Strong-</div>
            <div onClick={() => {setMessages(factors.mediumN.messages)}}>Medium-</div>
            <div onClick={() => {setMessages(factors.weakN.messages)}}>Weak-</div>
            <div onClick={() => {setMessages(factors.weakP.messages)}}>Weak+</div>
            <div onClick={() => {setMessages(factors.mediumP.messages)}}>Medium+</div>
            <div onClick={() => {setMessages(factors.strongP.messages)}}>Strong+</div>
        </div>
            <div>{messages}</div>
        </>
    )
}
export default BarText
