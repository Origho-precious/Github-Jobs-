import React, { Component } from 'react';
import styles from './search.module.css';
import { Context } from '../context';

class Search extends Component {
    render(){
        return(
            <Context.Consumer>
                {(context) => (
                    <div className={styles.Search}>
                        <form onSubmit={context.fetchJobs}>
                            <input 
                                onChange={(e) => context.searchTerm(e.target.value)} 
                                type="text" 
                                value={context.state.searchTerm}
                                placeholder="Title, Company, expertise or benefit"
                            />
                            <button type="submit">Search</button>
                        </form>
                    </div>
                )}
            </Context.Consumer>
        )
    }
}

export default Search;