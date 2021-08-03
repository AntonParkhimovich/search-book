import './App.css';
import axios from 'axios'
import { useState } from 'react';
import Header from './components/Header';
import connect from 'react-redux'

function App() {
  const[video, setVideo] = useState('')

  
  return (
   <Header setVideo={setVideo}/>
  );
}

export default App;

// https://www.googleapis.com/youtube/v3/search?key=AIzaSyBKFVnu-NyTs5mvtsWq0qN8cwrLI-AOFAA&type=video&part=snippet&maxResults=15&q=js