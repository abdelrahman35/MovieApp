import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Movies from "./pages/Movies";
import MovieDetail from "./pages/MovieDetail";
import "../node_modules/font-awesome/css/font-awesome.css";

function App() {
  return (
    <>
      <Router>
        <Navbar></Navbar>
        <Switch>
          <Route path="/movies" exact component={Movies} />
          <Route path="/movies/:id" exact component={MovieDetail} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
