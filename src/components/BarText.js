import React, { useState, useEffect } from 'react'

function BarText({ factors, messages, setMessages }) {
    // console.log(data, 'data')

    // const [messages, setMessages] = useState(data[5].messages);

    // function displayMessages(num) {
    //     setMessages(data[num].messages)
    // }

    return (
        <>
        <div className='flex-row'>
            <div onClick={() => {setMessages(factors[5].messages)}}>Strong-</div>
            <div onClick={() => {setMessages(factors[4].messages)}}>Medium-</div>
            <div onClick={() => {setMessages(factors[3].messages)}}>Weak-</div>
            <div onClick={() => {setMessages(factors[2].messages)}}>Weak+</div>
            <div onClick={() => {setMessages(factors[1].messages)}}>Medium+</div>
            <div onClick={() => {setMessages(factors[0].messages)}}>Strong+</div>
        </div>
            <div>{messages}</div>
        </>
    )
}
export default BarText
