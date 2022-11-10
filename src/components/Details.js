import React from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import ModeEditIcon from '@mui/icons-material/ModeEdit';
import DeleteIcon from '@mui/icons-material/Delete';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import WorkOutlineIcon from '@mui/icons-material/WorkOutline';
import PhoneIphoneIcon from '@mui/icons-material/PhoneIphone';
import PlaceIcon from '@mui/icons-material/Place';
import DescriptionIcon from '@mui/icons-material/Description';

import '../App.css';
export const Details = () => {
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
                            <h3 className='mt-2' >Name: <span style={{ fontWeight: '400' }}>Parasandeep Gautam</span></h3>
                            <h3>Age: <span style={{ fontWeight: '400' }}>21</span></h3>
                            <p className='mt-2' ><MailOutlineIcon /><strong>Email:</strong> <span> prsndp@gmail.com</span>  </p>
                            <p className='mt-2' ><strong><WorkOutlineIcon />Occuption:</strong><span> Software Engineer</span>  </p>
                        </div>
                        <div  className='right_view col-lg-6 col-md-6 col-12'>                           
                            <p className='mt-5'><PhoneIphoneIcon /><span>Mobile: </span>7483489334</p>
                            <p className='mt-2'><PlaceIcon /><span>Location: </span>Noida, India</p>
                            <p className='mt-2'><DescriptionIcon />Description: <span>lorem ;islddf df f  dsf f  </span></p>
                        </div>
                    </div>


                </CardContent>
            </Card>
        </div>
    )
}

export default Details;