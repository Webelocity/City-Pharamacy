import React, {useState} from 'react';
import './RightSide.scss'
import {IconButton, InputAdornment, InputBase} from "@mui/material";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import Visibility from "@mui/icons-material/Visibility";
import {useNavigate} from "react-router-dom";

const RightSide = () => {
    const navigate = useNavigate();
    const [showPassword, setShowPassword] = useState({newPassword: false, confirmNewPassword: false});
    const [passwords, setPasswords] = useState({newPassword: "", confirmNewPassword: ""});
    const [success, setSuccess] = useState(false);
    const [passwordError, setPasswordError] = useState({error: false, helperText: ""})

    const handleChange = (event) => {
        const {name, value} = event.target;
        setPasswords({...passwords, [name]: value})
    }

    const handleSubmit = (event) => {
        event.preventDefault();

        if ((passwords.newPassword === "") || (passwords.confirmNewPassword === "") || (passwords.newPassword !== passwords.confirmNewPassword)) {
            setPasswordError({error: true, helperText: "Password do not match"});
            return
        }

        //TODO send data to backend;
        setSuccess(true)
    }
    return (
        <div className='right-side-wrapper'>
            <IconButton className='back-home' onClick={() => navigate('/')}>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M15 6L9 12L15 18" stroke="#219D50" stroke-width="2" stroke-linecap="round"
                          stroke-linejoin="round"/>
                </svg>
                <p>
                    back to home page
                </p>
            </IconButton>
            {success ?
                <div className='success-wrapper'>
                    <div className='great'>
                        <h1>Great!</h1>
                        <div className='tick'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 25 25"
                                 fill="none">
                                <path d="M3 12.2988L9.33333 18.7988L22 5.79883" stroke="#219D50" stroke-width="2"
                                      stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                            <p>
                                Password reset mail has been sent.
                            </p>
                        </div>
                    </div>
                    <p>
                        Password reset email has been sent to your email address, but may take several minutes to show
                        up in your inbox. Please wait at least 10 minutes before attempting another reset.
                    </p>
                    <div className='buttons'>
                        <button>
                            Back To Login
                        </button>
                    </div>
                </div>
                :
                <form className='form-wrapper' onSubmit={handleSubmit}>
                    <h1>Reset password</h1>
                    <p>By entering your new password it will be updated!</p>
                    <div className='form-row'>
                        <InputBase
                            onChange={handleChange}
                            className={`mui-register-password ${passwordError.error && 'error'}`}
                            name="newPassword"
                            type={showPassword.newPassword ? 'text' : 'password'}
                            placeholder='New Password *'
                            endAdornment={
                                <InputAdornment position="end">
                                    <IconButton
                                        aria-label="toggle password visibility"
                                        onClick={() =>
                                            setShowPassword({...showPassword, newPassword: !showPassword.newPassword})
                                        }
                                        edge="end"
                                    >
                                        {showPassword.newPassword ? (
                                            <VisibilityOff/>
                                        ) : (
                                            <Visibility/>
                                        )}
                                    </IconButton>
                                </InputAdornment>
                            }
                        />
                    </div>
                    <div className='form-row'>
                        <InputBase
                            onChange={handleChange}
                            className={`mui-register-password ${passwordError.error && 'error'}`}
                            name="confirmNewPassword"
                            type={showPassword.confirmNewPassword ? 'text' : 'password'}
                            placeholder='Confirm new Password *'
                            endAdornment={
                                <InputAdornment position="end">
                                    <IconButton
                                        aria-label="toggle password visibility"
                                        onClick={() =>
                                            setShowPassword({
                                                ...showPassword,
                                                confirmNewPassword: !showPassword.confirmNewPassword
                                            })
                                        }
                                        edge="end"
                                    >
                                        {showPassword.confirmNewPassword ? (
                                            <VisibilityOff/>
                                        ) : (
                                            <Visibility/>
                                        )}
                                    </IconButton>
                                </InputAdornment>
                            }
                        />
                    </div>
                    <div className='buttons'>
                        <button>
                            Reset your password
                        </button>
                    </div>
                </form>
            }
        </div>
    );
};

export default RightSide;