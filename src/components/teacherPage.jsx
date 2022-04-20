import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getTeacherData, getTeacherList, teacherError } from "../redux/teacher/teacherAction";
import * as React from 'react';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { useNavigate, useParams } from 'react-router-dom';
import { getClassList } from '../redux/classes/classAction'
import { Pagination, Stack } from "@mui/material";
import Box from '@mui/material/Box';
import { ColorToggleButton } from "./ToggleGender";
import axios from "axios";


export const TeacherData = () => {

    let size = 5

    const dispatch = useDispatch();

    const navigate = useNavigate();

    const { list, loding, error } = useSelector((store) => store.teacher);

    const [page, setPage] = React.useState(1);


    const [sort, setSort] = React.useState("asc");


    const [filter, setFilter] = React.useState("");


    useEffect(() => {
        axios.get(`https://school-info-backend-project.herokuapp.com/teacher?count=${page}&sortBy=age&OrderBy=${sort}&gender=${filter}`).then(({ data }) => dispatch(getTeacherList(data)))
            .catch((err) => dispatch(teacherError()));
    }, [page, sort, filter]);


    // useEffect(() => {
    //     getData();
    // }, [page,sort, filter]);

    // const getData = () => {
    //     dispatch(getTeacherData(page,sort,filter));
    // }

    const handleChangePage = (event, value) => {
        setPage(value);
    };


    const handleChangeGender = (e, value) => {
        setFilter(value);
    }

    const handleChangeAge = (e) => {
        if (e.target.value === "asc") {
            setSort("asc")
        }
        if (e.target.value === "desc") {
            setSort("desc")
        }


    }

    const StyledTableCell = styled(TableCell)(({ theme }) => ({
        [`&.${tableCellClasses.head}`]: {
            backgroundColor: theme.palette.common.black,
            color: theme.palette.common.white,
        },
        [`&.${tableCellClasses.body}`]: {
            fontSize: 14,
        },
    }));

    const StyledTableRow = styled(TableRow)(({ theme }) => ({
        '&:nth-of-type(odd)': {
            backgroundColor: theme.palette.action.hover,
        },
        // hide last border
        '&:last-child td, &:last-child th': {
            border: 0,
        },
    }));


    return (
        <Box>
            <div style={{ display: "flex", justifyContent: "space-around" }}>
                <ColorToggleButton handleChange={handleChangeGender} />
                <Box sx={{}}>

                    <Button id="sortByAgeDesc" value="desc" onClick={(e) => handleChangeAge(e)} variant="outlined">Sort Age Desc</Button>
                    <Button sx={{ ml: 23 }} id="sortByAgeeAsc" value="asc" onClick={(e) => handleChangeAge(e)} variant="outlined">Sort Age Asc </Button>
                </Box>


            </div>
            <br />
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 700 }} aria-label="customized table">
                    <TableHead>
                        <TableRow>
                            <StyledTableCell>Teacher Name</StyledTableCell>
                            <StyledTableCell align="right">Age</StyledTableCell>
                            <StyledTableCell align="right">Gender</StyledTableCell>
                            <StyledTableCell align="right">Profile Pic</StyledTableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {list.map((e) => (

                            <StyledTableRow key={e.id}>
                                <StyledTableCell component="th" scope="row">
                                    <Button onClick={() => {
                                        // (`/teacher/${e.teacher_name}`)
                                        console.log('e', e);
                                        dispatch(getClassList(e.classes_ids));
                                        navigate("/searched")

                                    }} color="secondary">{e.teacher_name}</Button>
                                </StyledTableCell>
                                <StyledTableCell align="right">{e.age}</StyledTableCell>
                                <StyledTableCell align="right">{e.gender}</StyledTableCell>
                                <StyledTableCell align="right"><img src={e.img_url} /></StyledTableCell>
                            </StyledTableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
            <br />
            <br />
            <Box sx={{ width: "fit-content", margin: "auto" }}>
                <Stack spacing={4}>

                    <Pagination count={size - 1} page={page} onChange={handleChangePage} />
                </Stack>

            </Box>
            <br />
            <br />
        </Box>

    );
}
