import { useState, useEffect } from 'react'
import { Link } from "react-router-dom";
import "./Header.scss";

const Header = () => {
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
    <div className={screenSize.width < 900 ? "mobile-version" : "header-main-component" }>
      <div className="title">
        <h1><Link to='/'>Internship-2023</Link></h1>
      </div>
      <div className='category'>
        <Link to='/employees'>Employees</Link>
        <Link to='/tasks'>Tasks</Link>
        <Link to='/useraccount'>User profile</Link>
      </div>
    </div>
  )
}
export default Header