import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addMessage } from '../utils/chatSlice'
import { randomNameGenerator, randomTextGenerator } from '../utils/helper'
import LiveChatMessage from './LiveChatMessage'

const LiveChat = () => {
  const dispatch = useDispatch()
  const [liveMessage,setLiveMessage] = useState("");
  const chatMessages = useSelector(store => store.liveChat.messages);
  useEffect(
    () => {
       const pollInterval =  setInterval(()=>{
            dispatch(addMessage({
                name:randomNameGenerator(),
                message: randomTextGenerator()
            }))
        },1000)
        return () => clearInterval(pollInterval);
    }
  ,[])
  return (
      <div>
        <div className='w-full bg-slate-100 rounded-lg h-[300px] p-2 border border-black overflow-y-scroll flex flex-col-reverse'>
          { chatMessages.map(
            (chat,index) => <LiveChatMessage key={index} name={chat.name} message={chat.message}
              />
              )
          }
        </div>
        <form className='h-[90px] flex flex-col w-full mt-2 border border-black' onSubmit={
          (e)=>{e.preventDefault()
           dispatch(addMessage(
            {
              name: "Prasad",
              message: liveMessage
            }
           ))
           setLiveMessage("");
          }}>
          <input value={liveMessage} onChange={(e)=> setLiveMessage(e.target.value)} className='h-[50%] m-1 sm:w-96 border border-gray-200' type="text" />
          <button className='px-2 mx-2 w-12 bg-red-500 rounded-lg'>Send</button>
        </form>
    </div>
  )
}

export default LiveChat