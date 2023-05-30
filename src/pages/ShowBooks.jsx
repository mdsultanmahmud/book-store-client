import { useSelector } from "react-redux";
import './AddBook.css'
import edit from '../assets/editicon.png'
import deleteIco from '../assets/delete.jpg'
const ShowBooks = () => {
    const books = useSelector(state => (state.bookReducer))
    console.log(books)
    return (
        <div className="table-container">

            {
                !books.length > 0 ?
                    <h1 className="title">No Books Added</h1>
                    :
                    <>
                        <h1 className="title">All books</h1>
                        <table className="table table-hover">
                            <thead>
                                <tr>
                                    <th scope="col">#</th>
                                    <th scope="col">Book Name</th>
                                    <th scope="col">Author Name</th>
                                    <th scope="col">Release Date</th>
                                    <th scope="col">Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    books.length > 0 &&
                                    books.map((book, index) => <tr key={index}>
                                        <th scope="row">{index}</th>
                                        <td>{book.name}</td>
                                        <td>{book.author}</td>
                                        <td>{book.date}</td>
                                        <td>
                                            <span><img src={edit} alt="" /></span>
                                            <span><img src={deleteIco} alt="" /></span>
                                        </td>
                                    </tr>)
                                }
                            </tbody>
                        </table>
                    </>
            }

        </div>
    );
};

export default ShowBooks;