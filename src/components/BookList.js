// import React, { Component } from 'react'
// import { MyContext } from '../contexts/ThemeContext'

// class BookList extends Component {
//   static contextType = MyContext
//   render() {
//     const { isLightTheme, light, dark } = this.context
//     const theme = isLightTheme ? light : dark
//     return (
//       <div className='book-list' style={{ color: theme.syntax, background: theme.bg }}>
//         <ul>
//           <li style={{ background: theme.ui }}>the way of kings</li>
//           <li style={{ background: theme.ui }}>the name of the wind</li>
//           <li style={{ background: theme.ui }}>the final empire</li>
//         </ul>
//       </div>
//     )
//   }
// }

import React, { useContext } from 'react'
import { MyContext } from '../contexts/ThemeContext'
import { BookContext } from '../contexts/BookContext'

const BookList = () => {
  const { isLightTheme, light, dark } = useContext(MyContext)
  const theme = isLightTheme ? light : dark
  const { book } = useContext(BookContext)
  return (
    <div className='book-list' style={{ color: theme.syntax, background: theme.bg }}>
      <ul>
        {book.map(title => <li style={{ background: theme.ui }}>{title.title}</li>)}
      </ul>
    </div>
  )
}

export default BookList