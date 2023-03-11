import { useState } from 'react';
import { db } from '../../../firebase-config.js';
import { addDoc, collection} from "firebase/firestore";
import "./CreateTask.scss";

const CreateTask = () => {
    const [taskTitle, setTaskTitle] = useState('');
    const [taskDescription, setTaskDescription] = useState('');
    const [assignee, setAssignee] = useState('');
    const [dueDate, setDueDate] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const [isErrorOccured, setIsErrorOccured] = useState(false);

    const taskCollectionRef = collection(db, 'tasks');
    const createTask = async () => {
        
        if(taskTitle.length < 2 || taskDescription.length < 10 || assignee.length < 2 || dueDate.length < 8){
            setIsErrorOccured(true);
            setErrorMessage('Please make sure to fill all fields');
            return;
        }

        await addDoc(taskCollectionRef, { taskTitle, taskDescription, assignee, dueDate })
        setIsErrorOccured(false);
    }


    return (
        <div className="task-component">
            <h3>Create task</h3>
            { isErrorOccured ? <p>{errorMessage}</p> : null }
            <input type="text" placeholder="Title"  className="task-input-fields" onChange={(event) => setTaskTitle(event.target.value)}/>
            <input type="text" placeholder="Description" className="task-input-fields" onChange={(event) => setTaskDescription(event.target.value)}/>
            <input type="text" placeholder="Assignee" className="task-input-fields" onChange={(event) => setAssignee(event.target.value)}/>
            <input type="text" placeholder="Due Date" className="task-input-fields" onChange={(event) => setDueDate(event.target.value)}/>

            <button onClick={createTask} className='create-task-button'>Create Task</button>
        </div>
    )
}

export default CreateTask