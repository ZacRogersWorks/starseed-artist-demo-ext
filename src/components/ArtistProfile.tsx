import React, {useEffect} from 'react'

import profilePic from '../assets/images/artist-profile-pic.png'
import certifiedIcon from '../assets/images/certified-icon.png'

const ArtistProfile = () => {
    useEffect(() => {
        console.log(profilePic)
    }, [])
    return (
        <div className="mt-[100px] h-56 w-full relative overflow-hidden flex flex-col items-center ">
            <div className="h-full w-full background bg-artist-bg bg-cover -z-20 absolute top-0 left-0">
            <div className="ellipse bg-starseedPurp w-[443px] h-52 rounded-[50%] absolute -bottom-1/3 left-1/2 -translate-x-1/2 mix-blend-multiply -z-10"></div>
            </div>
            
            <div className="top buttons">
                <div className="rank flex justify-between items-center px-5 pt-3 absolute top-0 left-0 w-full">
                    <div className="bg-[#ffffff] h-5 px-2.5 pt-0.5 text-xxs font-light rounded-full flex items-center"><p>Rank <span className="text-starseedBlue">#3</span></p></div>
                    <div className=" p-1 bg-[#ffffff]/20 rounded hover:scale-110 hover:cursor-pointer transition-transform duration-300 ease-out">
                        <svg width="14" height="13" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M1.32129 9.31338L1.05928 9.05137C0.989788 9.12086 0.950749 9.21511 0.950749 9.31338H1.32129ZM7.99102 2.64365L8.25303 2.38164C8.10832 2.23694 7.87371 2.23694 7.729 2.38164L7.99102 2.64365ZM10.9553 5.60798L11.2174 5.86999C11.3621 5.72528 11.3621 5.49067 11.2174 5.34596L10.9553 5.60798ZM4.28561 12.2777V12.6482C4.38389 12.6482 4.47813 12.6092 4.54762 12.5397L4.28561 12.2777ZM1.32129 12.2777H0.950749C0.950749 12.4823 1.11665 12.6482 1.32129 12.6482V12.2777ZM1.32129 0.42041V0.0498697C1.11665 0.0498697 0.950749 0.215766 0.950749 0.42041L1.32129 0.42041ZM13.1786 0.42041H13.5491C13.5491 0.215766 13.3832 0.0498697 13.1786 0.0498697V0.42041ZM13.1786 12.2777V12.6482C13.3832 12.6482 13.5491 12.4823 13.5491 12.2777H13.1786ZM7.24994 11.9072C7.04529 11.9072 6.8794 12.0731 6.8794 12.2777C6.8794 12.4823 7.04529 12.6482 7.24994 12.6482V11.9072ZM0.950749 6.34906C0.950749 6.5537 1.11665 6.7196 1.32129 6.7196C1.52593 6.7196 1.69183 6.5537 1.69183 6.34906H0.950749ZM1.5833 9.57539L8.25303 2.90566L7.729 2.38164L1.05928 9.05137L1.5833 9.57539ZM7.729 2.90566L10.6933 5.86999L11.2174 5.34596L8.25303 2.38164L7.729 2.90566ZM10.6933 5.34596L4.0236 12.0157L4.54762 12.5397L11.2174 5.86999L10.6933 5.34596ZM4.28561 11.9072H1.32129V12.6482H4.28561V11.9072ZM1.69183 12.2777V9.31338H0.950749V12.2777H1.69183ZM5.50576 5.12891L8.47009 8.09323L8.99411 7.56921L6.02979 4.60488L5.50576 5.12891ZM1.32129 0.790951H13.1786V0.0498697H1.32129V0.790951ZM12.808 0.42041V12.2777H13.5491V0.42041H12.808ZM13.1786 11.9072H7.24994V12.6482H13.1786V11.9072ZM1.69183 6.34906V0.42041H0.950749V6.34906H1.69183Z" fill="white" />
                        </svg>
                    </div>
                </div>
            </div>
            <div className="relative mt-3 z-0">
                <img src={profilePic} alt="Artist Profile Pic" className="w-28 h-auto rounded-full border-4 border-white"></img>
                <img src={certifiedIcon} alt="Certified" className="absolute top-0 right-0"></img>
            </div>
            <div className="flex items-center mt-2 z-0">
                <p className="mr-2 text-white ">CCisDreaming</p>
                <span className="text-xs text-starseedBlue bg-white pb-0.25 pt-0.5 px-1.5 flex items-center justify-center rounded ">$CC</span>
            </div>
<<<<<<< Updated upstream
            <div className="flex items-center text-xxs font-light mt-4 z-0">
                <a className="h-7 flex items-center py-1.5 px-3 bg-white rounded-full" href="/" title="YouTube">
=======
            <div className="flex items-center text-xs font-light mt-4 z-0">
                <a className="h-7 flex items-center py-1.5 px-3 bg-white rounded-full hover:cursor-pointer hover:scale-110 transition-transform duration-300 ease-out"  title="YouTube">
>>>>>>> Stashed changes
                    <svg className="mr-2" width="23" height="16" viewBox="0 0 23 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M21.5811 2.55069C21.337 1.61233 20.6147 0.87207 19.6957 0.618365C18.0341 0.163086 11.3674 0.163086 11.3674 0.163086C11.3674 0.163086 4.70408 0.163086 3.03909 0.618365C2.12352 0.868595 1.40124 1.60886 1.15369 2.55069C0.709473 4.25365 0.709473 7.809 0.709473 7.809C0.709473 7.809 0.709473 11.3643 1.15369 13.0673C1.39785 14.0057 2.12013 14.7459 3.03909 14.9996C4.70408 15.4549 11.3674 15.4549 11.3674 15.4549C11.3674 15.4549 18.0341 15.4549 19.6957 14.9996C20.6113 14.7494 21.3336 14.0091 21.5811 13.0673C22.0253 11.3643 22.0253 7.809 22.0253 7.809C22.0253 7.809 22.0253 4.25365 21.5811 2.55069Z" fill="#5F8FFF" />
                        <path d="M9.23785 11.0863L14.7754 7.809L9.23785 4.53168V11.0863Z" fill="white" />
                    </svg>

                    YouTube
                </a>
                <a className="h-7 flex items-center ml-3 py-1.5 px-3 bg-white rounded-full hover:cursor-pointer hover:scale-110 transition-transform duration-300 ease-out" href="/" title="Spotify">
                    <svg className="mr-2" width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M8.89812 0.699707C4.31058 0.699707 0.557129 4.45315 0.557129 9.0407C0.557129 13.6282 4.31058 17.3817 8.89812 17.3817C13.4857 17.3817 17.2391 13.6282 17.2391 9.0407C17.2391 4.45315 13.5274 0.699707 8.89812 0.699707ZM12.735 12.7524C12.5682 13.0027 12.2762 13.0861 12.026 12.9193C10.0659 11.7098 7.60527 11.4596 4.68592 12.1269C4.39399 12.2103 4.14376 12.0018 4.06035 11.7515C3.97694 11.4596 4.18546 11.2094 4.43569 11.1259C7.60527 10.417 10.3578 10.7089 12.5265 12.0435C12.8184 12.1686 12.8601 12.5022 12.735 12.7524ZM13.7359 10.4587C13.5274 10.7506 13.152 10.8757 12.8601 10.6672C10.608 9.29093 7.18822 8.87388 4.5608 9.70798C4.22717 9.79139 3.85182 9.62457 3.76841 9.29093C3.685 8.95729 3.85182 8.58194 4.18546 8.49853C7.22992 7.58103 10.9834 8.03978 13.5691 9.62457C13.8193 9.74968 13.9444 10.1667 13.7359 10.4587ZM13.8193 8.12319C11.1502 6.5384 6.68776 6.37158 4.14376 7.16398C3.72671 7.28909 3.30966 7.03886 3.18454 6.66352C3.05943 6.24647 3.30966 5.82942 3.685 5.7043C6.64605 4.8285 11.5255 4.99532 14.6117 6.83034C14.987 7.03886 15.1122 7.53932 14.9036 7.91466C14.6951 8.2066 14.1947 8.33171 13.8193 8.12319Z" fill="#5F8FFF" />
                    </svg>

                    Spotify
                </a>
                <a className="h-7 flex items-center ml-3 py-1.5 px-3 bg-white rounded-full hover:cursor-pointer hover:scale-110 transition-transform duration-300 ease-out" href="/" title="SoundCloud">
                    <svg className="mr-2" width="30" height="13" viewBox="0 0 30 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0.930907 7.64716C0.87022 7.64716 0.821824 7.6934 0.814142 7.76011L0.600586 9.36034L0.814142 10.9325C0.81491 10.9985 0.87022 11.0447 0.930907 11.0447C0.990057 11.0447 1.03769 10.9992 1.04767 10.9325L1.30041 9.35958L1.04767 7.75935C1.03845 7.6934 0.990057 7.64716 0.930907 7.64716ZM2.13159 6.77314C2.1216 6.70416 2.07167 6.65716 2.01021 6.65716C1.94876 6.65716 1.89729 6.70643 1.88884 6.77314C1.88884 6.77322 1.60154 9.36034 1.60154 9.36034L1.88884 11.8899C1.89729 11.9581 1.94799 12.0067 2.01021 12.0067C2.07167 12.0067 2.1216 11.9589 2.13159 11.8907L2.45807 9.36034L2.13159 6.77314ZM6.65314 4.38682C6.53561 4.38682 6.43805 4.48158 6.43267 4.60286L6.20375 9.36261L6.43267 12.4388C6.43882 12.5593 6.53561 12.654 6.65314 12.654C6.76991 12.654 6.86747 12.5593 6.87438 12.4388V12.4388L7.13249 9.36269L6.87438 4.60294C6.86747 4.48241 6.77068 4.3869 6.65314 4.3869V4.38682ZM4.31247 6.04095C4.22183 6.04095 4.14808 6.1122 4.14117 6.20696L3.88382 9.36042L4.14117 12.4077C4.14808 12.5025 4.22183 12.5738 4.31247 12.5738C4.40158 12.5738 4.4761 12.5025 4.48378 12.4077L4.77646 9.36042L4.48378 6.2062C4.48301 6.11144 4.40235 6.04019 4.31247 6.04019V6.04095ZM9.03146 12.6518C9.17741 12.6518 9.29648 12.5359 9.30186 12.3873L9.52617 9.36345L9.30263 3.02697C9.29648 2.87839 9.17818 2.76241 9.03222 2.76241C8.88473 2.76241 8.76566 2.87915 8.76105 3.02773L8.56209 9.36345L8.76105 12.3888C8.76566 12.5366 8.88473 12.6526 9.03146 12.6526V12.6518ZM13.9002 12.6662C14.1015 12.6662 14.2667 12.5033 14.2705 12.3024V12.3047V12.3024L14.4272 9.36496L14.2705 2.04682C14.2667 1.8467 14.1007 1.68296 13.9002 1.68296C13.699 1.68296 13.533 1.84594 13.53 2.04758L13.3902 9.36345C13.3902 9.368 13.53 12.3054 13.53 12.3054C13.533 12.504 13.6997 12.6678 13.9002 12.6678V12.6662ZM11.4474 12.6564C11.6226 12.6564 11.7631 12.5177 11.7677 12.341V12.3433L11.9583 9.36496L11.7677 2.98224C11.7631 2.80562 11.6218 2.66766 11.4474 2.66766C11.2715 2.66766 11.1301 2.80562 11.1263 2.98224L10.9573 9.36496L11.1271 12.3426C11.1309 12.5169 11.2715 12.6556 11.4482 12.6556L11.4474 12.6564ZM5.47935 12.6276C5.58306 12.6276 5.66756 12.5457 5.67524 12.4373L5.95102 9.36117L5.67524 6.43437C5.67447 6.32597 5.58383 6.24486 5.47935 6.24486C5.37411 6.24486 5.28961 6.32673 5.28346 6.43589L5.04072 9.36117L5.28346 12.4373C5.29038 12.5457 5.37411 12.6276 5.47935 12.6276ZM3.15942 12.4593C3.23547 12.4593 3.29693 12.4002 3.30538 12.3183L3.61496 9.36042L3.30538 6.2911C3.29616 6.20923 3.2347 6.1501 3.15865 6.1501C3.08184 6.1501 3.02038 6.20923 3.0127 6.2911L2.73999 9.36042L3.0127 12.3175C3.01347 12.3994 3.08184 12.4593 3.15865 12.4593H3.15942ZM12.6711 2.87536C12.4814 2.87536 12.3293 3.0247 12.3254 3.21496L12.171 9.36421L12.3254 12.3236C12.3293 12.5116 12.4814 12.6609 12.6711 12.6609C12.8609 12.6609 13.0122 12.5124 13.0168 12.3213V12.3236L13.1904 9.36421L13.0168 3.21345C13.0122 3.02318 12.8609 2.8746 12.6711 2.8746V2.87536ZM7.84 12.6579C7.97136 12.6579 8.07967 12.5525 8.08582 12.4176L8.32703 9.36269L8.08582 3.51439C8.0789 3.37946 7.97136 3.27409 7.84 3.27409C7.70787 3.27409 7.59955 3.37946 7.59418 3.51439L7.38062 9.36269L7.59418 12.4176C7.59955 12.551 7.70787 12.6564 7.84 12.6564V12.6579ZM10.5325 12.3683V12.3668L10.7399 9.36193L10.5325 2.81169C10.5279 2.64871 10.3973 2.52136 10.2367 2.52136C10.0754 2.52136 9.9456 2.64871 9.94099 2.81169L9.75739 9.36117L9.94176 12.3676C9.94637 12.529 10.0762 12.6556 10.2375 12.6556C10.3981 12.6556 10.5279 12.5283 10.5333 12.3661L10.5325 12.3683ZM26.2035 5.58612C25.7119 5.58612 25.2425 5.68467 24.8147 5.86129C24.5289 2.66766 21.8157 0.163086 18.5055 0.163086C17.6959 0.163086 16.9062 0.320758 16.2086 0.586831C15.9375 0.689925 15.8653 0.79681 15.863 1.00376V12.2493C15.866 12.4661 16.0366 12.6465 16.2509 12.6685C16.2601 12.6686 26.1398 12.6746 26.2035 12.6746C28.1862 12.6746 29.7941 11.088 29.7941 9.13149C29.7941 7.17422 28.187 5.58764 26.2035 5.58764V5.58612ZM15.1286 0.9939C14.9127 0.9939 14.736 1.16825 14.733 1.38353L14.5709 9.36496L14.733 12.2614C14.736 12.4729 14.9127 12.6473 15.1286 12.6473C15.3437 12.6473 15.5203 12.4729 15.5242 12.2584V12.2622L15.7001 9.36496L15.5242 1.38278C15.5211 1.16901 15.3437 0.9939 15.1286 0.9939Z" fill="#5F8FFF" />
                    </svg>

                    SoundCloud
                </a>
            </div>
        </div>
    )
}

export default ArtistProfile