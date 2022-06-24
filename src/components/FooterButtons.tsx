import React from 'react'

type Props = {}

const FooterButtons = (props: Props) => {
  return (

    <div className="w-inherit h-[79px] bg-gradient-to-t  from-starseedGray via-white fixed bottom-0 z-20">
      <div className="flex ml-4 mr-4 pb-3 h-full items-end justify-between">
        <a className="mr-[2px] cursor-pointer flex w-full justify-center items-center py-2 px-3 rounded-full bg-starseedBlue hover:bg-starseedBlueHover hover:scale-105 transition-all duration-300 ease-out">
          <svg width="18" height="19" viewBox="0 0 18 19" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M1 8L9 1L17 8L17 18H12V14C12 13.2044 11.6839 12.4413 11.1213 11.8787C10.5587 11.3161 9.79565 11 9 11C8.20435 11 7.44129 11.3161 6.87868 11.8787C6.31607 12.4413 6 13.2043 6 14V18H1L1 8Z" stroke="#F7F8FF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          <p className="ml-2 text-white text-sm pt-[2px]">DAO Management</p>
        </a>
        <a className="ml-2 cursor-pointer flex w-full justify-center items-center py-2 px-3 rounded-full bg-starseedPurp hover:bg-starseedPurpHover hover:scale-105 transition-all duration-300 ease-out">
          <svg width="21" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M16 15C14.8954 15 14 15.8954 14 17C14 18.1046 14.8954 19 16 19C17.1046 19 18 18.1046 18 17C18 15.8954 17.1046 15 16 15ZM16 15H6.36729C5.86964 15 5.44772 14.6341 5.37735 14.1414L5.07143 12M1 1H3.5L3.78571 3M3.78571 3H4H20L17 12H5.5H5.07143M3.78571 3L5.07143 12M10 17C10 18.1046 9.10457 19 8 19C6.89543 19 6 18.1046 6 17C6 15.8954 6.89543 15 8 15C9.10457 15 10 15.8954 10 17Z" stroke="#3A3A4E" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          <p className="ml-2 text-sm">Marketplace</p>
        </a>
      </div>
    </div>
  )
}

export default FooterButtons