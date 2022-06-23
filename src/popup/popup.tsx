import React from 'react';
import '../assets/tailwind.css'
import { createRoot } from 'react-dom/client'

import TopBanner from '../components/TopBanner';
import ArtistProfile from '../components/ArtistProfile';
import TotalEarned from '../components/TotalEarned';
import Carousel from '../components/Carousel';
import Cards from '../components/Cards';
import TopEarning from '../components/TopEarning';
import LinkedAccounts from '../components/LinkedAccounts';
import FooterButtons from '../components/FooterButtons';

function Popup() {
    return (
        <div className='m-4 w-96 font-abc'>
            <TopBanner />
            <div className="scroll-container flex flex-col items-center h-[650px] overflow-scroll">
                <ArtistProfile />
                <TotalEarned />
                <Carousel />
                <Cards />
                <TopEarning videoUrl="https://www.youtube.com/watch?v=fFI-wk4PeAc" coinName="CC" totalMined={104671.06} lastWeekMined={103281.06} />
                <LinkedAccounts />
            </div>
            <FooterButtons />
        </div>
    )
}

createRoot(document.getElementById('react-target')).render(<Popup />)
