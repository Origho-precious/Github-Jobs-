import React, { Component, createContext } from 'react';
import axios from 'axios';


export const Context = createContext();

class Store extends Component{
    state = {
        location: '',
        fullTime: '',
        searchTerm: '',
        result: null,
        error: null,
        selected: null,
        date: ''
    }

    fetchJobs = (e) => {
        e.preventDefault();
        
        if(this.state.location && this.state.searchTerm){
            axios.get(`https://cors-anywhere.herokuapp.com/https://jobs.github.com/positions.json?description=${this.state.searchTerm}&${this.state.fullTime ? 'full_time=true' : null}&location=${this.state.location}`)
                .then(response => {
                    this.setState({result: response.data})
                })
                .catch(error => this.setState({error: 'Search not found'}))
        }
    }

    render(){
        return(
            <Context.Provider value={{ 
                state: this.state,
                changeLocation: (value) => this.setState({location: value}),
                fullTime: (value) => this.setState({fullTime: value}),
                searchTerm: (value) => this.setState({searchTerm: value}),
                fetchJobs : this.fetchJobs,
                setSelected: (value) => this.setState({selected: value}),
                setDate: (value) => this.setState({date: value})
            }}>
                {this.props.children}
            </Context.Provider>
        )
    }
}

export default Store;