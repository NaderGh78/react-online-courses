import './home.css';
import { useTitle } from '../../components/helpers/useTitle';
import { OurCourses, Quick } from '../../allPagesPaths';

/*=========================================*/
/*=========================================*/
/*=========================================*/

const Home = () => {

    // get the page title
    useTitle(`Online Courses`);

    /*=========================================*/

    return (
        <div className='home custom-div'>
            <div className="container p-0">
                <Quick />
                <OurCourses />
            </div>
        </div>
    )
}

export default Home;