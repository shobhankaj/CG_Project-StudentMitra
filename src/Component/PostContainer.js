import './PostContainer.css';
import img_avatar from  '../image/img_avatar.png';
import pic from '../image/pic.jpg';
import deer from '../image/deer.jpeg';

function PostContainer(){
    return(
        <>
        <div className="f-card">
  <div className="header">
    <img className='img_profile' src={img_avatar} />
    <div className="username">
      <div><b>Username</b></div>
      <div>Time</div>
    </div>
  </div>
  <div className="content">
    <p>Height is optional, if no height is specified the image will be a square.Example: see More</p>
  </div>
  <div><img className="image_post image-contain" src={pic} /></div>
</div>
<div className="f-card">
  <div className="header">
    <img className='img_profile' src={img_avatar} />
    <div className="username">
      <div><b>Shivam Gupta</b></div>
      <div>Time</div>
    </div>
  </div>
  <div className="content">
    <p>
Image result for deer
Deer are the only group of animals in the world to have antlers. </p>
  </div>
  <div><img className="image_post image-contain" src={deer} /></div>
</div>
        </>
    );
}
export default PostContainer;