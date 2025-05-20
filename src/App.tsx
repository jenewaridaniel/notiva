import Upload from "./component/feat/Upload"
import Home from "./component/pages/Home"
import { createBrowserRouter,RouterProvider } from "react-router-dom"


const App = () => {
     const ROUTER ={
      LANDING:'/',
      UPLOAD:'/upload'
     }

     const router = createBrowserRouter([
      { path: ROUTER.LANDING, element: <Home /> },
      { path: ROUTER.UPLOAD, element: <Upload /> },
    ]);
  
  return (
    <div>
       <RouterProvider router={router}/>
    </div>
  )
}

export default App
