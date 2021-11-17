import React from 'react'
import { Route, Switch } from 'react-router'
import Customer from '../pages/Customer'
import DashBoard from '../pages/DashBoard'
import Products from '../pages/Products'
import Setting from '../pages/Setting'

const Routes = () => {
    return (
        <Switch>
            <Route path='/' component={DashBoard} exact={true}/>
            <Route path='/customers' component={Customer} exact={true} />
            <Route path='/products' component={Products} exact={true}/>
            <Route path='/settings' component={Setting} exact={true}/>
        </Switch>
    )
}

export default Routes
