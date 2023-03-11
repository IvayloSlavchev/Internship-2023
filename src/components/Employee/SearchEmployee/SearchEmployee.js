import { useState } from 'react';
import { db } from '../../../firebase-config.js';
import { getDocs, collection } from 'firebase/firestore';
import "./SearchEmployee.scss";

const SearchEmployee = () => {
    const [employees, setEmployees] = useState([]);
    const employeesCollectionRef = collection(db, "employees");
    const [providedEmployeeId, setProvidedEmployeeId] = useState('');
    const [isSearchButtonClicked, setIsSearchButtonClicked] = useState(false);

    const searchEmployeeById = async () => {
        try {
            const data = await getDocs(employeesCollectionRef);
            data.docs.map(item => {
                if (item.id == providedEmployeeId) {
                    setEmployees([item.data()])
                } 
            })

            setIsSearchButtonClicked(true);
        } catch (error) {
            throw new Error("Error occured while trying to search an employee: " + error);
        }
    }
    const showAllEmployeesFunction = async () => {
        const employeeData = await getDocs(employeesCollectionRef);
        setEmployees(employeeData.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
        setIsSearchButtonClicked(true);
    }

    return (
        <div className='search-div'>
            <div className='search-components'>
                <button className='display-all-data-button' onClick={showAllEmployeesFunction}>Show all employees</button>
                <input type="text"
                    placeholder='Employee id'
                    className='search-input'
                    onChange={(event) => setProvidedEmployeeId(event.target.value)}
                />

                <button className='search-button' onClick={searchEmployeeById}>🔍</button>
            </div>
            <div>
                {
                    employees.length > 0 ? isSearchButtonClicked ? <table className='data-table'>
                        <tr>
                            <th className='table-name'>Full Name</th>
                            <th className='table-name'>Email</th>
                            <th className='table-name'>Phone Number</th>
                            <th className='table-name'>Monthly salary</th>
                            <th className='table-name'>Date of birth</th>
                        </tr>
                        {
                             employees.map((item, index) => {
                                if (item) {

                                    return <tr key={index} className='fetched-data'>
                                        <td className='table-data'>{item.fullName}</td>
                                        <td className='table-data'>{item.email}</td>
                                        <td className='table-data'>{item.phoneNumber}</td>
                                        <td className='table-data'>{item.monthlySalary}</td>
                                        <td className='table-data'>{item.dateOfBirth}</td>
                                    </tr>
                                }
                            })
                        }
                    </table> : null : null
                }
            </div>
        </div>
    )
}

export default SearchEmployee