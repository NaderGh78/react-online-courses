import "./teacher-profile.css";
import { TeacherProfileBttom, TeacherProfileTop } from "../../allPagesPaths";
import { useTitle } from "../../components/helpers/useTitle";

/*=========================================*/
/*=========================================*/
/*=========================================*/

const TeacherProfile = () => {

    // get the page title
    useTitle(`Teacher Profile`);

    /*=========================================*/

    return (
        <div className="teacher-profile custom-div">
            <div className="teacher-profile-box">
                <div className="container p-0">
                    <TeacherProfileTop />
                    <TeacherProfileBttom />
                </div>
            </div>
        </div>
    )
}

export default TeacherProfile;