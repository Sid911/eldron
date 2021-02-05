import { Component } from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import LoginPage from "./Login/Login"
import { connect } from 'react-redux'
import Dashboard from "./Homepage/dashboard"

class App extends Component {

  render() {
    var logged = this.props.logged;
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={logged ? Dashboard : LoginPage} />
        </Switch>
      </BrowserRouter>
    );
  }
}
const mapStatesToProps = (state) => {
  return { logged: !state.firebase.auth.isEmpty }
}
export default connect(mapStatesToProps)(App);
