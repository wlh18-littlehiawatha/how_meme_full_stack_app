import React, {Component} from 'react'
import {withRouter} from 'react-router-dom'
import axios from 'axios'

class Meme extends Component {
    delete = id => {
        axios.delete(`/api/memes/${id}`)
        .then(() => {
            this.props.reRender()
        })
    }

    edit = id => {
        console.log(id)
        this.props.history.push(`/form/${id}`)
    }

    render(){
        return(
            <div className='meme-box'>
                <img src={`${this.props.memeInfo.url}`} alt='pic of meme'/>
                <div>{this.props.memeInfo.title}</div>
                <button onClick={() => this.delete(this.props.memeInfo.id)}>Delete</button>
                <button onClick={() => this.edit(this.props.memeInfo.id)}>Edit Meme</button>
            </div>
        )
    }
}

export default withRouter(Meme)