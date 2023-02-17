import React from 'react'

function BarText({ singleFactorData, messages, setMessages, selectedFactor, setselectedFactor }) {

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
                <div className={selectedFactor === 'strongN' ? 'strongN-highlight bar-x-default' : 'strongN-default bar-x-default'} onClick={() => { messagesAndColor('strongN') }}>Strong-</div>
                <div className={selectedFactor === 'mediumN' ? 'mediumN-highlight bar-x-default' : 'mediumN-default bar-x-default'} onClick={() => { messagesAndColor('mediumN') }}>Medium-</div>
                <div className={selectedFactor === 'weakN' ? 'weakN-highlight bar-x-default' : 'weakN-default bar-x-default'} onClick={() => { messagesAndColor('weakN') }}>Weak-</div>
                <div className={selectedFactor === 'weakP' ? 'weakP-highlight bar-x-default' : 'weakP-default bar-x-default'} onClick={() => { messagesAndColor('weakP') }}>Weak+</div>
                <div className={selectedFactor === 'mediumP' ? 'mediumP-highlight bar-x-default' : 'mediumP-default bar-x-default'} onClick={() => { messagesAndColor('mediumP') }}>Medium+</div>
                <div className={selectedFactor === 'strongP' ? 'strongP-highlight bar-x-default' : 'strongP-default bar-x-default'} onClick={() => { messagesAndColor('strongP') }}>Strong+</div>
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
