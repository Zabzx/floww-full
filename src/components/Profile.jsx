import React from "react";
import ReactDOM from "react-dom";
import ImageUploading from "react-images-uploading";
import '../Profile.css'
import Nav from "./Nav";
import { useState } from "react";

function Profile({ passUpImage, posts, liked }) {
  const [images, setImages] = React.useState([]);
  const maxNumber = 1;

  const onChange = (imageList, addUpdateIndex) => {
    // data for submit
    setImages(imageList);
  };

  const setPfp = () => {
      passUpImage(images)
  }


    let [currentLikes, setCurrentLikes] = useState(posts.likes)
    const [postLiked, setPostLiked] = useState(false)

  return (
    <>
    <Nav/>
    <div className="profile-section">
      <ImageUploading
        multiple
        value={images}
        onChange={onChange}
        maxNumber={maxNumber}
        dataURLKey="data_url"
      >
        {({
          imageList,
          onImageUpload,
          onImageRemoveAll,
          onImageUpdate,
          onImageRemove,
          isDragging,
          dragProps
        }) => (
          // write your building UI
          <div className="upload__image-wrapper">
              <h1>Add a profile picture</h1>
            <button
              style={isDragging ? { color: "red" } : null}
              onClick={onImageUpload}
              {...dragProps}
              className="click-or-drop"
            >
              Click or Drop here
            </button>
            &nbsp;
            <button className="remove-img" onClick={onImageRemoveAll}>Remove all images</button>
            {imageList.map((image, index) => (
              <div key={index} className="image-item">
                <img src={image.data_url} alt="" width="100" />
                <div className="profile-btn-flex image-item__btn-wrapper">
                  <button className="profile-btn" onClick={() => onImageUpdate(index)}>Update</button>
                  <button className="profile-btn" onClick={() => onImageRemove(index)}>Remove</button>
                  <button className="profile-btn" onClick={setPfp}>Save</button>
                </div>
              </div>

            ))}
          </div>
        )}
      </ImageUploading>
      <div className="user-info">
        <h1 className="user-info-h1">Username: {localStorage.getItem('username')}</h1>
        <h1 className="user-info-h1">Your Email Adress: {localStorage.getItem('useremail')}</h1>
      </div>
    </div>

    {liked ? <div className="likes-section container">
      <h1>Liked Posts</h1>
    {posts.map((post) => (
      <>
      {post.name ? <div className="pfeed-item">
       <div className="userpfp-and-username">
           <img className="pfp" src={post.pfp} alt=""/>
           <h1>{post.name}</h1>
       </div>
       <div className="time-posted">
               <p>at: {post.time}</p>
           </div>
       <div className="f-img-and-txt">
       <div className="feed-text">
           <p>{post.text}</p>
       </div>
       {post.img !== '' ? <div className="feed-image">
          <img className="feed-image fd-img" src={post.img} alt=""/>
           </div> : ''}
       </div>
       <div className="like-and-share">
       <i className="fas fa-comment"></i>
       <i className="fas fa-share"></i>
       <div className="likes">
           <p className="likes-value">{currentLikes}</p>
       {postLiked ? <i style={{color: '#3EDC95'}} className="fas fa-thumbs-up"></i> : <i className="fas fa-thumbs-up"></i>}
       </div>
       </div>
       </div> : ''}
       </>
    ))}
    </div> : <div className="container">No liked posts yet</div>}
    </>
  );
}

export default Profile;