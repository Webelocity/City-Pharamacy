import React from 'react';
import {TextField} from "@mui/material";

const CityInput = (props) => {
    return (
        <TextField
            {...props}
            InputLabelProps={{
                sx: {
                    color: "#616161",
                    fontWeight: 400,
                    fontSize: "16px",
                },
            }}
            InputProps={{
                sx: {
                    '&:hover fieldset': {
                        border: '1px solid #122146 !important',
                    },
                    '&:focus-within fieldset, &:focus-visible fieldset': {
                        border: '1px solid #122146 !important',
                        boxShadow: "0px 4px 6px -2px rgba(0, 0, 0, 0.05), 0px 10px 15px -3px rgba(32, 66, 137, 0.10)"
                    },
                },
            }}
            fullWidth
            variant="outlined"
        />
    );
};

export default CityInput;