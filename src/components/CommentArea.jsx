import { Component } from "react";

class CommentArea extends Component {
    state = {
        comments: [] //comments will go here
    }

    componentDidMount = async () => {
        try {
            let response = await fetch(`https://api.pexels.com/api/comments/` + this.props.asin, {
                headers: {
                    Authorization: "563492ad6f9170000100000119c438fe77374da080d4a0d01369fab5"
                }
            })
            console.log(response)
            let comments = await response.json() 
            this.setState({ comments: comments}) 
        } catch (error) {
            console.log(error) 
        }
    }

    render() {
        return (
            <div>
                {/* <CommentList comments={} /> */}
            </div>
        )
    }
}

export default CommentArea