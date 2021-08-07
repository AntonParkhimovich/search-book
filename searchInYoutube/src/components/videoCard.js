import '../styles/card.scss'
export const VideoCard=(props)=>{
    let {video}= props
    console.log(video);
    return(
    <div className ={'video-card'}>
        <div className={'video-card__header'}>
        <iframe width="100%" height="100%" src={`https://www.youtube.com/embed/${video.id.videoId}`} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture " allowfullscreen='1'></iframe>
        </div>
        <div className={'video-card__main'}>
            <h2 className={'video-card__title'}>{}</h2>
            <ul className={'statistics'}>
                <li className={'statistics-items'}></li>
                <li className={'statistics-items'}></li>
                <li className={'statistics-items'}></li>
                <li className={'statistics-items'}></li>
                <li className={'statistics-items'}></li>
            </ul>
        </div>
        <div className={'video-card___footer'}>
        </div>
    </div>
    ) 
}