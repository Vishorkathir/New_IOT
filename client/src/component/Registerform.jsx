import React from "react";
import { useState, useContext, useEffect } from 'react';
import axios from 'axios';
import { Routes, Route, useNavigate, Link } from 'react-router-dom';
import { UserRegContext } from "../Context/UserregContext";


// import { Link, useNavigate } from 'react-router-dom';







const Registration = () => {

  //get input
  const [inputData, setInputData] = useState({
    name: "",
    email: "",
    password: "",
  });
  //save a data




  //usecontext
  const { saveUserRegData } = useContext(UserRegContext);

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setInputData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  }




  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/LoginPage");
  }


  const handleSubmit = async (e) => {
    e.preventDefault();

    if (inputData.email == "") {
      alert("Enter the your Email!");
      return;

    } if (inputData.password == "") {
      alert("Enter Password!");
      return;
    }
    else {
      saveUserRegData(inputData);
      console.log("inputData", inputData);

    }


  }





  return (
    <>
      <div className=" container d-flex flex-row justify-content-center">

        <div className="p-1">

        </div>

        <p className="fs-1 fw-bolder">TRUST IOT</p>

      </div>

      {/* form */}
      <form>
        <div className="card  rounded d-flex flex-row justify-content-center " style={{ width: '40%', borderRadius: '5px', marginLeft: '400px', boxShadow: '0px 0 30px rgba(1,41,112,0.1)', padding: '20px' }}>
          <div className="card-body">
            <h2 className="card-title text-primary-emphasis text-center">Create your Account</h2>
            <h6 className='text-black-50 bg-white text-center'>Enter your Details</h6>
            <div className="card-text">
              <div className="mb-3">
                <label className="form-label d-flex justify-content-left"><b>Your Name</b></label>
                <input type="text" className="form-control" id="yourname" name='name' value={inputData.name} onChange={handleChange} required />
              </div>
              <div className="mb-3">
                <label className="form-label d-flex justify-content-left"><b>Email</b></label>
                <input type="email" className="form-control" id="email" name='email' value={inputData.email} onChange={handleChange} required />
              </div>
              <div className="mb-3">
                <label className="form-label d-flex justify-content-left"><b>Password</b></label>
                <input type="text" className="form-control" id="password" name='password' value={inputData.password} onChange={handleChange} required />
              </div>



              <div className="form-check d-flex justify-content-left">
                <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                <label className="form-check-label m-1" >
                  <h6 type="checkbox">I agree and accept the  terms and condition</h6>
                </label>


              </div>
            </div>

            <div className='p-1 d-grid'>


              <button type="button" className=" btn btn-outline-primary btn-lg" onClick={handleSubmit}>Create Account

              </button>

            </div>
            <h6 className='d-flex justify-content-left'>Already have an Account? </h6>


            <div className='p-1 d-grid'>
              <button type="button" className=" btn btn-white btn-lg shadow bg-body-tertiary rounded" onClick={handleClick}>Login</button>
            </div>


          </div>
        </div>

      </form>




    </>





  )
}


// function MyComponent() {
//   return (
//    

//   )
// }
export default Registration;

