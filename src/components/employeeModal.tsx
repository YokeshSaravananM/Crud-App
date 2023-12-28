
import { empTypes } from "./employee.type";

type Props ={
    onClose:()=>void;
    data:empTypes
}

const EmployeeModal = (props:Props) => {

    const{onClose,data} = props

    return (
        <main>
          <div className="block fixed left-[38%] top-[26%] max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700 top-[50px">
            
             <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white mt-[2px]">Rishvaware Employee Details</h5>
             <p className="font-normal text-gray-700 dark:text-gray-400 py-[10px]">Name : <span>{data.firstName}  {data.lastName}</span></p>
             <p className="font-normal text-gray-700 dark:text-gray-400 py-[10px]">Email : <span>{data.email}</span></p>
             <p className="font-normal text-gray-700 dark:text-gray-400 py-[10px]">Role : <span></span>{data.role}</p>
             <button onClick={onClose} className="absolute top-[7px] left-[92%]"><i className='bx bxs-x-circle text-[#fff] text-[25px]'></i></button>
          </div>
          
        </main>
    )
}

export default EmployeeModal