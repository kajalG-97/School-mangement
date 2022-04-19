import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getSchoolData } from "../redux/school/schoolAction";
import Box from '@mui/material/Box';
import * as React from 'react';

export const SchoolData = () => {


    const { schoolList, loding, error } = useSelector((store) => store.school);
    console.log('schoolList', schoolList);
    
    const dispatch = useDispatch();

    useEffect(() => {
        getData();
    }, []);
    
    const getData = () => {
        dispatch(getSchoolData());
    }
    return (
        <div>
            {schoolList.map((e) => {
                return <Box sx={{display:"flex",mb:12,ml:34,width:"60%",justifyContent:"space-around"}}key={e.id}>
                    <h1 style={{color:"#3284e2"}}>{e.school_name}</h1>
                    <img style={{borderRadius :"15px"}}src={e.school_img} />
                </Box>
            })}
        </div>
    )
}