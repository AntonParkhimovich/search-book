import '../styles/card.scss'
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import ThumbDownIcon from '@material-ui/icons/ThumbDown';
import VisibilityIcon from '@material-ui/icons/Visibility';
import CommentIcon from '@material-ui/icons/Comment';
export const VideoCard=(props)=>{
    let {video}= props
    console.log(video);
    return(
    <div className ={'video-card'}>
        <div className={'video-card__header'}>
        <iframe width="100%" height="100%" src={`https://www.youtube.com/embed/${video.id.videoId}`} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture " allowfullscreen='1'></iframe>
        </div>
        <div className={'video-card__main'}>
            <h2 className={'video-card__chanell'}>{video.snippet.channelTitle}</h2>
            <h2 className={'video-card__title'}>{video.snippet.title}</h2>
            <ul className={'statistics'}>
                <li className={'statistics-items'}><ThumbUpIcon/>{video.statistics.likeCount}</li>
                <li className={'statistics-items'}><ThumbDownIcon/>{video.statistics.dislikeCount}</li>
                <li className={'statistics-items'}><VisibilityIcon/>{video.statistics.viewCount}</li>
                <li className={'statistics-items'}><CommentIcon/>{video.statistics.commentCount}</li>
            </ul>
        </div>
        <div className={'video-card___footer'}>
        </div>
    </div>
    ) 
}