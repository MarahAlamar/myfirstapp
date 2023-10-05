
//import data from './data.json';
import CardComp from './card';
import './main.css';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import  { useEffect, useState } from 'react';


function Main(){
 let [items ,setItems] = useState([]);
//let [noResults, setNoResults] = useState(false);
 let [meals ,setMeals] = useState([]);


//   async function getData(){
//     const url = 'https://edamam-food-and-grocery-database.p.rapidapi.com/api/food-database/v2/parser?nutrition-type=cooking&category%5B0%5D=generic-foods&health%5B0%5D=alcohol-free';
//     const options = {
//         method: 'GET',
//         headers: {
//             'X-RapidAPI-Key': '742519d97bmshd80493e0ca26ff0p19db2bjsn946902b754ad',
//             'X-RapidAPI-Host': 'edamam-food-and-grocery-database.p.rapidapi.com'
//         }
//     };
    
//     try {
//         const response = await fetch(url, options);
//         const result = await response.json();
//         console.log(result.hints)
//         setItems(result.hints);
//     } catch (error) {
//         console.error(error);
//     }
// }


async function getMealsData(){
let response= await fetch('https://www.themealdb.com/api/json/v1/1/search.php?s=');
 let result =  await response.json();
setMeals(result.meals)


}
  useEffect(function()//{getData} 
  {getMealsData()},[]);

 async function handleSubmit (event){

     event.preventDefault();
  let searchedValue = event.target.search.value.toLowerCase();

  let response= await fetch('https://www.themealdb.com/api/json/v1/1/search.php?s='+searchedValue);
  let result =  await response.json();

  if (result.meals) {

    let filteredMeals = result.meals.filter(function (item) {
    return item.strMeal.toLowerCase().includes(searchedValue.toLowerCase());
    });
    setMeals(filteredMeals);
  } else {
    setMeals([]);
  }
}

    
    return (
      
  
<>
<Form className="d-flex"  id='FormSearch' onSubmit={handleSubmit}>
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
              name='search'
            />
            <Button variant="outline-success" type='submit'>Search</Button>
          </Form>

<div id='contantmain'>
{meals && meals.length !== 0 ? meals.map(function(item){
          return(
            <>
<CardComp image_url={item.strMealThumb} title={item.strMeal} description={item.strInstructions} category={item.strCategory} />
               </>
      )
  }
  ) : <h3>No search results</h3>}

</div>
</>
    )

}


export default Main;