import axios from "axios";
import { useState } from "react";
import '../components/Signup.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import maimage from '../img/ma.jpg'
import loginimage from '../img/book.jpg'

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
               
                setLogUser({id:res.data.user._id,email:res.data.user.email});
               window.localStorage.setItem('userId', res.data.user._id);
                window.location.href = '/';
                

            })
            .catch(err => console.log(err));
    };

    const handleLogin = (e) => {
        e.preventDefault();
        axios.post('http://localhost:8000/api/login', login, { withCredentials: true })
            .then(res => {
                console.log(res)
                setLogUser({id:res.data.user._id,email:res.data.user.email});
                localStorage.setItem('userId', res.data.user._id);
                window.location.href = ('/')
            })
            .catch(err => console.log(err));
    }

    return (
        <div>
            <div className="container login">
                <div className="login">

                </div>

                <div className="row justify-content-between ">
                    <div className="col">
                        <h1>Sign Up</h1>
                        <form onSubmit={Register} className="form ">
                            <input type="text" className="newinput" name="firstName" placeholder="First Name" onChange={(e) => setUser({ ...user, firstName: e.target.value })} />
                            <input type="text" className="newinput" name="last Name" placeholder="Last Name" onChange={(e) => setUser({ ...user, lastName: e.target.value })} />
                            <input type="email" className="newinput" name="email" placeholder="Email " onChange={(e) => setUser({ ...user, email: e.target.value })} />
                            <input type="password" className="newinput" name="pass" placeholder="Password" onChange={(e) => setUser({ ...user, password: e.target.value })} />
                            <input type="password" className="newinput" name="passconfirm" placeholder="ConfirmPassword" onChange={(e) => setUser({ ...user, confirmPassword: e.target.value })} />
                            <button className="btn btn-primary btn-lg mt-2" type="submit">Sign Up</button>


                        </form>
                    </div>

                    <div className="col">
                        <img src={maimage} className="rounded float-start" alt="..." width={'100%'}></img>
                    </div>

                </div>





            </div>



            <div>
                <div className="container">
                    <div className="row  d-flex align-items-center justify-content-center"  id="login">
                    <div className="col ">
                        <h1>Login</h1>
                        <form onSubmit={handleLogin}>
                            <input type="email" name="email" className="newinput" placeholder="Email" onChange={(e) => setLogin({ ...login, email: e.target.value })} />
                            <input type="password" name="pass" className="newinput" placeholder="password" onChange={(e) => setLogin({ ...login, password: e.target.value })} /> <br />
                            <button className="btn btn-primary btn-lg mt-2" type="submit" >Log In</button>
                        </form>
                        </div>
                        <div className="col">
                        <img src={loginimage} className="rounded float-start" alt="..." width={'100%'}></img>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Auth;


