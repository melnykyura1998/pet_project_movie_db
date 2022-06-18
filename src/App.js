import './App.css';
import {Route, Routes, Navigate} from "react-router-dom";

import {MainLayaut} from "./Layouts";
import {ActorsPage, HomePage, MoviesPage, NotFoungPage, SingleMoviePage, SingleActorPage, LoginPage} from "./Pages";

//    "start": "node server.js",

function App() {

    return (
        <Routes>
            <Route path={'/'} element={<MainLayaut/>}>
                <Route index element={<Navigate to={'home'}/>}/>
                <Route path={'home'} element={<HomePage/>}/>
                <Route path={'movies'} element={<MoviesPage/>}>
                    <Route path={':movieId'} element={<SingleMoviePage/>}/>
                </Route>
                <Route path={'actors'} element={<ActorsPage/>}>
                    <Route path={':actorId'} element={<SingleActorPage/>}/>
                </Route>
                <Route path={'login'} element={<LoginPage/>}/>
                <Route path={'*'} element={<NotFoungPage/>}/>
            </Route>
        </Routes>
    );
}

export default App;
