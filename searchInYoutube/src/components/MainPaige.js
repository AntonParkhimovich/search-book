 import { VideoCard } from "./VideoCard";
 import styled, { keyframes } from 'styled-components';
 import { fadeIn } from 'react-animations'
const FadeIn = styled.div`animation: 1s ${keyframes`${fadeIn}`}`;
 export const MainPaige = (props)=>{
     const {videos} = props
    return(
        <>
       {videos.map((item, index)=>{
           return(
        <FadeIn>
               <VideoCard video={item} key={index}/>
        </FadeIn>    
           ) 
           
       })}
       </>
    )
}