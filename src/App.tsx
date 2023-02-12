import React from 'react';
import logo from './logo.svg';
import './App.css';
import {BrowserRouter, HashRouter, Route, Routes} from "react-router-dom";
import {
    ROUTE_ANY,
    ROUTE_ROOT,
    ROUTE_USERS,
    ROUTE_POSTS,
    ROUTE_COMMENTS,
    PARAMETER_USERS_PAGE,
    PARAMETER_POSTS_PAGE,
    PARAMETER_COMMENTS_PAGE, PARAMETER_USER_ID, PARAMETER_POST_ID,
} from "./constants/routes";
import user from "./img/icons/user.svg"
import {UsersPage} from "./components/UsersPage/UsersPage";
import {Sidebar} from "./components/Sidebar/Sidebar";
import {PostsPage} from "./components/PostsPage/PostsPage";

const App = () => {
    // console.log(ROUTE_USERS + PARAMETER_USERS_PAGE)

    return (
        <HashRouter>
            <div className="App">
                <Sidebar/>
                {/*<img src={user} alt=""/>*/}
                <Routes>
                    {/*<Route path={ROUTE_ROOT} element={<div>ddd</div>}/>*/}
                    {/*<Route path="users">*/}
                    <Route path={ROUTE_USERS + PARAMETER_USERS_PAGE} element={<UsersPage/>}/>

                    <Route path={ROUTE_USERS + PARAMETER_USERS_PAGE +
                        ROUTE_POSTS + PARAMETER_USER_ID + PARAMETER_POSTS_PAGE}
                           element={<PostsPage/>}/>
                    {/*<Route path={ROUTE_USERS + PARAMETER_USERS_PAGE +*/}
                    {/*    ROUTE_POSTS + PARAMETER_USER_ID + PARAMETER_POSTS_PAGE +*/}
                    {/*    ROUTE_COMMENTS + PARAMETER_POST_ID + PARAMETER_COMMENTS_PAGE}*/}
                    {/*       element={<CommentsPage/>}/>*/}
                    <Route path="*" element={<div>404 PAGE NOT FOUND</div>}/>
                </Routes>
            </div>
        </HashRouter>
    );
}

export default App;
