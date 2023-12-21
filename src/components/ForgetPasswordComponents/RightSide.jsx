import React, {useState} from 'react';
import './RightSide.scss'
import {IconButton, InputAdornment, InputBase} from "@mui/material";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import Visibility from "@mui/icons-material/Visibility";

const RightSide = () => {
    const [showPassword, setShowPassword] = useState(false);
    return (
        <div className='right-side-wrapper'>
            <IconButton className='back-home'>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M15 6L9 12L15 18" stroke="#219D50" stroke-width="2" stroke-linecap="round"
                          stroke-linejoin="round"/>
                </svg>
                <p>
                    back to home page
                </p>
            </IconButton>
            <div className='form-wrapper'>
                <h1>Reset password</h1>
                <p>By entering your new password it will be updated!</p>
                <div className='form-row'>
                    <InputBase
                        className="mui-register-password"
                        name="password"
                        type={showPassword ? 'text' : 'password'}
                        placeholder='New Password *'
                        endAdornment={
                            <InputAdornment position="end">
                                <IconButton
                                    aria-label="toggle password visibility"
                                    onClick={() =>
                                        setShowPassword((show) => !show)
                                    }
                                    edge="end"
                                >
                                    {showPassword ? (
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
                        className="mui-register-password"
                        name="new_password  "
                        type={showPassword ? 'text' : 'password'}
                        placeholder='Confirm new Password *'
                        endAdornment={
                            <InputAdornment position="end">
                                <IconButton
                                    aria-label="toggle password visibility"
                                    onClick={() =>
                                        setShowPassword((show) => !show)
                                    }
                                    edge="end"
                                >
                                    {showPassword ? (
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
            </div>
        </div>
    );
};

export default RightSide;