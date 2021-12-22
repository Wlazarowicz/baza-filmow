import './App.css';
import Header from "./components/navbar/header";
import Body from "./components/body";
import Footer from "./components/footer";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import LoginComponent from "./components/loginComponent"
import RegisterComponent from "./components/registerComponent"
import Details from "./components/movieDetailsComponent"
import NotFound from "./components/notFoundComponent"
import MovieAdd from "./components/movieAddComponent"

function App() {
    return (
        <div className="App">
            <Header/>
            <BrowserRouter>
                <Routes>
                    <Route exact path='/' element={<Body/>}/>
                    <Route path='/signin' element={<LoginComponent/>}/>
                    <Route path='/details' element = {<Details/>}/>
                    <Route path='/signup' element={<RegisterComponent/>}/>
                    <Route path='/add' element={<MovieAdd/>}/>
                    {<Route path="*" element={<NotFound/>} />}
                </Routes>
            </BrowserRouter>
            <Footer/>
        </div>
    );
}

export default App;
