import './App.css';
import NavBar from './components/NavBar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import StaffLogin from './pages/StaffLogin';
import StudentLogin from './pages/StudentLogin';
import FinanceLogin from './pages/FinanceLogin'

function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />
        <Switch>
          <Route path="/finance"><FinanceLogin /></Route>
          <Route path="/staff"><StaffLogin /></Route>
          <Route path="/student"><StudentLogin /></Route>
          <Route path="/"></Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
