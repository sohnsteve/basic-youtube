import React from "react";
import VideoItem from "./VideoItem";

// `{ videos }` destructures the props.videos object into the single array
// that we can now refer to as `videos`
const VideoList = ({ videos, onVideoSelect }) => {
  const renderedList = videos.map((video) => {
    return (
      <VideoItem
        key={video.id.videoId}
        onVideoSelect={onVideoSelect}
        video={video}
      />
    );
  });

  return <div className="ui relaxed divided list">{renderedList}</div>;
};

export default VideoList;
