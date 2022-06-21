import React from 'react';
import '../assets/tailwind.css'
import { createRoot } from 'react-dom/client'
import ArtistBanner from '../components/ArtistBanner';

import TopBanner from '../components/TopBanner';

function Popup() {
    return (
        <div className='m-4 w-96 font-abc'>
            <TopBanner />
            <ArtistBanner />
        </div>
    )
}

createRoot(document.getElementById('react-target')).render(<Popup />)
