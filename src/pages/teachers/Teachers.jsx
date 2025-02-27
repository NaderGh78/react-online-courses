import './teachers.css';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { hidePopUp } from '../../redux/slices/popUpSlice';
import { useTitle } from '../../components/helpers/useTitle';
import CustomHeading from '../../components/helpers/CustomHeading';
import { teacherCardsData } from '../../components/helpers/sectionData';

/*=========================================*/
/*=========================================*/
/*=========================================*/

const Teachers = () => {

    // get the page title
    useTitle(`Teachers`);

    const dispatch = useDispatch();

    /*=========================================*/

    // close the pop up WHEN CLICK ON LINKS
    const hidePopUpHandler = () => {
        dispatch(hidePopUp());
    }

    /*=========================================*/

    return (
        <div className='teachers custom-div'>
            <div className="container p-0">
                <CustomHeading text="expert teachers" />
                <div className="teacher-box">
                    <form action="">
                        <div className="form-group">
                            <input
                                type="text"
                                className="form-control"
                                id="name"
                                placeholder='search tutors...'
                            />
                        </div>
                    </form>

                    <div className="teachers-cards">
                        <div className="row">
                            <div className="col-lg-4 col-sm-6">
                                <div className="teacher-single-card text-center">
                                    <h3 style={{ color: "var(--black)", fontSize: "2.5rem" }}>Become A Tutor</h3>
                                    <p style={{ color: "var(--light-color)", fontSize: "1.7rem" }}>
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                        Eveniet, itaque ipsam fuga ex et aliquam.
                                    </p>
                                    <Link
                                        to={"/register"}
                                        onClick={hidePopUpHandler}
                                        className='custom-link'>Get Started</Link>
                                </div>
                            </div>
                            {
                                teacherCardsData?.map(el => (
                                    <div className="col-lg-4 col-sm-6" key={el.id}>
                                        <div className="teacher-single-card">
                                            <div className="top user-avatar-details">
                                                <div className="left">
                                                    <img src={
                                                        process.env.PUBLIC_URL + el.img}
                                                        className='img-fluid'
                                                        alt="teacher" />
                                                </div>
                                                <div className="right">
                                                    <Link><h6>{el.teacher}</h6></Link>
                                                    <span style={{
                                                        color: "var(--light-color)",
                                                        fontSize: "1.6rem"
                                                    }}>{el.job}</span>
                                                </div>
                                            </div>
                                            <ul>
                                                <li>total playlists : <span>{el.playlist}</span></li>
                                                <li>total videos : <span>{el.videos}</span></li>
                                                <li>total likes : <span>{el.likes}</span></li>
                                            </ul>
                                            <Link
                                                to={`/teacher-profile/${el.id}`}
                                                onClick={hidePopUpHandler}
                                                className='custom-link'>View Profile</Link>
                                        </div>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Teachers;