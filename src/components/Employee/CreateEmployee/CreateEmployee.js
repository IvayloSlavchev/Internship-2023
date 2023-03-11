import { useState } from 'react';

import { db } from '../../../firebase-config.js';
import { addDoc, collection } from 'firebase/firestore';
import "./CreateEmployee.scss";

const CreateEmployee = () => {
    const [fullName, setFullName] = useState('');
    const [email, setEmail] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [dateOfBirth, setDateOfBirth] = useState('');
    const [monthlySalary, setMonthlySalary] = useState(0);
    const [doneTasks, setDoneTasks] = useState(0);
    const [userError, setUserError] = useState(false);

    const employeesCollectionRef = collection(db, 'employees')

    const createUser = async () => {

        if(fullName.length < 2 || phoneNumber.length < 10 || dateOfBirth.length < 8 || monthlySalary.length <= 1){
            setUserError(true);
            return;
        }

        await addDoc(employeesCollectionRef, { fullName, email, phoneNumber, dateOfBirth, monthlySalary, doneTasks })
        setUserError(false);
    }   

    return (
        <div className='employee-main-class'>
            <h2 style={{textAlign: 'center'}}>Add employee to the team</h2>
            {userError ? 'Please make sure to fill all fields' : null}
            <input type="text" placeholder='Full name' onChange={(event) => { setFullName(event.target.value) }} className='input-fields'/>
            <input type="text" placeholder='Email' onChange={(event) => { setEmail(event.target.value) }} className='input-fields'/>
            <input type="text" placeholder='Phone number' onChange={(event) => { setPhoneNumber(event.target.value) }} className='input-fields'/>
            <input type="text" placeholder='Date of birth' onChange={(event) => { setDateOfBirth(event.target.value) }} className='input-fields'/>
            <input type="text" placeholder='Salary' onChange={(event) => { setMonthlySalary(event.target.value) }} className='input-fields'/>
            <input type="text" placeholder='Done tasks' onChange={(event) => { setDoneTasks(event.target.value) }} className='input-fields'/>
            <button onClick={createUser} className='operation-button'>Create user</button>
        </div>
    )
}

export default CreateEmployee