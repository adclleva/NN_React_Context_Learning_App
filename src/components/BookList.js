import React, { useContext } from 'react' // this is an easier way to use hooks with context
import { ThemeContext} from '../contexts/ThemeContext'
import { BookContext } from '../contexts/BookContext'

const BookList = () => {
  const { isLightTheme, light, dark } = useContext(ThemeContext)
  const { books } = useContext(BookContext)

  console.log(books)

  const theme = isLightTheme ? light : dark

  const displayBooks = books.map(book => {
    const { title, id } = book
    return (
      <li 
        key={id}
        style={{ background: theme.ui }}
      >
        {title}
      </li>
    )
  })

  return (
    <div className="book-list" style={{color: theme.syntax, background: theme.bg}}>
      <ul>
        {displayBooks}
      </ul>
    </div>
  )
  
}

export default BookList;