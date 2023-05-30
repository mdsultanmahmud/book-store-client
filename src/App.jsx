import { RouterProvider, createBrowserRouter } from "react-router-dom"
import AddBook from "./pages/AddBook"
import 'bootstrap/dist/css/bootstrap.min.css'
import MainLayout from "./layout/MainLayout"
import ShowBooks from "./pages/ShowBooks"
import EditBook from "./pages/EditBook"
function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout />,
      children: [
        {
          path: "/",
          element: <AddBook />
        },
        {
          path:"/showbook",
          element: <ShowBooks/>
        },
        {
          path:'/edit',
          element: <EditBook/>
        }
      ]
    }
  ])
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  )
}

export default App
