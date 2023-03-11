import { Link } from "react-router-dom";
import "./Header.scss";

const Header = () => {

  return (
    <div className="header-main-component">
      <div className="title">
        <h1><Link to='/'>Intership-2023</Link></h1>
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