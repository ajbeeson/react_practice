import React from 'react'

const VideoListItem = ({video,setSelectedVideo}) => {
  const thumbnailUrl = video.snippet.thumbnails.default.url;
  return(
    <li className = 'list-group-item' onClick={() => setSelectedVideo(video)}>
      <div className="video-list media">
        <div className="media-left">
          <img className = "media-object" src={thumbnailUrl}/>
        </div>
        <div className = "media-body">
          {video.snippet.title} 
        </div>
      </div> 
    </li>)
}

export default VideoListItem