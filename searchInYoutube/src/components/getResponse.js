import axios from 'axios'
import lodash from 'lodash'
 export const getResponce = (video, setStore) =>{
     if (video !== ''){
        axios.get(`https://www.googleapis.com/youtube/v3/search?key=AIzaSyBKFVnu-NyTs5mvtsWq0qN8cwrLI-AOFAA&type=video&part=snippet&maxResults=100&q=${video}`)
        .then(response =>{return lodash.toArray(response.data.items)})
        .then(response=> setStore(lodash.chunk(response, 5) ))
     }
    
}