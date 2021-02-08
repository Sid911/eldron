import React, { Component } from 'react'
import { connect } from 'react-redux'

import LoginPage from "./Login/Login"
import Dashboard from "./Dashboard/dashboard"
import Splash from './SplashScreen/Splash';
import { BrowserRouter } from 'react-router-dom';

class App extends Component {
  state = {
    splash: true
  }
  componentDidMount() {
    setTimeout(() => { this.setState({ splash: false }) }, 5250)
  }

  render() {
    var logged = this.props.logged;
    const splash = this.state.splash;
    return (
      <React.Fragment>
        <BrowserRouter>
          {splash ? <Splash /> : logged ? <Dashboard /> : <LoginPage />}
        </BrowserRouter>
      </React.Fragment>

    );
  }
}
const mapStatesToProps = (state) => {
  return { logged: !state.firebase.auth.isEmpty }
}
export default connect(mapStatesToProps)(App);
