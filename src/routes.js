import React from 'react'
import {Switch, Route} from 'react-router-dom'
import Landing from './Components/Landing'
import Memes from './Components/Memes'
import Contact from './Components/Contact'
import Product from './Components/Product'
import AddMeme from './Components/AddMeme'

export default (
    <Switch>
        <Route exact path='/' component={Landing}/>
        <Route path='/product' component={Product}/>
        <Route path='/wall-of-meme' component={Memes}/>
        <Route exact path='/add-meme' component={AddMeme}/>
        <Route path='/add-meme/:id' component={AddMeme}/>
        <Route path='/contact-us' component={Contact}/>
    </Switch>
)