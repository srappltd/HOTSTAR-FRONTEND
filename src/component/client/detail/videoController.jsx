import React, { useEffect, useRef, useState } from 'react'

const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${minutes}:${secs < 10 ? '0' : ''}${secs}`;
};


const VideoController = ({url,poster}) => {
    const videoRef = useRef(null);
    const [isPlaying, setIsPlaying] = useState(false);
    const [currentTime, setCurrentTime] = useState(0);
    const [duration, setDuration] = useState(0);
    const [isFullscreen, setIsFullscreen] = useState(false);

    useEffect(() => {
        const video = videoRef.current;

        const handleLoadedMetadata = () => {
            setDuration(video.duration);
        };

        const handleTimeUpdate = () => {
            setCurrentTime(video.currentTime);
        };

        video.addEventListener('loadedmetadata', handleLoadedMetadata);
        video.addEventListener('timeupdate', handleTimeUpdate);

        return () => {
            video.removeEventListener('loadedmetadata', handleLoadedMetadata);
            video.removeEventListener('timeupdate', handleTimeUpdate);
        };
    }, []);

    const handlePlayPause = () => {
        const video = videoRef.current;
        if (video.paused) {
            video.play();
            setIsPlaying(true);
        } else {
            video.pause();
            setIsPlaying(false);
        }
    };

    const handleSkip = (seconds) => {
        videoRef.current.currentTime += seconds;
    };

    const handleSeek = (e) => {
        const seekTime = (e.target.value / 100) * duration;
        videoRef.current.currentTime = seekTime;
    };
    const containerRef = useRef(null);
    const toggleFullscreen = () => {
        if (!isFullscreen) {
          if (containerRef.current.requestFullscreen) {
            containerRef.current.requestFullscreen();
          } else if (containerRef.current.webkitRequestFullscreen) {
            containerRef.current.webkitRequestFullscreen();
          } else if (containerRef.current.mozRequestFullScreen) {
            containerRef.current.mozRequestFullScreen();
          } else if (containerRef.current.msRequestFullscreen) {
            containerRef.current.msRequestFullscreen();
          }
        } else {
          if (document.exitFullscreen) {
            document.exitFullscreen();
          } else if (document.webkitExitFullscreen) {
            document.webkitExitFullscreen();
          } else if (document.mozCancelFullScreen) {
            document.mozCancelFullScreen();
          } else if (document.msExitFullscreen) {
            document.msExitFullscreen();
          }
        }
        setIsFullscreen(!isFullscreen);
      };
      const [isSpeedDialog,setIsSpeedDialog] = useState(false)
      const [speedTimeout,setSpeedTimeout] = useState('1.0')
      const handleSpeedChange = (quality) => {
        const video = videoRef.current;
        setSpeedTimeout(quality)
        switch (quality) {
          case '0.5s':
            video.playbackRate = 0.5; // Simulate lower quality by reducing playback speed
            break;
          case '1.0s':
            video.playbackRate = 1; // Normal playback speed for standard quality
            break;
          case '1.5s':
            video.playbackRate = 1.5; // Simulate higher quality by increasing playback speed
            break;
          case '2.0s':
            video.playbackRate = 2; // Simulate highest quality by increasing playback speed
            break;
          default:
            video.playbackRate = 1; // Reset to default playback speed if quality is unknown
        }
        setIsSpeedDialog(!isSpeedDialog)
      };

    return (
        <div ref={containerRef} className="flex flex-col items-center justify-center w-full relative bg-black rounded-md overflow-hidden">
            <video ref={videoRef} src={url} className="w-full" poster={poster || ''} controls={false}>
                {/* <source src={url || '' } type="video/mp4" /> */}
                Your browser does not support the video tag.
            </video>
            <div className='w-full h-full absolute top-0 left-0 flex flex-col justify-end px-4 overflow-hidden'>
                <input
                    type="range"
                    value={(currentTime / duration) * 100 || 0}
                    onChange={handleSeek}
                    className="transparent h-[4px] w-full cursor-pointer appearance-none border-transparent bg-neutral-200 dark:bg-neutral-400"
                />
                <div className='flex items-center justify-between w-full text-[#cecece] py-2'>
                    <div className="flex items-center justify-start w-full font-semibold text-base">
                        <span>{formatTime(currentTime)}</span>/
                        <span>{formatTime(duration)}</span>
                    </div>
                    <div className='flex items-center gap-5 text-2xl'>
                    
                        <span onClick={()=>setIsSpeedDialog(!isSpeedDialog)} className='cursor-pointer flex items-center gap-1'><i className="ri-speed-up-line"></i><span className='text-sm font-medium'>{speedTimeout}</span></span>
                        <span><i className="ri-settings-4-line"></i></span>
                        <span onClick={toggleFullscreen} className='cursor-pointer'><i className={isFullscreen ? 'ri-fullscreen-exit-line' : 'ri-fullscreen-line'}></i></span>
                    </div>
                </div>
                <div className="flex items-center text-3xl justify-center absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 gap-10">
                    <button onClick={() => handleSkip(-5)} className="backdrop-blur w-11 h-11 rounded-full">
                        <i className="ri-replay-5-line"></i>
                    </button>
                    <button
                        onClick={handlePlayPause}
                        className="backdrop-blur w-11 h-11 rounded-full"
                    >
                        {isPlaying ? <i className="ri-pause-large-fill"></i> : <i className="ri-play-large-fill"></i> }
                    </button>
                    <button onClick={() => handleSkip(5)} className="backdrop-blur w-11 h-11 rounded-full">
                        <i className="ri-forward-5-line"></i>
                    </button>
                </div>
                <div className={`qualitydiv w-[200px] overflow-hidden text-sm rounded grid grid-cols-1 bg-[#0f10145f] backdrop-blur-sm absolute transition-all bottom-16 ${isSpeedDialog ? 'right-5 opacity-100' : '-right-[200px] opacity-0' }`}>
                    <span className='py-2 px-5 cursor-pointer flex items-center justify-center w-full bg-[#3b3e48]'>Speed</span>
                    <span onClick={()=>handleSpeedChange('0.5s')} className='py-2 px-5 cursor-pointer flex items-center justify-center w-full hover:bg-[#2d3039bf]'>0.5</span>
                    <span onClick={()=>handleSpeedChange('1.0s')} className='py-2 px-5 cursor-pointer flex items-center justify-center w-full hover:bg-[#2d3039bf]'>1.0</span>
                    <span onClick={()=>handleSpeedChange('1.5s')} className='py-2 px-5 cursor-pointer flex items-center justify-center w-full hover:bg-[#2d3039bf]'>1.5</span>
                    <span onClick={()=>handleSpeedChange('2.0s')} className='py-2 px-5 cursor-pointer flex items-center justify-center w-full hover:bg-[#2d3039bf]'>2.0</span>
                </div>
            </div>
        </div>
    )
}

export default VideoController
