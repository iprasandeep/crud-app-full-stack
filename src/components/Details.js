import React, { useEffect, useState } from "react";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import ModeEditIcon from '@mui/icons-material/ModeEdit';
import DeleteIcon from '@mui/icons-material/Delete';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import WorkOutlineIcon from '@mui/icons-material/WorkOutline';
import PhoneIphoneIcon from '@mui/icons-material/PhoneIphone';
import PlaceIcon from '@mui/icons-material/Place';
import DescriptionIcon from '@mui/icons-material/Description';
import { useParams } from 'react-router-dom';
import '../App.css';
export const Details = () => {

 

    const [getuserdata, setUserdata] = useState([]);
    console.log(getuserdata);

    const {id} = useParams('');
    console.log(id);

    const getdata = async () => {
        // e.preventDefault();
        const res = await fetch(`/getuser/${id}`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            },
        });
        const data = await res.json();
        console.log(data);
        if (res.status === 422 || !data) {
            alert("Error");
            console.log("Please Fill Data First");
        }
        else {
            setUserdata(data);
            console.log("GET DATA");
        }
    }
    useEffect(()=>{
        getdata();
    }, [])
    return (
        <div className='container mt-3'>
            <h2>Welcome To Name</h2>
            <Card sx={{ maxWidth: 780 }}>
                <CardContent>
                <div style={{ float:"right"}} className='add_btn'>
                        <button className='btn btn-primary mx-2' > <ModeEditIcon /> </button>
                        <button className='btn btn-danger' >< DeleteIcon /></button>
                </div>
                    <div className='row'>
                        <div className='left_view col-lg-6 col-md-6 col-12'>
                            <img src='/profile.png' style={{ width: 50 }} alt='profile-picture' />                        
                            <h3 className='mt-2' >Name: <span style={{ fontWeight: '400' }}>{getuserdata.name}</span></h3>
                            <h3>Age: <span style={{ fontWeight: '400' }}>{getuserdata.age}</span></h3>
                            <p className='mt-2' ><MailOutlineIcon /><strong>Email: </strong> <span> {getuserdata.email}</span>  </p>
                            <p className='mt-2' ><strong><WorkOutlineIcon />Occuption: </strong><span>{getuserdata.work}</span>  </p>
                        </div>
                        <div  className='right_view col-lg-6 col-md-6 col-12'>                           
                            <p className='mt-5'><PhoneIphoneIcon /><span>Mobile: </span>{getuserdata.mobile}</p>
                            <p className='mt-2'><PlaceIcon /><span>Location: </span>{getuserdata.add}</p>
                            <p className='mt-2'><DescriptionIcon />Description: <span>{getuserdata.desc}</span></p>
                        </div>
                    </div>
                </CardContent>
            </Card>
        </div>
    )
}

export default Details;