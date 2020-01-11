import React, { Component } from 'react'
import logo from './logo.svg';
import {Switch, Route} from 'react-router-dom'
import './App.css';
import Phones from './Components/Phones'
import PhonesDetail from './Components/PhonesDetail'

class App extends Component{
  constructor (){
    super()
    this.state = {}
  }
  render(){
    return(
      <Switch>
        <Route exact path="/" component={Phones}/>
        <Route path='/:id' component={PhonesDetail}/>
      </Switch>
    )
  }
}
export default App;
