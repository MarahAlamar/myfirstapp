
import data from './data.json';
import CardComp from './card';
import './main.css';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import  { useState } from 'react';


function Main(){
    let [items ,setItems] = useState(data);
  let [noResults, setNoResults] = useState(false);


    function handleSubmit (event){

        event.preventDefault()
        let searchedValue = event.target.search.value.toLowerCase();
        let filteredItems= data.filter(item => item.title.toLowerCase().includes(searchedValue));

        setNoResults(filteredItems.length === 0); // Check if there are no results

  setItems(filteredItems);



    }
    return (
        
<>
<Form className="d-flex"  onSubmit={handleSubmit} id='FormSearch'>
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
          <p id='noSearch'> No search results found.</p>
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