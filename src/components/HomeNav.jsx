import * as React from 'react';
import AppBar from '@mui/material/AppBar';



import Button from '@mui/material/Button';
import { Link, useNavigate } from "react-router-dom";
import SvgIcon from '@mui/material/SvgIcon';
import { useDispatch, useSelector } from 'react-redux';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import Badge from '@mui/material/Badge';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';

import { ThemeProvider, createTheme } from "@mui/material/styles";
import SearchAppBar from './Search';
import { logoutUser } from '../redux/auth/authAction';

function HomeIcon(props) {
    return (
        <SvgIcon {...props}>
            <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
        </SvgIcon>
    );
}
const darkTheme = createTheme({
    palette: {
        mode: "light",
        primary: {
            main: "#7132c8",
        },
    },
});




export const HomeNav = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const { isAuthenticated } = useSelector((store) => store.auth);
    return !isAuthenticated ? (

        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
                <Toolbar>
                    <HomeIcon onClick={() => navigate("/")} sx={{ mr: 2 }} fontSize="large" />
                    <Typography variant="h6" component="div" sx={{ mr: 2, flexGrow: 1, display: "flex", justifyContent: "space-between" }}>
                        SchoolsInfo
                    </Typography>
                    <Link to={"/SignIn"}><Button sx={{ m: 1, color: "#f2f2ff", textDecoration: "none" }} color="inherit">Login</Button></Link>

                </Toolbar>
            </AppBar>
        </Box>
    ) : (
        <Box sx={{ flexGrow: 1 }}>
            <ThemeProvider theme={darkTheme}>
                <AppBar position="static">
                    <Toolbar>
                        <HomeIcon onClick={() => navigate("/mainHome")} sx={{ mr: 2 }} fontSize="large" />
                        <Typography variant="h6" component="div" sx={{ mr: 2, flexGrow: 1, display: "flex", justifyContent: "space-between" }}>
                            SchoolInfo
                        </Typography>
                        {/* <SearchAppBar/> */}
                        {/* <Link to={"/createTodo"}><Button sx={{ m: 1, color: "#f2f2ff", textDecoration: "none" }} color="inherit">Create Todo</Button></Link> */}
                            <Link underline="none" to={"/"}><Button onClick={() => dispatch(logoutUser())} sx={{ m: 1, color: "#f2f2ff" }} color="inherit">Logout</Button></Link>

                    </Toolbar>
                </AppBar>
            </ThemeProvider>
        </Box>
    )
}