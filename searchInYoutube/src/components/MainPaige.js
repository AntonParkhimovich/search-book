 import { VideoCard } from "./VideoCard";
 export const MainPaige = (props)=>{
     const {videos} = props
    return(
        <>
       {videos.map((item, index)=>{
           return <VideoCard video={item} key={index}/>
       })}
       </>
    )
}