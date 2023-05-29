import React, { useEffect, useState } from 'react'
import axios from 'axios'

function CoinList() {
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(false)
  const [currentPage, setCurrentPage] = useState(1)


  useEffect(() => {
    const fetch = async () => {
      setLoading(true)
      const res = await axios.get(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=${currentPage}&sparkline=false`)
      setData(res.data);
      setLoading(false);
    }

    fetch()
  }, []);

  function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }

  const paginationButtons = [];
  for (let i = 1; i <= 5; i++) {
    paginationButtons.push(
      <button
        key={i}
        onClick={() => setCurrentPage(i)}
        className={i === currentPage ? "activePagi" : ""}
      >
        {i}
      </button>
    );
  }

  const scrollMarket = () => {
    window.scrollTo({
      top: window.pageYOffset - 800,
      behavior: "smooth",
    });
  };
  
  return (
    <div>
      <div className='market-title'>Market Update</div>

      <div className='market-content'>
        <div className='market-content-title'>
          <p className='coin-title'>Coin</p>
          <p>Price</p>
          <p>24h Change</p>
          <p>Market Cap</p>
        </div>

        <div className='market-content-lists'>
          {data.map(data => (
            <div className='market-content-list'>
              <span className='img-list'>
                <img src={data.image} alt={data.name} style={{width: 25}} className='coin-imgs' /> {data.name}
              </span>
              <p className='prices'>{"$ " + data.current_price.toFixed(2)}</p>
              <p className={"slider-coin__price " + (data.price_change_percentage_24h >= 0 ? "green-text" : "red-text")}>
                {data.price_change_percentage_24h?.toFixed(2) + " %"}
              </p>
              <p className='market-cap'>{"$ " + numberWithCommas(data.market_cap)}</p>
            </div>
          ))}
        </div>
      </div>

      <div onClick={scrollMarket} className="market-content__coin-list__pagination">
        {paginationButtons}
      </div>

    </div>
  )
}

export default CoinList