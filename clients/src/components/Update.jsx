import { useEffect,useState } from "react"
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import axios from "axios";
import Logout from "./Logout";
import { Link } from "react-router-dom";
const Update=()=>{
    const navigate = useNavigate();
    const { id } = useParams();
    const [title,settitle]=useState('')
    const [author,setAuthor]=useState('')
    const [publishYera,setpublishYera]=useState('')
    const [language,setLanguage]=useState('')
    const [Descriptions,setDescriptions]=useState('')
    useEffect(() => {
        axios.get(`http://localhost:8000/api/book/${id}`,{withCredentials:true})
          .then((res) => {
            settitle(res.data.title),
            setAuthor(res.data.author),
            setpublishYera(res.data.publishYera),
            setLanguage(res.data.language),
            setDescriptions(res.data.Descriptions) ;
          })
          .catch(err => {
            console.log(err);
          });
      }, [id]);
      
      const updateBook = (e) => {
        e.preventDefault();
        axios.patch(`http://localhost:8000/api/book/edit/${id}`, {
          title,
          author,
          publishYera,
          language,
          Descriptions
        }, { withCredentials: true })
        .then(res => {
          console.log(res);
          navigate("/list");
        })
        .catch(err => {
          console.log(err);
          
        });
      }
      
    return(
      
        <div className="container">
          <Logout></Logout>
     <Link  to="/list"className="btn btn-primary btn-lg" style={{position:"relative", left:'40%', bottom:"46px"}}>List Of Book</Link>
        <form onSubmit={updateBook} className="row g-3 justify-content-center">
       <div className="col-lg-6 d-grid ">
       <label htmlFor="" className="form-label" placeholder="Enter"> Book Name</label>
           <input 
           type="text" 
           value={title}
           onChange={(e)=>settitle(e.target.value)}
           
           />
       </div>
       <div className="col-lg-6 d-grid">
            <label htmlFor="">Author</label>
           <input 
           type="text" 
           value={author}
           onChange={(e)=>setAuthor(e.target.value)}
           />
       </div>
       <div className="col-lg-6 d-grid">
           <label htmlFor="" className="form-label">Publish Year</label>
           <input 
           type="date" 
           value={publishYera}
           onChange={(e)=>setpublishYera(e.target.value)}
           />
           </div>
           <div className="col-lg-6 d-grid">
           <label htmlFor="" className="form-label">Language</label>
           <input 
           type="text" 
           value={language}
           onChange={(e)=>setLanguage(e.target.value)}
           />
           </div>
          
           <div className="col-lg-12">
               <textarea 
                   className="form-control" 
                   placeholder="Comments"  
                   value={Descriptions}
                   style={{height:'200px'}}
                   onChange={(e) => setDescriptions(e.target.value)}
               ></textarea>
           </div>
           
           <div className="d-grid gap-2 d-md-flex justify-content-md-start" >
           <input type="submit" value="Update Book"  className="btn btn-primary col-3"/>
           </div>
           
   </form>
   </div>
    )
}
export default Update