import { Component } from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux'

import LoginPage from "./Login/Login"
import Dashboard from "./Dashboard/dashboard"
import Splash from './SplashScreen/Splash';

class App extends Component {
  state = {
    splash: true
  }
  componentDidMount() {
    setTimeout(() => { this.setState({ splash: false }) }, 5500)
  }
  render() {
    var logged = this.props.logged;
    var splash = this.state.splash
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="" component={splash ? Splash : logged ? Dashboard : LoginPage} />
        </Switch>
      </BrowserRouter>
    );
  }
}
const mapStatesToProps = (state) => {
  return { logged: !state.firebase.auth.isEmpty }
}
export default connect(mapStatesToProps)(App);
