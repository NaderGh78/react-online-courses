import { useTitle } from "../../components/helpers/useTitle";

/*=========================================*/
/*=========================================*/
/*=========================================*/

const Login = () => {

    // get the page title
    useTitle(`Login`);

    /*=========================================*/

    return (
        <div className='register custom-div'>
            <div className="container p-0">
                <div className="form-box">
                    <h3>Login Now</h3>
                    <form>
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
                        <button
                            type="submit"
                            className="custom-link border-0"
                        >Login Now</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Login;