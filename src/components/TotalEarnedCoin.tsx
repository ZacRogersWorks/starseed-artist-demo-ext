import React, {useEffect, useState} from 'react'
import randomize from '../utils/randomize'

interface Props {
  coinImage?: string;
  coinSymbol?: string;
  total: number;
  
}

const TotalEarnedCoin = ({ coinImage, coinSymbol, total }: Props) => {
  const [currentTotal, setCurrentTotal] = useState<number>(total)

  useEffect(() => {
    setInterval(() => {
      const increaseBy = randomize(total, 34035.045, false, 3)
      setCurrentTotal(prev => +(prev + increaseBy).toFixed(3))
    },4000)
  }, [])

  return (
    <div className="flex items-center px-3 py-2 w-max">
      <div className="pr-3">
        {coinImage ?
          <img className="w-7 h-auto" src={coinImage} alt={coinSymbol} />
          : <span className="w-7 h-7 pt-0.5 rounded-full bg-starseedPink text-xxs text-white flex justify-center items-center">${coinSymbol}</span>
      }
      </div>
      
      <div>
        <p className="text-xxs text-starseedGrayText">${coinSymbol} Earned</p>
        <p className="text-xl">{currentTotal}</p>
      </div>
    </div>
  )
}

export default TotalEarnedCoin