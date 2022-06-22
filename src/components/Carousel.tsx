import React, { useState } from 'react'
import Flicking from "@egjs/react-flicking";
import "@egjs/react-flicking/dist/flicking.css";

type Props = {}

const Carousel = (props: Props) => {
  return (
    <Flicking defaultIndex={1} renderOnlyVisible={true}>
      <div className='bg-purple-200 w-[90%]'>1</div>
      <div className='bg-red-200 w-[90%]'>2</div>
      <div className='bg-yellow-200 w-[90%]'>3</div>
    </Flicking>
  )
}

export default Carousel