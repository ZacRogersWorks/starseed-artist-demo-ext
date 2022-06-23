import React, { useEffect, useState } from 'react'

interface Props {
    svg: string;
    title: string;
    currentAmount: number;
    lastWeekTotal: number;
    returnPercent: boolean;
    children?: React.ReactNode;
}

const Card = ({ svg, title, currentAmount, lastWeekTotal, returnPercent }: Props) => {
    const [percentageChanged, setPercentageChanged] = useState<number>()

    useEffect(() => {
        const divide = (currentAmount - lastWeekTotal) / lastWeekTotal
        const moveDecimal = divide * 100
        const roundToHundredth = Math.round(moveDecimal * 100) / 100
        setPercentageChanged(roundToHundredth)
    }, [currentAmount])

    return (
        <div className="my-5 mx-3 p-2 rounded-md border-[1px] border-starseedLightBlueBorder flex justify-between">
            <div className="flex">
                <div className="h-14 w-14 ">
                    <img src={svg} alt={title} />
                </div>
                <div className="ml-5">
                    <div >
                        <p className="text-starseedGrayText text-base">{title}</p>
                        <p className="text-4xl">{currentAmount + (returnPercent ? '%' : null)}</p>
                    </div>
                    <div className="flex items-center">
                        <svg width="18" height="18" viewBox="0 0 46 46" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="22.879" cy="22.9571" r="22.2891" fill="#C2EEDA" />
                            <path d="M30.731 12.9809L15.1451 31.6443M30.731 12.9809L31.9619 26.6806M30.731 12.9809L17.0313 14.2119" stroke="#54AA84" stroke-width="2.53286" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                        <p className="ml-2 text-xs text-starseedGrayText"><span className="percent text-starseedGreen mr-0.25">{percentageChanged + '%'}</span> this week</p>
                    </div>
                </div>
            </div>
            <svg className="mt-1.5" width="14" height="4" viewBox="0 0 14 4" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle r="1.42737" transform="matrix(1 0 0 -1 2.63994 1.97188)" stroke="#B4B4CA" stroke-width="0.85093" />
                <circle r="1.42737" transform="matrix(1 0 0 -1 7.16924 1.97188)" stroke="#B4B4CA" stroke-width="0.85093" />
                <circle r="1.42737" transform="matrix(1 0 0 -1 11.698 1.97188)" stroke="#B4B4CA" stroke-width="0.85093" />
            </svg>
        </div>
    )
}

export default Card