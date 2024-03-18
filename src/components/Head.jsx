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
  const isMenuOpen = useSelector(store => store.app.isMenuOpen)
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
    <div className={`flex justify-between px-2 py-2`}>
      <div className="flex justify-around">
        <div className="w-6 h-6 sm:w-12 sm:h-12 cursor-pointer" onClick={() => toggleMenuHandler()}>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 sm:w-12 sm:h-12">
            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
          </svg>
        </div>
        <div className="h-6 sm:h-12 cursor-pointer">
          <img className="h-6 sm:h-12" src={youtubeLogo} alt="youtubeLogo"/>
        </div>
      </div>
      <div className="flex justify-center h-6 border-collapse sm:h-12">
        <div>
          <form>
            <input value={searchQuery} onChange={(e) => setSearchQuery(e.target.value) } onFocus={()=>setShowSuggestions(true)} onBlur={()=>setShowSuggestions(false)} type="text" className="pl-2 text-sm py-1  sm:pl-4 h-6 sm:h-12 sm:w-96 sm:text-lg border border-gray-500 rounded-l-xl sm:rounded-l-3xl outline-blue-300" placeholder="search" />
          </form>
          <div className='relative left-2 top-0 bg-white my-1 ml-1 w-[10rem] sm:w-[22rem] shadow-lg rounded-lg rounded-t-none border border-gray-100'>
          <ul className='flex flex-col'>
            {
             showSuggestions && suggestions.map(
                (s) => <li key={s} className='px-5 py-2 shadow-sm hover:bg-gray-100'>🔎 {s}</li>
              )
            }
          </ul>
        </div>
        </div>
        <div className="pt-[0.5px] sm:pt-0 ">
        <div className="border border-gray-500 bg-gray-100 rounded-r-xl sm:rounded-r-3xl w-7 h-6 sm:w-14 sm:h-12 flex justify-center items-center">
            <button className="w-6 h-6 sm:w-12 sm:h-12 pl-1">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-4 h-4 sm:w-8 sm:h-8">
                <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
              </svg>              
            </button>
          </div>
        </div>
      </div>
      <div>
        <div className="cursor-pointer">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6 sm:w-12 sm:h-12">
            <path strokeLinecap="round" strokeLinejoin="round" d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
          </svg>          
        </div>
      </div>
    </div>
  )
}

export default Head



