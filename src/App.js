import './App.css';
import Home from './Home'
import Login from './Login'

import { BrowserRouter, Switch, Route,useParams,useRouteMatch } from 'react-router-dom'
import PrivateRoute from './PrivateRoute'
import React, { useState } from 'react'
import AuthContext, { ContextReader } from './AuthContext'
import Ckedditor from './Ckedditor'




function App() {

  return (
    <div className={{background:'black'}}>
      <Ckedditor/>

    </div>

  );
}

export default App;
