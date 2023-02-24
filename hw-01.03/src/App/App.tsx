import React from 'react';
import User from '../components/User';
import './App.scss'

const App = () => {
	return (
		<div className='wrapper'>
			<User name='Alex' userStatus='online' userImg='https://cs12.pikabu.ru/post_img/2021/03/24/0/1616536067136853976.jpg'/>
			<User name='Ilyas' userStatus='offline' userImg='https://sun9-12.userapi.com/impf/c624617/v624617325/1424c/8ZRNT_7oKUM.jpg?size=460x480&quality=96&sign=17ac077591cbb92163f9d94f7c7bd873&c_uniq_tag=o3IiQNL-kudZIJUMy3EZMJyoFlT0pMKhdI4TgFWu4Gc&type=album'/>
			<User name='Daniyar' userStatus='online' userImg='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRwZsyf5DxP_1f2efMNz_jBvlAeytorE4Ac65wwMk3jsPl8M68875c3VNwCZPRfVPCWuo&usqp=CAU'/>
			<User name='Gleb' userStatus='offline' userImg='https://cojo.ru/wp-content/uploads/2023/01/krutye-avy-11.webp'/>
			<User name='Aleksandr' userStatus='online' userImg='https://abrakadabra.fun/uploads/posts/2022-03/1646811589_22-abrakadabra-fun-p-ava-programmista-53.jpg'/>
			<User name='Aslan' userStatus='offline' userImg='https://avatars.mds.yandex.net/i?id=8e3d155a00b393942367e41f441908aff07fdb63-7716430-images-thumbs&n=13'/>
			<User name='Incognito' userStatus='offline'/>
			<User name='Incognito' userStatus='offline'/>
			<User name='Incognito' userStatus='offline'/>
		</div>
	);
};

export default App;