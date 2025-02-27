import { Link } from 'react-router-dom';
import CustomHeading from '../helpers/CustomHeading';
import { CourseCard } from '../../allPagesPaths';
import { homeCardData } from '../helpers/sectionData';

/*=========================================*/
/*=========================================*/
/*=========================================*/

const OurCourses = () => {
    return (
        <>
            <CustomHeading text="our courses" />
            <div className="our-courses">
                <div className="container p-0">
                    <div className="row">
                        {
                            // just show the first 6 element data
                            homeCardData?.slice(0, 6).map(card => (
                                <div className="col-12 col-sm-6 col-lg-4" key={card.id}>
                                    <CourseCard data={card} />
                                </div>
                            ))
                        }
                    </div>
                </div>
                <div className='w-100 text-center mt-5'>
                    <Link to={"/courses"} className='view-all'>View All Courses</Link>
                </div>
            </div>
        </>
    )
}

export default OurCourses;