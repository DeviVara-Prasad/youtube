import React from 'react'

const VideoCard = ({info}) => {
    const {snippet, statistics} = info;
    const { channelTitle, title, thumbnails} = snippet;
  return (
    <div className='p-2 m-2 w-80 shadow-lg rounded-lg'>
        <img className='rounded-lg' alt='thumbnail' src={thumbnails.medium.url}/>
        <ul>
            <li className='font-bold py-2'>{title}</li>
            <li>{channelTitle}</li>
            <li>{statistics.viewCount} Views</li>
            <li>{statistics.likeCount} Likes</li>
        </ul>
    </div>
  )
}

export default VideoCard;