import logo from './logo.svg';
import './App.css';
import Home from './Home'
import Login from './Login'
import {BrowserRouter,Switch,Router, Route} from 'react-router-dom'
import PrivateRoute from './PrivateRoute'

function App() {
  const data={
    name:'sagor',
    id:'16cse067',
    gpa:'4.67'
  }
  return (
    <Home {...data}/>
   
  );
}

export default App;
