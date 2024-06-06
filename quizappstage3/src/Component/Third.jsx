import React from 'react'

function Third() {
    const score=localStorage.getItem('score');
    const wrongscore=localStorage.getItem('wrongscore');
    const attempt=localStorage.getItem('attempt')
  return (
    <div className='thirdOuterContainer'>
        <h2 className='h2h1'><span> RESULTS</span></h2>
       
        <h1 className='h2h1'> Your Score : {score || '0'} </h1>
        <div className='result-grid'>
            <div className="result-item">Total Number of Questions:</div>
            <div className="result-value">15</div>
            <div className="result-item">Number of Questions Attempted:</div>
            <div className="result-value">{attempt || '0'}</div>
            <div className="result-item">Total Correct Questions:</div>
            <div className="result-value">{score || '0'}</div>
            <div className="result-item">Total Wrong Questions:</div>
            <div className="result-value">{wrongscore || '0'}</div>
        </div>
        
    </div>
  )
}

export default Third
