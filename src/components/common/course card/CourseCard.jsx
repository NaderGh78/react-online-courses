import './course-card.css';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { hidePopUp } from '../../../redux/slices/popUpSlice';

/*=========================================*/
/*=========================================*/
/*=========================================*/

const CourseCard = ({ data: { id, teacher, date, img, videosCount, title } }) => {

  const dispatch = useDispatch();

  /*=========================================*/

  // close the pop up WHEN CLICK ON LINKS
  const hidePopUpHandler = () => {
    dispatch(hidePopUp());
  }

  /*=========================================*/

  return (
    <div className='course-card'>
      <div className="top user-avatar-details">
        <div className="left">
          <img src={
            process.env.PUBLIC_URL + '/assets/images/user-avatar.png'}
            className='img-fluid'
            alt="teacher" />
        </div>
        <div className="right">
          <Link><h6>{teacher}</h6></Link>
          <span style={{ color: "var(--light-color)", fontSize: "1.3rem" }}>{date}</span>
        </div>
      </div>
      <div className="thumb-box">
        <img src={
          process.env.PUBLIC_URL + img}
          className='img-fluid'
          alt="single course"
        />
        <span style={{ fontSize: "1.5rem" }}>{videosCount} videos</span>
      </div>
      <div className="bottom">
        <h5 style={{ color: "var(--black)", marginBottom: "15px", fontSize: "2rem" }}>{title}</h5>
        <Link
          to={`/playlist-details/${id}`}
          onClick={hidePopUpHandler}
          className='main-custom-link'>View Playlist</Link>
      </div>
    </div>
  )
}

export default CourseCard;