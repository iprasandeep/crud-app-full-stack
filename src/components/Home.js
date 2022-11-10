import React from 'react'
import '../App.css'
import VisibilityIcon from '@mui/icons-material/Visibility';
import ModeEditIcon from '@mui/icons-material/ModeEdit';
import DeleteIcon from '@mui/icons-material/Delete';
export const Home = () => {
    return (
        <div className='mt-5'>
            <div className='container'>
                <div className='add_btn mt-2'>
                    <button style={{ float:"right"}}  className='btn btn-primary mb-2'>Add Data</button>
                </div>
         
            <table style={{ marginTop: "8%"}} className="table">
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
                    <tr  >
                        <th scope="row">1</th>
                        <td>prasandeep</td>
                        <td>prsndp@gmail.com</td>
                        <td>Full Stack Engineer</td>
                        <td>78932798317</td>
                        <td className='d-flex justify-content-between'>
                            <button className='btn btn-success' > < VisibilityIcon/> </button>
                            <button className='btn btn-primary' > <ModeEditIcon /> </button>
                            <button className='btn btn-danger' >< DeleteIcon /></button>
                        </td>
                      
                    </tr>

                    <tr  >
                        <th scope="row">2</th>
                        <td>prasandeep</td>
                        <td>prsndp@gmail.com</td>
                        <td>Full Stack Engineer</td>
                        <td>78932798317</td>
                        <td className='d-flex justify-content-between'>
                        <button className='btn btn-success' > < VisibilityIcon/> </button>
                            <button className='btn btn-primary' > <ModeEditIcon /> </button>
                            <button className='btn btn-danger' >< DeleteIcon /></button>
                        </td>
                      
                    </tr>
                   
                </tbody>
            </table>
        </div>
    </div>  
    )
}

export default Home;
