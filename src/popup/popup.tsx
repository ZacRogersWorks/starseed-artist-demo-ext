import React from 'react';
import '../assets/tailwind.css'
import { createRoot } from 'react-dom/client'
import TopBanner from '../components/TopBanner';
import ArtistProfile from '../components/ArtistProfile';
import TotalEarned from '../components/TotalEarned';
import Carousel from '../components/Carousel/Carousel';
import Cards from '../components/Cards';
import TopEarning from '../components/TopEarning';
import LinkedAccounts from '../components/LinkedAccounts';
import FooterButtons from '../components/FooterButtons';


function Popup() {
    return (
        <div className='w-[400px] relative font-abc'>
            <TopBanner />
            <ArtistProfile />
            <div className='px-4'>
                <TotalEarned />
            </div>
            <Carousel />
            <div className='px-4 w-full relative mb-8'>
                <Cards />
                <TopEarning videoUrl="https://www.youtube.com/watch?v=fFI-wk4PeAc" coinName="CC" totalMined={104671.06} lastWeekMined={103281.06} />
                <LinkedAccounts />
            </div>
            <div className='pb-10 w-inherit'>
                <FooterButtons />
            </div>
        </div>
    )
}

createRoot(document.getElementById('react-target')).render(<Popup />)
