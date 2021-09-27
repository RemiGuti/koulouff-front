import Navbar from "./components/Navbar.jsx"
import Header from "./components/Header.jsx"
import Bio from "./pages/Bio.jsx"
import Stream from "./pages/Stream.jsx"
import Clips from "./pages/Clips.jsx"
import Admin from "./admin/Admin.jsx"
import Planning from "./pages/Planning"
import ErrorPage from "./pages/ErrorPage.jsx"
import {BrowserRouter as Router, Switch, Route} from "react-router-dom"
import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
      <Navbar/>
        <Header/>
          <Switch>
            <Route exact path="/" component={Stream}/>
            <Route path="/bio" component={Bio}/>
            <Route path="/clips" component={Clips}/>
            <Route path="/planning" component={Planning}/>
            <Route path="/admin" component={Admin}/>
            <Route component={ErrorPage}/>
          </Switch>
        
      </Router>
    </div>
  );
}

export default App;
