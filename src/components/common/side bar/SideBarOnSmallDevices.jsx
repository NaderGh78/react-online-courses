import './sidebar.css';
import { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { hidePopUp } from '../../../redux/slices/popUpSlice';
import { closeMiniSidbar } from '../../../redux/slices/sideBarSlice';
import {
    FaHouse,
    FaQuestion,
    FaGraduationCap,
    FaChalkboardUser,
    FaHeadset
} from "react-icons/fa6";
import { LiaTimesSolid } from "react-icons/lia";

/*=========================================*/
/*=========================================*/
/*=========================================*/

const SideBarOnSmallDevices = ({ sideBarToggle }) => {

    const dispatch = useDispatch();

    const location = useLocation();

    /*=========================================*/

    const linkData = [
        { id: 1, goTo: "/", icon: <FaHouse />, content: "Home" },
        { id: 2, goTo: "/about", icon: <FaQuestion />, content: "About" },
        { id: 3, goTo: "/courses", icon: <FaGraduationCap />, content: "Courses" },
        { id: 4, goTo: "/teachers", icon: <FaChalkboardUser />, content: "Teachers" },
        { id: 5, goTo: "/contact", icon: <FaHeadset />, content: "Contact Us" }
    ];

    /*=========================================*/

    const handleScroll = () => {

        /*
        in case the sideBarToggle is TRUE that mean the side bar 
        is OPEN,when SCROLLING COLOSE the sidebar BUUUUUUUUUUUUUUUUUUUUUUUUUT IN SCREEN 1200PX
        */

        const screenWidth = window.innerWidth;
        if (sideBarToggle && screenWidth < 1200) {

            const scrolled = document.documentElement.scrollTop;

            // in case whe scroll the page , close side bar
            if (scrolled > 10) {

                dispatch(closeMiniSidbar());

            }

        }

    };

    useEffect(() => {

        // in case the side bar OPEN, CALL handleScroll function when scrolling
        if (sideBarToggle) {
            window.addEventListener('scroll', handleScroll);
        }

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };

    }, [sideBarToggle]);

    /*=========================================*/

    // close the pop up WHEN CLICK ON LINKS
    const hidePopUpHandler = () => {
        dispatch(hidePopUp());
    }

    /*=========================================*/

    return (
        <div className={sideBarToggle ? "show-mini-sidebar side-bar-mini" : "side-bar-mini"}>
            <span
                className='close-side-bar'
                onClick={() => dispatch(closeMiniSidbar())}
            ><LiaTimesSolid /></span>
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
                    className='custom-link'
                    onClick={() => dispatch(closeMiniSidbar())}
                >View Profile</Link>
            </div>
            <ul>
                {
                    linkData?.map((el, index) => (
                        <li key={el.id}>
                            <Link
                                to={el.goTo}
                                className={location.pathname === el.goTo ? "active" : ""}
                                onClick={() => {
                                    dispatch(closeMiniSidbar())
                                    hidePopUpHandler()
                                }}>{el.icon}{el.content}</Link>
                        </li>
                    ))
                }
            </ul>
        </div>
    )
}

export default SideBarOnSmallDevices;