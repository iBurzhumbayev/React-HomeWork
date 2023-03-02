import React, {FC, useEffect, useState} from "react";
import apiClient from "../../common/api";
import { IPost, IUser } from "../../common/models";
import './PostsList.css'

// hook - use
interface IProps {
    onClickPost:  (post: IPost, comment: IUser) => void
}

const PostsList: FC<IProps> = (props) => {
    const [posts, setPosts] = useState<IPost[]>([])
    const [users, setUsers] = useState<IUser[]>([])
    const [isLoading, setIsLoading] = useState(true)

    const getPosts = async() => {
        try {
            const res = await apiClient.get('/posts')
            setPosts(res.data)
        } catch(e) {
            console.log(e)
        } finally {
            setIsLoading(false)
        }
    }

    const getUsers = async() => {
        try {
            const res = await apiClient.get('/users')
            console.log({res})
            setUsers(res.data)
        } catch(e) {
            console.log(e)
        } finally {
            setIsLoading(false)
        }
    }

    useEffect(() => {
        getPosts()
        getUsers()
    }, [])

    useEffect(() => {
        console.log({posts})
    }, [posts])

    if(isLoading) {
        return (
            <div>Loading...</div>
        )
    }


    const getCommentById = (id:number) => users.find(user => user.id === id);

    return (
        <div>
            {posts.map(post => {
                const user = getCommentById(post.userId);

                if (!user) {
                    return null;
                }

                return (
                    <div key={post.id} className='post-item'>
                        <h4>{post.title}</h4>
                        <p>{post.body}</p>
                        <button onClick={() => props.onClickPost(post, user)}>View</button>
                    </div>
                );
            })}
        </div>
    )
}

export default PostsList

