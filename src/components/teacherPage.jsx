import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getTeacherData } from "../redux/teacher/teacherAction";
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

export const TeacherData = () => {

    const navigate = useNavigate();
    const { list, loding, error } = useSelector((store) => store.teacher);
    console.log('list', list);


    const dispatch = useDispatch();

    useEffect(() => {
        getData();
    }, []);

    const getData = () => {
        dispatch(getTeacherData());
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
                            <StyledTableCell  component="th" scope="row">
                                <Button onClick={() => {
                                    // (`/teacher/${e.teacher_name}`)
                                    console.log('e', e);
                                    dispatch(getClassList(e.classes_ids));
                                
                                }} color="secondary">{e.teacher_name}</Button>
                            </StyledTableCell>
                            <StyledTableCell align="right">{e.age}</StyledTableCell>
                            <StyledTableCell align="right">{e.gender}</StyledTableCell>
                            <StyledTableCell align="right"><img src={e.img_url}/></StyledTableCell>
                        </StyledTableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}
