import './sidebar.css';
import { Link, useLocation } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { hidePopUp } from '../../../redux/slices/popUpSlice';
import {
    FaHouse,
    FaQuestion,
    FaGraduationCap,
    FaChalkboardUser,
    FaHeadset
} from "react-icons/fa6";

/*=========================================*/
/*=========================================*/
/*=========================================*/

const SideBar = ({ sideBarToggle }) => {

    const dispatch = useDispatch();

    const location = useLocation();

    const linkData = [
        { id: 1, goTo: "/", icon: <FaHouse />, content: "Home" },
        { id: 2, goTo: "/about", icon: <FaQuestion />, content: "About" },
        { id: 3, goTo: "/courses", icon: <FaGraduationCap />, content: "Courses" },
        { id: 4, goTo: "/teachers", icon: <FaChalkboardUser />, content: "Teachers" },
        { id: 5, goTo: "/contact", icon: <FaHeadset />, content: "Contact Us" }
    ];

    /*=========================================*/

    // close the pop up WHEN CLICK ON LINKS
    const hidePopUpHandler = () => {
        dispatch(hidePopUp());
    }

    /*=========================================*/

    return (
        <div className={sideBarToggle ? "side-bar full" : "side-bar"}>
            <div className="side-bar-profile">
                <div>
                    <img
                        src={process.env.PUBLIC_URL + `/assets/images/user-avatar.png`}
                        alt="user profile"
                        className='img-fluid'
                    />
                </div>
                <h3 className='text-capitalize' style={{ color: "var(--black)" }}>jhon doe</h3>
                <span style={{ color: "var(--light-color)", fontSize: "1.8rem" }}>student</span>
                <Link
                    to={'/profile'}
                    onClick={hidePopUpHandler}
                    className='custom-link'>View Profile</Link>
            </div>
            <ul>
                {
                    linkData?.map((el, index) => (
                        <li key={el.id}>
                            <Link
                                to={el.goTo}
                                onClick={hidePopUpHandler}
                                className={location.pathname === el.goTo ? "active" : ""}
                            >
                                {el.icon}{el.content}
                            </Link>
                        </li>
                    ))
                }
            </ul>
        </div>
    )
}

export default SideBar;