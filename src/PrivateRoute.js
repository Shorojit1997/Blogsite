import React,{useContext} from 'react';
import { Redirect, Route } from 'react-router-dom';

import AuthContext from './AuthContext'
import {useHistory} from 'react-router-dom'

const PrivateRoute = ({component: Component,...rest}) => {
    const history =useHistory();
    // const {islogin}=useContext(AuthContext);
    const islogin=localStorage.getItem('auth')
    return(
       <Route {...rest} render={(props)=>(
           islogin? <Component {...props} />: history.push('/login')
        //    <Redirect to='/login'/>
       )} />
    )

};

export default PrivateRoute;