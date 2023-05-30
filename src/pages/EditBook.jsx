import { useDispatch } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { updateBook } from "../reducer/bookSlice";

const EditBook = () => {
    const dispatch = useDispatch()
    const location = useLocation()
    const navigate = useNavigate()
    const { id, name, author, date } = location.state.book
    const handleEdit = (e) => {
        e.preventDefault()
        const target = e.target
        const name = target.name.value
        const author = target.author.value
        const date = target.date.value

        const updatedBook = {
            id,
            name,
            author,
            date
        }
        dispatch(updateBook(updatedBook))
        navigate("/showbook")
    }
    return (
        <div className='addbook-container'>
            <div>
                <h1 className="title">Edit Your Books</h1>
                <form onSubmit={handleEdit}>
                    <div>
                        <label htmlFor="book-name">Edit Books Name</label>
                        <input name='name' type="text" id="book-name" defaultValue={name} placeholder="Enter Books Name" required />
                    </div>
                    <div>
                        <label htmlFor="author-namme">Edit Author Name</label>
                        <input name='author' type="text" id="author-namme" defaultValue={author} placeholder="Enter Author Name" required />
                    </div>
                    <div>
                        <label htmlFor="release-date">Edit Release Date</label>
                        <input name='date' type="date" id="release-date" defaultValue={date} placeholder="Enter Book Release Date" />
                    </div>
                    <button type="submit">update</button>
                </form>
            </div>
        </div>
    );
};

export default EditBook;