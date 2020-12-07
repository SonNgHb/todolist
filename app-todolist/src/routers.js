import React from "react";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import StudentList from "./pages/StudentList";
import StudentForm from "./pages/StudentForm";

const routers = [
    {
        path: '/',
        exact: true,
        main: () => <Home/>
    },
    {
        path: '/list',
        exact: true,
        main: () => <StudentList/>
    },
    {
        path: '/form',
        exact: true,
        main: () => <StudentForm/>
    },
    {
        path: '',
        exact: false,
        main: () => <NotFound/>
    },
];

export default routers;



