import logo from "./logo.svg";
import "./App.css";
import PhotoAlbum from "./components/PhotoAlbum";
import NavbarApp from "./components/Navbar";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Photo from "./components/Photo";

import { VariablesContextProvider } from "./context/VariablesContext";

function App() {
  return (
    <div className="App">
      <Router>
        <NavbarApp />
        <VariablesContextProvider>
          <Switch />
          <Route path="/" exact component={PhotoAlbum} />
          <Route exact path="/details/:id">
            <Photo />
          </Route>
          <Switch />
        </VariablesContextProvider>
      </Router>
    </div>
  );
}

export default App;
