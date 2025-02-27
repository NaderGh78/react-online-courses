import './about.css';
import { useTitle } from '../../components/helpers/useTitle';
import { AboutTop, AboutMiddle, AboutBottom } from '../../allPagesPaths';

/*=========================================*/
/*=========================================*/
/*=========================================*/

const About = () => {

    // get the page title
    useTitle(`About`);

    /*=========================================*/

    return (
        <div className='about custom-div'>
            <div className="container p-0">
                <AboutTop />
                <AboutMiddle />
                <AboutBottom />
            </div>
        </div>
    )
}

export default About;