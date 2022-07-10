import { Component } from "react";
import CommentsList from "./CommentsList";
import AddComment from "./AddComment";

class CommentArea extends Component {
    state = {
        comments: [] //comments will go here
    }


    componentDidMount = async () => {

        try {
            
            let response = await fetch('https://striveschool-api.herokuapp.com/api/comments/' + this.props.asin, {
                headers: {
                    Authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MTRiMWQwNjRiYjUzZDAwMTViMTllY2YiLCJpYXQiOjE2NTcwMzY3NzUsImV4cCI6MTY1ODI0NjM3NX0.Fomv5CitgDSLTApWJflGo_wLBuL6VKT7_dpsr82Z0gU"
                }
            })
            
            
            let comments = await response.json() 
            console.log(comments)
            this.setState({ comments: comments}) 
        } catch (error) {
            console.log(error) 
        }
    }

    render() {
        return (
            <div>
                <AddComment asin={this.props.asin} />
                <CommentsList commentsToShow={this.state.comments}/> 
            </div>
        )
    }
}

export default CommentArea