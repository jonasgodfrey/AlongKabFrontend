import React, { Component } from 'react'
import Header from './Header'
import Menu from './Menu'
import Footer from './Footer'
import Dashboard from './Views/Dashboard'
import Drivers from './Views/Drivers'
import Users from './Views/Users'
import KabRoutes from './Views/KabRoutes'
import Login from './Login'
import Register from './Register'
// import Login from './Login/Login'
import Home from './Login/Home'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'


export default class App extends Component {

  
  render() {
    return (
      <Router>
      <div>
      {/* <Header/> */}
      <Switch>
      
      {/* <Route path="/" exact component={Dashboard} />    
      
         
      <Route path="/users" component={Users} /> 
      <Route path="/kabroutes" component={KabRoutes} /> */}
      <Route path="/" component={Login} />
      <Route path="/dashboard" exact component={Dashboard} /> 
      {/* <Route path="/register" component={Register} />
      <Route path="/login" component={Login} /> 
      <Route path="/test" component={Test} /> */}
      {/* <Route path="/" exact component={Login} />     */}
      {/* <Route path="/Login" component={Login} /> */}
      {/* <Route path="/home" component={Home} />  */}
    
      </Switch>
      {/* <Menu/>
      <Footer/> */}
      </div>

      </Router>
    )
  }
}
