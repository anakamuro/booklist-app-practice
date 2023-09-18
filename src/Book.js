import React from 'react'

const Book = ({book}) => {
    const {img, title, author, id} = book;
    return (
      <article className="book" id="${id}">
        <img src={img} alt=''/>
        <h1>{title}</h1>
        <h4>{author}</h4>
        {/* <button onClick={() => removeBook(id)}>remove</button> */}
      </article>
    )
  }

export default Book