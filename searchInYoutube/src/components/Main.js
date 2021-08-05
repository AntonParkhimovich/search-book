import { connect } from "react-redux"
const Main=(props)=>{
    const {videos} = props
    return(
        <h1>Main</h1>
    )
}
const mapStateToProps = (state) => {
return state
}
export default connect(mapStateToProps, null)(Main)