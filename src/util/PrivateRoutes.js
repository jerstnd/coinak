import React, {useContext} from 'react'
import {Navigate} from 'react-router-dom'
import AuthContext from '../context/AuthContext'

const PrivateRoutes = ({ children }) => {

    let {user} = useContext(AuthContext)

    if (!user) {
      return <Navigate to="/login" replace />;
    }
  
    return children;
  };

export default PrivateRoutes