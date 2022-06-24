
import React, { useEffect, useRef, useState } from 'react'
import Flicking from "@egjs/react-flicking";
import "@egjs/react-flicking/dist/flicking.css";
import SpotifyLineChart from './Charts/SpotifyLineChart'
import EarningsBreakdownChart from './Charts/EarningsBreakdownChart'

const Carousel = () => {
  const [currentSlideIndex, setCurrentSlideIndex] = useState(1)
  const flicking = useRef(null)

  function handleOnCarouselChange(e) {
    setCurrentSlideIndex(e.index)
  }

  useEffect(() => {
    const getNextSlide = async () => {
      try {
        await flicking.current.next()
      } catch (e) {
        if (e.code === 5) {
          await flicking.current.moveTo(0)
        } else {
          console.log(e)
        }
      }
    }
    
    const intervalId = setInterval(getNextSlide, 5000)

    return () => {
      clearInterval(intervalId)
    }
  }, [])


  async function moveToPanel(panelIndex) {
    try {
      await flicking.current.moveTo(panelIndex)
    } catch (e) {
      console.log(e)
    }
  }

  const cards = [
    ["Earnings Breakdown", EarningsBreakdownChart, false, 0],
    ["Spotify Engagement", SpotifyLineChart, false, 1],
    ["SoundCloud Engagement", SpotifyLineChart, true, 2]
  ]

  const buttons = cards.map((card, index) => {
    const isActive = currentSlideIndex === index
    return (<button key={index} onClick={() => moveToPanel(index)} type="button" className={"w-[9px] h-[9px] rounded-full " + (isActive ? "bg-starseedBlue" : "bg-starseedInactive")} aria-current={isActive} aria-label={`Slide ${index + 1}`}></button>)
  });

  return (
    <div className='relative my-1'>
      <Flicking ref={flicking} onChanged={handleOnCarouselChange} defaultIndex={1} renderOnlyVisible={true}>
        {cards.map(([title, Chart, randomData, id]) => (
          <div className='w-[91%] mx-[3px] justify-center bg-white'>
            <div className='h-full w-full p-4 drop-shadow border-starseedLightBlueBorder border rounded-md'>
              <p className='mb-4'>{title}</p>
              <Chart key={id} randomize={randomData} />
            </div>
          </div>
        ))}
      </Flicking>
      <div className="flex mt-2 mb-1 items-center justify-center z-30 space-x-2">
        {buttons}
      </div>
    </div>
  )
}

export default Carousel