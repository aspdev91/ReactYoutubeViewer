import React from 'react';
import VideoListItem from './video_list_item';

const VideoList = (props) => {
	//use classNames to assign classes to html items in 
	const VideoItems = props.videos.map((video) => {
		// should provide a unique key so React knows that its a list with identifiable elements and can update the appropiate record
		return (
		 <VideoListItem 
			onVideoSelect = {props.onVideoSelect}
			key = { video.etag } 
			video = {video} />
		);
	});

	return(
		<ul className = "col-md-4 list-group">
			{ VideoItems }
		</ul>
	);
}

export default VideoList;