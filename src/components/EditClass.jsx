import { useNavigate, useParams } from "react-router-dom";
import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useDispatch, useSelector } from 'react-redux';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import axios from "axios";



export const EditClass = () => {
    const { id } = useParams();
    console.log('id', id);

    const navigate = useNavigate();

    const dispatch = useDispatch();

  
    const getData = () => {
        axios.get(`https://school-info-backend-project.herokuapp.com/class/${id}`).then(({ data }) => setFormData(data))
        .catch((err) => console.log(err.message));
    }
    
    React.useEffect(() => {
        getData();
    }, []);
    
    const [formData, setFormData] = React.useState({});

    const handleChange = (e) => {
        const { id, value } = e.target;
        setFormData({
            ...formData,
            [id]: value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.patch(`https://school-info-backend-project.herokuapp.com/class/${id}`, formData).then(({ data }) => {
            // dispatch(addClassData(data))
            console.log('data', data);
            navigate("/searched");
        })
            .catch((err) => console.log(err.massage));
        
    }
  

    const { grade,section,subject } = formData;
    return (
        <Box
            component="form"
            sx={{ width: "220px", mt: "40px" }}
        >
            <TextField
                required value={grade}
                id="grade"
                label=""
                onChange={handleChange}
            />
            <br />
            <br />
            <TextField required value={section} id="section" label="" onChange={handleChange} />
            <br />
            <br />
            <TextField required value={subject} id="subject" label="" onChange={handleChange} />
            <br />
            <br />
            <Button onClick={handleSubmit} variant="contained" color="success">
                Edit class
            </Button>
        </Box>
    )
}