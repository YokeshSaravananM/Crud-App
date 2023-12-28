import { useState } from "react";
import { empTypes } from "./employee.type";

type Props={
    data:empTypes;
    backBtnClick :() =>void;
    updateClickHandle:(data:empTypes) => void
}

const EditEmployee = (props:Props) => {
    const {data, backBtnClick , updateClickHandle} = props;

    const [firstName, setFirstName] = useState(data.firstName)
    const [lastName, setLastName] = useState(data.lastName)
    const [email, setEmail] = useState(data.email)
    const [role, setRole] = useState(data.role)

    const onFirstName = (e:any) => {
        setFirstName(e.target.value)
    };

    const onLastName = (e:any) => {
        setLastName(e.target.value)
    };

    const onEmail = (e:any) => {
        setEmail(e.target.value)
    };

    const onRole = (e:any) => {
        setRole(e.target.value)
    };

    
    const onSubmitBtnClick = (e:any) => {
        e.preventDefault()
       const updatedData:empTypes ={
         id:data.id,
         firstName:firstName,
         lastName:lastName,
         email:email,
         role:role
       }
       updateClickHandle(updatedData)
       backBtnClick();
    }

    return (
        <main>
             <div className=" mx-auto shadow-lg w-[30%] mt-[30px] py-[10px] text-[22px]">
                <p className="font-bold text-center">Add Employee Details</p>
                <form onSubmit={onSubmitBtnClick}>
                  <div className="ml-[120px] mb-[10px] mt-[20px]">
                   <label  className="block mb-1  font-medium text-gray-900 text-[15px] ">First Name</label>
                   <input type="text"  className=" w-[70%] bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="First Name"
                    required
                    value={firstName}
                    onChange={onFirstName} />
                 </div>

                 <div className="ml-[120px] mb-[10px]">
                   <label  className="block mb-2  font-medium text-gray-900 text-[15px] ">Last Name</label>
                   <input type="text"  className=" w-[70%] bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Last Name"
                    required
                    value={lastName} 
                    onChange={onLastName}/>
                 </div>

                 <div className="ml-[120px] mb-[10px]">
                   <label  className="block mb-2  font-medium text-gray-900 text-[15px] ">Email</label>
                   <input type="text"  className=" w-[70%] bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Enter your Email" 
                   required 
                   value={email}
                   onChange={onEmail}/>
                 </div>

                 <div className="ml-[120px] mb-[10px]">
                   <label  className="block mb-2  font-medium text-gray-900 text-[15px] ">Role</label>
                   <input type="text"  className=" w-[70%] bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Enter you Role"
                    required 
                    value={role}
                    onChange={onRole}/>
                 </div>

                <div className="flex justify-between mx-[60px] mt-[50px]">
                    <button className="bg-[#4681f4] text-[#fff] text-[15px] px-[6px] py-[2px] rounded-md " onClick={backBtnClick}>View Employee</button>
                    <button className="bg-[#4BB543] text-[#fff] text-[15px] px-[6px] py-[2px] rounded-md">Update Employee</button>
                </div> 

                </form>
            </div>
        </main>
    )
}

export default EditEmployee;