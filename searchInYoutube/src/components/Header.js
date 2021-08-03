import '../styles/header.scss'
import '../styles/btn.scss'
import {connect} from 'react-redux'
import { createData } from '../redux/actions'
let data ={
    items: [
      {
        kind: "youtube#searchResult",
        etag: "BuE6jILRYoXYarinBXOiwrmVMgU",
        id: {
          kind: "youtube#video",
          videoId: "fzTUzRRfr7o"
        },
        snippet: {
          publishedAt: "2021-08-03T07:45:00Z",
          channelId: "UC0VN6My1ueOFXDTgzMZSSNQ",
          title: "aisa HOGA Sunday ko.. Kisi ne sochi na hogi!",
          description: "Get my favorite Mivi Products: Collar Bluetooth earphone: https://mivi.shop/35jyzXH Thunderbeats Wireless Earphones: https://mivi.shop/2SN9kdG Roam ...",
          thumbnails: {
            default: {
              url: "https://i.ytimg.com/vi/fzTUzRRfr7o/default.jpg",
              width: 120,
              height: 90
            },
            medium: {
              url: "https://i.ytimg.com/vi/fzTUzRRfr7o/mqdefault.jpg",
              width: 320,
              height: 180
            },
            high: {
              url: "https://i.ytimg.com/vi/fzTUzRRfr7o/hqdefault.jpg",
              width: 480,
              height: 360
            }
          },
          channelTitle: "JS Films",
          liveBroadcastContent: "none",
          publishTime: "2021-08-03T07:45:00Z"
        }
      } ,
      {
        kind: "youtube#searchResult",
        etag: "BuE6jILRYoXYarinBXOiwrmVMgU",
        id: {
          kind: "youtube#video",
          videoId: "fzTUzRRfr7o"
        },
        snippet: {
          publishedAt: "2021-08-03T07:45:00Z",
          channelId: "UC0VN6My1ueOFXDTgzMZSSNQ",
          title: "aisa HOGA Sunday ko.. Kisi ne sochi na hogi!",
          description: "Get my favorite Mivi Products: Collar Bluetooth earphone: https://mivi.shop/35jyzXH Thunderbeats Wireless Earphones: https://mivi.shop/2SN9kdG Roam ...",
          thumbnails: {
            default: {
              url: "https://i.ytimg.com/vi/fzTUzRRfr7o/default.jpg",
              width: 120,
              height: 90
            },
            medium: {
              url: "https://i.ytimg.com/vi/fzTUzRRfr7o/mqdefault.jpg",
              width: 320,
              height: 180
            },
            high: {
              url: "https://i.ytimg.com/vi/fzTUzRRfr7o/hqdefault.jpg",
              width: 480,
              height: 360
            }
          },
          channelTitle: "JS Films",
          liveBroadcastContent: "none",
          publishTime: "2021-08-03T07:45:00Z"
        }
      }  ,
      {
        kind: "youtube#searchResult",
        etag: "BuE6jILRYoXYarinBXOiwrmVMgU",
        id: {
          kind: "youtube#video",
          videoId: "fzTUzRRfr7o"
        },
        snippet: {
          publishedAt: "2021-08-03T07:45:00Z",
          channelId: "UC0VN6My1ueOFXDTgzMZSSNQ",
          title: "aisa HOGA Sunday ko.. Kisi ne sochi na hogi!",
          description: "Get my favorite Mivi Products: Collar Bluetooth earphone: https://mivi.shop/35jyzXH Thunderbeats Wireless Earphones: https://mivi.shop/2SN9kdG Roam ...",
          thumbnails: {
            default: {
              url: "https://i.ytimg.com/vi/fzTUzRRfr7o/default.jpg",
              width: 120,
              height: 90
            },
            medium: {
              url: "https://i.ytimg.com/vi/fzTUzRRfr7o/mqdefault.jpg",
              width: 320,
              height: 180
            },
            high: {
              url: "https://i.ytimg.com/vi/fzTUzRRfr7o/hqdefault.jpg",
              width: 480,
              height: 360
            }
          },
          channelTitle: "JS Films",
          liveBroadcastContent: "none",
          publishTime: "2021-08-03T07:45:00Z"
        }
      }  ,
      {
        kind: "youtube#searchResult",
        etag: "BuE6jILRYoXYarinBXOiwrmVMgU",
        id: {
          kind: "youtube#video",
          videoId: "fzTUzRRfr7o"
        },
        snippet: {
          publishedAt: "2021-08-03T07:45:00Z",
          channelId: "UC0VN6My1ueOFXDTgzMZSSNQ",
          title: "aisa HOGA Sunday ko.. Kisi ne sochi na hogi!",
          description: "Get my favorite Mivi Products: Collar Bluetooth earphone: https://mivi.shop/35jyzXH Thunderbeats Wireless Earphones: https://mivi.shop/2SN9kdG Roam ...",
          thumbnails: {
            default: {
              url: "https://i.ytimg.com/vi/fzTUzRRfr7o/default.jpg",
              width: 120,
              height: 90
            },
            medium: {
              url: "https://i.ytimg.com/vi/fzTUzRRfr7o/mqdefault.jpg",
              width: 320,
              height: 180
            },
            high: {
              url: "https://i.ytimg.com/vi/fzTUzRRfr7o/hqdefault.jpg",
              width: 480,
              height: 360
            }
          },
          channelTitle: "JS Films",
          liveBroadcastContent: "none",
          publishTime: "2021-08-03T07:45:00Z"
        }
      }  
    ]
  }
const Header = (porps)=>{
    let {setVideo, createData}=porps
    const changeHandler=(event)=>{
        let {value}=event.target
        setVideo(value)
    }
    const clickHandler=()=>{
        createData(data.items)
    }
    return(
        <>  
            <header className ={'header'}>
            <input type={'text'} placeholder={'Enter Video name'} onChange={changeHandler}/>
            <button className = {'btn btn-search'} onClick={clickHandler}>Search Video</button>
            </header>
        </>
    )
}
const mapDispatchToProps ={
    createData
}
export default connect(null, mapDispatchToProps)(Header)