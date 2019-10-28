import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Header from './common/header'
import Home from './pages/home'
import Login from './pages/login'

class App extends React.Component {
  render() {
    return (
      <Router>
        <div>
          <Header />
          <Route path="/" exact component={Home}></Route>
          <Route path="/login" exact component={Login}></Route>
        </div>
      </Router>
    )
  }
}

export default App;
