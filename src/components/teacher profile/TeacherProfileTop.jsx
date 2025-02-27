import CustomHeading from "../helpers/CustomHeading";

/*=========================================*/
/*=========================================*/
/*=========================================*/

const TeacherProfileTop = () => {
    return (
        <>
            <CustomHeading text="profile details" />
            <div className="teacher-profile-top">
                <div className="user-info text-center">
                    <img src={
                        process.env.PUBLIC_URL + '/assets/images/user-avatar.png'}
                        className='img-fluid'
                        alt="teacher" />
                    <h5
                        className="mb-0 text-capitalize"
                        style={{
                            color: "var(--black)",
                            fontSize: "2rem"
                        }}>hello lolo</h5>
                    <span
                        style={{
                            color: "var(--light-color)",
                            fontSize: "1.7rem"
                        }}>nice one</span>
                </div>
                <ul>
                    <li>total playlists : <span>4</span></li>
                    <li>total videos : <span>18</span></li>
                    <li>total likes :  <span>1208</span></li>
                    <li>total comments : <span>52</span></li>
                </ul>
            </div>
        </>
    )
}

export default TeacherProfileTop;