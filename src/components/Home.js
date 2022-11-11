import React, { useEffect, useState } from "react";
import '../App.css'
import { NavLink, useParams } from 'react-router-dom';
import VisibilityIcon from '@mui/icons-material/Visibility';
import ModeEditIcon from '@mui/icons-material/ModeEdit';
import DeleteIcon from '@mui/icons-material/Delete';
export const Home = () => {

    const [getuserdata, setUserdata] = useState([]);
    console.log(getuserdata);
    const getdata = async (e) => {
        // e.preventDefault();
        const res = await fetch('/getdata', {
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
    useEffect(() => {
        getdata();
    }, [])
    return (
        <div className='mt-5'>
            <div className='container'>
                <div className='add_btn mt-2'>
                    <NavLink to='/register' style={{ float: "right" }} className='btn btn-primary mb-2'>Add Data</NavLink>
                </div>

                <table style={{ marginTop: "8%" }} className="table">
                    <thead>
                        <tr className='table-dark' >
                            <th scope="col">ID</th>
                            <th scope="col">USER NAME</th>
                            <th scope="col">EMAIL</th>
                            <th scope="col">JOB</th>
                            <th scope="col">NUMBER</th>
                            <th>Operation</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            getuserdata.map((element, id) => {
                                return (
                                    <>
                                        <tr  >
                                            <th scope="row">{id+1}</th>
                                            <td>{element.name}</td>
                                            <td>{element.email}</td>
                                            <td>{element.work}</td>
                                            <td>{element.mobile}</td>
                                            <td className='d-flex justify-content-between'>
                                               <NavLink to={`view/${element._id}`}><button className='btn btn-success' > < VisibilityIcon /> </button></NavLink>
                                               <NavLink to={`edit/${element._id}`}><button className='btn btn-primary' > <ModeEditIcon /> </button></NavLink>
                                               <NavLink><button className='btn btn-danger' >< DeleteIcon /></button></NavLink>
                                            </td>

                                        </tr>
                                    </>
                                )
                            })
                        }
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default Home;
