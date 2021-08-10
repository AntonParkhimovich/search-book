import { createVideoPath, createData,createOnLoad} from "../redux/actions";
import { connect } from "react-redux";
import { Params } from "./getParamResponse";
import { useHistory } from "react-router-dom";
import { getResponce } from "./getResponse";
const  ButtonFooter = (props)=>{
    let {createVideoPath, text, responseData, videos, createData,createOnLoad} = props
    const pathNumber = parseInt(window.location.pathname.match(/\d+/));
    let history = useHistory();
    console.log(createVideoPath);
    const clickHandler=()=>{
        if(text === 'back'){
            if(pathNumber !== 1){
                createVideoPath(`/page${pathNumber-1}`)
                const params = new Params(responseData.searchItem, videos.prevPageToken)
                getResponce(params,createData,createOnLoad, responseData)
                history.push(`/page${pathNumber-1}`)
            }
        }else{
            createVideoPath(`/page${pathNumber+1}`)
            const params = new Params(responseData.searchItem, videos.nextPageToken)
            getResponce(params,createData, createOnLoad, responseData)
            history.push(`/page${pathNumber+1}`)
        }
      }
    return(
        <button className={"btn btn-footer"}onClick={clickHandler}>{text}</button>
    )
    }
  



const mapDispatchToProps = {
    createVideoPath,
    createData,
    createOnLoad

  };
  const mapStateToProps = (state) => {
    return state;
  };
  export default connect(mapStateToProps, mapDispatchToProps)(ButtonFooter);