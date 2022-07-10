import { Component } from "react";
import CommentsList from "./CommentsList";
import AddComment from "./AddComment";
import Loading from "./Loading";

class CommentArea extends Component {
    state = {
        comments: [], //comments will go here
        isLoading: true
    }


    componentDidMount = async () => {

        try {
            
            let response = await fetch('https://striveschool-api.herokuapp.com/api/comments/' + this.props.asin, {
                headers: {
                    Authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MTRiMWQwNjRiYjUzZDAwMTViMTllY2YiLCJpYXQiOjE2NTcwMzY3NzUsImV4cCI6MTY1ODI0NjM3NX0.Fomv5CitgDSLTApWJflGo_wLBuL6VKT7_dpsr82Z0gU"
                }
            })
            console.log(response)
            if(response.ok) {
                let comments = await response.json() 
                this.setState({ comments: comments, isLoading: false})
            } else {
                console.log('error')
                this.setState({ isLoading: false })
            }
             
        } catch (error) {
            console.log(error) 
            this.setState({ isLoading: false })
        }
    }

    render() {
        return (
            <div>
                 {this.state.isLoading && <Loading />}
                <AddComment asin={this.props.asin} />
                <CommentsList commentsToShow={this.state.comments} /> 
            </div>
        )
    }
}

export default CommentArea

