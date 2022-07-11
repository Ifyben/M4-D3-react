import { Button, ListGroup } from "react-bootstrap"

const deleteComment = async (asin) => {
    try {
        let response = await fetch('https://striveschool-api.herokuapp.com/api/comments/' + asin, {
            method: 'DELETE', 
            headers: {
                Authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MTRiMWQwNjRiYjUzZDAwMTViMTllY2YiLCJpYXQiOjE2NTcwMzY3NzUsImV4cCI6MTY1ODI0NjM3NX0.Fomv5CitgDSLTApWJflGo_wLBuL6VKT7_dpsr82Z0gU"
            }
        }) 
        if(response.ok) {
            alert('comment deleted!') 
        } else {
            alert('comment NOT deleted!')
        }
    } catch (error) {
        alert('comment NOT deleted!') 
    }
}

const SingleComment = ({ comment }) => (
    
    <ListGroup.Item style={{padding: '1.25rem 0.25rem', fontSize: 'large'}}>
        {comment.comment}
        <Button variant="danger" className="ml-2" onClick={() => deleteComment(comment._id)}>Del</Button>
    </ListGroup.Item>
     
)

export default SingleComment