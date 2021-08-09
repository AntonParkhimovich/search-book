 import { VideoCard } from "./VideoCard";
 import styled, { keyframes } from 'styled-components';
 import { fadeIn } from 'react-animations'
import { Switch, Route, useRouteMatch } from "react-router-dom";
import Video from "./Video";
const FadeIn = styled.div`animation: 1s ${keyframes`${fadeIn}`}`;
 export const MainPaige = (props)=>{
     const {videos} = props
     let { path } = useRouteMatch()
    return(
        <>
       {videos.map((item, index)=>{
           return(
        <FadeIn>
               <VideoCard video={item} key={index}/>
               <Switch>
               <Route path={`${path}/${item.id.videoId}`}>
                     <Video video={item} key={index}/>
                </Route>
               </Switch>
        </FadeIn>    
           ) 
           
       })}
       </>
    )
}