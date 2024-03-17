import React from 'react'
import userIcon from '../assets/userIcon.jpg'
const LiveChatMessage = ({name,message}) => {
  return (
    <div className='flex items-center shadow-md p-2'>
        <img className='h-5 mr-2 cursor-pointer' src={userIcon} alt="user Icon"></img>
        <span className='font-bold pr-2'>{name}</span>
        <span>{message}</span>
    </div>
  )
}

export default LiveChatMessage