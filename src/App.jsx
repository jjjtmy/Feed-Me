import { useState } from "react";
import "./App.css";
import { Route, Link } from "react-router-dom";

import Home from "./Pages/Home";
import SavedSearchList from "./Pages/SavedSearchList";

function App() {
  return (
    <div>
      <nav>
        <Link to="/">
          <h1>FEED ME</h1>
        </Link>
        <Link to="/savedSearchList">My Saved Searches</Link>
      </nav>
      <main>
        <Route exact path="/" component={Home} />
        <Route exact path="/savedSearchList" component={SavedSearchList} />
      </main>
    </div>
  );
}

export default App;
