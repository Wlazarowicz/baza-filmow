import './App.css';
import Header from "./components/navbar/header";
import Body from "./components/body";
import Footer from "./components/footer";
import {BrowserRouter, Switch, Route, Redirect} from "react-router-dom";
import LoginComponent from "./components/loginComponent"
import RegisterComponent from "./components/registerComponent"
import Details from "./components/movieDetailsComponent"
import NotFound from "./components/notFoundComponent"
import MovieAdd from "./components/movieAddComponent"
import {isExpired} from "react-jwt";
import NoAccessComponent from "./components/noAccessComponent";

function App() {
    return (<div className="App">
            <Header/>
            <BrowserRouter>
                <Switch>
                    <Route exact path='/' component={Body}
                           render={props => {
                               if (isExpired(localStorage.getItem('token'))) {
                                   return <Redirect to="/"/>;
                               }
                               return <LoginComponent/>;
                           }}
                    />
                    <Route path="/signin"
                           render={props => {
                               if (!isExpired(localStorage.getItem('token'))) {
                                   return <Redirect to="/noaccess"/>;
                               }
                               return <Route path="/signin" exact component={LoginComponent}/>;
                           }}/>
                    <Route path='/details/:id' component={Details}/>
                    <Route path="/signup"
                           render={props => {
                               if (!isExpired(localStorage.getItem('token'))) {
                                   return <Redirect to="/noaccess"/>;
                               }
                               return <Route path="/signup" exact component={RegisterComponent}/>;
                           }}/>
                    <Route path="/add"
                           render={props => {
                               if (isExpired(localStorage.getItem('token'))) {
                                   return <Redirect to="/noaccess"/>;
                               }
                               return <Route path="/add" exact component={MovieAdd}/>;
                           }}/>
                    <Route path='/noaccess' component={NoAccessComponent}/>
                    {<Route path="*" component={NotFound}/>}
                </Switch>
            </BrowserRouter>
            <Footer/>
        </div>);
}

export default App;
