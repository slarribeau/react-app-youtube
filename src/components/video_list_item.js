import React from 'react';

//const VideoListItem = (props) => {
//    return <li>Video</li>
//};

//const VideoListItem = ({video, onVideoSelect}) => {
const VideoListItem = (props) => {
    console.log(props.video);
    console.log("In video list item");

    const imageUrl = props.video.snippet.thumbnails.default.url;
    return (
       <li onClick={() => props.onVideoSelect(props.video)} className="list-group-item">
          <div className="video-list media">
            <div className="media-left">
              <img className="media-object" src={imageUrl} />
            </div>
            <div className="media-body">
               <div className="media-heading"> {props.video.snippet.title}</div>
            </div>
         </div>
           Video
        </li>
    );
};
export default VideoListItem;