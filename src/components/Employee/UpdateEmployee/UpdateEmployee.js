import { useState } from 'react';
import { db } from '../../../firebase-config.js';
import { doc, updateDoc } from 'firebase/firestore';
import "../CreateEmployee/CreateEmployee.scss"

const UpdateEmployee = () => {
    
    const [employeeId, setEmployeeId] = useState('');
    const [editFullName, setEditFullName] = useState('');
    const [editEmail, setEditEmail] = useState('');
    const [editPhoneNumber, setEditPhoneNumber] = useState('');
    const [editSalary, setEditSalary] = useState('');
    const [editBirthday, setEditBirthday] = useState('');
    const [editDoneTasks, setEditDoneTasks] = useState(0);

    const [customError, setCustomError] = useState('');
    const [isErrorOccured, setIsErrorOccured] = useState(false);

    const editEmployeeData = async () => {
        const employeeRef = doc(db, 'employees', employeeId);

        if(editFullName.length < 2 || editPhoneNumber.length < 10 || editBirthday.length < 8 || editSalary.length <= 1){
            setIsErrorOccured(true);
            return;
        }

        await updateDoc(employeeRef, {
            fullName: editFullName,
            phoneNumber: editPhoneNumber,
            dateOfBirth: editBirthday,
            monthlySalary: editSalary,
            doneTasks: editDoneTasks,
            email: editEmail
        })

        setIsErrorOccured(false);
    }

    return (
        <div className='employee-main-class'>
            <h2 style={{ textAlign: 'center' }}>Update data about employee</h2>
            { isErrorOccured ? <p>Please fill all the fields</p> : null }

            <input type="text" placeholder='Employee id' onChange={(event) => { setEmployeeId(event.target.value) }} className='input-fields'/>
            <input type="text" placeholder='Full name' onChange={(event) => { setEditFullName(event.target.value) }} className='input-fields'/>
            <input type="text" placeholder='Email' onChange={(event) => { setEditEmail(event.target.value) }} className='input-fields'/>
            <input type="text" placeholder='Phone number' onChange={(event) => { setEditPhoneNumber(event.target.value) }} className='input-fields'/>
            <input type="text" placeholder='Date of birth' onChange={(event) => { setEditBirthday(event.target.value) }} className='input-fields'/>
            <input type="text" placeholder='Salary' onChange={(event) => { setEditSalary(event.target.value) }} className='input-fields'/>
            <input type="text" placeholder='Done tasks' onChange={(event) => { setEditDoneTasks(event.target.value) }} className='input-fields'/>

            <button onClick={editEmployeeData} className='operation-button'>Edit details</button>
        </div>
    )
}

export default UpdateEmployee