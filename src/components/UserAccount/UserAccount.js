import { UserAuth } from '../../context/AuthContext'
import { useNavigate } from 'react-router-dom';
import "./UserAccount.scss";


const UserAccount = () => {
    const { user, logout } = UserAuth();
    const navigate = useNavigate();

    const handleLogout = async () => {
        try {
            await logout();
            navigate('/');
        } catch(error) {
            console.log(error.message);
        }
    }
    console.log(user)
    return (
        <div className='user-profile'>
            <div className='user-info'>
                <h3>Email: {user.email}</h3>
                <h3>If more information is provided will render here</h3>
                <button className='logout-button' onClick={handleLogout}>Logout</button>
            </div>
        </div>
    )
}

export default UserAccount