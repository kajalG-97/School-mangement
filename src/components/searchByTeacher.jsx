
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

export const SearchTeacherInfo = () => {


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

    // const { teacher_name } = useParams();
    // console.log('_id', teacher_name);

    const {classList} = useSelector((store) => store.classes)
    console.log('classList', classList);
    return (

        <TableContainer component={Paper}>
            <Table sx={{ minWidth: 700 }} aria-label="customized table">
                <TableHead>
                    <TableRow>
                        <StyledTableCell>Grade</StyledTableCell>
                        
                        <StyledTableCell align="right">Section</StyledTableCell>
                        <StyledTableCell align="right">Subject</StyledTableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {classList.map((e) => (

                        <StyledTableRow key={e.id}>
                            <StyledTableCell component="th" scope="row">
                                {e.grade}
                            </StyledTableCell>
                            
                            <StyledTableCell align="right">{e.section}</StyledTableCell>
                            <StyledTableCell align="right">{e.subject}</StyledTableCell>
                        </StyledTableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    )
}