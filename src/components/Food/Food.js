import React, { useEffect, useState } from 'react';
import Details from '../Details/Details';
import Product from '../Product/Product';
import './Food.css'

const Food = () => {
    const [foods, setFoods] = useState([])
    const [showDisplay, setShowDisplay] = useState([])
    const [counts, setCounts] = useState([])

    useEffect(()=>{
        fetch('https://www.themealdb.com/api/json/v1/1/search.php?f=c')
        .then(res => res.json())
        .then(data => setFoods(data.meals))
    },[])

    const detailsButton = food =>{
       const myCount = [...counts,food]
       setCounts(myCount)
    }

    const change = event =>{
        const search = event.target.value;
        const foodSearch = foods.filter(food => food.strMeal.includes(search))
        setShowDisplay(foodSearch)
    }

    return (
        <div>
            <div className='input-area'>
                <input type="text" onChange={change} placeholder='Search Food' />
            </div>
            <div className='food'>
           <div className='food-details'>
               <h1>Food Details</h1>
               {
                   counts.map(count => <Details count={count}></Details>)
               }
           </div>
           <div className='food-area'>
                {
                    foods.map(food => <Product detailsButton={detailsButton} food={food}></Product>)
                }
           </div>
        </div>
        </div>
    );
};

export default Food;