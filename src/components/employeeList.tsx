import { useState } from "react";
import { empTypes } from "./employee.type";
import EmployeeModal from "./employeeModal";

type Props = {
    list:empTypes[];
    onDeleteClick:(data:empTypes)=>void
    onEdit:(data:empTypes)=>void
}

const EmployeeList = (props:Props) => {
      const{list , onDeleteClick , onEdit} = props;
      const[showModel , SetShowModel] = useState(false);
      const[dataToShow , setDataToShow] = useState(null as empTypes|null)

      const viewEmployee =(data:empTypes) => {
        setDataToShow(data)
        SetShowModel(true)
      }

      const onCloseModal =() => {
        SetShowModel(false)
      }

    return (
        <main>
            <div className="relative overflow-x-auto mt-[30px] sm:rounded-lg">
       <table className="w-[80%] mx-auto text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
                <th scope="col" className="text-center py-2">
                    Name
                </th>
                <th scope="col" className="text-center py-2">
                    Email
                </th>
                <th scope="col" className="text-center py-2">
                    Role
                </th>
                
                <th scope="col" className="text-center py-2">
                   Action
                </th>
            </tr>
        </thead>
         
         
        <tbody>
            {list.map((employee)=>{
                console.log(employee)
                return(
                    <tr key={employee.id} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                     <td className="text-center">
                      {employee.firstName} {employee.lastName}
                    </td>
                    <td className="text-center">
                        {employee.email}
                    </td>
                    <td className="text-center">
                        {employee.role}
                    </td>
                    
                    <td className= "py-4 ">
                        <div className="flex justify-center ">
                           <button onClick={()=>viewEmployee(employee)}><i className='bx bx-show text-[23px] hover:text-[#ff0000] px-[3px]' ></i></button>  
                           <button onClick={()=>onEdit(employee)}><i className='bx bx-edit text-[23px] hover:text-[#ff0000] px-[3px]'></i></button>  
                           <button onClick={()=>onDeleteClick(employee)}><i className='bx bx-trash text-[23px] hover:text-[#ff0000] px-[3px]'></i></button> 
                        </div>
                    </td>
                </tr>
                  
                )
            })}
           
            </tbody>
            </table>
            {showModel && dataToShow !==null && (<EmployeeModal onClose={onCloseModal} data={dataToShow} />)}
            
            </div>
        </main>
    )
};

export default EmployeeList;