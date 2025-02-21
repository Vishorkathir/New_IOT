
// for creata useContext
import { createContext, useState } from 'react';

export const UserRegContext = createContext();


// create the data saving logic with using provider function
export const UserRegProvider = ({ children }) => {


    //hold the object from Regpage
    const [UserRegData, setuserRegData] = useState(null);
    const [UserPlanData,setUserPlanData] = useState(null);

    //save the object in state
    const saveUserRegData = (inputData) => {
        setuserRegData(inputData);
        console.log("Data save in context");
    }
    //save the plan in state
    const saveUserPlanData = (plan) =>{
        setUserPlanData(plan);
        console.log("plan can be saved");
    }
    const CompleteData = () =>{
        const UserFullData = {
            ...UserRegData,
            plan:UserPlanData,
        };
        return UserFullData;
        }



    // create the provider for share the data
    //all component is called children
    return (
        <UserRegContext.Provider value={{ UserRegData,UserPlanData,CompleteData, saveUserRegData ,saveUserPlanData}}>

            {children}

        </UserRegContext.Provider>
    );

};