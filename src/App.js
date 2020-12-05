import './App.css';
import NavBar from './components/NavBar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import StaffLogin from './pages/StaffLogin';
import StudentLogin from './pages/StudentLogin';
import FinanceLogin from './pages/FinanceLogin'
import Dashboard from './pages/students/Dashboard'

function App() {
  return (
    <div className="app">
      <Router>
        <Switch>
          <Route path="/finance"><NavBar /><FinanceLogin /></Route>
          <Route path="/staff"><NavBar /><StaffLogin /></Route>
          <Route path="/student"><NavBar /><StudentLogin /></Route>
          <Route path="/dashboard"><Dashboard /></Route>
          <Route path="/"><NavBar /><StudentLogin /></Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
