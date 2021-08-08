import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom"
import { useState } from 'react';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';


function App() {
  const[video, setVideo] = useState('')

  
  return (
    <>
    <Router>
    <Header setVideo={setVideo} video={video}/>
    <Switch>
    <Route path="/:id">
          <Main/>
          <Footer/>
          </Route>
    </Switch>
    </Router>

   
   </>
  );
}

export default App;

