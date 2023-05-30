import { useDispatch } from 'react-redux';
import './AddBook.css'
import { addBook } from '../reducer/bookSlice';
import { useNavigate } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
const AddBook = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const handleSubmit = (e) => {
        e.preventDefault()
        const target = e.target
        const name = target.name.value
        const author = target.author.value
        const date = target.date.value

        const book = {
            id: uuidv4(),
            name,
            author,
            date
        }
        dispatch(addBook(book))
        navigate('/showbook')
    }
    return (
        <div className='addbook-container'>
            <div>
                <h1 className="title">Add You Books</h1>
                <form onSubmit={handleSubmit}>
                    <div>
                        <label htmlFor="book-name">Books Name</label>
                        <input name='name' type="text" id="book-name" placeholder="Enter Books Name" required />
                    </div>
                    <div>
                        <label htmlFor="author-namme">Author Name</label>
                        <input name='author' type="text" id="author-namme" placeholder="Enter Author Name" required />
                    </div>
                    <div>
                        <label htmlFor="release-date">Release Date</label>
                        <input name='date' type="date" id="release-date" placeholder="Enter Book Release Date" required />
                    </div>
                    <button type="submit">add</button>
                </form>
            </div>

        </div>
    );
};

export default AddBook;