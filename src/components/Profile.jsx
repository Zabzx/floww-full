import React from "react";
import ReactDOM from "react-dom";
import ImageUploading from "react-images-uploading";
import '../Profile.css'
import Nav from "./Nav";

function Profile({ passUpImage }) {
  const [images, setImages] = React.useState([]);
  const maxNumber = 1;

  const onChange = (imageList, addUpdateIndex) => {
    // data for submit
    setImages(imageList);
  };

  const setPfp = () => {
      passUpImage(images)
  }

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
    </>
  );
}

export default Profile;