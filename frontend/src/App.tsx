import { RouterProvider } from "react-router-dom";
import './App.css';
import { router } from "./Routes";

// const queryClient = new QueryClient();

function App() {
  return (
    <RouterProvider router={router} />
  )
}

export default App
