
//import data from './data.json';
import CardComp from './card';
import './main.css';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import  { useEffect, useState } from 'react';


function Main(){
    let [items ,setItems] = useState([]);
  let [noResults, setNoResults] = useState(false);

  async function getData(){
    const url = 'https://edamam-food-and-grocery-database.p.rapidapi.com/api/food-database/v2/parser?nutrition-type=cooking&category%5B0%5D=generic-foods&health%5B0%5D=alcohol-free';
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '742519d97bmshd80493e0ca26ff0p19db2bjsn946902b754ad',
            'X-RapidAPI-Host': 'edamam-food-and-grocery-database.p.rapidapi.com'
        }
    };
    
    try {
        const response = await fetch(url, options);
        const result = await response.json();
        setItems(result.hints);
    } catch (error) {
        console.error(error);
    }
}

  useEffect(function(){getData()},[])

    function handleSubmit (event){

        event.preventDefault()
        let searchedValue = event.target.search.value.toLowerCase();
      //  let filteredItems= data.filter(item => item.title.toLowerCase().includes(searchedValue));

      //  setNoResults(filteredItems.length === 0); // Check if there are no results

  //setItems(filteredItems);



    }
    return (
      //onSubmit={handleSubmit}
  
<>
<Form className="d-flex"  id='FormSearch'>
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
 {noResults ? (
          <p id='noSearch'> No search results found</p>
        ) : (
        
items.map(item => (


<CardComp image_url={item.image_url} title={item.title} description={item.description} />

)

)
)}

</div>
</>
    )

}


export default Main;