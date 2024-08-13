import React from 'react'
import { Link } from 'react-router-dom';

const BookCard = ({book, role}) => {
    const {name, author, imageUrl} = book;


  return (
    <div className='book-card'>
          <img src={imageUrl} alt={name} className='book-image'/>
          <div className='book-details'>
           <h3> {name} </h3>
            <p> {author} </p>
          </div>
          {role === "admin" &&
          <div className='book-actions'>
                <button className='btn-link'><Link to={`/book/${book._id}`}>edit</Link></button>
                <button className='btn-link'><Link to={`/delete/${book._id}`}>delete</Link></button>
          </div>}
    </div>
  )
}

export default BookCard