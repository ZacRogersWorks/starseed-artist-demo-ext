import React from 'react'

interface Props {
  coinImage?: string;
  coinSymbol?: string;
  total: number;
}

const TotalEarnedCoin = ({ coinImage, coinSymbol, total }: Props) => {
  return (
    <div className="flex items-center">
      <div>
        {coinImage ?
          <img className="w-7 h-auto" src={coinImage} alt={coinSymbol} />
          : <span className="w-7 h-7 ">${coinSymbol}</span>
      }
      </div>
      <div></div>
      <div>
        <p>${coinSymbol} Earned</p>
        <p>{total}</p>
      </div>
    </div>
  )
}

export default TotalEarnedCoin