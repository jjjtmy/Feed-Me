import { useState } from "react";
import "./App.css";
import { Route, Link } from "react-router-dom";
import "react-day-picker/dist/style.css";

import Footer from "./Components/Footer";
import Home from "./Pages/Home";
import SavedMealPlans from "./Pages/SavedMealPlans";

function App() {
  return (
    <div>
      <nav
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          margin: "-20px 0 20px -10px",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            lineHeight: "50px",
            padding: "20px 0 0 10px",
          }}
        >
          <Link to="/">
            <h1
              style={{
                fontWeight: "bold",
                fontSize: "80px",
              }}
            >
              FEED ME
            </h1>
          </Link>
          <p style={{ color: "grey" }}> Your one stop meal planner</p>
        </div>
        <Link to="/savedMealPlans">
          <p
            style={{
              fontWeight: "bold",
              fontSize: "20px",
            }}
          >
            My Saved Meal Plans
          </p>
        </Link>
      </nav>
      <main>
        <Route exact path="/" component={Home} />
        <Route exact path="/savedMealPlans" component={SavedMealPlans} />
      </main>
      <Footer></Footer>
    </div>
  );
}

export default App;
