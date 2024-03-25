import axios from "axios"

const Logout=()=>{

        const LogOut=()=>{
            axios.post('http://localhost:8000/api/logout',{},{withCredentials:true})
            .then(res=>{
                localStorage.removeItem('userId')
                window.location.reload( )
                window.location.href=('/auth')
              
            })
            .catch(err=>console.log(err))
            
        }
    return(
       <button  className="btn btn-danger btn-lg " onClick={LogOut} style={{position:"relative", left:'50%'}}>Log out</button>
    )
}
export default Logout