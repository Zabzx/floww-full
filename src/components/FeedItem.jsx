import '../FeedItem.css'
import { useState } from 'react';
function FeedItem({item}) {

    let [currentLikes, setCurrentLikes] = useState(item.likes)
    const [postLiked, setPostLiked] = useState(false)

    const likePost = () => {

        //Increment Number of likes but only once
        setCurrentLikes(currentLikes + 1)
        
        if (currentLikes >= item.likes + 1) {
            setCurrentLikes(item.likes + 1)
        }

        setPostLiked(!postLiked)

        if (postLiked) {
            setCurrentLikes(item.likes)
        }

    }
    return (
        <div className="feed-item">
        <div className="userpfp-and-username">
            <img className="pfp" src={item.pfp} alt="" />
            <h1>{item.name}</h1>
        </div>
        <div className="time-posted">
                <p>at: {item.time}</p>
            </div>
        <div className="f-img-and-txt">
        <div className="feed-text">
            <p>{item.text}</p>
        </div>
        {item.img !== '' ? <div className="feed-image">
           <img className="feed-image fd-img" src={item.img} alt=""/>
            </div> : ''}
        </div>
        <div className="like-and-share">
        <i className="fas fa-comment"></i>
        <i className="fas fa-share"></i>
        <div className="likes" onClick={likePost}>
            <p className="likes-value">{currentLikes}</p>
        {postLiked ? <i style={{color: '#3EDC95'}} className="fas fa-thumbs-up"></i> : <i className="fas fa-thumbs-up"></i>}
        </div>
        </div>
        </div>
    )
}

export default FeedItem;