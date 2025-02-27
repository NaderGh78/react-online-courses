import './courses.css';
import CustomHeading from '../../components/helpers/CustomHeading';
import { homeCardData } from '../../components/helpers/sectionData';
import { CourseCard } from '../../allPagesPaths';
import { useTitle } from '../../components/helpers/useTitle';

/*=========================================*/
/*=========================================*/
/*=========================================*/

const Courses = () => {

    // get the page title
    useTitle(`Courses`);

    /*=========================================*/

    return (
        <div className='courses custom-div'>
            <div className="container p-0">
                <CustomHeading text="our courses" />
                <div className="courses-box">
                    <div className="row">
                        {
                            homeCardData?.map(card => (
                                <div className="col-lg-4 col-sm-6" key={card.id}>
                                    <CourseCard data={card} />
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Courses;