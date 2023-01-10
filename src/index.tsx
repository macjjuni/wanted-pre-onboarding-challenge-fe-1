import ReactDOM from 'react-dom/client'
import './index.css'
import { pages } from './router'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import 'react-toastify/dist/ReactToastify.css'

export const router = createBrowserRouter(pages)

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(<RouterProvider router={router} />)
