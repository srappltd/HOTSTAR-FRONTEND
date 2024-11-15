import React, { useEffect } from 'react'
import Card from '../detail/Card'
import { useDispatch, useSelector } from 'react-redux'
import { useLocation } from 'react-router-dom'
import { asyncCategory } from '../../../store/actions/ClientAction'
import Loading from '../../elements/Loading'
import { getLoader } from '../../../store/reducers/LoadingReducer'
import BackButton from '../../elements/BackButton'

const PlaylistVideo = () => {
    const dispatch = useDispatch(null)
    const { pathname, search } = useLocation(null)
    const { detail, category } = useSelector(state => state.ClientReducer)
    const { loading } = useSelector(state => state.LoadingReducer)
    console.log(pathname.split('/')[2])
    useEffect(() => {
        dispatch(getLoader(!loading))
        dispatch(asyncCategory(search.split('=')[1]))
    }, [])
    console.log(search.split('=')[1])
    // console.log(category && category.length>0)
    document.title = `Hotstar - ${detail ? detail.title : 'watch'}`
    return (
        <div className='md:pt-10 pt-2 overflow-hidden w-full h-full'>
            <div className='flex items-center w-full relative'>
                <BackButton position={'relative text-3xl'} />

                <h1 className='flex ml-3 font-bold md:font-semibold text-lg'>{category && category[0].title}</h1>
            </div>
            {category ?
                <div className='grid grid-cols-1 gap-3 pt-4 w-full md:h-[calc(100%-40px)] max-h-[calc(100%-40px)] overflow-y-auto'>
                    {category && category.length > 0 && category[0].items.length > 0 && category[0].items.slice(0, 10).map((item, index) => (
                        <Card key={index} item={item} />
                    )).reverse()}
                </div>
                :
                <>
                    <Loading />
                </>
            }
        </div>
    )
}

export default PlaylistVideo
