
import React, { useRef, useState } from 'react'
import Flicking from "@egjs/react-flicking";
import "@egjs/react-flicking/dist/flicking.css";
import SpotifyLineChart from './Charts/SpotifyLineChart'
import EarningsBreakdownChart from './Charts/EarningsBreakdownChart'
type Props = {}

const Carousel = (props: Props) => {
  const [currentSlideIndex, setCurrentSlideIndex] = useState(1)
  const flicking = useRef(null)

  function handleOnCarouselChange(e) {
    setCurrentSlideIndex(e.index)
  }

  async function moveToPanel(panelIndex) {
    try {
      await flicking.current.moveTo(panelIndex)
    } catch (e) {
      console.log(e)
    }
  }

  const cards = [
    ["Youtube Engagement", EarningsBreakdownChart],
    ["Spotify Engagement", SpotifyLineChart],
    ["SoundCloud Engagement", SpotifyLineChart]
  ]

  const buttons = cards.map((card, index) => {
    const isActive = currentSlideIndex === index
    return (<button key={index} onClick={() => moveToPanel(index)} type="button" className={"w-[9px] h-[9px] rounded-full " + (isActive ? "bg-starseedBlue" : "bg-starseedInactive")} aria-current={isActive} aria-label={`Slide ${index + 1}`}></button>)
  });

  return (
    <div className='relative'>
      <Flicking ref={flicking} onChanged={handleOnCarouselChange} defaultIndex={1} renderOnlyVisible={true}>
        {cards.map(([title, Chart]) => (
        <div className='w-[90%] p-2'>
          <div className='p-2 px-3  drop-shadow bg-white border-starseedLightBlueBorder border rounded-md h-full'>
            <p className='mb-2'>{title}</p>
            <Chart />
          </div>
        </div>
        ))}
      </Flicking>
      <div className="flex mt-1 items-center justify-center z-30 space-x-2">
        {buttons}
      </div>
    </div>
  )
}

export default Carousel