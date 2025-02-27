import './top-header.css';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { hidePopUp, showHidePopUp } from '../../../redux/slices/popUpSlice';
import { showSidbar } from '../../../redux/slices/sideBarSlice';
import { toggleTheme } from '../../../redux/slices/themeSlice';
import { FaBars, FaUser, FaRegSun, FaSistrix, FaMoon } from "react-icons/fa6";

/*=========================================*/
/*=========================================*/
/*=========================================*/

const TopHeader = () => {

    const dispatch = useDispatch();

    const { isDarkMode } = useSelector(state => state.theme);

    const { popUp } = useSelector(state => state.popUpProfile);

    const [showFrom, setShowForm] = useState(false);

    /*=========================================*/

    // open sidebar
    const open = () => {
        dispatch(showSidbar());
    }

    // dark mood
    const darkMoodToogleHandler = () => {
        dispatch(toggleTheme());
    }

    /*=========================================*/

    // open user profile pop uop
    const openPopUpHandler = () => {
        dispatch(showHidePopUp());
    }

    // close the pop up WHEN CLICK ON LINKS
    const closePopUpHandler = () => {
        dispatch(hidePopUp());
    }
    /*=========================================*/

    // hide the [hidden form on small devices] when scroll page
    const handleScroll = () => {

        if (showFrom) {

            const body = document.documentElement.scrollTop;

            if (body > 10) {

                setShowForm(false);

            }

        }
    }

    useEffect(() => {

        if (showFrom) {
            window.addEventListener("scroll", handleScroll);
        }

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };

    }, [showFrom]);

    /*=========================================*/

    // hide pop up profile when scrolling
    const hidePopUpByScroll = () => {

        if (popUp) {

            const scrolled = document.documentElement.scrollTop;

            // in case whe scroll the page , close side bar
            if (scrolled > 10) {

                dispatch(hidePopUp());

            }

        }

    };

    useEffect(() => {

        // in case the popUp OPEN, CALL hidePopUpByScroll function when scrolling
        if (popUp) {
            window.addEventListener('scroll', hidePopUpByScroll);
        }

        return () => {
            window.removeEventListener('scroll', hidePopUpByScroll);
        };

    }, [popUp]);

    /*=========================================*/

    return (
        <div className='top-header'>
            <div className="top-header-content">
                <div className="container p-0">
                    <div className="row align-items-center">
                        <div className="col-lg-2 col-sm-3 col-3">
                            <Link
                                to={"/"}
                                style={{
                                    color: "var(--black)",
                                    whiteSpace: "nowrap",
                                    fontWeight: "700"
                                }}>Online Courses</Link>
                        </div>
                        <div className="col-lg-7 col-sm-5 col-2">
                            <form action="">
                                <div className="form-group">
                                    <input
                                        type="text"
                                        className="form-control"
                                        name="name"
                                        placeholder="Search Courses..."
                                    />
                                </div>
                                <Link>
                                    <FaSistrix />
                                </Link>
                            </form>
                            {/* show this form in small devices */}
                            <form
                                action=""
                                className={showFrom ? "hidden-form show-form" : "hidden-form"}
                            >
                                <div className="form-group">
                                    <input
                                        type="text"
                                        className="form-control"
                                        name="name"
                                        placeholder="Search Courses..."
                                    />
                                </div>
                                <Link>
                                    <FaSistrix />
                                </Link>
                            </form>
                        </div>
                        <div className="col-lg-3 col-sm-4 col-7 position-relative p-0">
                            <ul>
                                <li onClick={open}><FaBars /></li>
                                <li className='hidden-icon'>
                                    <FaSistrix onClick={() => setShowForm(!showFrom)} />
                                </li>
                                <li
                                    onClick={openPopUpHandler}
                                ><FaUser /></li>
                                <li onClick={darkMoodToogleHandler}>
                                    {isDarkMode ? <FaMoon /> : < FaRegSun />}
                                </li>
                            </ul>
                            {popUp && <>
                                <div className={`${popUp ? "login-popup active-popup" : "login-popup"}`}>
                                    <div className="profile">
                                        <img
                                            src={process.env.PUBLIC_URL + `/assets/images/user-avatar.png`}
                                            alt="user profile"
                                            className='img-fluid'
                                        />
                                        <h3
                                            className='text-capitalize'
                                            style={{
                                                color: "var(--black)",
                                                margin: "1rem 0"
                                            }}>jhon doe</h3>
                                        <span
                                            style={{
                                                color: "var(--light-color)",
                                                fontSize: "1.8rem"
                                            }}>student</span>
                                    </div>
                                    <div className="btn-box">
                                        <Link
                                            to={"/profile"}
                                            onClick={closePopUpHandler}
                                            className='first-btn'
                                        >View Profile</Link>
                                        <Link
                                            to={"/login"}
                                            onClick={closePopUpHandler}
                                        >Login</Link>
                                        <Link
                                            to={"/register"}
                                            onClick={closePopUpHandler}
                                        >Register</Link>
                                    </div>
                                </div>
                            </>
                            }

                            {/* 
                            
                            
                            {popUp && <>
                                <div className={`${popUp ? "login-popup active-popup" : "login-popup"}`}>  
                                    <div className="btn-box">
                                        <Link>Login</Link>
                                        <Link>Register</Link>
                                    </div> 
                                </div>
                            </>
                            }   
                            */}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TopHeader;