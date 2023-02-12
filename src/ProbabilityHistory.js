import React from 'react'

function ProbabilityHistoryMapper({ probability }) {
  return (
    <>
      <div className='popup-text'>
        {probability && probability.map((prob) =>
          <div>
            <div>{prob.daysAgo}</div>
          </div>
        )}
      </div>
    </>
  )
}

export default ProbabilityHistoryMapper
