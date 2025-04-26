import {
    createBrowserRouter,
} from "react-router";
import Root from "../Layouts/Root";
import Home from "../pages/Home";
import Errorpage from "../pages/ErrorPage/Errorpage";
import Profile from "../pages/Profile";
import Loader from "../components/UI/Loader";
import Bookings from "../pages/Bookings";
import Blogs from "../components/Blogs";


export const router = createBrowserRouter([
    {
        path: "/",
        Component: Root,
        errorElement: <Errorpage></Errorpage>,
        children: [
            {
                index: true,
                path: '/',
                loader: ()=> fetch('../lawyers.json'),
                hydrateFallbackElement: <Loader></Loader>,
                Component: Home,
            },
            {
                path: '/profile/:profileId',
                loader: ()=> fetch('../lawyers.json'),
                hydrateFallbackElement: <Loader></Loader>,
                element: <Profile></Profile>
            },
            {
                path: 'myBookings',
                loader: ()=> fetch('../lawyers.json'),
                hydrateFallbackElement: <Loader></Loader>,
                element: <Bookings></Bookings>
            },
            {
                path: 'blogs',
                loader:()=>fetch('../blogs.json'),
                hydrateFallbackElement:<Loader></Loader>,
                element: <Blogs></Blogs>
            },
        ]
    },
]);