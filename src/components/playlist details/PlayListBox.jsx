import { Link, useParams } from "react-router-dom";
import { useDispatch } from 'react-redux';
import { hidePopUp } from "../../redux/slices/popUpSlice";
import { FaRegBookmark } from "react-icons/fa6";
import { homeCardData } from "../../components/helpers/sectionData";
import CustomHeading from "../helpers/CustomHeading";

/*=========================================*/
/*=========================================*/
/*=========================================*/

const PlayListBox = () => {

    const { id } = useParams();

    const dispatch = useDispatch();

    const getSingleDetail = homeCardData?.find(el => el.id == id);

    const { teacher, date, img, videosCount, title } = getSingleDetail;

    /*=========================================*/

    // close the pop up WHEN CLICK ON LINKS
    const hidePopUpHandler = () => {
        dispatch(hidePopUp());
    }

    /*=========================================*/
    return (
        <>
            <CustomHeading text="playlist details" />
            <div className="playlist-details-box">
                <button><FaRegBookmark />save playlist</button>
                <div className="row h-100">
                    <div className="col-lg-6 col-md-12">
                        <div className="left w-100">
                            <div className="thumb-box mb-0">
                                <img src={
                                    process.env.PUBLIC_URL + img}
                                    className='img-fluid'
                                    alt="single course"
                                />
                                <span style={{ fontSize: "1.8rem" }}>{videosCount} videos</span>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-12">
                        <div className="right mt-4">
                            <div className="top user-avatar-details">
                                <div className="left">
                                    <img src={
                                        process.env.PUBLIC_URL + '/assets/images/user-avatar.png'}
                                        className='img-fluid'
                                        alt="teacher" />
                                </div>
                                <div className="right">
                                    <Link><h6>{teacher}</h6></Link>
                                    <span style={{ color: "var(--light-color)", fontSize: "1.5rem" }}>{date}</span>
                                </div>
                            </div>
                            <div className="bottom mt-3">
                                <h3 style={{ color: "var(--black)", fontSize: "2rem" }}>{title}</h3>
                                <p style={{ color: "var(--light-color)", fontSize: "1.8rem" }}>
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                                    Illum minus reiciendis, error sunt veritatis exercitationem
                                    deserunt velit doloribus itaque voluptate.
                                </p>
                                <Link
                                    to={`/teacher-profile/${id}`}
                                    onClick={hidePopUpHandler}
                                    className="main-custom-link">View Profile</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default PlayListBox;