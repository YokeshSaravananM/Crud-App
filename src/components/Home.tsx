import { useEffect, useState } from "react";
import EmployeeList from "./employeeList";
import { PageEnum,  empTypes } from "./employee.type";
import AddEmployee from "./AddEmployee";
import EditEmployee from "./EditEmployee";


const Home = () => {
    const [employeeList , setEmployeeList] = useState([]  as empTypes[]);
    const [shownPage , setSHownPage] = useState(PageEnum.list);
    const [dataToEdit , setdataToEdit] = useState({} as empTypes);

    useEffect(()=>{
      const listString =   window.localStorage.getItem("EmployeeList")
      if(listString) {
        _setEmployeeList(JSON.parse(listString));
      }
    }, [])

    const AddEmployeePage = () => {
        setSHownPage (PageEnum.add)
    };

    const showListPage = () => {
        setSHownPage(PageEnum.list)

    };


    const _setEmployeeList = (list:empTypes[]) => {
        setEmployeeList (list);
        window.localStorage.setItem("EmployeeList",JSON.stringify(list))
    };
    
    const addEmployeeHandle = (data:empTypes) => {
        _setEmployeeList([...employeeList , data]);
    };

    const deleteEmployee = (data:empTypes) => {
        const indexToDelete = employeeList.indexOf(data);
        const tempList = [...employeeList]

        tempList.splice(indexToDelete,1)
        _setEmployeeList(tempList)
    }

    const editEmployeeData =(data :empTypes) => {
       setSHownPage(PageEnum.edit);
       setdataToEdit(data)
    }
     
    const updateData = (data:empTypes) => {
        const filterdData = employeeList.filter(x => x.id === data.id)[0]
        const indexOfRecord = employeeList.indexOf(filterdData);
        const tempData = [...employeeList]
        tempData[indexOfRecord]=data;
        _setEmployeeList(tempData)
    }
   return (
    <main>

    <div className="bg-[#242582]">
        <p className="font-bold text-[#fff] text-center py-[20px] text-[23px]">Rishvaware Crud Application</p>
    </div>
    
    <div className="EmployeeLIst">
        {shownPage === PageEnum.list &&(
            <>
            <div className="flex justify-center mt-[30px]"> 
            <button className="bg-[#FFA726] px-[10px] py-[3px] rounded-md hover:bg-[#FFCC80]" onClick={AddEmployeePage}>Add Employee</button>
            </div>
              
              <EmployeeList 
              list={employeeList}
              onDeleteClick={deleteEmployee}
              onEdit={editEmployeeData}
               />
            </>
        )}

        {shownPage === PageEnum.add && (
        <AddEmployee backBtnClick={showListPage} onSubmitClick={addEmployeeHandle}/>)}

        {shownPage === PageEnum.edit && <EditEmployee 
        data={dataToEdit}
        backBtnClick={showListPage}
        updateClickHandle={updateData}
         />}
         
         
    </div>

    </main> 
   )
};

export default Home;