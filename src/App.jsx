import { useState } from "react";
import "./App.css";
import { Route, Switch, Link, Redirect } from "react-router-dom";

function App() {
  return (
    <div>
      <nav>
        <Link to="/">
          <img
            src="https://cherwell.org/wp-content/uploads/2024/04/ramadan.webp"
            alt=""
          />
          <h1>FEED ME</h1>
        </Link>
        <Link to="/savedSearchList">My Saved Searches</Link>
      </nav>
      <main>
        <Switch>
          <Route path="/">
            <Home />
          </Route>
          <Route path="/savedSearchList">
            <savedSearchList />
          </Route>
        </Switch>
      </main>
    </div>
  );
}

export default App;
