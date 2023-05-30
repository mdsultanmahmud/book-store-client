import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from 'uuid';
const initialBooks = {
    books: [
        {
            id: uuidv4(),
            name: "Differential Equationn",
            author: "Shepley L. Ross",
            date: "12/29/1990"
        },
        {
            id: uuidv4(),
            name: "Higher Math Part Two",
            author: "Shepley L. Ross",
            date: "12/29/1990"
        },
        {
            id: uuidv4(),
            name: "Higher Math Part Two",
            author: "Shepley L. Ross",
            date: "12/29/1990"
        }
    ]
}
export const bookSlice = createSlice({
    name: "books",
    initialState: initialBooks,
    reducers: {
        showBooks: state => state,
        addBook: (state, action) => {
            state.books.push(action.payload)
        },
        deleteBook: (state, action) => {    
            const id = action.payload
            state.books = state.books.filter(book => book.id !== id)
            
        },
        updateBook: (state, action) => {    
            const {id, name, author, date} = action.payload
            const book = state.books.find(book => book.id == id)
            book.name = name  
            book.author = author 
            book.date = date 
        }
    }
})

export const { showBooks, addBook, deleteBook, updateBook } = bookSlice.actions
export default bookSlice.reducer
