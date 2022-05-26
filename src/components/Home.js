import React from 'react';
import Main from './Main';
import './Style.css';


const Home = () => {
    return(
        <>
            <div class="navbar">
                    <Main/>
                    
                </div>
                <div className='content'>
                <h1 className='h1'> Inventory <br></br><span>Management</span><br></br>System</h1>
                <p className='par'>An inventory management system is a tool that allows you to track goods across your business's supply chain. Inventory Management is the tracking of inventory from manufacturers to warehouses and from these facilities to point of sale.</p>
                <button className='cn'> <a href="#">Join us</a></button>
            </div>
    </>
    );
};

export default Home;
