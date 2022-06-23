import React, { useState, useEffect } from 'react'
import youtubeButton from '../assets/images/svgs/youtubeButton.svg'

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
  const [percentageChanged, setPercentageChanged] = useState<number>()

  useEffect(() => {
    const divide = (totalMined - lastWeekMined) / lastWeekMined
    const moveDecimal = divide * 100
    const roundToHundredth = Math.round(moveDecimal * 100) / 100
    setPercentageChanged(roundToHundredth)
  }, [totalMined])


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
    <div className="mx-3 rounded-md border-[1px] border-starseedLightBlueBorder">
      <div className="p-2 border-b-[1px] border-starseedLightBlueBorder">
        <div className="flex justify-between">
          <p>Top Earning</p>
          <svg className="mt-1.5" width="14" height="4" viewBox="0 0 14 4" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle r="1.42737" transform="matrix(1 0 0 -1 2.63994 1.97188)" stroke="#B4B4CA" stroke-width="0.85093" />
            <circle r="1.42737" transform="matrix(1 0 0 -1 7.16924 1.97188)" stroke="#B4B4CA" stroke-width="0.85093" />
            <circle r="1.42737" transform="matrix(1 0 0 -1 11.698 1.97188)" stroke="#B4B4CA" stroke-width="0.85093" />
          </svg>
        </div>
        <div className="mt-1">
          <div className="relative">
            <img className="rounded-lg" src={videoImg} alt={videoTitle} />
            <a className="w-20 h-auto absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" href={videoUrl} title={videoTitle} target="_blank">
              <img className="" src={youtubeButton} alt="Open YouTube" />
            </a>
          </div>
          <p className="text-sm mt-2">{videoTitle}</p>
        </div>
      </div>
      <div className="p-2">
        <div >
          <p className="text-starseedGrayText text-sm">${coinName} Tokens Mined From This Track</p>
          <p className="text-4xl">{totalMined}</p>
        </div>
        <div className="flex items-center">
          <svg width="18" height="18" viewBox="0 0 46 46" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="22.879" cy="22.9571" r="22.2891" fill="#C2EEDA" />
            <path d="M30.731 12.9809L15.1451 31.6443M30.731 12.9809L31.9619 26.6806M30.731 12.9809L17.0313 14.2119" stroke="#54AA84" stroke-width="2.53286" stroke-linecap="round" stroke-linejoin="round" />
          </svg>
          <p className="ml-2 text-xs text-starseedGrayText"><span className="percent text-starseedGreen mr-0.25">{percentageChanged + '%'}</span> this week</p>
        </div>
      </div>
    </div>
  )
}

export default TopEarning