import { RouterProvider, createBrowserRouter } from "react-router-dom"
import Home from "./components/Home"
import AddBook from "./pages/AddBook"
import 'bootstrap/dist/css/bootstrap.min.css'
import MainLayout from "./layout/MainLayout"
import ShowBooks from "./pages/ShowBooks"
function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout />,
      children: [
        {
          path: "/",
          element: <Home />
        },
        {
          path: "/addbook",
          element: <AddBook />
        },
        {
          path:"/showbook",
          element: <ShowBooks/>
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
