import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const SingleBook = (props) => (
    <Card>
      <Card.Img variant="top" src={props.book.img} />
      <Card.Body>
        <Card.Title>{props.book.tiitle}</Card.Title>
      </Card.Body>
    </Card>
  );

export default SingleBook;