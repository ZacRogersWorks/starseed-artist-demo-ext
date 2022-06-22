import React from 'react'

interface Props {
  coinImage?: string;
  coinSymbol?: string;
  total: number;
}

const TotalEarnedCoin = ({ coinImage, coinSymbol, total }: Props) => {
  return (
    <div className="flex items-center px-3">
      <div className="pr-3">
        {coinImage ?
          <img className="w-7 h-auto" src={coinImage} alt={coinSymbol} />
          : <span className="w-7 h-7 p-1 bg-starseedPink rounded-full text-xs text-white">${coinSymbol}</span>
      }
      </div>
      <div className="border-r-2"></div>
      <div>
        <p>${coinSymbol} Earned</p>
        <p>{total}</p>
      </div>
    </div>
  )
}

export default TotalEarnedCoin