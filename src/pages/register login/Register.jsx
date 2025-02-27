import { useTitle } from "../../components/helpers/useTitle";

/*=========================================*/
/*=========================================*/
/*=========================================*/

const Register = () => {

    // get the page title
    useTitle(`Register`);

    /*=========================================*/

    return (
        <div className='register custom-div'>
            <div className="container p-0">
                <div className="form-box">
                    <h3>Register Now</h3>
                    <form>
                        <div className="form-group">
                            <label htmlFor="name">
                                your name <span className="text-danger">*</span>
                            </label>
                            <input
                                type="text"
                                className="form-control"
                                id="name"
                                placeholder="enter your name"
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="email">
                                your email <span className="text-danger">*</span>
                            </label>
                            <input
                                type="email"
                                className="form-control"
                                id="email"
                                placeholder="enter your email"
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="password">
                                your password <span className="text-danger">*</span>
                            </label>
                            <input
                                type="password"
                                className="form-control"
                                id="password"
                                placeholder="enter your password"
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="confPass">
                                confirm password <span className="text-danger">*</span>
                            </label>
                            <input
                                type="password"
                                className="form-control"
                                id="confPass"
                                placeholder="confirm your password"
                            />
                        </div>
                        <div className="form-group file-input">
                            <label htmlFor="file">
                                select profile <span className="text-danger">*</span>
                            </label>
                            <input type="file" className="form-control-file" id="file" />
                        </div>
                        <button
                            type="submit"
                            className="custom-link border-0"
                        >Register Now</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Register;