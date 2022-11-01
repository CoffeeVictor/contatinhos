import { createBrowserRouter } from "react-router-dom";
import { Home } from "./pages/Home";
import { PersonContacts } from "./pages/PersonContacts";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Home />
    },
    {
        path: '/:personId',
        element: <PersonContacts />
    }
]);
