import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import "./General.scss";
import "react-toastify/dist/ReactToastify.css";
import Home from "./pages/index";
import SignIn from "./pages/SignIn";
import Network from "./pages/posts";
import PostDetails from "./components/PostDetails/PostDetails";

const App = () => {
  const user = JSON.parse(localStorage.getItem("profile"));

  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/posts" exact component={Network} />
        <Route path="/posts/search" exact component={Network} />
        <Route path="/posts/:id" exact component={PostDetails} />
        <Route path="/SignIn" exact component={SignIn} />
      </Switch>
    </Router>
  );
};

export default App;
