import './App.css';
import {BrowserRouter as Router,Route} from "react-router-dom";
import Signup from './register';
import Login from './login';
import Home from './home';


function App() {
  return (
    <div className="App">
    <Router>
    
      <Route exact path="/" component={Login} />
      <Route exact path="/register" component={Signup} />
      <Route exact path="/home" component={Home}/>
    
  </Router>
  </div>
  );
}

export default App;