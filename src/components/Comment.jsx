import React from 'react'
import userIcon from '../assets/userIcon.jpg';
const Comment = ({data}) => {
  const {name,text,replies} = data;
  return (
    <div className='flex items-center shadow-sm bg-gray-100 rounded-lg mb-2'>
      <img className='w-8 h-8 mx-2' src={userIcon} alt='user Icon'/>
      <div className='h-12 px-3'>
        <p className='font-bold'>{name}</p>
        <p>{text}</p>
      </div>
    </div>
  )
}

export default Comment