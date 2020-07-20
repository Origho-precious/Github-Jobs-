import React, { Component } from 'react';
import styles from './App.module.css';
import Search from './Search';
import Location from './Location';
import Jobs from './Jobs';
import { Context } from './context';

class App extends Component{
  render(){
    return (
      <div className={styles.App}>
        <h2 className={styles.title}>Github <span>Jobs</span></h2>
        <Search/>
        <Context.Consumer>
          {(context) => (
            <div className={styles.fullTime}>
              <input 
                  type="checkbox" 
                  id="full-time"
                  onClick={e => e.target.checked ? context.fullTime(e.target.value) : context.fullTime('')}
                  value="full_time"
              />
              <label htmlFor="full-time">Full time</label>
          </div>
          )}
        </Context.Consumer>
        <div className={styles.grid}>
          <Location/>
          <Jobs/>
        </div>
      </div>
    );
  }
}

export default App;
