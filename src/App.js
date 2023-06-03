import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import {AuthProvider} from './context/AuthContext'

import HomeScreen from './Screens/HomeScreen';
import LoginScreen from './Screens/LoginScreen';
import RegisterScreen from './Screens/RegisterScreen'
import PortfolioScreen from './Screens/PortfolioScreen'
import PrivateRoutes from './util/PrivateRoutes'

function App() {
  return (
    <Router>
      <AuthProvider>
      <Routes>
        <Route path='/' element={<HomeScreen />} />
        <Route path='/login' element={<LoginScreen />} />
        <Route path='/register' element={<RegisterScreen />} />
        <Route path='/portfolio' element={
            <PrivateRoutes>
              <PortfolioScreen />
            </PrivateRoutes>} />
      </Routes>
      </AuthProvider>
    </Router>
  );
}

export default App;
