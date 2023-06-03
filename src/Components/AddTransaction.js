import React from 'react'

function AddTransaction({props}) {
    
  return (
    <div>
        <div className="popup-box">
            <div className="trans-box">
                <span className="close-icon" onClick={props}>x</span>
                <p>test</p>
            </div>
        </div>
    </div>
  )
}

export default AddTransaction