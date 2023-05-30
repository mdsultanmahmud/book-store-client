import { createSlice } from "@reduxjs/toolkit";
const initialBooks = [
    {
        id: 1,
        name: "Differential Equationn",
        author: "Shepley L. Ross",
        date: "30-03-1980"
    },
    {
        id: 2,
        name: "Higher Math Part Two",
        author: "Shepley L. Ross",
        date: "20-12-1990"
    }
]
export const bookSlice = createSlice({
    name: "books",
    initialState: initialBooks,
    reducers: {
        showBooks: state => state
    }
})

export const { showBooks } = bookSlice.actions
export default bookSlice.reducer
