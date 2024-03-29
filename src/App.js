// import logo from "./logo.svg";
// import "./App.css";
// import Navbar from "./components/Navbar";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import Home from "./components/Home";
import Searchpage from "./components/Searchpage";
import Notfound from "./components/Notfound";
import MovieDetail from "./components/MovieDetail";
import Favorites from "./components/Favorites";
import store from "./redux/configureStore";
import { Provider } from "react-redux";
import Helmet from "react-helmet";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Helmet>
          <title>MovieDB - Search Movies</title>
          <meta name="description" content="Go through your favorite movies" />
        </Helmet>
        <Router>
          <Switch>
            <Route exact path="/">
              <Redirect to="/home" />
            </Route>
            <Route exact path="/home" component={Home} />
            <Route path="/search" component={Searchpage} />
            <Route path="/favorites" component={Favorites} />
            <Route exact path="/movies/:id" component={MovieDetail} />
            <Route path="/" component={Notfound} />
          </Switch>
        </Router>
      </div>
    </Provider>
  );
}

export default App;
