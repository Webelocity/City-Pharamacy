import React from 'react';
import {Checkbox} from "@mui/material";
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import RadioButtonUncheckedIcon from '@mui/icons-material/RadioButtonUnchecked';

const CityCheckbox = (props) => {
    return (
        <Checkbox icon={<RadioButtonUncheckedIcon />} checkedIcon={<CheckCircleIcon />} {...props} />
    );
};

export default CityCheckbox;