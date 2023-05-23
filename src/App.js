import './App.css';
import Navbar from './Components/Navbar';
import Hero from './Components/Hero';
import CoinList from './Components/CoinList'

function App() {
  
  return (
    <div>
    <div className="main">
        <Navbar />
        <Hero />
    </div>
    <div className='market'>
    <CoinList />
    </div>
    </div>
  );
}

export default App;
