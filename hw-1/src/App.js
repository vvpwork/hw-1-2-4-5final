import React from 'react'
import axios from 'axios'



const API_URL = 'http://localhost:3004/arr';

export default class App extends React.Component{

    state={
        arr: []
    }


    handleClick =()=>{
        axios.get(API_URL)
        .then(r => this.setState({
            arr: r.data
        }))
    }
    handlePost =()=>{
        axios.post(API_URL, {
            id:32,
            title: "ger",
            url: "red.com.ua",
            description: 'dededede'
        })
    }

    render(){
        const {arr} = this.state;

        return(
            <div>
                <button 
                type='button'
                onClick={this.handleClick}
                >Получить список 
                </button>
                <button 
                type='button'
                onClick={this.handlePost}
                >Получить список 
                </button>
            <ul>
                {arr.map(({title, url, description}) =><li>
                    <h2>{title}</h2>
                    <a href={url}>{url}</a>
                    <p>{description}</p>
                </li>)}
            </ul>
            </div>
        )
    }
}
