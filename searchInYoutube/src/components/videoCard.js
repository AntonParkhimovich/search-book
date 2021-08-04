const VideoCard=(props)=>{
    let cardData = proops
    return(
    <div className ={'video-card'}>
        <div className={'video-card__header'}>
            <a herf={`https://www.youtube.com/watch?v=${cardData.id.videoId}`}> 
                <img src={cardData.snippet.thumbnails.medium.url}></img>
            </a>
        </div>
        <div className={'video-card__main'}>
            <h2 className={'video-card__title'}>{cardData.snippet.title}</h2>
            <ul className={'statistics'}>
                <li className={'statistics-items'}></li>
                <li className={'statistics-items'}></li>
                <li className={'statistics-items'}></li>
                <li className={'statistics-items'}></li>
                <li className={'statistics-items'}></li>
            </ul>
        </div>
        <div className={'vide-card___footer'}>

        </div>
    </div>
    ) 
}