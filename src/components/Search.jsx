import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Button from '@mui/material/Button';
import { Link, useNavigate } from "react-router-dom";
import Box from '@mui/material/Box';
import { useCallback, useState } from "react";
import { styled, alpha } from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';
import { getClassList } from '../redux/classes/classAction'
import { useDispatch } from 'react-redux';
import {D,P} from "./style"


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

    const dispatch = useDispatch();

    const navigate = useNavigate();

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
            `https://school-info-backend-project.herokuapp.com/teacher_name/search?search=${value}`
        )
            .then((res) => res.json())
            .then((json) => setSuggestions(json));
        };
        console.log('setSuggestions',suggestions);



    const optimizedFn = useCallback(debounce(handleChange), []);


    return (


        <Box sx={{ width:"350px",height:"50px", alignItems: 'center', justifyContent: 'center', mt: 3, display: { xs: "none", md: "inline-block" } }}>


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

                {suggestions.length > 0 && (
                    <div className="autocomplete">
                        {suggestions.map((el, i) => (
                            <div  onClick={() => {
                                dispatch(getClassList(el.classes_ids));
                                navigate("/searched")

                            }} key={i} className="autocompleteItems">
                               
                                    <p style={{color: 'black'}}>{el.teacher_name}</p>
                               
                            </div>
                        ))}
                    </div>
                )}
            </Box>




        </Box>

    )
}