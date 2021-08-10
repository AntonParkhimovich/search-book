import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";

function App() {
  
  return (
    <>
      <Router>
        <Header />
        <Switch>
          <Route path="/:id">
            <Main/>
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
