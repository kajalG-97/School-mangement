import * as React from 'react';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';

export const ColorToggleButton = ({ handleChange }) => {

    return (
        <ToggleButtonGroup
            color="primary"
            exclusive
            onChange={handleChange}
        >
            <ToggleButton value="Female">Female</ToggleButton>
            <ToggleButton value="Male">Male</ToggleButton>
            <ToggleButton value="">All</ToggleButton>

        </ToggleButtonGroup>
    );
}
