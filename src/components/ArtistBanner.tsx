import React from 'react'


const ArtistBanner = () => {
    return (
        <div>
            <div className="px-5 py-2 flex justify-between items-center bg-starseedGray">
                <div className="flex items-center">
                    <svg className="mr-3" width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M6.47967 5.87069V2.25449C6.47967 1.85506 6.80348 1.53125 7.20291 1.53125H13.7121C14.1115 1.53125 14.4353 1.85506 14.4353 2.25449V7.31717C14.4353 7.7166 14.1115 8.04041 13.7121 8.04041H1.41699M14.4353 3.70097H6.47967M2.14023 13.8263H10.8191C11.2185 13.8263 11.5424 13.5025 11.5424 13.1031V6.59393C11.5424 6.1945 11.2185 5.87069 10.8191 5.87069H2.14023C1.7408 5.87069 1.41699 6.1945 1.41699 6.59393V13.1031C1.41699 13.5025 1.7408 13.8263 2.14023 13.8263Z" stroke="#9696F7" stroke-width="1.08486" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                    <a className="text-sm" href="/" title="Artist Dashboard">
                        <span className="artist-dashboard-link">
                            View Artist Dashboard
                        </span>
                    </a>
                </div>
                <svg width="6" height="10" viewBox="0 0 6 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0.954102 9.40648L5.15356 5.20703L0.954104 1.00757" stroke="#B796F0" stroke-width="1.04986" stroke-linecap="round" stroke-linejoin="round" />
                </svg>

            </div>
        </div>
    )
}

export default ArtistBanner