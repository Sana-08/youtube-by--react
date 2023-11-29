const VideoCard = ({ info }) => {
    
    if (!info || !info.snippet || !info.snippet.thumbnails || !info.snippet.thumbnails.medium || !info.statistics) {
        return null; 
    }

    const { channelTitle, title, publishedAt } = info?.snippet;
    const { url } = info?.snippet?.thumbnails?.medium;
    const { viewCount } = info?.statistics;

    return (
        <div className="p-2 m-2 w-80 shadow-lg">
            <img className="rounded-lg py-2" alt="thumbnails" src={url} />
            <ul>
                <li className="font-bold">{title}</li>
                <li>{publishedAt}</li>
                <li>{channelTitle}</li>
                <li>{viewCount}</li>
            </ul>
        </div>
    );
}

export default VideoCard;
