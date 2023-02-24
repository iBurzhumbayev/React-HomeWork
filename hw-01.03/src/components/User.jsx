import './User.scss'

const User = ({name, userStatus, userImg = 'https://avatars.mds.yandex.net/i?id=8645d1c9371bb7ec5f5a038b898479f819cee203-8133404-images-thumbs&n=13'}) => {
    return (
        <div className="user">
            <img src={userImg} alt='' className="user__avatar"></img>
            <div className="user__name">Name: {name}</div>
            <div className="user__status">Status: <span style={{color: userStatus === 'online'? 'green' : 'red'}}>{userStatus}</span></div>
        </div>
    )
}

export default User