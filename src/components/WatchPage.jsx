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
            <div className='mx-10 flex flex-col justify-center items-center lg:flex-row'>
                <div className='my-10'>
                    <iframe className='sm:w-[45rem] sm:h-[400px]' src={`https://www.youtube.com/embed/${searchParams.get('v')}/?si=XzJCMfyti455-J7B`} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                </div>
                <div className='mx-5 w-full my-10'>
                    <LiveChat/>
                </div>
            </div>
            <CommentsContainer/>
        </div>
    )
}

export default WatchPage