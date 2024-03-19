import axios from "axios";
import { useState } from "react";


const Auth = ({ loguser, setLogUser }) => {
 
   
    const [user, setUser] = useState({
        firstName: '',
        lastName: '',
        password: '',
        confirmPassword: '',
        email: ''
    });

    const [login, setLogin] = useState({ email: '', password: '' });

    const Register = (e) => {

        e.preventDefault();
        axios.post('http://localhost:8000/api/register', user, { withCredentials: true })
        .then(res => {
            console.log(res)
            // const userId = res.data.user._id;
            setLogUser({id:res.data.user._id,email:res.data.user.email});
            localStorage.setItem('userId', res.data.user._id);
            window.location.href = '/';
            // navigate('/');

        })
        .catch(err => console.log(err));
    };

    const handleLogin = (e) => {
        e.preventDefault();
        axios.post('http://localhost:8000/api/login', login, { withCredentials: true })
            .then(res => {
                console.log(res)
                setLogUser({ id: res.data.user._id, email: res.data.user.email });
                localStorage.setItem('userId', res.data.user._id);
                window.location.href=('/')
            })
            .catch(err => console.log(err));
    }

    return (
        <div>
            <div>
                <h1>Welcome</h1>
                <form onSubmit={Register}>
                    <input type="text" name="firstName" placeholder="First Name" onChange={(e) => setUser({ ...user, firstName: e.target.value })} />
                    <input type="text" name="last Name" placeholder="Last Name" onChange={(e) => setUser({ ...user, lastName: e.target.value })} />
                    <input type="email" name="email" placeholder="email " onChange={(e) => setUser({ ...user, email: e.target.value })} />
                    <input type="password" name="pass" placeholder="pass" onChange={(e) => setUser({ ...user, password: e.target.value })} />
                    <input type="password" name="passconfirm" placeholder="pass" onChange={(e) => setUser({ ...user, confirmPassword: e.target.value })} />
                    <button type="submit">Sign Up</button>
                </form>
            </div>

            <div>
                <h1>Login</h1>
                <form onSubmit={handleLogin}>
                    <input type="email" name="email" placeholder="Email" onChange={(e) => setLogin({ ...login, email: e.target.value })} />
                    <input type="password" name="pass" placeholder="password" onChange={(e) => setLogin({ ...login, password: e.target.value })} />
                    <button type="submit">Log In</button>
                </form>
            </div>
        </div>
    );
}

export default Auth;
