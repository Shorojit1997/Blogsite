import React from 'react';
import Home2 from './Home2';
import { useContext } from 'react'
import AuthContext from './AuthContext'
import { BrowserRouter, Switch, Route, Link, useRouteMatch,useParams } from 'react-router-dom'

const Home1 = (props) => {

    // const {name,id,login}  = useContext(AuthContext);
    const { path, url } = useRouteMatch();
    const {param}=useParams();

    console.log(path);
    return (
        <div>
            <h1>Hello brother i am home1 :{url} </h1>

            <Switch>
                <Route path={`${path}/:id`} render={(ppp) => {
                    return (
                        <Home2 />
                    )
                }
                } ></Route>
            </Switch>

        </div>

    );
};

export default Home1;