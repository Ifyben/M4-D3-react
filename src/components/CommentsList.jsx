import { ListGroup } from "react-bootstrap"
import SingleComment from "./SingleComment"

const CommentsList = ({ commentsToShow }) => (
    <ListGroup style={{ color: 'black' }}>
        {
           commentsToShow.map(comment => (
               <ListGroup.Item key={comment._id}>
                {
                    <SingleComment comment={comment} key={comment._id} />
                }
               </ListGroup.Item>
            ))
        }
    </ListGroup>
)

export default CommentsList 