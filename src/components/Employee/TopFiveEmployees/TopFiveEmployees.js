import { useState, useEffect } from 'react';
import { db } from '../../../firebase-config';
import { getDocs, collection } from 'firebase/firestore';
import "./TopFiveEmployees.scss";

const TopFiveEmployees = () => {
    const employeesCollectionRef = collection(db, "employees");
    const [topFiveEmployeesHook, setTopFiveEmployeesHook] = useState([]);

    useEffect(() => {
        (async () => {
            const data = await getDocs(employeesCollectionRef);

            const employeeData = data.docs.map(item => item.data())
            const sortable = [];

            for (let item of employeeData) {
                sortable.push([item.doneTasks, item.fullName])
            }
            sortable.sort((a, b) => b[0] - a[0])
            const getFirstFiveFromReversedArray = sortable.slice(0, 5);

            setTopFiveEmployeesHook([...getFirstFiveFromReversedArray]);
        })()
    }, [])
    return (
        <div className='top-five-main-component'>

            <h3 style={{textAlign: 'center'}}>Employees who completed most tasks</h3>
            <div className='fetched-data'>
                {
                    topFiveEmployeesHook.map((item, index) => {
                        return <table key={index} className='top-five-employees'>
                            <tr>
                                <th>{item[1]}</th>
                            </tr>
                            <tr className='done-tasks'>
                                <td>Done tasks: {item[0]}</td>
                            </tr>
                        </table>
                    })
                }
            </div>
        </div>
    )
}

export default TopFiveEmployees