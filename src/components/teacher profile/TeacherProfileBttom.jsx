import CustomHeading from "../helpers/CustomHeading";
import { TeacherCouses } from '../helpers/sectionData';
import { SingleTeacherCard } from '../../allPagesPaths';

/*=========================================*/
/*=========================================*/
/*=========================================*/

const TeacherProfileBttom = () => {
  return (
    <>
      <CustomHeading text="our courses" />
      <div className="teacher-profile-bottom">
        <div className="row">
          {
            TeacherCouses?.map(card => (
              <div className="col-lg-4 col-sm-6" key={card.id}>
                <SingleTeacherCard data={card} />
              </div>
            ))
          }
        </div>
      </div>
    </>
  )
}

export default TeacherProfileBttom;