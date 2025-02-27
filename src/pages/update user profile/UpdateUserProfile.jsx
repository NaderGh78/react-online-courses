import "./update-user-profile.css";
import { useTitle } from "../../components/helpers/useTitle";

/*=========================================*/
/*=========================================*/
/*=========================================*/

const UpdateUserProfile = () => {

    // get the page title
    useTitle(`Update User`);

    /*=========================================*/

    return (
        <div className='update-user custom-div'>
            <div className="container p-0">
                <div className="form-box">
                    <h3>Update Profile</h3>
                    <form>
                        <div className="form-group">
                            <label htmlFor="name">update name</label>
                            <input
                                type="text"
                                className="form-control"
                                id="name"
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="email">update email</label>
                            <input
                                type="email"
                                className="form-control"
                                id="email"
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="password">previous password</label>
                            <input
                                type="password"
                                className="form-control"
                                id="password"
                                placeholder="enter your old password"
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="newPass">new password</label>
                            <input
                                type="password"
                                className="form-control"
                                id="newPass"
                                placeholder="enter your new password"
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="confirmPass">confirm password</label>
                            <input
                                type="password"
                                className="form-control"
                                id="confirmPass"
                                placeholder="confrim your new password"
                            />
                        </div>
                        <div className="form-group file-input">
                            <label htmlFor="file">update picture</label>
                            <input type="file" className="form-control-file" id="file" />
                        </div>
                        <button
                            type="submit"
                            className="custom-link border-0"
                        >Update Profile</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default UpdateUserProfile;