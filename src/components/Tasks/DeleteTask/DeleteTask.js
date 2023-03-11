import { useState } from 'react';
import { deleteDoc, doc } from "firebase/firestore";
import { db } from '../../../firebase-config.js';
import "../../Employee/DeleteEmployee/DeleteEmployee.scss";

const DeleteTask = () => {
    const [providedTaskId, setProvidedTaskId] = useState('');

    const deleteTaskFunction = async () => {
        const data = doc(db, 'tasks', providedTaskId);
        await deleteDoc(data);
    }

    return (
        <div className="delete-div">
            <label htmlFor="taskId">Enter task id: </label>
            <input type="text" name="task-employee-id"
                class="task-employee-id"
                id="task-employee-id"
                placeholder="Task id"
                onChange={(event) => setProvidedTaskId(event.target.value)}
            />
            <br />
            <button onClick={deleteTaskFunction} className="delete-button">Delete task</button>
        </div>
    )
}

export default DeleteTask