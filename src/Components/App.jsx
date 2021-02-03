import { Button } from "@material-ui/core";
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import LoginPage from "./Login/Login"

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" component={LoginPage} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
