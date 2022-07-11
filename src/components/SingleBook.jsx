import React from 'react';
import { Card } from 'react-bootstrap';
// import CommentArea from './CommentArea';

class SingleBook extends React.Component {
    //state = {
    //    selected: false 
    //}

    render() {
        return (
            <>
            <Card
                //onClick={() => this.setState({ selected: !this.state.selected })}
                onClick={() => this.props.changeSelectedBook(this.props.book.asin)}
                style={{ border: this.props.selectedBook === this.props.book.asin ? '3px solid red' : 'none' }}
            >
                <Card.Img variant="top" src={this.props.book.img} style={{ height: '400px' }} />
                
                <Card.Body style={{}}>
                    <Card.Title style={{color: 'black', width: 'auto' }}>{this.props.book.title}</Card.Title>
                </Card.Body>
            </Card>
            {/* {
                this.state.selected && <CommentArea asin={this.props.book.asin} />
            } */}
            </>
        )
    }
}

export default SingleBook;