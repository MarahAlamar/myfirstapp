
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import data from './data.json'



function Main(){
    return (
<>
<Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="data:image/jpeg;base64,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" />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
</>
    )
}

export default Main;