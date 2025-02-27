import { createBrowserRouter, createHashRouter } from "react-router-dom";
import {
    About,
    ContactUs,
    Courses,
    Home,
    Layout,
    Login,
    NotFound,
    PlaylistDetails,
    Profile,
    Register,
    TeacherProfile,
    Teachers,
    UpdateUserProfile,
    WatchingVideo
} from "../allPagesPaths";

/*===========================================*/
/*===========================================*/
/*===========================================*/

export const router = createHashRouter([

    {
        path: "/",
        element: <Layout />,
        children: [
            {
                path: "/",
                element: <Home />
            },
            {
                path: "/about",
                element: <About />
            },
            {
                path: "/courses",
                element: <Courses />
            },
            {
                path: "/teachers",
                element: <Teachers />
            },
            {
                path: "/contact",
                element: <ContactUs />
            },
            {
                path: "/profile",
                element: <Profile />
            },
            {
                path: "/playlist-details/:id",
                element: <PlaylistDetails />
            },
            {
                path: "/teacher-profile/:id",
                element: <TeacherProfile />
            },
            {
                path: "/update-user/:id",
                element: <UpdateUserProfile />
            },
            {
                path: "/register",
                element: <Register />
            },
            {
                path: "/login",
                element: <Login />
            },
            {
                path: "/watch-video",
                element: <WatchingVideo />
            }
        ]
    },
    {
        path: "*",
        element: <NotFound />
    }
]);