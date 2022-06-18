import React from 'react';
import '../assets/tailwind.css'
import { createRoot } from 'react-dom/client'

function Popup() {
    return (
        <div className='m-4'>
            <h1 className='text-black text-xl font-bold'>Hello, world!</h1>
            <p className='italic'>Popup initialized</p>
        </div>
    )
}

createRoot(document.getElementById('react-target')).render(<Popup />)
