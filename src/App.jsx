import { useState } from "react";
import "./App.css";
import { Route, Link } from "react-router-dom";

import Home from "./Pages/Home";
import SavedMealPlans from "./Pages/SavedMealPlans";

function App() {
  return (
    <div>
      <nav>
        <Link to="/">
          <h1>FEED ME</h1>
        </Link>
        <Link to="/savedMealPlans">My Saved Meal Plans</Link>
      </nav>
      <main>
        <Route exact path="/" component={Home} />
        <Route exact path="/savedMealPlans" component={SavedMealPlans} />
      </main>
    </div>
  );
}

export default App;
