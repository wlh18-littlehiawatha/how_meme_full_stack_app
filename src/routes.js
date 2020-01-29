import React from 'react'
import {Switch, Route} from 'react-router-dom'
import Landing from './Components/Landing'
import Memes from './Components/Memes'
import Contact from './Components/Contact'
import Product from './Components/Product'
import MemeForm from './Components/MemeForm'
import Favorites from './Components/Favorites'

export default (
    <Switch>
        <Route exact path='/' component={Landing}/>
        <Route path='/product' component={Product}/>
        <Route path='/wall-of-memes' component={Memes}/>
        <Route exact path='/form' component={MemeForm}/>
        <Route path='/form/:id' component={MemeForm}/>
        <Route path='/contact-us' component={Contact}/>
        <Route path='/favorites' component={Favorites}/>
    </Switch>
)