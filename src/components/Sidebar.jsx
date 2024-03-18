import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom';
import youtubeLogo from '../assets/youtubeLogo.jpg';
import { toggleMenu } from '../utils/appSlice';

const Sidebar = () => {
  const isMenuOpen = useSelector(store => store.app.isMenuOpen);
  const dispatch = useDispatch();
  // hiding Menu isMenuOpen false
  const toggleMenuHandler = () => {
    dispatch(toggleMenu());
  }
  if(!isMenuOpen) return null;
  return (
    <div className="absolute px-2 py-2 top-0 left-0 overflow-visible bg-white drop-shadow-lg w-40 h-dvh sm:w-56 ease-in">
      <div className="flex justify-start mb-2">
        <div className="w-6 h-6 sm:w-12 sm:h-12 cursor-pointer hover:bg-gray-200" onClick={() => toggleMenuHandler()}>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6 sm:w-12 sm:h-12">
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
          </svg>                    
        </div>
        <div className="h-6 sm:h-12 cursor-pointer">
          <img className="h-6 sm:h-12" src={youtubeLogo} alt="youtubeLogo"/>
        </div>
      </div>
      <div className='p-5'>
        <ul>
          <li><Link to="/">
          <div className="flex items-center flex-start bg-gray-200 rounded-md pl-2 mb-2 sm:pl-4 sm:mb-4">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 sm:w-8 sm:h-8">
              <path d="M11.47 3.841a.75.75 0 0 1 1.06 0l8.69 8.69a.75.75 0 1 0 1.06-1.061l-8.689-8.69a2.25 2.25 0 0 0-3.182 0l-8.69 8.69a.75.75 0 1 0 1.061 1.06l8.69-8.689Z" />
              <path d="m12 5.432 8.159 8.159c.03.03.06.058.091.086v6.198c0 1.035-.84 1.875-1.875 1.875H15a.75.75 0 0 1-.75-.75v-4.5a.75.75 0 0 0-.75-.75h-3a.75.75 0 0 0-.75.75V21a.75.75 0 0 1-.75.75H5.625a1.875 1.875 0 0 1-1.875-1.875v-6.198a2.29 2.29 0 0 0 .091-.086L12 5.432Z" />
            </svg>            
            <span className="pl-3">Home</span>            
          </div>
          </Link></li>
          <li>
            <Link to="/">
              <div className="flex items-center flex-start pl-2 mb-2 sm:pl-4 sm:mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" shapeRendering="geometricPrecision" textRendering="geometricPrecision" imageRendering="optimizeQuality" fillRule="evenodd" clipRule="evenodd" viewBox="0 0 412 511.67" className="w-4 h-4 sm:w-8 sm:h-8"><path fill="#000" d="M264.39 11.27c48.26-25.14 108-6.81 133.4 40.94 25.42 47.75 6.9 106.86-41.37 132l-39.68 20.85c34.19 1.24 66.78 20.05 83.86 52.15 25.42 47.75 6.89 106.86-41.37 132L147.61 500.39c-48.27 25.14-107.99 6.82-133.41-40.93-25.41-47.76-6.88-106.86 41.38-132l39.69-20.86c-34.19-1.23-66.79-20.03-83.88-52.14-25.41-47.76-6.88-106.86 41.38-132L264.39 11.27zM150.14 177.08l128.1 79.08-128.1 78.69V177.08z"/></svg>
                <span className="pl-3">Shorts</span>
              </div>
            </Link>
          </li>
        </ul>
        <h1 className='font-bold pt-5'>Subscriptions</h1>
       <ul>
         <li>Music</li>
         <li>Sports</li>
         <li>Gaming</li>
         <li>Musix</li>
       </ul>
       <h1 className='font-bold pt-5'>Watch Later</h1>
       <ul>
         <li>Music</li>
         <li>Sports</li>
         <li>Gaming</li>
         <li>Musix</li>
       </ul>
      </div>
    </div>
  )
}

export default Sidebar