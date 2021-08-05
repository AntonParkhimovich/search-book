import '../styles/header.scss'
import '../styles/btn.scss'
import {connect} from 'react-redux'
import { createData } from '../redux/actions'
import { getResponce } from './getResponse'

const Header = (porps)=>{
    let {setVideo, video, createData}=porps
    const changeHandler=(event)=>{
        let {value}=event.target
        setVideo(value)
    }
    const clickHandler=()=>{
        getResponce(video, createData)
        setVideo('')
    }
    return(
        <>  
            <header className ={'header'}>
            <input type={'text'} placeholder={'Enter Video name'} onChange={changeHandler} value={video}/>
            <button className = {'btn btn-search'} onClick={clickHandler}>Search Video</button>
            </header>
        </>
    )
}
const mapDispatchToProps ={
    createData
}
export default connect(null, mapDispatchToProps)(Header)