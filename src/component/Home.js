// import React from "react"
// import {useLocation}from "react-router-dom";

// const Home=()=>{
//    const {state}=useLocation();
//    return(
//        <div>
//            <h2>Information Table</h2>
//            <table class="table table-bordered">
//                <thead>
//                    <tr>
//                        <th scope="col">First Name</th>
//                        <th scope="col">Middle Name</th>
//                        <th scope="col">Last Name</th>
//                        <th scope="col">Gender</th>
//                        <th scope="col">Email</th>
//                        <th scope="col">Mobile Number</th>
//                        <th scope="col">Password</th>
//                        <th scope="col">Confirm Password</th>
//                    </tr>
//                </thead>
//                <tbody>
//                    <tr>
//                        <td>{state.fname}</td>
//                        <td>{state.mname}</td>
//                        <td>{state.lname}</td>
//                        <td>{state.gender}</td>
//                        <td>{state.email}</td>
//                        <td>{state.mNumber}</td>
//                        <td>{state.password}</td>
//                        <td>{state.cPassword}</td>
//                    </tr>
//                </tbody>
//            </table>
//        </div>
//    ) 
// }
// export default Home