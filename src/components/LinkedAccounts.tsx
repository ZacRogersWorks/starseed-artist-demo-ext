import React from 'react'

import youtubeIcon from '../assets/images/svgs/youtubeIcon.svg'
import spotifyIcon from '../assets/images/svgs/spotifyIcon.svg'
import soundcloudIcon from '../assets/images/svgs/soundcloudIcon.svg'


type Props = {}

const LinkedAccounts = (props: Props) => {
  return (
    <div className="mx-3 mt-3 mb-[128px] p-2 w-full flex flex-col">
      <div className="px-2">
        <div className="flex justify-between items-center mb-2">
          <p>Linked Accounts</p>
          <a className="text-xxs underline decoration-solid" href="/">Connect Accounts</a>
        </div>
      </div>
      <div className="rounded-md border-[1px] border-starseedLightBlueBorder">
        <div className="px-2 py-3 flex items-center justify-between border-b-[1px] border-starseedLightBlueBorder">
          <a className="flex items-center">
            <img className="w-6 h-auto" src={youtubeIcon} alt="YouTube" />
            <p className="ml-4 text-sm">YouTube</p>
          </a>
          <a className="text-xxs text-starseedGrayText">Disconnect</a>
        </div>
        <div className="px-2 py-3 flex items-center justify-between border-b-[1px] border-starseedLightBlueBorder">
          <a className="flex items-center">
            <img className="w-6 h-auto" src={spotifyIcon} alt="Spotify" />
            <p className="ml-4 text-sm">Spotify</p>
          </a>
          <a className="text-xxs text-starseedGrayText">Disconnect</a>
        </div>
        <div className="px-2 py-3 flex items-center justify-between border-starseedLightBlueBorder">
          <a className="flex items-center">
            <img className="w-6 h-auto" src={soundcloudIcon} alt="Soundcloud" />
            <p className="ml-4 text-sm">Soundcloud</p>
          </a>
          <a className="text-xxs text-starseedGrayText">Disconnect</a>
        </div>
      </div>

    </div>
  )
}

export default LinkedAccounts