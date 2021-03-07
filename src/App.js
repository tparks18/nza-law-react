import React, {Component} from 'react'
import './App.css';
import Contact from './views/Contact/index.';
import Home from './views/Home';
import WhatWeDo from './views/WhatWeDo';
import WhereWeWork from './views/WhereWeWork';
import { Route, Switch } from 'react-router-dom';
// import Footer from '../src/components/Footer'

export default class App extends Component {
  constructor() {
    super();
    console.log("Component Constructed");
  }

  render() {
    console.log("Component rendered");

    return (
      <div>
      <main className = "component-container">
    
      <Switch>
        <Route exact path='/' render={() => <Home />} />
        <Route exact path='/contact' render={() => <Contact />} />
        <Route exact path='/wherewework' render={() => <WhereWeWork />} />
        <Route exact path='/whatwedo' render={() => <WhatWeDo />} />
       
      </Switch>
      </main>

      
      </div>
    )
  }
  componentDidMount() { 
  console.log("component mounted");
}
}

