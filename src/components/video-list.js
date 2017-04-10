import React from 'react';
import VideoItem from './video-list-item';

const VideoList = (props) => {
    const VideoItems = props.videos.map(function(e,i,a){
        return(
            <VideoItem
                onVideoSelect = {props.onVideoSelect}
                 key={e.etag}
                 video={e} />
        );
    })


    return (
        <div>
            <div> video list </div>
            <div>
                <ul className="col-md-4 list-group">
                    {VideoItems}
                </ul>
            </div>
        </div>
    );
}

export default VideoList;