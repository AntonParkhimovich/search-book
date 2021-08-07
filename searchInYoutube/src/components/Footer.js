import { connect } from "react-redux";
import React from "react";
import {Link, useHistory} from "react-router-dom";
const Footer =(props)=>{
    let {videos} = props
    let history = useHistory()
    const clickHandler=({target})=>{
        const pathNumber = parseInt(window.location.pathname.match(/\d+/))
        let newPath
        if(target.id ==='back'){
            pathNumber === 1 ? newPath = '/page10': newPath= `/page${pathNumber-1}`
        }if(target.id === 'next'){
            pathNumber === 10 ? newPath = '/page1': newPath= `/page${pathNumber+1}`
        }
        history.push(`${newPath}`)
        newPath =''
    }
    return(
        <>
        {videos.length === undefined? null : <footer className={'footer'}>
            <button onClick={clickHandler} className = {'btn'}id ={'back'}>Back</button>
            { videos.map((item, index) =>{
                return <Link className={'nav-link'} to={`\page${index+1}`} key={index+1}>{index+1}</Link>
            })}
            <button onClick={clickHandler} className={'btn'} id= {'next'}>Next</button>
        </footer>}
        </>
    )
}
const mapStateToProps = (state)=>{
    return state
}
export default connect(mapStateToProps, null)(Footer)