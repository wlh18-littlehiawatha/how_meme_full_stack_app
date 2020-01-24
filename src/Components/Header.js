import React from 'react'
import '../App.css'
import {withRouter, Link} from 'react-router-dom'

function Header(props){
    console.log(props)
    return(
        <div className='nav-bar'>
            <div onClick={() => props.history.push('/')}>
                HowMeme
            </div>
            <div className='nav-bar-links'>
                <Link to='/product'>Product</Link>
                <Link to='/wall-of-meme'>Wall of Meme</Link>
                <Link to='/contact-us'>Contact Us</Link>
            </div>
        </div>
    )
}

export default withRouter(Header)