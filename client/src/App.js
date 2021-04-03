import Navbar from './components/navbar';
import Auth from './components/auth';
import Register from './components/register';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

const App =()=> {
  return (
    <div className="App">
      <Router>
        <Navbar/>
        <Switch>
          <Router path="/auth" exact>
            <Auth/>
          </Router>
        <Router>
          <Register path="/register" exact/>
        </Router>
        <Route path="/" exact>
            {null}
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
