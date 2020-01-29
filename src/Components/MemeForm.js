import React, {Component} from "react";
import axios from 'axios'

class MemeForm extends Component {
    constructor(){
        super()
        this.state = {
            id: 0,
            url: '',
            title: '',
            editing: false
        }
    }

    componentDidMount(){
        if(this.props.match.params.id){
            console.log('this.props.match', this.props.match)
            axios.get(`/api/memes/${this.props.match.params.id}`)
            .then(res => this.setState({
                id: res.data.id,
                url: res.data.url,
                title: res.data.title,
                editing: true
            }))
        }
    }

    handleChange = e => {
        const {name, value} = e.target
        this.setState({
            [name]: value
        })
    }

    addMeme = (url, title) => {
        axios.post('/api/memes', {url, title})
        .then(()=> {
            this.setState({
                id: 0,
                url: '',
                title: '',
                editing: false
            })
            this.props.history.push('/wall-of-memes')
        })
    }

    updateMeme = (id, url, title) => {
        axios.put(`/api/memes/${id}`, {url, title})
        .then(()=> {
            this.setState({
                id: 0,
                url: '',
                title: '',
                editing: false
            })
            this.props.history.push('/wall-of-memes')
        })
    }

    render(){
        const {editing, id, url, title} = this.state
        return (
            <div className="add-box">
                <input
                    name='url'
                    onChange={e => this.handleChange(e)}
                    placeholder='Meme URL'
                    value={this.state.url}
                />
                <input
                    name='title'
                    onChange={e => this.handleChange(e)}
                    placeholder='Meme Title'
                    value={this.state.title}
                    maxLength='20'
                />
                {editing ? (
                    <button onClick={() => this.updateMeme(id, url, title)}>Update Meme!</button>
                ) : (
                    <button onClick={() => this.addMeme(url, title)}>Add Meme!</button>
                )}
            </div>
        );
    }
    
}

export default MemeForm;
