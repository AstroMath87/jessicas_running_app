import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './App';
import Races from './components/Races'
import NavBar from './components/NavBar'
//import * as serviceWorker from './serviceWorker';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom'

ReactDOM.render(
    <Router>
        <Switch>
            <Route exact path="/" render={()=><NavBar><App/></NavBar>}/>
            <Route exact path="/races" render={()=><NavBar><Races/></NavBar>}/>
            <Route exact path="/training" render={()=><NavBar><App/></NavBar>}/>
        </Switch>
    </Router>
    
    
    , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();
