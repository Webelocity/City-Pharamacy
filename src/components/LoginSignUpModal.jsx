import React, {useState, useEffect} from "react";
import {IconButton, InputAdornment, InputBase, Modal} from "@mui/material";
import "./LoginSignUpModal.scss";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import {Link} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {loginFailure, loginStart, loginSuccess, closeModal} from "../redux/userSlice";

const LoginSignUpModal = ({type}) => {
    const dispatch = useDispatch();
    const [mode, setMode] = useState("login");
    const modal = useSelector(
        (state) => state.user.modal
    );

    const handleClose = () => {
        dispatch(closeModal())
    }

    useEffect(() => setMode(type), [type]);
    const [login, setLogin] = useState({
        email: "",
        password: "",
        remember_me: "",
    });
    const [signup, setSignUp] = useState({
        first_name: "",
        last_name: "",
        email: "",
        password: "",
    });
    const [showPassword, setShowPassword] = useState(false);

    const handleChangeLogin = (event) => {
        const {name, value} = event.target;
        if (name === "remember_me") {
            setLogin({...login, remember_me: !login.remember_me});
        } else setLogin({...login, [name]: value});
    };

    const handleChangeSignup = (event) => {
        const {name, value} = event.target;
        setSignUp({...signup, [name]: value});
    };

    const handleSubmit = async (event) => {
        event.preventDefault()
        try {
            dispatch(loginStart());
            dispatch(loginSuccess(login));
            handleClose()
        } catch (err) {
            dispatch(loginFailure());
            alert('error')
        }
    };

    return (
        <Modal
            open={modal}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description">
            <div className="modal">
                <div className="switcher">
                    <button
                        onClick={() => setMode("login")}
                        className={mode === "login" && "selected"}>
                        login
                    </button>
                    <button
                        onClick={() => setMode("signup")}
                        className={mode === "signup" && "selected"}>
                        sign up
                    </button>
                </div>
                <form className="form-wrapper" onSubmit={handleSubmit}>
                    {mode === "signup" ? (
                        <>
                            <h1>Sign Up</h1>
                            <div className="form-row">
                                <input
                                    name="first_name"
                                    value={signup.first_name}
                                    onChange={handleChangeSignup}
                                    placeholder="First Name*"
                                />
                                <input
                                    name="last_name"
                                    value={signup.last_name}
                                    onChange={handleChangeSignup}
                                    placeholder="Last Name*"
                                />
                            </div>
                            <div className="form-row">
                                <input
                                    name="email"
                                    value={signup.email}
                                    onChange={handleChangeSignup}
                                    placeholder="Email Address*"
                                    type="email"
                                />
                            </div>
                            <div className="form-row">
                                <InputBase
                                    className="mui-register-password"
                                    onChange={handleChangeSignup}
                                    name="password"
                                    type={showPassword ? "text" : "password"}
                                    placeholder='Password*'
                                    endAdornment={
                                        <InputAdornment position="end">
                                            <IconButton
                                                aria-label="toggle password visibility"
                                                onClick={() => setShowPassword((show) => !show)}
                                                edge="end">
                                                {showPassword ? <VisibilityOff/> : <Visibility/>}
                                            </IconButton>
                                        </InputAdornment>
                                    }
                                />
                            </div>
                            <p>
                                Your personal data will be used to support your experience
                                throughout this website, to manage access to your account, and
                                for other purposes described in our privacy policy.
                            </p>
                            <div className="buttons">
                                <button>Register</button>
                                <button className="white-button" onClick={handleClose}>
                                    Cancel
                                </button>
                            </div>
                        </>
                    ) : (
                        <>
                            <h1>Login</h1>
                            <div className="form-row">
                                <input
                                    name="email"
                                    onChange={handleChangeLogin}
                                    value={login.email}
                                    placeholder="Email Address*"
                                    type="email"
                                />
                            </div>
                            <Link
                                to="/forget-password"
                                className="forgot-password"
                                onClick={handleClose}>
                                <p>Forget your password?</p>
                            </Link>
                            <div className="form-row">
                                <InputBase
                                    className="mui-register-password"
                                    onChange={handleChangeLogin}
                                    name="password"
                                    type={showPassword ? "text" : "password"}
                                    endAdornment={
                                        <InputAdornment position="end">
                                            <IconButton
                                                aria-label="toggle password visibility"
                                                onClick={() => setShowPassword((show) => !show)}
                                                edge="end">
                                                {showPassword ? <VisibilityOff/> : <Visibility/>}
                                            </IconButton>
                                        </InputAdornment>
                                    }
                                />
                            </div>
                            <div className="checkbox">
                                <input
                                    name="remember_me"
                                    onChange={handleChangeLogin}
                                    checked={login.remember_me}
                                    type="checkbox"
                                />
                                <p>Remember me</p>
                            </div>
                            <div className="buttons">
                                <button>Login</button>
                                <button className="white-button" onClick={handleClose}>
                                    Cancel
                                </button>
                            </div>
                        </>
                    )}
                </form>
            </div>
        </Modal>
    );
};

export default LoginSignUpModal;
