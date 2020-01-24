import React, {Component} from "react";
import {Link} from 'react-router-dom'
import axios from 'axios'
import Meme from './Meme'

class Memes extends Component {
    constructor(){
        super()
        this.state = {
            memes: []
        }
    }

    componentDidMount(){
        this.reRender()
    }

    reRender = () => {
        axios.get('/api/memes')
        .then(res => this.setState({
            memes: res.data
        }))
    }

    render(){
        return (
            <div>
                <Link to='/add-meme'>Add Meme</Link>
                {this.state.memes.map(element => {
                    return <Meme 
                                key={element.id}
                                memeInfo={element}
                                reRender={this.reRender}
                            />
                })}
            </div>
        )
    }
}

export default Memes;
