import React, {useEffect} from 'react'

import TotalEarnedCoin from './TotalEarnedCoin'

import starCoinLogo from '../assets/images/StarCoin-logo.png'

type Props = {}

const TotalEarned = (props: Props) => {

  useEffect(() => {
    console.log(starCoinLogo)
  },[])
  return (
    <div className="mt-12 flex justify-center items-center">
      <TotalEarnedCoin coinImage={starCoinLogo} coinSymbol="Star" total={35140.045} />
      <div></div>
      <TotalEarnedCoin coinSymbol="CC" total={35140.045}/>
    </div>
  )
}

export default TotalEarned