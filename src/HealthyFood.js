import data from './data.json';
import CardComp from './card';
import './main.css';
import  { useState } from 'react';


function HealthyFood(){
    let [selectCategory, setSelectCategory] = useState('All');

    function chageCategory(event){
        setSelectCategory(event.target.value);
    }

    let filteredFood = data;
    if (selectCategory !== 'All') {
        filteredFood = data.filter(function (item) {
            return item.category === selectCategory;
        });
    }

    return(

        <>
           <select id="select-category" onChange={chageCategory} value={selectCategory}>
                <option value="All">All</option>
                <option value="Main Course">Main Course</option>
                <option value="Desserts">Dessert</option>
                <option value="Salads">Salads</option>
                <option value="Appetizers">Appetizers</option>
            </select>
        
            <div id="contantmain">
                {filteredFood.map(function (item) {
                    return (
<CardComp image_url={item.image_url} title={item.title} description={item.description} />
                    )
                }) // for function
                }
                            </div>

   </>
    )
}


export default HealthyFood;
