import { useState, useEffect } from 'react'; 
import image from '../../images/Employee.jpg';
import "./Employees.scss";
import { Link } from 'react-router-dom';

const Employees = () => {
    const [windowSize, setWindowSize] = useState({
        width: window.innerWidth,
        height: window.innerHeight
    });

    useEffect(() => {
        window.addEventListener('resize', () => {
            setWindowSize({
                width: window.innerWidth,
                height: window.innerHeight
            })
        })
    }, [])

    return (
        <div className={ windowSize.width < 900 ? 'mobile-view' : 'employees-main-page' }>
            <div className='employee-left-image'>
                <img src={image} alt="Employees image" />
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint possimus laborum voluptates, dolor voluptatem odit sit explicabo quis doloremque aut.</p>
            </div>
            <div className='operation-buttons'>
                <Link to='find/employee' className='employee-operation-button'>Find employee</Link>
                
                <Link to='create/employee' className='employee-operation-button'>Add employee</Link>
                
                <Link to='update/employee' className='employee-operation-button'>Update employee</Link>
                
                <Link to='remove/employee' className='employee-operation-button'>Remove employee</Link>

                <Link to='/mostcompletedtasks' className='employee-operation-button'>Employees with most completed tasks</Link>

            </div>
        </div>
    )
}

export default Employees