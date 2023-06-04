import React from 'react'

function About() {
  return (
    <div>
        <div className='about-title-u'>
        <div className='about-title'>Features</div>
        <div className="underline-about"></div>
        </div>

        <div className='about-cards'>
            <div className='about-card'>
                
                <h4>Real-Time Data and Analytics</h4>
                <p>Stay on top of the crypto market with our real-time data and analytics. Get instant access to up-to-date prices, trends, and volumes. Make informed investment decisions with intuitive charts and visualizations.</p>
                <button className='about-button'>See more</button>
            </div>
            <div className='about-card'>
                
                <h4>Advanced Portfolio Management</h4>
                <p>Manage your cryptocurrency investments effortlessly. Track portfolio balances, view transaction history, and gain insights into profit/loss. Simplify portfolio optimization and make smarter investment choices..</p>
                <button className='about-button'>See more</button>            
            </div>
            <div className='about-card'>
                
                <h4>Personalized Alerts and Notifications</h4>
                <p>Never miss a trading opportunity. Set customized alerts for price thresholds, volume changes, and news updates. Stay informed with real-time notifications and make timely decisions to maximize returns.</p>
                <button className='about-button'>See more</button>
            </div>
        </div>
    </div>
  )
}

export default About