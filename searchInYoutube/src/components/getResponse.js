import axios from 'axios'
import lodash from 'lodash'
let  responseStringId =''
 export const getResponce = (video, setStore) =>{
     if (video !== ''){
        axios.get(`https://www.googleapis.com/youtube/v3/search?key=AIzaSyBKFVnu-NyTs5mvtsWq0qN8cwrLI-AOFAA&type=video&part=snippet&maxResults=50&q=${video}`)
        .then(response => {
            response.data.items.map((item, index) =>{
            index===0 ? 
            responseStringId = `${item.id.videoId}`: 
            responseStringId = `${responseStringId},${item.id.videoId}`
            return null
         })
            axios.get(`https://www.googleapis.com/youtube/v3/videos?key=AIzaSyBKFVnu-NyTs5mvtsWq0qN8cwrLI-AOFAA&id=${responseStringId}&part=statistics`)
            .then(data =>{ data.data.items.map((item, index) =>{
               response.data.items[index].statistics = item.statistics
               return null
            })
            responseStringId =''
            setStore(lodash.chunk(response.data.items, 5)) 
        })
        })
     }
}