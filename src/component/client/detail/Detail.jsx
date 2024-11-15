import React, { useEffect, useRef, useState } from 'react'
import VideoController from './videoController'
import ButtonWithIcon from '../../elements/ButtonWithIcon'
import SliderDiv from '../../elements/SliderDiv'
import Card from './Card'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { asyncCategory, asyncDatail } from '../../../store/actions/ClientAction'
import { baseUrl } from '../../../utils/Axios'
import moment from 'moment'
import BackButton from '../../elements/BackButton'
// import 'video.js'
import videojs from 'video.js'
import 'jb-videojs-hls-quality-selector'

const Detail = () => {
    const descriptionSizeRef = useRef('')
    const navigate = useNavigate(null)
    const dispatch = useDispatch(null)
    const {pathname} = useLocation(null)
    const {detail,category} = useSelector(state=>state.ClientReducer)
    useEffect(() => {
        dispatch(asyncDatail(pathname.split('/')[2]))
        // console.log(descriptionSizeRef.current.innerText.length)
    },[pathname.split('/')[2]])
    useEffect(()=>{
        detail && dispatch(asyncCategory(detail.category._id))
        
    },[detail && detail])
    console.log(category && category.length>0)
    document.title = `Hotstar - ${detail ? detail.title : 'watch' }`

    const videRfef = useRef(null)
      useEffect(()=>{
        const player = videojs('#vid1')
        // player.hlsQualitySelector({
        //     displayCurrentQuality: true,
        // });
      },[])
    return (
        <>
            <div className='w-full md:flex pb-5'>
                {/* // left part  */}
                <div className='md:w-[60%] lg:w-[50%] w-full h-full'>
                    {/* <div onClick={()=>navigate(-1)} className='flex items-center py-2 cursor-pointer px-3 text-2xl'><i class="ri-arrow-left-s-line"></i></div> */}
                    <BackButton position={'reletive text-4xl'}/>
                    {/* // video player  */}
                    <video ref={videRfef} id='vid1' src={detail && baseUrl+detail.video_url} poster={detail && baseUrl+detail.poster} controls class="video-js vjs-theme-city cursor-pointer w-full h-[27vh] md:h-[65vh]"></video>
                    {/* <VideoController url={detail && baseUrl+detail.video_url} poster={detail && baseUrl+detail.poster} /> */}
                    {/* // bottom  */}
                    <div className='w-full py-2 px-2 md:px-0'>
                        <h1 className='font-semibold text-lg line-clamp-2'>{detail && detail.title}</h1>
                        <div className='flex items-center md:mt-2 mt-1 md:gap-3 gap-1 text-xs md:text-sm font-medium'>
                            <span className='py-1 md:px-3 px-2 bg-slate-950 border border-slate-700 rounded-sm text-xs'>U/A 16+</span> •
                            <span className='py-1 md:px-3 px-2 '>{detail && detail.duration}</span> •
                            <span className='py-1 md:px-3 px-2 text-blue-400'>2020</span> •
                            <span className='py-1 md:px-3 px-2 text-blue-400'>Movie</span>
                        </div>
                        <div className='flex items-center gap-3 md:mt-4 mt-2'>
                            <ButtonWithIcon title={'Share'} icon={'ri-share-forward-line'} />
                            <ButtonWithIcon title={'Watchlist'} icon={'ri-play-list-add-line'} />
                            <ButtonWithIcon title={'Trailer'} icon={'ri-play-mini-fill'} />
                        </div>
                        <div className='flex items-center gap-4 md:mt-3 mt-2'>
                            <h3 className='text-blue-400 flex items-center gap-2'><span className='font-medium text-white'>Audio Languages: </span> {detail && detail.languages.title}</h3>
                            <h3 className='text-blue-400 flex items-center gap-2'><span className='font-medium text-white'>Genre: </span> Action, Drama</h3>
                        </div>
                        <div className='w-full p-2 bg-[#16161C] rounded-lg md:mt-4 mt-2'>
                            <div className='flex items-center gap-3'>
                                <span className='font-medium text-slate-300'>1.4M Views</span>
                                <span className='font-medium text-slate-300'>{moment.utc(detail && detail.createdAt).local().startOf('seconds').fromNow()}</span>
                            </div>
                            <p ref={descriptionSizeRef} className='md:text-sm text-xs mt-[2px] line-clamp-5'>{detail && detail.description}<br /> <br />
                             {detail && detail.tags?.length > 0 && detail.tags.map((tag,index)=>(
                                 <span key={index} className='text-blue-500 font-medium'> #{tag}</span>
                             ))
                             }
                              </p>
                            {descriptionSizeRef.current && descriptionSizeRef.current.innerText.length > 350 && <span className='cursor-pointer text-blue-400 font-medium'>...More</span>}
                        </div>
                    </div>
                </div>

                {/* // right part  */}
                <div className='md:w-[40%] lg:w-[50%] w-full h-full md:pl-5 md:pt-10 pt-4 pl-0 md:pr-10 pr-0'>
                    <div className='flex justify-between px-2'>
                    <h1 className='font-semibold text-lg'>Recommended {category && category[0].title} For You</h1>
                    <Link to={`/playlistVideo?category=${detail && detail.category._id}`} className='hover:underline text-blue-400'>See all</Link>
                    </div>
                    <div className='md:grid hidden grid-cols-1 w-full md:gap-2 mt-2'>
                        {category && category.length>0 && category[0].items.slice(0,4).map((item,index)=>(
                            <Card key={index} item={item}/>
                        )).reverse()}
                    </div>
                    <div className='grid md:hidden grid-cols-1 w-full md:gap-2 mt-2'>
                        {category && category.length>0 && category[0].items.slice(0,10).map((item,index)=>(
                            <Card key={index} item={item}/>
                        )).reverse()}
                    </div>
                    
                </div>
            </div>

            {/* // slider  */}
            <SliderDiv />

        </>
    )
}

export default Detail
