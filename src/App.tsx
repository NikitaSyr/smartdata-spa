import React from 'react';
import './App.css';
import {HashRouter, Route, Routes} from "react-router-dom";
import {
    ROUTE_ROOT,
    ROUTE_USERS,
    ROUTE_POSTS,
    PARAMETER_USERS_PAGE,
    PARAMETER_POSTS_PAGE,
    PARAMETER_USER_ID,
} from "./constants/routes";
import {UsersPage} from "./components/UsersPage/UsersPage";
import {Sidebar} from "./components/Sidebar/Sidebar";
import {PostsPage} from "./components/PostsPage/PostsPage";

const App = () => {

    return (
        <HashRouter>
            <div className="App">
                <Sidebar/>
                <Routes>
                    <Route path={ROUTE_USERS + PARAMETER_USERS_PAGE} element={<UsersPage/>}/>

                    <Route path={ROUTE_USERS + PARAMETER_USERS_PAGE +
                        ROUTE_POSTS + PARAMETER_USER_ID + PARAMETER_POSTS_PAGE}
                           element={<PostsPage/>}/>
                    <Route path={ROUTE_ROOT} element={<></>}/>
                    <Route path="*" element={<div>404 PAGE NOT FOUND</div>}/>
                </Routes>
            </div>
        </HashRouter>
    );
}

export default App;
