import './App.css';
import axios from 'axios'
import { useState } from 'react';
function App() {
const [api, setApi] =useState('AIzaSyDexVr5mFLOO2dVypvZVMvx8yTVw-opNAA')
const[book, setBook] = useState('js')
  function getBookInfo(){
  axios.get(`https://www.googleapis.com/books/v1/volumes?q=${book}&key=${api}&maxResults=40`)
  .then((response)=> console.log(response))

  }

  return (
   <h1 onClick={getBookInfo}>hello word</h1>
     
  );
}

export default App;
