import React from "react";

import { useState, useEffect, useContext } from "react";
import { useNavigate, Route, Routes, Navigate } from "react-router-dom";



const Login = () => {

    const navigate = useNavigate();
 
//for default values
    const [inputData, setInputData] = useState({
        email: "",
        password: "",
    });

    
    //update the value in onloading process
    const handleChange = (e) => {
        const { name, value } = e.target;
        setInputData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

   
    // const [Inputpassword,setInputpassword]= useState({
    //     password:""
    // });
    // setInputpassword(inputData.password);

    const handleClick = () => {
        navigate("/Registerform");
    }

    const handleSubmit =  (e) => {

            setInputData(inputData);
            // console.log("inputData", inputData);
        }




    return (
        <>
            <div className="mt-5 justify-content-center ">


                <div className="loginpage d-flex flex-row justify-content-center  ">
                    {/* <Routes>
                        <Route path="/Dashboard" element={authen ? <Dashboard /> : <Navigate to='/401' />} />
                        <Route path="/401" element={<Unathentication />} />
                    </Routes> */}

                    <div className="p-1">
                       
                    </div>

                    <p className="fs-1 fw-bolder"> TRUST IOT</p>

                </div>

                {/* form */}
                <form>
                    <div className="card  rounded d-flex flex-row justify-content-center " style={{ width: '35%', borderRadius: '5px', marginLeft: '400px', boxShadow: '0px 0 30px rgba(1,41,112,0.1)', padding: '20px' }}>
                        <div className="card-body">
                            <h2 className="card-title text-primary-emphasis text-center"> Login Account</h2>

                            <div className="card-text">
                                <div className="mb-3">
                                    <label className="form-label d-flex justify-content-left"><b>Email</b></label>
                                    <input type="email" className="form-control" id="email" name='email' value={inputData.email} onChange={handleChange} required />
                                </div>
                                <div className="mb-3">
                                    <label className="form-label d-flex justify-content-left"><b>Password</b></label>
                                    <input type="text" className="form-control" id="password" name='password' value={inputData.password}  onChange={handleChange} required />
                                </div>




                            </div>

                            <div className='p-1 d-grid'>
                                <button type="button" className=" btn btn-outline-primary btn-lg" onClick={handleSubmit}>Login
                                </button>
                            </div>
                            <div className='p-1 d-grid'>
                                <button type="button" className=" btn btn-outline-primary btn-lg" onClick={handleClick}>Create Account
                                </button>
                            </div>




                        </div>
                    </div>

                </form>
            </div>


        </>
    )
}

export default Login;