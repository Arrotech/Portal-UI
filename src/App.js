import './App.css';
import NavBar from './components/NavBar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import StaffLogin from './pages/StaffLogin';
import StudentLogin from './pages/StudentLogin';
import FinanceLogin from './pages/FinanceLogin'
import StudentDashboard from './pages/students/Dashboard'
import AdminDashboard from './pages/admins/Dashboard'

function App() {
  return (
    <div className="app">
      <Router>
        <Switch>
          <Route path="/finance"><NavBar /><FinanceLogin /></Route>
          <Route path="/staff"><NavBar /><StaffLogin /></Route>
          <Route path="/student"><NavBar /><StudentLogin /></Route>
          <Route path="/student/dashboard"><StudentDashboard /></Route>
          <Route path="/admin/dashboard"><AdminDashboard /></Route>
          <Route path="/"><NavBar /><StudentLogin /></Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
