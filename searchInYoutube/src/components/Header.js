import '../styles/header.scss'
import '../styles/btn.scss'
const Header = (porps)=>{
    let {setVideo}=porps
    const changeHandler=(event)=>{
        let {value}=event.target
        setVideo(value)
    }
    return(
        <>  
            <header className ={'header'}>
            <input type={'text'} placeholder={'Enter Video name'} onChange={changeHandler}/>
            <button className = {'btn btn-search'}>Search Video</button>
            </header>
        </>
    )
}

export default Header