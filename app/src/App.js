import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Discover from "./pages/Discover";
import About from "./pages/About";
import Search from "./pages/Search";
import Saved from "./pages/Saved";
import Wrapper from "./components/Wrapper";
import Register from "./pages/Register";

function App() {
  return (
      <Router>
        <div>
          <Wrapper>
            <Route exact path="/" component={Search} />
            <Route exact path="/search" component={Search} />
            <Route exact path="/about" component={About} />
            <Route exact path="/discover" component={Discover} />
            <Route exact path="/saved" component={Saved} />
            <Route exact path="/register" component={Register} />
          </Wrapper>

        </div>
      </Router>

  );
}

export default App;
