import { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import BookList from './components/BookList';
import Book from './components/Book';
import Update from './components/Update';
import DeleteBook from './components/DeleteBook';
import Home from './components/Home';
import Auth from './components/Auth';

function App(props) {
  const [BookDetails, setBookDetails] = useState([]);
  const userId = localStorage.getItem('userId');
  const [loguser, setLogUser] = useState({ id: '', email: '' });

  return (
    <BrowserRouter>
      <Routes>
        {userId ? (
          <>
            <Route element={<Book BookDetails={BookDetails} setBookDetails={setBookDetails} />} path='/' />
            <Route element={<BookList BookDetails={BookDetails} setBookDetails={setBookDetails} />} path='/list' />
            <Route element={<Update />} path='/book/edit/:id' />
            <Route element={<DeleteBook />} path='/book/:id' />
            
          </>
        ) : (
          <>
            <Route path='/' element={<Auth loguser={loguser} setLogUser={setLogUser} />}  />
            <Route path='/list'  element={<Auth loguser={loguser} setLogUser={setLogUser} />} />
            <Route element={<Home />} path='/home' />
            <Route element={<Auth loguser={loguser} setLogUser={setLogUser}></Auth> } path='/auth'></Route>
          </>
        )}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
