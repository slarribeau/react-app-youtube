import React  from 'react';
import VideoListItem from './video_list_item';


const VideoList = (props) => {
    console.log("in videoList")
    console.log(props);
    const videoItems = props.videos.map((video) => {
        console.log("LIST");
        console.log(video)
        console.log("LIST2");
        return (
            <VideoListItem 
                 onVideoSelect={props.onyVideoSelect}
                 key={video.etag} 
                 video={video} 
            />
        );
    });
    console.log(videoItems)
    return (
       <ul 
          className="col-md-4 list-group">
          {videoItems}
          {props.videos.length}
       </ul>
    );
}

export default VideoList;