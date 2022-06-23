import React from 'react'

import Card from './Card'

import totalHolders from '../assets/images/svgs/totalHolders.svg'
import minutesStreamed from '../assets/images/svgs/minutesStreamed.svg'
import tokenPrice from '../assets/images/svgs/tokenPrice.svg'
import tokensMined from '../assets/images/svgs/tokensMined.svg'
import percentageMined from '../assets/images/svgs/percentageMined.svg'
import percentCirculating from '../assets/images/svgs/percentCirculating.svg'

const Cards = (props) => {
  return (
    <div className="w-full relative">
      <Card svg={totalHolders} title="Total Holders" currentAmount={35140} lastWeekTotal={34859} returnPercent={false} />
      <Card svg={minutesStreamed} title="Minutes Streamed" currentAmount={17140.5} lastWeekTotal={14149.8} returnPercent={false} />
      <Card svg={tokenPrice} title="Token Price" currentAmount={.71254} lastWeekTotal={.68321} returnPercent={false} />
      <Card svg={tokensMined} title="Tokens Mined" currentAmount={104671.06} lastWeekTotal={101671.2} returnPercent={false} />
      <Card svg={percentageMined} title="Percentage Mined" currentAmount={69.420} lastWeekTotal={68.89} returnPercent={true} />
      <Card svg={percentCirculating} title="Percent In Circulation" currentAmount={19.73} lastWeekTotal={18.21} returnPercent={true} />

    </div>
  )
}

export default Cards