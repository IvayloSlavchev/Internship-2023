import { useState, useEffect } from 'react'
import teamImage from '../../images/team.jpg';
import taskImage from '../../images/task.jpg';
import "./MainPage.scss";

const MainPage = () => {
  const [screenSize, setScreenSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight
  });

  useEffect(() => {
    window.addEventListener('resize', () => {
      setScreenSize({
        width: window.innerWidth,
        height: window.innerHeight
      });
    });
  }, [])

  return (
    <div className={ screenSize.width < 1300 ? 'mobile-version' : 'main-page' }>
      <div className="employees">
        <h3>For employees</h3>
        <img src={teamImage} alt="Team image" className='main-page-images-team' />
        <p className='short-description-teams'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi facere repudiandae accusamus fugiat impedit exercitationem autem accusantium eum dolores! Deleniti?</p>
      </div>
      <div className="tasks">
        <h3>Tasks</h3>
        <img src={taskImage} alt="Task board image" className='main-page-images' />
        <p className='short-description-tasks'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni vero repudiandae quibusdam optio fugit ipsum dolores, temporibus eaque consequuntur in?</p>
      </div>
    </div>
  )
}

export default MainPage