import React from 'react'
import '../App.css'
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
                        <td>789327983</td>
                        <td className='d-flex justify-content-between'>
                            <button className='btn btn-success' ><i class="fa-regular fa-eye"></i></button>
                            <button className='btn btn-primary' ><i class="fa-regular fa-pen-to-square"></i></button>
                            <button className='btn btn-danger' ><i class="fa-solid fa-trash"></i></button>
                        </td>
                      
                    </tr>
                   
                </tbody>
            </table>
        </div>
    </div>  
    )
}

export default Home;
