import { useState } from 'react';
import { deleteDoc, doc } from 'firebase/firestore';
import { db } from '../../../firebase-config';
import "./DeleteEmployee.scss";

const DeleteEmployee = () => {
    const [employeeIdHook, setEmployeeIdHook] = useState('');

    const deleteButtonFunction = async () => {
        const data = doc(db, 'employees', employeeIdHook);
        await deleteDoc(data);
    }

    return (
        <div className='delete-div'>
            <form className='delete-form'>
                <label htmlFor="deleteEmployee">Enter employee id: </label>
                <input type="text" name="deleteEmployee" className='task-employee-id' id="deleteEmployee" placeholder='Employee id' onChange={(event) => { setEmployeeIdHook(event.target.value) }} />
                <br />
                <button className='delete-button' onClick={(event) => {
                    event.preventDefault();
                    deleteButtonFunction();
                }}>Delete employee</button>
            </form>
        </div>
    )
}

export default DeleteEmployee