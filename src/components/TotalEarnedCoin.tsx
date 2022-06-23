import React from 'react'

interface Props {
  coinImage?: string;
  coinSymbol?: string;
  total: number;
}

const TotalEarnedCoin = ({ coinImage, coinSymbol, total }: Props) => {
  return (
    <div className="flex items-center px-3 py-2">
      <div className="pr-3">
        {coinImage ?
          <img className="w-7 h-auto" src={coinImage} alt={coinSymbol} />
          : <span className="w-7 h-7 pt-0.5 rounded-full bg-starseedPink text-xxs text-white flex justify-center items-center">${coinSymbol}</span>
      }
      </div>
      
      <div>
        <p className="text-xxs text-starseedGrayText">${coinSymbol} Earned</p>
        <p className="text-xl">{total}</p>
      </div>
    </div>
  )
}

export default TotalEarnedCoin