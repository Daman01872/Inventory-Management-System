import React from 'react';
import Navbar from '../Navbar';
import './About.css';
import foodybg from '../Images/foodybg.jpg';
import appstore from '../Images/appstore.png';
import playstore from '../Images/playstore.png';
import logo from '../Images/logo.jpg';
import team1 from '../Images/team1.jpg';
import team2 from '../Images/team2.jpg';
import team3 from '../Images/team3.jpg';
import team4 from '../Images/team4.jpg';
import groupteam from '../Images/groupteam.jpg';

const About=() =>{
    return (
      <>
      <div>
        <Navbar/>
        <div class="about">
            <div class="row1">
                <img src={foodybg} alt="foody"/>
                <div class="subdiv">
                    <h1>About us</h1>
                    <p>"You don't have to cook fancy or complicated masterpieces- just good food from fresh ingredients. Good Food is the foundation of genuine happiness."</p>
                </div>
            </div>

            <div class="team">
                <h1>Our Team</h1>
                <img src={team1} alt="team"/>
                <img src={team2} alt="team"/>
                <img src={team3} alt="team"/>
                <img src={team4} alt="team"/>
                <br/><br/>
                <div class="p1">
                <p>Whatever you do, do with determination. You have one life to live; do your work with passion and give your best. Whether you want to be a chef, doctor, actor, or a mother, be passionate to get the best result. Cooking is not difficult. Everyone has taste, even if they don't realize it. Even if you're not a great chef, there's nothing to stop you understanding the difference between what tastes good and what doesn't.</p>
                <img src={groupteam} alt="team"/>
                </div>
            </div>
        </div>
      </div>

{/* -------------------------- Footer ---------------------------- */}

      <section class="footer">
        <div class="container">
            <div class="row">
                <div class="footer-col-1">
                    <h3>Download Our App</h3>
                    <p>Download App for Android and ios mobile phone.</p>
                    <div class="app-logo">
                        <img src={playstore} alt="playstore"/>
                        <img src={appstore} alt="appstore"/>
                    </div>
                </div>
                <div class="footer-col-2">
                    <img src={logo}/>
                    <p>Our Purpose Is To Sustainably Make the Pleasure and Benefits of Food Inventory Accessible to the Many.
                    </p>
                </div>
                <div class="footer-col-3">
                    <h3>Useful Links</h3>
                    <ul>
                        <li>Coupons</li>
                        <li>Blog Post</li>
                        <li>Return policy</li>
                        <li>Join Affiliate</li>
                    </ul>
                </div>
                <div class="footer-col-4">
                    <h3>Follow Us</h3>
                    <ul>
                        <li>Facebook</li>
                        <li>Twitter</li>
                        <li>Instagram</li>
                        <li>YouTube</li>
                    </ul>
                </div>
            </div>
            <hr/>
            <p class="copyright">Copyright &copy; 2022 - Daas Inventory</p>
        </div>

    </section>

    

    
      </>
    );
  }


export default About;