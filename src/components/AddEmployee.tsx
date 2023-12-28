import { useState } from "react"
import { empTypes } from "./employee.type";

type Props ={
    backBtnClick :() =>void;
    onSubmitClick :(data:empTypes) =>void
}

const AddEmployee = (props:Props) => {
    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [email, setEmail] = useState("")
    const [role, setRole] = useState("")

    const { backBtnClick , onSubmitClick } = props;

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
       const data:empTypes ={
         id:new Date().toJSON().toString(),
         firstName:firstName,
         lastName:lastName,
         email:email,
         role:role
       }
       onSubmitClick(data)
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
                    <button className="bg-[#FFA726] px-[10px] py-[3px] rounded-md hover:bg-[#FFCC80] " onClick={backBtnClick}>View Employee</button>
                    <button className="bg-[#FFA726] px-[10px] py-[3px] rounded-md hover:bg-[#FFCC80]">Add Employee</button>
                </div> 

                </form>
            </div>
        </main>
    )
}

export default AddEmployee