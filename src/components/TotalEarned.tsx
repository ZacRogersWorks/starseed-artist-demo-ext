import React, { useEffect } from 'react'

import TotalEarnedCoin from './TotalEarnedCoin'

import starCoinLogo from '../assets/images/StarCoin-logo.png'

type Props = {}

const TotalEarned = (props: Props) => {

  return (
    <div className="w-full my-5 bg-white">
      <div className="w-full flex justify-between items-center rounded-md border-[1px] border-starseedLightBlueBorder">
        <TotalEarnedCoin coinImage={starCoinLogo} coinSymbol="Star" total={35140.045} />
        <div className="h-6 border-r-[1px] border-starseedLightBlueBorder"></div>
        <TotalEarnedCoin coinSymbol="CC" total={35140.045} />
      </div>
    </div>
  )
}

export default TotalEarned