import Sidebar from "./components/sidebar/Sidebar";
import Topbar from "./components/topbar/Topbar";
import "./app.css";
import Home from "./components/pages/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import UserList from "./components/pages/userList/UserList";
import User from "./components/pages/user/User";
import NewUser from "./components/pages/newUser/NewUser";
import Calender from "./components/pages/calender/Calender";
function App() {

  return (
      <Router>
      <div className="app">
          <Topbar />
          <div className="container">
            <Sidebar />
            <Switch>
              <Route exact path="/">
              <Home />
              </Route>
              <Route path="/users">
              <UserList />
              </Route>
              <Route path="/user/:userId">
              <User/>
              </Route>
              <Route exact path="/new-user">
              <NewUser/>
              </Route>
              <Route exact path="/calender">
              <Calender/>
              </Route>
            </Switch>
          </div>
        </div>
      </Router>
  );
}

export default App;
