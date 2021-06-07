import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./components/Home";
import Searchpage from "./components/Searchpage";
import Notfound from "./components/Notfound";
import Favorites from "./components/Favorites";
import MobileNav from "./components/MobileNav";
import { useEffect, useState } from "react";

function App() {
  const [width, setWidth] = useState(window.innerWidth);
  function handleWindowSizeChange() {
    setWidth(window.innerWidth);
  }
  useEffect(() => {
    window.addEventListener("resize", handleWindowSizeChange);
    return () => {
      window.removeEventListener("resize", handleWindowSizeChange);
    };
  }, []);

  let isMobile = width <= 768;
  return (
    <div className="App">
      <Router>
        {!isMobile ? <Navbar /> : <MobileNav />}

        <Switch>
          <Route exact path="/home" component={Home} />
          <Route path="/search" component={Searchpage} />
          <Route path="/favorites" component={Favorites} />
          <Route path="/" component={Notfound} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
