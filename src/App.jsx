import { RouterProvider, createBrowserRouter } from "react-router-dom"
import Home from "./components/Home"
import AddBook from "./pages/AddBook"

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />
    },
    {
      path: "/addbook",
      element: <AddBook />
    }

  ])
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  )
}

export default App
