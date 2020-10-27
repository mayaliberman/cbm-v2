import './App.css';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import Login from './components/Auth/Login/Login';
import ForgotPassword from './components/Auth/ForgotPassword/ForgotPassword';
function App() {
  return (
    <BrowserRouter>
      <div>Header</div>
      <Switch>
        <Route exact path='/' render={() => <Redirect to='/login' />} />
        <Route path='/login' component={Login} />
        <Route path='/forgot' component={ForgotPassword} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
