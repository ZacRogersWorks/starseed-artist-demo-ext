import React from 'react'


const TopBanner = () => {
    return (
        <div className="sticky top-0 w-full z-20">
            <div className={"h-16 bg-white flex justify-between items-center py-4 px-5"}>
                <div className={"flex items-center transition ease-out duration-400"}>
                    <svg className={"mr-2"} width="20" height="auto" viewBox="0 0 53 53" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M52.1147 26.0971C52.1147 26.0836 52.1147 26.0706 52.1147 26.0571C52.1147 22.54 51.4257 19.1273 50.0664 15.914C48.7539 12.8107 46.8754 10.0242 44.4825 7.63172C42.09 5.23925 39.3034 3.36026 36.2002 2.04772C32.9874 0.688978 29.5747 0 26.0576 0C22.5405 0 19.1278 0.688978 15.9145 2.04824C12.8113 3.36078 10.0247 5.23925 7.63224 7.63224C5.23977 10.0247 3.36078 12.8113 2.04824 15.9145C0.688978 19.1278 0 22.5405 0 26.0576C0 26.0706 0 26.0841 0 26.0971C0 26.1023 0 26.1074 0 26.1121C0 26.1235 0 26.1344 0.0005192 26.1459C0.0119416 29.6318 0.700401 33.0138 2.04824 36.2007C3.36078 39.3039 5.23925 42.0905 7.63224 44.483C10.0247 46.8754 12.8113 48.7544 15.9145 50.067C19.1278 51.4262 22.5405 52.1152 26.0576 52.1152C29.5747 52.1152 32.9874 51.4262 36.2007 50.067C39.3039 48.7544 42.0905 46.876 44.483 44.483C46.8754 42.0905 48.7544 39.3039 50.067 36.2007C51.4148 33.0138 52.1033 29.6313 52.1147 26.1453C52.1147 26.1344 52.1152 26.123 52.1152 26.1121C52.1152 26.1069 52.1147 26.1023 52.1147 26.0971ZM42.5474 9.5673C44.6896 11.7095 46.3713 14.2038 47.5457 16.9804C48.0561 18.1871 48.46 19.4248 48.7581 20.6886C47.498 19.7758 45.903 18.9518 43.9991 18.2322C40.4062 16.874 35.9447 15.9711 31.1042 15.6004V18.3464C32.5891 18.4659 34.0419 18.6377 35.4515 18.8631C38.3003 19.3184 40.8501 19.9674 43.0313 20.7919C46.9959 22.2908 49.3666 24.2736 49.3775 26.0986C49.3775 26.1106 49.3775 26.123 49.3775 26.135C49.3572 27.9568 46.9881 29.935 43.0313 31.4308C40.8501 32.2553 38.3003 32.9043 35.4515 33.3596C32.8986 33.7677 30.2065 34.0029 27.4319 34.0611C27.4719 32.3057 28.1744 30.6613 29.4205 29.4153C30.7039 28.1318 32.4105 27.4247 34.2257 27.4247V24.6874C34.2257 24.6874 34.2205 24.6874 34.2179 24.6874C32.4027 24.6874 30.6961 23.9803 29.4127 22.6968C28.1292 21.4134 27.4221 19.7068 27.4221 17.8916V2.77668C30.0887 2.92933 32.6774 3.53004 35.1343 4.56948C37.9109 5.74391 40.4052 7.42508 42.5474 9.5673ZM26.0534 22.8178C26.4506 23.4756 26.9267 24.0831 27.4771 24.634C28.0285 25.1853 28.6375 25.6625 29.2969 26.0597C28.6406 26.4563 28.0342 26.9314 27.4849 27.4807C26.9345 28.0311 26.4584 28.6391 26.0612 29.2969C25.6641 28.6391 25.1879 28.0316 24.6376 27.4807C24.0862 26.9293 23.4772 26.4522 22.8178 26.055C23.4741 25.6583 24.0805 25.1833 24.6298 24.634C25.1802 24.0836 25.6563 23.4756 26.0534 22.8178ZM9.5673 9.5673C11.7095 7.42508 14.2038 5.74339 16.9804 4.56896C19.4352 3.53056 22.0208 2.92984 24.6848 2.77668V15.4239C18.442 15.55 12.602 16.536 8.11561 18.2322C6.21171 18.9518 4.61673 19.7758 3.35663 20.6886C3.65465 19.4248 4.05859 18.1871 4.56896 16.9804C5.74339 14.2038 7.42508 11.7095 9.5673 9.5673ZM9.5673 42.5474C7.42508 40.4052 5.74339 37.9109 4.56896 35.1343C4.07624 33.9697 3.68217 32.7761 3.38778 31.558C4.6432 32.4619 6.22728 33.2781 8.11561 33.992C11.7137 35.3523 16.1824 36.2557 21.0312 36.6254V33.8794C19.5391 33.7599 18.0796 33.5876 16.6632 33.3607C13.8144 32.9053 11.2646 32.2563 9.0834 31.4318C5.1271 29.936 2.75799 27.9584 2.73722 26.1365C2.73722 26.1241 2.73722 26.1116 2.73722 26.0991C2.74864 24.2742 5.11879 22.2913 9.0834 20.7924C11.2646 19.9679 13.8144 19.3189 16.6632 18.8636C19.2151 18.4555 21.9056 18.2208 24.6791 18.1621C24.6127 19.8765 23.9143 21.4783 22.6942 22.6984C21.4108 23.9818 19.7042 24.689 17.889 24.689V27.4262C17.8916 27.4262 17.8942 27.4262 17.8968 27.4262C19.7119 27.4262 21.4186 28.1334 22.702 29.4168C23.9855 30.7003 24.6926 32.4069 24.6926 34.222V49.3385C22.026 49.1859 19.4373 48.5852 16.9804 47.5457C14.2038 46.3713 11.7095 44.6896 9.5673 42.5474ZM42.5474 42.5474C40.4052 44.6896 37.9109 46.3713 35.1343 47.5457C32.6795 48.5841 30.0939 49.1848 27.4298 49.338V36.8004C33.6727 36.6742 39.5127 35.6882 43.9991 33.992C45.8874 33.2781 47.4715 32.4619 48.7269 31.558C48.432 32.7755 48.0379 33.9697 47.5457 35.1343C46.3713 37.9109 44.6896 40.4052 42.5474 42.5474Z" fill="#5F8FFF" />
                    </svg>

                    <svg width="120" height="auto" viewBox="0 0 287 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M18.6739 27.1467C6.26757 27.1467 1.39592 24.3861 0.388672 18.2154H7.76131C8.11852 20.9438 11.8209 21.853 19.2585 21.853C27.183 21.853 28.9369 20.8135 28.9369 19.1251C28.9369 16.7544 23.6104 16.5919 17.6022 16.2996C9.80748 15.8775 0.844011 15.1631 0.844011 8.95966C0.844011 3.5361 6.13777 0.970215 17.6022 0.970215C30.2037 0.970215 34.4908 5.06255 35.1076 9.54428L27.67 9.57699C27.3777 7.75823 24.2599 6.2645 17.3421 6.2645C9.06035 6.2645 7.7286 6.94672 7.7286 8.63516C7.7286 10.7462 13.7046 10.7462 20.1349 11.1683C30.1378 11.8179 35.984 12.7924 35.984 18.8655C35.984 24.3218 30.5926 27.1472 18.6733 27.1472L18.6739 27.1467Z" fill="#5F8FFF" />
                        <path d="M57.6777 6.84836V26.7571H50.8248V6.84836H36.8594V1.39209H71.6105V6.84836H57.6777Z" fill="#5F8FFF" />
                        <path d="M72.943 26.7571H65.7656L82.7518 1.39209H90.3513L106.785 26.7571H99.3153L96.035 21.5604H76.321L72.943 26.7571ZM87.7527 8.4719L86.3239 6.00362L84.8301 8.4719L79.7311 16.2988H92.6898C92.7225 16.2988 87.7532 8.4719 87.7532 8.4719H87.7527Z" fill="#5F8FFF" />
                        <path d="M140.619 13.0191C139.742 14.2859 137.988 15.7474 135.617 16.0719L144.874 26.7571H137.306L128.699 16.8191H115.676V26.7571H109.018V1.39209H131.037C135.487 1.39209 138.54 2.52862 140.131 4.18538C141.171 5.28972 141.755 6.68637 141.755 8.66712C141.755 10.3883 141.398 11.9147 140.619 13.0191ZM134.708 7.75748C134.025 7.04306 133.148 6.68585 131.005 6.68585H115.676V11.5575H131.395C133.473 11.5575 134.318 11.2325 134.772 10.6157C135.162 10.0638 135.259 9.57624 135.259 9.15413C135.259 8.63441 135.13 8.17959 134.708 7.75748Z" fill="#5F8FFF" />
                        <path d="M162.652 27.1467C150.246 27.1467 145.374 24.3861 144.367 18.2154H151.74C152.097 20.9438 155.799 21.853 163.237 21.853C171.162 21.853 172.915 20.8135 172.915 19.1251C172.915 16.7544 167.589 16.5919 161.581 16.2996C153.786 15.8775 144.823 15.1631 144.823 8.95966C144.823 3.5361 150.116 0.970215 161.581 0.970215C174.182 0.970215 178.469 5.06255 179.086 9.54428L171.649 9.57699C171.356 7.75823 168.238 6.2645 161.321 6.2645C153.039 6.2645 151.707 6.94672 151.707 8.63516C151.707 10.7462 157.683 10.7462 164.113 11.1683C174.116 11.8179 179.962 12.7924 179.962 18.8655C179.962 24.3218 174.571 27.1472 162.652 27.1472L162.652 27.1467Z" fill="#5F8FFF" />
                        <path d="M183.049 26.7571V1.39209H213.285V6.84836H189.674V11.3628H212.734V16.6566H189.674V21.3008H213.578V26.7571H183.049Z" fill="#5F8FFF" />
                        <path d="M217.766 26.7571V1.39209H248.002V6.84836H224.391V11.3628H247.45V16.6566H224.391V21.3008H248.295V26.7571H217.766Z" fill="#5F8FFF" />
                        <path d="M271.515 26.7571H251.834V1.39209H271.483C279.018 1.39209 283.273 3.73056 285.156 7.59549C286 9.34935 286.39 11.4277 286.39 13.734C286.39 16.0403 286 18.346 285.189 20.197C283.305 24.2893 278.986 26.7576 271.516 26.7576L271.515 26.7571ZM279.57 13.9936C279.537 12.4671 279.31 11.2003 278.823 10.1614C277.621 7.758 274.958 6.58876 270.476 6.58876H258.492V21.5287H270.184C274.925 21.5287 277.588 20.3595 278.79 18.0537C279.342 16.9494 279.57 15.6176 279.57 13.9941V13.9936Z" fill="#5F8FFF" />
                    </svg>

                </div>
                <a title="My Profile" className={"transition duration-400 ease-out hover:scale-110"}>
                    <svg width="20" height="auto" viewBox="0 0 52 52" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M19.8727 36H32.1273V32H19.8727V36ZM32.1273 36C36.4753 36 40 39.5247 40 43.8727H44C44 37.3156 38.6844 32 32.1273 32V36ZM19.8727 32C13.3156 32 8 37.3156 8 43.8727H12C12 39.5247 15.5247 36 19.8727 36V32ZM32 18C32 21.3137 29.3137 24 26 24V28C31.5228 28 36 23.5228 36 18H32ZM26 24C22.6863 24 20 21.3137 20 18H16C16 23.5228 20.4772 28 26 28V24ZM20 18C20 14.6863 22.6863 12 26 12V8C20.4772 8 16 12.4772 16 18H20ZM26 12C29.3137 12 32 14.6863 32 18H36C36 12.4772 31.5228 8 26 8V12ZM48 26C48 38.1503 38.1503 48 26 48V52C40.3594 52 52 40.3594 52 26H48ZM26 48C13.8497 48 4 38.1503 4 26H0C0 40.3594 11.6406 52 26 52V48ZM4 26C4 13.8497 13.8497 4 26 4V0C11.6406 0 0 11.6406 0 26H4ZM26 4C38.1503 4 48 13.8497 48 26H52C52 11.6406 40.3594 0 26 0V4Z" fill="#5F8FFF" />
                    </svg>
                </a>

            </div>
            <div className="border-t border-b border-starseedGrayText px-5 py-2 flex group cursor-pointer justify-between items-center bg-starseedGray">
                <div className="flex items-center">
                    <svg className="mr-3" width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M6.47967 5.87069V2.25449C6.47967 1.85506 6.80348 1.53125 7.20291 1.53125H13.7121C14.1115 1.53125 14.4353 1.85506 14.4353 2.25449V7.31717C14.4353 7.7166 14.1115 8.04041 13.7121 8.04041H1.41699M14.4353 3.70097H6.47967M2.14023 13.8263H10.8191C11.2185 13.8263 11.5424 13.5025 11.5424 13.1031V6.59393C11.5424 6.1945 11.2185 5.87069 10.8191 5.87069H2.14023C1.7408 5.87069 1.41699 6.1945 1.41699 6.59393V13.1031C1.41699 13.5025 1.7408 13.8263 2.14023 13.8263Z" stroke="#9696F7" strokeWidth="1.08486" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    <a className="text-sm" href="/" title="Artist Dashboard">
                        <span className="artist-dashboard-link group-hover:artist-dash-link-underline">
                            View Artist Dashboard
                        </span>
                    </a>
                </div>
                <svg className="-translate-x-2" width="6" height="10" viewBox="0 0 6 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0.954102 9.40648L5.15356 5.20703L0.954104 1.00757" stroke="#B796F0" strokeWidth="1.04986" strokeLinecap="round" strokeLinejoin="round" />
                </svg>

            </div>
        </div>
    )
}

export default TopBanner