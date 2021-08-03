import './App.css';
import axios from 'axios'
import { useState } from 'react';
import Header from './components/Header';
function App() {
  const[video, setVideo] = useState('')
  // https://www.googleapis.com/youtube/v3/search?key=AIzaSyBKFVnu-NyTs5mvtsWq0qN8cwrLI-AOFAA&type=video&part=snippet&maxResults=15&q=js
  console.log(video);
  return (
   <Header setVideo={setVideo}/>
  );
}

export default App;
