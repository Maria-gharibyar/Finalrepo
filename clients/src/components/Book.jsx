import { useState } from "react"
import axios from 'axios'
import '../components/Book.css'
import Logout from "./Logout"
import { Link } from "react-router-dom"

const Book = (props) => {
    const userId = localStorage.getItem('userId')
  const { BookDetails, setBookDetails } = props;
  const [title, settitle] = useState("");
  const [author, setAuthor] = useState("");
  const [publishYera, setpublishYera] = useState(""); 
  const [language, setLanguage] = useState("");
  const [Descriptions, setDescriptions] = useState("");
  const [error, setError] = useState({});

  const BookHandler = (e) => {
    e.preventDefault();
    console.log('Title',title);
    console.log('author',author);
    console.log('publishYera',publishYera);
   

    axios.post('http://localhost:8000/api/book',{
      title,
      author,
      publishYera, 
      language,
      Descriptions,
      creator:userId
    },{withCredentials:true})
     
  
      .then(res => {
        console.log(res);
        console.log(res.data);
        setBookDetails([...BookDetails, res.data]);
        settitle("");
        setAuthor("");
        setpublishYera("");
        setLanguage("");
        setDescriptions("");
        setError({});
      })
      .catch(err => {
        console.log(err);
        setError(err.response.data.errors);
      });
  };

    return (
        <div className="container">
            <h1>Welcome to Book Club</h1>
            <Logout></Logout> <br />
            <Link to='/list' className="btn btn-primary mb-4 btn-lg" style={{ position: "relative", left: '40%', bottom: "70px" }}>List Of Book</Link>
            <form onSubmit={BookHandler} className="row g-3 justify-content-center">
                <div className="col-lg-6 d-grid ">
                    <label htmlFor="" className="form-label" placeholder="Enter"> Book Name</label>
                    <input
                        type="text"
                        value={title}
                        onChange={(e) => settitle(e.target.value)}
                        className={error.title ? 'input-error' : ''}
                    />
                    {error.title ?
                        <span style={{ fontSize: '12px', color: 'red', }}>{error.title.message}</span>
                        : null
                    }

                </div>
                <div className="col-lg-6 d-grid">
                    <label htmlFor="">Author</label>
                    <input
                        type="text"
                        value={author}
                        onChange={(e) => setAuthor(e.target.value)}
                        className={error.author ? 'input-error' : ''}
                    />
                    {error.author ?
                        <span style={{ fontSize: '12px', color: 'red', }}>{error.author.message}</span>
                        : null
                    }

                </div>
                <div className="col-lg-6 d-grid">
                    <label htmlFor="" className="form-label">Publish Year</label>
                    <input
                        type="date"
                        value={publishYera}
                        onChange={(e) => setpublishYera(e.target.value)}
                        className={error.publishYera ? 'input-error' : ''}

                    />
                    {error.publishYera ?
                        <span style={{ fontSize: '12px', color: 'red' }}>{error.publishYera.message}</span>
                        : null
                    }
                </div>
                <div className="col-lg-6 d-grid">
                    <label htmlFor="" className="form-label">Language</label>
                    <input
                        type="text"
                        value={language}
                        onChange={(e) => setLanguage(e.target.value)}

                    />
                </div>

                <div className='col-lg-12'>
                    <textarea
                        className={`col-lg-12 ${error.Descriptions ? 'input-error' : ''}`}
                        placeholder="Comments"
                        value={Descriptions}
                        style={{ height: '200px', padding: '10px' }}
                        onChange={(e) => setDescriptions(e.target.value)}
                    ></textarea>
                    {error.Descriptions ?
                        <span style={{ fontSize: '12px', color: 'red' }}>{error.Descriptions.message}</span>
                        : null
                    }
                </div>



                <div className="d-grid gap-2 d-md-flex justify-content-md-start" >
                    <input type="submit" value="Add Book" className="btn btn-primary col-3" />
                </div>

            </form>
        </div>

    )
}
export default Book