import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Button from '@mui/material/Button';
import { Link, useNavigate } from "react-router-dom";
import SvgIcon from '@mui/material/SvgIcon';
import { useSelector } from 'react-redux';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import Badge from '@mui/material/Badge';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';

import { styled, alpha } from '@mui/material/styles';



const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
        backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
        marginLeft: theme.spacing(3),
        width: 'auto',
    },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: "inherit",
    "& .MuiInputBase-input": {
        padding: theme.spacing(1, 1, 1, 0),
        // vertical padding + font size from searchIcon
        paddingLeft: `calc(1em + ${theme.spacing(4)})`,
        transition: theme.transitions.create("width"),
        width: "100%",
        [theme.breakpoints.up("sm")]: {
            width: "12ch",
            "&:focus": {
                width: "20ch",
            },
        },
    },
}));


export default function SearchAppBar() {

    const [suggestions, setSuggestions] = React.useState([]);

    const debounce = (func) => {
        let timer;
        return function (...args) {
            const context = this;
            if (timer) clearTimeout(timer);
            timer = setTimeout(() => {
                timer = null;
                func.apply(context, args);
            }, 500);
        };
    };

    const handleChange = (value) => {
        if (!value) {
            setSuggestions([]);
            return;
        }
        fetch(
            `https://grubhub-backend-clone.herokuapp.com/restaurant_name/search?search=${value}`
        )
            .then((res) => res.json())
            .then((json) => setSuggestions(json));
    };



    const optimizedFn = useCallback(debounce(handleChange), []);


    return (


        <Box sx={{ flexGrow: 1, alignItems: 'center', justifyContent: 'center', mt: 3, display: { xs: "none", md: "flex" } }}>


            <Search>
                <SearchIconWrapper>
                    <SearchIcon />
                </SearchIconWrapper>
                <StyledInputBase
                    placeholder="Search…"
                    inputProps={{ 'aria-label': 'search' }}
                    onChange={(e) => optimizedFn(e.target.value)}
                />
            </Search>
            <Box>

                {data.length > 0 && (
                    <D className="autocomplete">
                        {suggestions.map((el, i) => (
                            <div key={i} className="autocompleteItems">
                                <Link to={`/restaurant/${el.restaurant_name}`}>
                                    <P>{el.restaurant_name}</P>
                                </Link>
                            </div>
                        ))}
                    </D>
                )}
            </Box>




        </Box>

    )
}