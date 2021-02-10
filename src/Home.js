import React from 'react';
import Home1 from './Home1';
import Login from './Login'

import { BrowserRouter, Switch, Route,Link,useRouteMatch } from 'react-router-dom'
import PrivateRoute from './PrivateRoute'

const Home = (props) => {
    // const prms=props.match.params.username;
    // console.log(prms)
    const {path,url}=useRouteMatch();
    return (
        <div>
            <Link to={`${url}/home1`} >Home1</Link>
            <Switch>
                <Route path={`${path}/home1`} render={(ppp)=>{
                    return(
                        <Home1 />
                    )
                }
                } >
                    
                </Route>
            </Switch>
        </div>
      
    );
};

export default Home;