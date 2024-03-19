import axios from "axios";
import { useEffect, useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { AiOutlineEdit } from 'react-icons/ai';
import { Link } from "react-router-dom";
import { MdOutlineDelete } from 'react-icons/md'
import Logout from "./Logout";

const BookList = (props) => {
  const { BookDetails, setBookDetails } = props;

  useEffect(() => {
    axios.get('http://localhost:8000/api/book',{withCredentials:true})
      .then((res) => {
        setBookDetails(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  },  [BookDetails]);
  useEffect(() => {
    console.log('BookDetails in BookList:', BookDetails); 
  }, [BookDetails]); 

  return (

    <div className="container ">
     <Logout></Logout>
      <table className="table table-striped table-responsive align-middle table-hover
       ">
        <thead className="text-center bg-dark">
          <tr>
          <th scope="col">No</th>
            <th scope="col">Title</th>
            <th scope="col">Author</th>
            <th scope="col">Publish Year</th>
            <th scope="col">Language</th>
            <th scope="col">Descriptions</th>
            <th scope="col">Operation</th>
          </tr>
        </thead>
        <tbody>
          {BookDetails.map((Book, index) => (
            <tr key={index}>
                <td className="text-center" >{index+1}</td>
              <td className="text-center">{Book.title}</td>
              <td className="text-center">{Book.author}</td>
              <td className="text-center">{Book.publishYera}</td>
              <td className="text-center">{Book.language}</td>
              <td className="text-center">{Book.Descriptions}</td>
              <td className="text-center">
              <Link to={"/book/edit/" + Book._id}>
                  <AiOutlineEdit  style={{color:"orange", fontSize:"20px"}}></AiOutlineEdit>
              </Link>
              <Link to={"/book/"+ Book._id}>
  <MdOutlineDelete style={{ color: 'red', fontSize: '20px' , marginLeft:"14px"}} />
</Link>

              </td>
              <td>
                
              </td>
              
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default BookList;

