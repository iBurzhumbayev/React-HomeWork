import { useState } from 'react';
import { PostsList, SinglePost } from '../components';
import { IPost, IUser } from '../common/models';
import '../style.css'

function App() {
    const [isShow, setIsShow] = useState(true);
    const [post, setPost] = useState<IPost | null>(null)
    const [user, setUser] = useState<IUser | null>(null)
    const [isShowComment, setIsShowComment] = useState(false);
    

    const handleToggle = () => {
        setIsShow(!isShow)
    }

    const onClickPost = (post: IPost, user: IUser) => {
        setPost(post)
        setUser(user)
        setIsShowComment(true)
    }

    return (
        <div className="App">
            <button onClick={handleToggle}>Toggle</button>
            <div className="container">
                    <div className='column' style={{display: isShow ? 'block' : 'none'}}><PostsList onClickPost={onClickPost}/></div>
                    {isShowComment ? <div className="column" style={{display: isShow ? 'block' : 'none'}}><SinglePost setIsShowComment={setIsShowComment} post={post!} user={user!}/></div> : ''}
            </div>
        </div>
    )
}

export default App;