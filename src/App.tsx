import React from 'react';
import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {
    ROUTE_ANY,
    ROUTE_ROOT,
    ROUTE_USERS,
    ROUTE_POSTS,
    ROUTE_COMMENTS,
    PARAMETER_USERS_PAGE,
    PARAMETER_POSTS_PAGE,
    PARAMETER_COMMENTS_PAGE,
} from "./constants/routes";
import user from "./img/icons/user.svg"
import {UsersPage} from "./components/UsersPage/UsersPage";

const App = () => {
    console.log(ROUTE_USERS + PARAMETER_USERS_PAGE)

    return (
        <BrowserRouter>
            <div className="App">
                <img src={user} alt=""/>
                <Routes>
                    <Route path={ROUTE_USERS} element={<UsersPage/>}/>
                    {/*<Route path={ROUTE_POSTS + PARAMETER_POSTS_PAGE} element={<LoginRedirectComponent/>}/>*/}
                    {/*<Route path={ROUTE_COMMENTS + PARAMETER_COMMENTS_PAGE} element={<EmployeesPage/>}/>*/}
                    {/*<Route path={ROUTE_ROOT} element={<MainPage/>}/>*/}
                    <Route path={ROUTE_ANY} element={<div>404 PAGE NOT FOUND</div>}/>
                </Routes>
            </div>
        </BrowserRouter>
    );
}

export default App;
