import React from 'react';
import '../assets/tailwind.css'
import { createRoot } from 'react-dom/client'


function Popup() {

    const title = 'this is the teime of a lifetime'

    return (
        <div className='m-4'>
            <h1 className='text-black text-xl font-bold'>Hello, world!</h1>
            <p className='italic'>{title}</p>
        </div>
    )
}

createRoot(document.getElementById('react-target')).render(<Popup />)
