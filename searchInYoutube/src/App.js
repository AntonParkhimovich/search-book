import './App.css';

import { useState } from 'react';
import Header from './components/Header';


function App() {
  const[video, setVideo] = useState('')

  
  return (
   <Header setVideo={setVideo} video={video}/>
  );
}

export default App;

