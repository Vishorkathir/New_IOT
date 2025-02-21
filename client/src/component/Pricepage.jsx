import react from 'react';
import { useContext, useEffect } from 'react';
import { UserRegContext } from '../Context/UserregContext';
import Registration from '../component/Registerform';
import { Link, useNavigate } from 'react-router-dom';

const Priceing = () => {

    const { saveUserPlanData, CompleteData } = useContext(UserRegContext);
    const navigate = useNavigate();

    // value can store in variable
    const handleButton = (plan) => {
        console.log(" SelectPlan:", plan);
         navigate('/Submission');
         saveUserPlanData(plan);
    }




    return (
        <>
            <div className='text-center ' style={{ marginTop: "80px", fontFamily: "sans-serif" }}>
                <h2 className='text-primary '>Select Your Plan</h2>
                <p>"From active listening to strategic implementaion,we redefine system for enhanced efficiency,simplified processes and
                    informed decision_making."
                </p>
            </div>

            <div className="m-5 d-flex flex-row" style={{ width: "90%" }}>


                <div className="card-body shadow-lg  mb-5 bg-body-tertiary rounded" style={{ width: "60%", marginRight: "10px" }}>
                    <div className="card-header p-2 text-bg-primary rounded fw-bold">
                        Free Trail
                    </div>
                    <p className="card-title p-2 mb-3 fst-italic text-body-secondary " style={{ marginLeft: "30px" }}>
                        <span className='text-primary-emphasis fw-semibold'>Expires in</span> 24Hours</p>
                    <div className='text-center  fw-medium  '>
                        <p className="card-text border-bottom rounded-3">Max file size : 5MB</p>
                        <p className="card-text border-bottom rounded-3">OCR support : YES</p>
                        <p className="card-text border-bottom rounded-3">Customer Support : NO</p>
                        <p className="card-text border-bottom rounded-3">Total Sessions : UNLIMITED</p>

                        {/* button1 */}

                        <button className="mb-3 btn btn-outline-primary" onClick={() => { handleButton('Free') }}>Create Free Account</button>
                    </div>

                </div>



                <div className="card-body shadow-lg  mb-5 bg-body-tertiary rounded" style={{ width: "60%", marginRight: "10px" }}>
                    <div className="card-header p-2 text-bg-primary rounded fw-bold ">
                        Pro
                    </div>

                    <p className="card-title p-2 mb-3 fst-italic text-body-secondary" style={{ marginLeft: "30px" }}><span className='text-primary-emphasis fw-semibold'>Rs 999</span>/PerWeek</p>
                    <div className='text-center fw-medium '>
                        <p className="card-text border-bottom rounded-3">Max file size : 5MB</p>
                        <p className="card-text border-bottom rounded-3">OCR support : YES</p>
                        <p className="card-text border-bottom rounded-3">Customer Support : YES(Email)</p>
                        <p className="card-text border-bottom rounded-3">Total Sessions : UNLIMITED</p>

                        {/* button2 */}
                        <button  className="mb-3 btn btn-outline-primary"
                            onClick={() => { handleButton('Pro') }}>Select Pro Plan</button>
                    </div>

                </div>



                <div className="card-body shadow-lg mb-5 bg-body-tertiary rounded" style={{ width: "60%", marginRight: "10px" }}>
                    <div className="card-header p-2 text-bg-primary rounded fw-bold ">
                        Advanced
                    </div>

                    <p className="card-title p-2 mb-3 fst-italic text-body-secondary " style={{ marginLeft: "30px" }}><span className='text-primary-emphasis fw-semibold'>Rs 3499/</span>PerMonth</p>
                    <div className='text-center fw-medium'>
                        <p className="card-text border-bottom rounded-3">OCR support : YES</p>
                        <p className="card-text border-bottom rounded-3">Max file size : 5MB</p>
                        <p className="card-text border-bottom rounded-3">Customer Support : YES(Email)</p>
                        <p className="card-text border-bottom rounded-3">Total Sessions : UNLIMITED</p>

                        {/* button3 */}
                        <button  className=" mb-3 btn btn-outline-primary" onClick={() => { handleButton('Advance') }}>Select Advance Plan</button>
                    </div>

                </div>
            </div>






        </>
    )
}
export default Priceing;