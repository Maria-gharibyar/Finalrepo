import '../components/Book.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
const Home=()=>{
    
    return(
        <div>
            <div className="img_container"  style={{ overflow: 'hidden' }}>
            <section>
            <nav className='nav  '>
                <ul className='navbar-nav'>
                    <li className='nav-item'>  <Link to="/auth" className='nav-link' >Signin</Link></li>
                </ul>
           </nav>
            </section>
             <section className='bodv'>
            
                <h1 className="title">Welcome</h1>
                <h3 className="book">
                    BOOK CLUB
                </h3>
                <div className="paragraph">
                Welcome to  Book Club, a place where ideas come to life and creativity knows no bounds. Dive into our diverse offerings and join a community driven by passion and innovation. Experience the power of Book Club and unlock endless possibilities today!"
                </div>
                
                
           </section>
           
        </div>
        
           
          
        </div>
        
    )
}
export default Home