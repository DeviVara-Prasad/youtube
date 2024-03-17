import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams, useSearchParams } from 'react-router-dom';
import { closeMenu } from '../utils/appSlice';
import CommentsContainer from './CommentsContainer';
import LiveChat from './LiveChat';

const WatchPage = () => {
    const dispatch = useDispatch();
    const isMenuOpen = useSelector(state => state.app.isMenuOpen)
    const [searchParams] = useSearchParams();
    useEffect(
        () => {
            dispatch(closeMenu())
        },[]
    )
    return (
        <div className='flex flex-col w-full'>
            <div className='mx-10 flex'>
                <div>
                    <iframe width={isMenuOpen?650:800} height="400" src={`https://www.youtube.com/embed/${searchParams.get('v')}/?si=XzJCMfyti455-J7B`} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                </div>
                <div className='mx-5 w-full'>
                    <LiveChat/>
                </div>
            </div>
            <CommentsContainer/>
        </div>
    )
}

export default WatchPage