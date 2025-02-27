import './profile.css';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { hidePopUp } from '../../redux/slices/popUpSlice';
import { FaComment, FaHeart, FaBookmark } from "react-icons/fa6";
import CustomHeading from '../../components/helpers/CustomHeading';
import { useTitle } from '../../components/helpers/useTitle';

/*=========================================*/
/*=========================================*/
/*=========================================*/

const Profile = () => {

    // get the page title
    useTitle(`Profile User`);

    const dispatch = useDispatch();

    /*=========================================*/

    // close the pop up WHEN CLICK ON LINKS
    const hidePopUpHandler = () => {
        dispatch(hidePopUp());
    }

    /*=========================================*/
    return (
        <div className='profile custom-div'>
            <div className="container p-0">
                <CustomHeading text="your profile" />
                <div className="profile-user-box">
                    <div className="user-info text-center">
                        <img src={
                            process.env.PUBLIC_URL + '/assets/images/user-avatar.png'}
                            className='img-fluid'
                            alt="teacher" />
                        <h5>hello lolo</h5>
                        <span style={{
                            color: "var(--light-color)",
                            display: "block",
                            fontSize: "1.7rem"
                        }}>nice one</span>
                        <Link
                            to={"/update-user/1"}
                            onClick={hidePopUpHandler}
                            className='custom-link'>Update Profile</Link>
                    </div>
                    {/* user-info end */}
                    <div className="profile-user-info">
                        <div className="row">
                            <div className="col-lg-4 col-md-4 col-sm-6">
                                <div>
                                    <div className="icon">
                                        <span><FaBookmark /></span>
                                        <div>
                                            <h6>4</h6>
                                            <p>saved playlist</p>
                                        </div>
                                    </div>
                                    <Link className='custom-link'>View Playlists</Link>
                                </div>
                            </div>
                            {/* col #1 */}
                            <div className="col-lg-4 col-md-4 col-sm-6">
                                <div>
                                    <div className="icon">
                                        <span><FaHeart /></span>
                                        <div>
                                            <h6>33</h6>
                                            <p>videos liked</p>
                                        </div>
                                    </div>
                                    <Link className='custom-link'>View Liked</Link>
                                </div>
                            </div>
                            {/* col #2 */}
                            <div className="col-lg-4 col-md-4 col-sm-6">
                                <div>
                                    <div className="icon">
                                        <span><FaComment /></span>
                                        <div>
                                            <h6>12</h6>
                                            <p>videos comments</p>
                                        </div>
                                    </div>
                                    <Link className='custom-link'>View Comments</Link>
                                </div>
                            </div>
                            {/* col #3 */}
                        </div>
                        {/* row end */}
                    </div>
                    {/* profile-user-info end */}
                </div>
                {/* profile-user-box end */}
            </div>
        </div>
    )
}

export default Profile;