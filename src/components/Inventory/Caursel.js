import React from 'react';
import vadapav from './Images2/vadapav.jpg';
import samosapav from './Images2/samosapav.png';
import misalPav from './Images2/misalPav.jpg';
import pavbhaji from './Images2/pavbhaji.jpg';
import vegfriedrice from './Images2/vegfriedrice.jpg';
import vegnoodles from './Images2/vegnoodles.jpg';
import './Cards.css';



const Caursel = () => {

    return(
        <div>
            <div id="carouselExampleCaptions" class="carousel slide caursel-size" data-bs-ride="false">
                <div class="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="3" aria-label="Slide 4"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="4" aria-label="Slide 5"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="5" aria-label="Slide 6"></button>
                </div>
                <div class="carousel-inner">
                    <div class="carousel-item active">
                    <img src={vadapav} class="d-block img_size" alt="..."></img>
                    <div class="carousel-caption d-none d-md-block">
                        <h5 className='caursel_text'>Vada Pav</h5>
                        {/* <p className='caursel_text'>Vada pav, alternatively spelt wada pao, is a vegetarian fast food.</p> */}
                        <button type="button" class="btn btn-outline-danger">View</button>
                    </div>
                    </div>
                    <div class="carousel-item">
                    <img src={samosapav} class="d-block img_size" alt="..."></img>
                    <div class="carousel-caption d-none d-md-block">
                        <h5 className='caursel_text'>Samosa Pav</h5>
                        {/* <p className='caursel_text'>A samosa is a fried or baked pastry with a savory filling, including ingredients such as spiced potatoes, onions, peas. It may take different forms</p> */}
                        <button type="button" class="btn btn-outline-danger">View</button>
                    </div>
                    </div>
                    <div class="carousel-item">
                    <img src={misalPav} class="d-block img_size" alt="..."></img>
                    <div class="carousel-caption d-none d-md-block">
                        <h5 className='caursel_text'>Misal Pav</h5>
                        {/* <p className='caursel_text'>Misal pav is a popular dish from Maharashtra. It consists of misal and pav. The final dish is topped with farsan or sev, onions, lemon and coriander.</p> */}
                        <button type="button" class="btn btn-outline-danger">View</button>
                    </div>
                    </div>
                    <div class="carousel-item">
                    <img src={pavbhaji} class="d-block img_size" alt="..."></img>
                    <div class="carousel-caption d-none d-md-block">
                        <h5 className='caursel_text'>Pav Bhaji</h5>
                        {/* <p className='caursel_text'>Pav bhaji is a fast food dish from India consisting of a thick vegetable curry served with a soft bread roll. Its origins are in the state of Maharashtra</p> */}
                        <button type="button" class="btn btn-outline-danger">View</button>
                    </div>
                    </div>
                    <div class="carousel-item">
                    <img src={vegfriedrice} class="d-block img_size" alt="..."></img>
                    <div class="carousel-caption d-none d-md-block">
                        <h5 className='caursel_text'>Veg Fried-Rice</h5>
                        {/* <p className='caursel_text'>Fried rice is a dish of cooked rice that has been stir-fried in a wok or a frying pan and is usually mixed with other ingredients such as eggs, vegetables, seafood, or meat.</p> */}
                        <button type="button" class="btn btn-outline-danger">View</button>
                    </div>
                    </div>
                    <div class="carousel-item">
                    <img src={vegnoodles} class="d-block img_size" alt="..."></img>
                    <div class="carousel-caption d-none d-md-block">
                        <h5 className='caursel_text'>Veg Noodles</h5>
                        {/* <p className='caursel_text'>Noodles are a type of food made from unleavened dough which is rolled flat and cut, stretched or extruded, into long strips or strings.</p> */}
                        <button type="button" class="btn btn-outline-danger">View</button>
                    </div>
                    </div>
                </div>
                <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Next</span>
                </button>
            </div>
        </div>
    );
};

export default Caursel;