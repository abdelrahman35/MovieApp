import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Movies from "./pages/Movies";
import MovieDetail from "./pages/MovieDetail";
import favPage from "./pages/favPage";
function App() {
  return (
    <>
      <Router>
        <Navbar></Navbar>
        <Switch>
          <Route path="/movies" exact component={Movies} />
          <Route path="/movies/:id" component={MovieDetail} />
          <Route path="/fav" component={favPage} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
