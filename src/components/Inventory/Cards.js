import React from 'react';
import './Cards.css';



const CardData = [
    {
        id:1,
        title:'VadaPav',
        img:'https://www.archanaskitchen.com/images/archanaskitchen/0-Archanas-Kitchen-Recipes/2019/Cheesy_Vada_Pav_Recipe_Britannia_Cheesy_Kitchen_Recipe_Video_20.jpg',
        price:'Price-15Rs/'
    },
    {
        id:2,
        title:'SamosaPav',
        img:'https://5.imimg.com/data5/YP/IS/GLADMIN-52025585/samosa-pav-500x500.png',
        price:'Price-18Rs/'
    },
    {
        id:3,
        title:'MisalPav',
        img:'https://pipingpotcurry.com/wp-content/uploads/2019/04/Misal-Pav-Instant-Pot-1.jpg',
        price:'Price-25Rs/'
    },
    {
        id:4,
        title:'PavBhaji',
        img:'https://thumbs.dreamstime.com/b/pav-bhaji-indian-traditional-popular-street-fast-food-pav-bhaji-indian-traditional-popular-street-fast-food-thick-195538053.jpg',
        price:'Price-45Rs/'
    },
    {
        id:5,
        title:'Veg Fried-Rice',
        img:'https://www.whiskaffair.com/wp-content/uploads/2018/11/Vegetable-Fried-Rice-2-3.jpg',
        price:'Price-60Rs/'
    },
    {
        id:6,
        title:'Veg Noodeles',
        img:'https://thumbs.dreamstime.com/b/chilli-garlic-hakka-noodles-black-bowl-dark-slate-table-top-indo-chinese-vegetarian-cuisine-dish-tabpe-indian-veg-187539737.jpg',
        price:'Price-60Rs/'
    }
]



const Cards = () => {
    return (
        <div>
            <div className='card test1' >
                { CardData.map(card => (
                    <div key={card.id} className="card-body">
                    <h5 className="card-title text_align">{card.title}</h5>
                    <img src={card.img} className='card-img'></img>
                    <p className='text_align'>{card.price}</p>
                    <button class="btn btn-outline-dark button_align" type="button">Buy</button>
                </div>
                ))}
            </div>
        </div>
    );
};



export default Cards;