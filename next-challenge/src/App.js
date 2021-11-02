import logo from "./logo.svg";
import "./App.css";
import PhotoAlbum from "./components/PhotoAlbum/PhotoAlbum";
import NavbarApp from "./components/Navbar/Navbar";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Photo from "./components/Photo/Photo";
import AwsUpload from "./components/AwsUpload/AwsUpload";

import { VariablesContextProvider } from "./context/VariablesContext";

function App() {
  return (
    <div className="App">
      <Router>
        <NavbarApp />
        <VariablesContextProvider>
          <Switch />
          <Route path="/" exact component={PhotoAlbum} />
          <Route path="/awsupload" exact component={AwsUpload} />
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
