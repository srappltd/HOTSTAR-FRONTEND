import React from 'react'
import ButtonWithIcon from '../../elements/ButtonWithIcon'
import { Link } from 'react-router-dom'

const Card = ({item}) => {
  return (
    <div className='w-full md:h-[150px] h-[100px] md:border flex hover:bg-[#16161c] cursor-pointer relative md:rounded-lg overflow-hidden border-[#16161c] shadow-2xl'>
                            <Link to={`/detail/${item._id}`} className='p-2 flex-shrink-0'>

                                <img src="https://akamaividz2.zee5.com/image/upload/w_677,h_381,c_scale,f_avif,q_auto:eco/resources/0-0-1z5234664/list/1170x658withlogo6b001653451e4ab98bb099e9985c0349.jpg" className='h-full rounded-md overflow-hidden ' alt="Movie 1" />
                            </Link>
                            <div className='px-3 py-1'>
                                <Link to={`/detail/${item._id}`} className='md:text-base text-sm line-clamp-2 md:font-medium leading-[1.3]'>{item.title}</Link>
                                <div className='flex items-center gap-2 text-xs text-slate-300 mt-3'>
                                    <span>{item.duration}</span> •
                                    <span className='text-blue-400'>Crime</span> •
                                    <span className='text-blue-400'>Drama</span>
                                </div>
                                <div className='md:flex hidden items-center gap-3 absolute bottom-2 '>
                                    <ButtonWithIcon title={'Share'} icon={'ri-share-forward-line'} px={'px-2'} textSize={'text-xs'} />
                                    <ButtonWithIcon title={'Watch'} icon={'ri-play-list-add-line'} px={'px-2'} textSize={'text-xs'} />
                                </div>
                            </div>
                        </div>
  )
}

export default Card
