import '../Post.css';
import UserImg from '../img/pfp/user.jpg';
import { useState } from 'react';

function Post ({ passUp, userPfp, hasPfp }) {

    const [postText, setPostText] = useState('');
    
    const postSomething = () => {
        if (hasPfp){
            
        passUp({id: Math.floor(Math.random() * 100), name: localStorage.getItem('username'), text: postText, pfp: userPfp[0].data_url, time: 'Now', img: ''})
        } else {
            
        passUp({id: Math.floor(Math.random() * 100), name: localStorage.getItem('username'), text: postText, pfp: UserImg, time: 'Now', img: ''})
        }
    }

    return (
        <div className="post">
        <div className="post-container">
            { hasPfp ? <img src={userPfp[0].data_url} alt="" className="user-img" /> : <img src={UserImg} className="user-img"/>}
        <div className="input-div">
            <input className="post-input" type="text" placeholder="What's on your mind?" onChange={(e) => setPostText(e.target.value)}></input>
        </div>
        </div>
        <div className="posting-options">
        <i className="upload-img fas fa-images"></i>
        <button className="post-btn" onClick={postSomething}>Post</button>
        </div>
        </div>
    )
}

export default Post;