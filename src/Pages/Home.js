import './Home.css';
import PostButton from '../Component/PostButton'; 
import PostContainer from '../Component/PostContainer';
function Home(){
    return(
        <>
        <div className="content_container">
            <div className="content_container1"></div>
            <div className="content_container2"><PostButton/>
            <div><PostContainer/></div>
            </div>
            <div className="content_container3"></div>
        </div>
        
        </>
        
    );
}
export default Home;