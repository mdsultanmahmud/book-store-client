import './AddBook.css'
const AddBook = () => {
    return (
        <div className='addbook-container'>
            <form>
                <div>
                    <label htmlFor="book-name">Books Name</label>
                    <input type="text" id="book-name" placeholder="Enter Books Name" required/>
                </div>
                <div>
                    <label htmlFor="author-namme">Author Name</label>
                    <input type="text" id="author-namme" placeholder="Enter Author Name" required/>
                </div>
                <div>
                    <label htmlFor="release-date">Release Date</label>
                    <input type="text" id="release-date" placeholder="Enter Book Release Date" required/>
                </div>
                <button type="submit">add</button>
            </form>

        </div>
    );
};

export default AddBook;