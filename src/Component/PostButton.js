import React ,{useState} from 'react';
import './PostButton.css';
import img_avatar from  '../image/img_avatar.png';
import Modal from 'react-bootstrap/Modal';
import upload_photo from '../image/upload_photo.png';




function PostButton(){
    const [lgShow, setLgShow] = useState(false);
    return(
        <>
        
         <Modal
          size="lg"
          show={lgShow}
          onHide={() => setLgShow(false)}
          aria-labelledby="example-modal-sizes-title-lg"
        >
          <Modal.Header closeButton>
            <Modal.Title id="example-modal-sizes-title-lg">
              Post Something....
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <form className="input_post">
            <textarea placeholder="Share something special..." rows="4" cols="100">
            </textarea>
            </form>
          </Modal.Body>
          <Modal.Footer><div><input type="file" name="myImage" accept="image/x-png,image/gif,image/jpeg" /></div>
                        <button>Post</button></Modal.Footer>
        </Modal>

        <div className="hamar_card">
         <img className='img_profile' src={img_avatar} alt="Avatar" ></img>
            
           <button className="hamar_button"  onClick={() => setLgShow(true)}>What do you want to ask or share?</button>
      
        </div>
        
        </>
       
    );
}
export default PostButton;
