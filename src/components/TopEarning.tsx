import React, { useState, useEffect } from 'react'

type Props = {
  videoUrl: string,
  totalMined: number,
  lastWeekMined: number,
  coinName: string,
}

const TopEarning = ({ videoUrl, totalMined, lastWeekMined, coinName }: Props) => {
  const [videoId, setVideoId] = useState<string>()
  const [videoImg, setVideoImg] = useState<string>()
  const [videoTitle, setVideoTitle] = useState<string>()

  const getVideoTitle = (): void => {
    fetch(`https://noembed.com/embed?url=${videoUrl}`)
      .then(res => res.json())
      .then(res => {
        setVideoTitle(res.title)
      })
  }

  useEffect(() => {
    const match = videoUrl.match(/v=([0-9a-z_-]{1,20})/i);
    match ? setVideoId(match['1']) : null
    setVideoImg(`https://img.youtube.com/vi/${match['1']}/hqdefault.jpg`)
    getVideoTitle()
  }, [])

  return (
    <div className="mx-3 p-2 rounded-md border-[1px] border-starseedLightBlueBorder">
      <div className="flex justify-between">
        <p>Top Earning</p>
        <svg className="mt-1.5" width="14" height="4" viewBox="0 0 14 4" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle r="1.42737" transform="matrix(1 0 0 -1 2.63994 1.97188)" stroke="#B4B4CA" stroke-width="0.85093" />
          <circle r="1.42737" transform="matrix(1 0 0 -1 7.16924 1.97188)" stroke="#B4B4CA" stroke-width="0.85093" />
          <circle r="1.42737" transform="matrix(1 0 0 -1 11.698 1.97188)" stroke="#B4B4CA" stroke-width="0.85093" />
        </svg>
      </div>
      <div className="mt-1">
        <img className="rounded-lg" src={videoImg} alt={videoTitle} />
        <p className="text-sm mt-2">{videoTitle}</p>
      </div>
    </div>
  )
}

export default TopEarning