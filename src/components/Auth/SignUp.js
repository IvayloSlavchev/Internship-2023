import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { UserAuth } from '../../context/AuthContext';
import "./Authentication.scss";

const SignUp = () => {
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const [isErrorOccured, setIsErrorOccured] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");

    const { createUser } = UserAuth();
    const navigate = useNavigate();

    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            await createUser(email, password);
            setIsErrorOccured(false);
            navigate('/');
        } catch(error) {
            setErrorMessage(error.message);
            setIsErrorOccured(true)
            console.log(error.message)
        }
    }
    

    return (
        <div className='authentication-component'>
            <h2 style={{textAlign: "center"}}>Create new account</h2>
            { isErrorOccured ? <p>{errorMessage}</p> : null }
            <form>
                <label htmlFor="email" className='authentication-label'>Email</label>
                <input type="email" placeholder='Email' name="email" className="authentication-input" onChange={(event) => setEmail(event.target.value)}/>

                <label htmlFor="password" className='authentication-label'>Password</label>
                <input type="password" placeholder="Password" name="password" className="authentication-input" onChange={(event) => setPassword(event.target.value)}/>
            </form>

            <p>Already have an account? <Link to='/signin'>Sign In</Link></p>
            <button onClick={handleSubmit} className='submit-button'>Sign In</button>
        </div>
    )
}

export default SignUp