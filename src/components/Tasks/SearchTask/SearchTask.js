import { useState } from 'react';
import { db } from '../../../firebase-config.js';
import { getDocs, collection } from 'firebase/firestore';
import "../../Employee/SearchEmployee/SearchEmployee.scss"

const SearchTask = () => {
    const taskCollectionRef = collection(db, "tasks");

    const [tasks, setTasks] = useState([]);
    const [providedTaskId, setProvidedTaskId] = useState('');
    const [isSearchButtonClicked, setIsSearchButtonClicked] = useState(false);

    const displayTaskById = async () => {
        const getTasksData = await getDocs(taskCollectionRef);
        getTasksData.docs.map(item => {
            if(item.id == providedTaskId) {
                setTasks([item.data()]);
            }
        })
        setIsSearchButtonClicked(true)
    }

    const displayAllTasks = async () => {
        const taskData = await getDocs(taskCollectionRef);
        setTasks(taskData.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
        setIsSearchButtonClicked(true);
    }

    return (
        <div className='search-div'>
            <div className='search-components'>
                <button className='display-all-data-button' onClick={displayAllTasks}>Show all tasks</button>
                <input type='text'
                    placeholder='Task id'
                    className='search-input'
                    onChange={(event) => setProvidedTaskId(event.target.value)}
                />
                <button className='search-button' onClick={displayTaskById}>🔍</button>
            </div>
            <div>
                {
                   tasks.length > 0 ? isSearchButtonClicked ? <table className='data-table'>
                   <tr>
                       <th className='table-name'>Title</th>
                       <th className='table-name'>Description</th>
                       <th className='table-name'>Assignee</th>
                       <th className='table-name'>Due Date</th>
                   </tr>
                   {
                        tasks.map((item, index) => {
                           if (item) {

                               return <tr key={index} className='fetched-data'>
                                   <td className='table-data'>{item.taskTitle}</td>
                                   <td className='table-data'>{item.taskDescription}</td>
                                   <td className='table-data'>{item.assignee}</td>
                                   <td className='table-data'>{item.dueDate}</td>
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
export default SearchTask;