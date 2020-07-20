import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Route} from 'react-router-dom';
import './index.css';
import App from './components/App';
import Job from './components/Jobs/Job';
import Store from './components/context'

ReactDOM.render(
    <BrowserRouter>
      <Store>
        <Route exact path="/" component={App}/>
        <Route exact path="/job" component={Job}/>
      </Store>
    </BrowserRouter>,
  document.getElementById('root')
);

