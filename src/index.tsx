import ReactDOM from 'react-dom/client'
import { pages } from './router'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'

export const router = createBrowserRouter(pages)

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(<RouterProvider router={router} />)
