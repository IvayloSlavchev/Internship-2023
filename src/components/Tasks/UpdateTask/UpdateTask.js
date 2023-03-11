import { useState } from 'react';
import "../CreateTask/CreateTask.scss";
import { doc, updateDoc } from 'firebase/firestore';
import { db } from '../../../firebase-config.js';

const UpdateTask = () => {
    const [taskId, setTaskId] = useState('');
    const [editTaskTitle, setEditTaskTitle] = useState('');
    const [editTaskDescription, setEditTaskDescription] = useState('');
    const [editAssignee, setEditAssignee] = useState('');
    const [editDueDate, setEditDueDate] = useState('');

    const [errorMessage, setErrorMessage] = useState('');
    const [isErrorOccured, setIsErrorOccured] = useState(false);

    const editTask = async () => {
        const taskRef = doc(db, 'tasks', taskId);

        if(editTaskTitle.length < 2 || editTaskDescription.length < 10 || editAssignee.length < 2 || editDueDate.length < 8){
            setIsErrorOccured(true);
            setErrorMessage('Please make sure to fill all fields');
            return;
        }

        await updateDoc(taskRef, {
            taskTitle: editTaskTitle,
            taskDescription: editTaskDescription,
            assignee: editAssignee,
            dueDate: editDueDate,
        })
        setIsErrorOccured(false)
    }

    return (
        <div className='task-component'>

            <h3>Update task</h3>
            {isErrorOccured ? <p>{errorMessage}</p> : null}
            
            <input type="text" placeholder="Task id" className="task-input-fields" onChange={(event) => setTaskId(event.target.value)} />
            <input type="text" placeholder="Title" className="task-input-fields" onChange={(event) => setEditTaskTitle(event.target.value)} />
            <input type="text" placeholder="Description" className="task-input-fields" onChange={(event) => setEditTaskDescription(event.target.value)} />
            <input type="text" placeholder="Assignee" className="task-input-fields" onChange={(event) => setEditAssignee(event.target.value)} />
            <input type="text" placeholder="Due Date" className="task-input-fields" onChange={(event) => setEditDueDate(event.target.value)} />

            <button onClick={editTask} className='create-task-button'>Edit Task</button>
        </div>
    )
}

export default UpdateTask