import './App.css';
import Home from './components/Home/Home';
import { Route, Switch } from 'react-router-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import Register from './components/Register/Register';
import TodoList from './components/TodoList/TodoList';
import Login from './components/Login/Login';
import Dashboard from './components/Dasboard/Dashboard';


function App() {
  return (
      <Router>
      <Switch>
          <Route exact path="/">
            <Home/>
          </Route>
          <Route path="/home">
            <Home/>
          </Route>
          <Route path="/login">
            <Login/>
          </Route>
          <Route path="/register">
            <Register/>
          </Route>
          <Route path="/post">
            <TodoList/>
          </Route>
          <Route path="/dashboard">
            <Dashboard/>
          </Route>
      </Switch>
     </Router>
  );
}

export default App;
