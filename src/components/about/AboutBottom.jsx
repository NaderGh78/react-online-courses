import CustomHeading from "../helpers/CustomHeading";
import { aboutBottomData } from "../helpers/sectionData";
import { FaStar, FaRegStarHalfStroke } from "react-icons/fa6";

/*=========================================*/
/*=========================================*/
/*=========================================*/

const AboutBottom = () => {

    return (
        <div className="about-bottom">
            <CustomHeading text="student's reviews" />
            <div className="row">
                {
                    aboutBottomData?.map(el => (
                        <div className="col-xl-4 col-lg-4 col-md-4 col-sm-6 col-12" key={el.id}>
                            <div className="students-box">
                                <p>{el.text}</p>
                                <div className="student-info">
                                    <img
                                        src={process.env.PUBLIC_URL + el.img}
                                        alt="student avatar"
                                    />
                                    <div>
                                        <h5>{el.student}</h5>
                                        <ul>
                                            {
                                                [...Array(el.rating)].map((_, index) => (
                                                    <li key={index}><FaStar /></li>
                                                ))
                                            }
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default AboutBottom;