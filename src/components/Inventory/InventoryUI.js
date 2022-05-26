import React from 'react';
import Cards from './Cards';
import Navbar from './Navbar';

import './Cards.css';
import Caursel from './Caursel'


const InventoryUI = () =>{
    return (
        <>
            <div >
                <Navbar/>
                <div>
                    <Caursel/>
                </div>
                <hr></hr>
                <h2 className='content_text'>🍔VEG STREET FOOD 🍲</h2>
                <div className='cards'>
                    <Cards/>
                </div>
            </div>
        </>
    );
};


export default InventoryUI;