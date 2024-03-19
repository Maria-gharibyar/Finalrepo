import axios from "axios"
import { useNavigate, useParams } from "react-router-dom"
import 'bootstrap/dist/css/bootstrap.min.css';
import '../components/Book.css'
const DeleteBook=()=>{
    const navigate=useNavigate()
    const {id}=useParams()
    const handleBook=()=>{
        axios.delete(`http://localhost:8000/api/book/${id}`)
        .then(()=>{
            navigate('/list')
        })
        .catch((error)=>{
            alert('somthing wrong')
            console.log(error)
        })
    
    }
   
    return(
        <div className="p-4 Delete">
                <div className="title"> Delete Book</div>
                    <div className="all">
                        <h3 className="frame">Are you sure you want to delete this Book?</h3>
                        <button className=" btn_delete" onClick={handleBook}>
                            Yes Delete it
                        </button>

                    </div>
               
        </div>
    )
}
export default DeleteBook