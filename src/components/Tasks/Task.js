import { useState, useEffect } from 'react';
import "./Task.scss";
import taskImage from '../../images/taskPage.jpg';
import { Link } from "react-router-dom";

const Task = () => {
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
    <div className={windowSize.width < 1200 ? "mobile-version" : "tasks-main-page"}>
      <div className="task-image-and-paragraph">
        <img src={taskImage} alt="Task board" />
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias delectus at aliquid hic non aliquam nobis ut debitis perspiciatis dolorum!</p>
      </div>
      <div className="task-operations">
        <Link to='/tasks/create/task' className="task-operation-buttons">Create task</Link>
        <Link to='/tasks/search/task' className="task-operation-buttons">Find task</Link>
        <Link to='/tasks/update/task' className="task-operation-buttons">Update task</Link>
        <Link to='/tasks/remove/task' className="task-operation-buttons">Remove task</Link>

      </div>
    </div>
  )
}

export default Task