import React, { Component } from 'react';
import styles from './location.module.css';
import { Context } from '../context';

class Location extends Component{
    render(){
        return(
            <Context.Consumer>
                {(context) => (
                    <div className={styles.Location}>
                        <h5>Location</h5>
                        <small>Select one location(type if not available)</small>
                        <input 
                            type="text"
                            placeholder="City, state, zip code or country"
                            onChange={e => context.changeLocation(e.target.value)}
                            value={context.state.location}
                        />
                        <div className={styles.checkboxes}>
                            <form>
                                <div>
                                    <input 
                                        type="radio" 
                                        id="1st"
                                        onClick={e => e.target.checked ? context.changeLocation(e.target.value) : context.changeLocation('')}
                                        value="London"
                                    />
                                    <label htmlFor="1st">London</label>
                                </div>
                                <div>
                                    <input 
                                        type="radio" 
                                        id="2nd"
                                        onClick={e => e.target.checked ? context.changeLocation(e.target.value) : context.changeLocation('')}
                                        value="Amsterdam"
                                    />
                                    <label htmlFor="2nd">Amsterdam</label>
                                </div>
                                <div>
                                    <input 
                                        type="radio" 
                                        id="3rd"
                                        onClick={e => e.target.checked ? context.changeLocation(e.target.value) : context.changeLocation('')}
                                        value="New York"
                                    />
                                    <label htmlFor="3rd">New York</label>
                                </div>
                                <div>
                                    <input
                                        type="radio" 
                                        id="4th"
                                        onClick={e => e.target.checked ? context.changeLocation(e.target.value) : context.changeLocation('')}
                                        value="Berlin"
                                    />
                                    <label htmlFor="4th">Berlin</label>
                                </div>
                            </form>
                        </div>
                    </div>
                )}
            </Context.Consumer>
        )
    }
}

export default Location;