import { useEffect, useState } from "react";
import CommentsList from "./CommentsList";
import AddComment from "./AddComment";
import Loading from "./Loading";
import Error from "./Error";
import { Component } from "react";

const CommentArea = ({asin}) => {
    
    const [comments, setComments] = useState([])
    const [isLoading, setIsLoading] = useState(false)
    const [isError, setIsError] = useState(false)

    useEffect(() => {
        const getComments = async() => {
            setIsLoading(true)
            try {
                let response = await fetch('https://striveschool-api.herokuapp.com/api/comments/' + asin, {
                    headers: {
                        Authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MTRiMWQwNjRiYjUzZDAwMTViMTllY2YiLCJpYXQiOjE2NTcwMzY3NzUsImV4cCI6MTY1ODI0NjM3NX0.Fomv5CitgDSLTApWJflGo_wLBuL6VKT7_dpsr82Z0gU"
                    }
                })
                console.log(response)
                if(response.ok) {
                   let comments = await response.json() 
                   setComments(comments)
                   setIsLoading(false)
                   setIsError(false) 
                } else {
                    console.log('error')
                    setIsLoading(false)
                    setIsError(true) 
                }
         
            } catch (error) {
                console.log(error)  
                setIsLoading(false)
                setIsError(true) 
            }
        }
        getComments()
    }, [asin])

        return (
            <div>
                 {isLoading && <Loading />}
                 {isError && <Error />}
                <AddComment asin={asin} />
                <CommentsList commentsToShow={comments} /> 
            </div>
        )
}

export default CommentArea

