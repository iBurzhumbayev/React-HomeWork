import React, {useEffect, useState} from "react";
import apiClient from "../../common/api";
import { IPost, IComment, IUser } from "../../common/models"
import '../PostsList/PostsList.css'
import './SinglePost.css'

interface SinglePostProps {
    post: IPost
    user: IUser
    setIsShowComment: (arg: boolean) => void
}

const SinglePost = (props: SinglePostProps) => {
    const [comments, setComments] = useState<IComment[]>([])


    const getComments = async() => {
        try {
            const res = await apiClient.get('/comments')
            setComments(res.data)
        } catch(e) {
            console.log(e)
        } finally {
            
        }
    }

    useEffect(() => {
        getComments()
    }, [])

    return (
        <div className='post-item'>
            <h4>{props.post.title}</h4>
            <p>{props.post.body}</p>
            <p><span>Author:</span> {props.user.name}</p>
            <button onClick={() => props.setIsShowComment(false)}>Close</button>
            <hr/>
            <h4>Comments:</h4>
            {comments.map((comment) => {
                if (comment.postId === props.post.id) {
                    return (
                        <div className="comment-wrapper" key={comment.id}>
                            <p><span>Name:</span> {comment.name}</p>
                            <p><span>Email:</span> {comment.email}</p>
                            <p><span>Body:</span> {comment.body}</p>
                        </div>
                    )
                }
                return null
            })}
        </div>
    )
}

export default SinglePost