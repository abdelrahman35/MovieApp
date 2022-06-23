import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Movies from "./pages/Movies";
import MovieDetail from "./pages/MovieDetail";
import "../node_modules/@fortawesome/fontawesome-free/css/all.css";
import "../node_modules/@fortawesome/fontawesome-free/js/all.js";

function App() {
  return (
    <>
      <Router>
        <Navbar></Navbar>
        <Switch>
          <Route path="/movies" exact component={Movies} />
          <Route path="/movies/:id" component={MovieDetail} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
