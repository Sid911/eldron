import { BrowserRouter, Route, Switch } from 'react-router-dom';
import LoginPage from "./Login/Login"

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={LoginPage} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
