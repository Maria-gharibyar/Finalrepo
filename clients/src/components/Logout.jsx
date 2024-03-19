import axios from "axios"
import { useNavigate } from "react-router-dom"
const Logout=()=>{
    const navigate=useNavigate()
        const LogOut=()=>{
            axios.post('http://localhost:8000/logout',{},{withCredentials:true})
            .then(res=>{
                localStorage.removeItem('userId')
                window.location.reload( )
                window.location.href=('/auth')
              
            })
            .catch(err=>console.log(err))
            
        }
    return(
       <button onClick={LogOut}>Log out</button>
    )
}
export default Logout