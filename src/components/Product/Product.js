import React from 'react';
import './Product.css'

const Product = (props) => {
    const {strMealThumb , strMeal, strCategory, strArea} = props.food
    return (
        <div className='meal'>
            <img src={strMealThumb} alt="" />
            <div className='foodDetails'>
                <h2>Name: {strMeal}</h2>
                <h3>Catagroy: {strCategory}</h3>
                <h3>Area: {strArea}</h3>
                <button onClick={() => props.detailsButton(props.food)}>Details</button>
            </div>
        </div>
    );
};

export default Product;