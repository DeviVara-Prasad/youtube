import React, { useEffect, useState } from 'react'
import hamBurgerIcon from '../assets/hamBurgerIcon.webp';
import youtubeLogo from '../assets/youtubeLogo.jpg';
import userIcon from '../assets/userIcon.jpg';
import { useDispatch, useSelector } from 'react-redux';
import { toggleMenu } from '../utils/appSlice';
import { cacheResults } from '../utils/searchSlice';
import { Link } from 'react-router-dom';
import { GOOGLE_SEARCH_API, YOUTUBE_SEARCH_API } from '../utils/constants';
const Head = () => {
  const searchCache = useSelector(store => store.search);
  const dispatch = useDispatch()
  const [searchQuery, setSearchQuery] = useState("");
  const [suggestions,setSuggestions] = useState([]);
  const [showSuggestions,setShowSuggestions] = useState(false);
  
  useEffect(()=>{
   
    const timer = setTimeout(() => {
      if(searchCache[searchQuery]){
        setSuggestions(searchCache[searchQuery]);
      }else{
        getSearchSuggestions();
      }
    },200)
    return () => {
      clearTimeout(timer);
    }
  },[searchQuery]);
  const getSearchSuggestions = async () => {
    if(searchQuery){
      console.log("API CALL");
    const data = await fetch(YOUTUBE_SEARCH_API+searchQuery);
    const json = await data.json();
    setSuggestions(json[1]);
    dispatch(cacheResults({
      [searchQuery]:json[1]
    }));
  }else{
    setSuggestions([]);
  }
  }
  const toggleMenuHandler = () => {
    dispatch(toggleMenu());
  }
  return (
    <div className='grid grid-flow-col p-5 m-2 shadow-lg'>
      <div className='flex col-span-1'>
        <img onClick={() => toggleMenuHandler()} className='h-14 cursor-pointer ' src={hamBurgerIcon} alt="hamburger"></img>
        <img className='h-14 mx-2 cursor-pointer' src={youtubeLogo} alt="youtubeLogo"></img>
      </div>
      <div className='col-span-10 px-10'>
        <div className=''>
          <input value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} onFocus={()=>setShowSuggestions(true)} onBlur={()=>{setShowSuggestions(false)}} className='px-5 w-1/2 border border-gray-400 p-2 rounded-l-full' type="text"></input>
          <button className='border border-gray-400 p-2 rounded-r-full bg-gray-100 cursor-pointer'>🔍</button>
        </div>
        <div className='absolute bg-white my-1 ml-1  w-[25rem] shadow-lg rounded-lg border border-gray-100'>
          <ul className='flex flex-col'>
            {
             showSuggestions && suggestions.map(
                (s) => <li key={s} className='px-5 py-2 shadow-sm hover:bg-gray-100'>🔎 {s}</li>
              )
            }
          </ul>
        </div>
      </div>
      <div className='col-span-1'>
        <img className='h-14 cursor-pointer' src={userIcon} alt="user Icon"></img>
      </div>
    </div>
  )
}

export default Head