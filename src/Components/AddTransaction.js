import React from 'react'

function AddTransaction({toggle}) {
    
  return (
    <div>
        <div className="popup-box">
            <div className="trans-box">
                <div className='trans-title'>
                  <h2>Add Transaction</h2>
                  <div className="underline-title-trs"></div>
                </div>

                <span className="close-icon" onClick={toggle}>x</span>
                <form className="form-trans">
                  <div className='form-trans_f'>
                  <label for="coin-name">Name:</label>
                  <input className='form-content-trs' type="text" id="coin-name" name="coin-name" /> <br />
                  </div>
                  <div className='form-trans_f'>
                  <label for="coin-qty">Quantity:</label>
                  <input className='form-content-trs' type="text" id="coin-qty" name="coin-qty" /> <br />
                  </div>
                  <div className='form-trans_f1'>
                  <label for="buy-price">Buy Price:</label>
                  <input className='form-content-trs' type="text" id="buy-price" name="buy-price"  /> 
                  <label for="value">Value:</label>
                  <input className='form-content-trs' type="text" id="value" name="value" /><br />
                  </div>
                  <div className='tbtn-cont'>
                  <input className='trans-btn' type="submit" value="+ Add Transaction" />
                  </div>
                </form>
            </div>
        </div>
    </div>
  )
}

export default AddTransaction